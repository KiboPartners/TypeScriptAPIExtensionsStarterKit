#!/usr/bin/env node
/* eslint-disable */
/**
 * Scaffold a new Kibo API Extension and wire it into all 4 required places.
 *
 * Usage:
 *   node scripts/add-extension.js <action.id>          # scaffold an existing ActionId
 *   node scripts/add-extension.js <action.id> --new    # also append a brand-new ActionId to the enum
 *   node scripts/add-extension.js --list               # print the typed list of valid ActionIds
 *
 * Wires up:
 *   1. src/functions/<action.id>.ts         (function file, correctly typed context)
 *   2. src/functions/index.ts               (import + re-export)
 *   3. src/main.ts                          (createArcFunction wrapper)
 *   4. src/main.ts enabledFunctions         (active, uncommented entry)
 *   5. tests/<action.id>.test.ts            (Jest placeholder test)
 *   (6. src/arcTypes/index.ts ActionId enum — only with --new)
 *
 * Typing: if a matching `<Pascal>Context` interface exists in arcTypes it is
 * imported and used. Otherwise the context param defaults to `any`.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const ARC_TYPES = path.join(ROOT, "src", "arcTypes", "index.ts");
const FUNCTIONS_DIR = path.join(ROOT, "src", "functions");
const INDEX = path.join(FUNCTIONS_DIR, "index.ts");
const MAIN = path.join(ROOT, "src", "main.ts");
const TESTS_DIR = path.join(ROOT, "tests");

// ---------- helpers ----------------------------------------------------------

function read(file) {
  return fs.readFileSync(file, "utf8");
}
function write(file, content) {
  fs.writeFileSync(file, content, "utf8");
}
function die(msg) {
  console.error("✗ " + msg);
  process.exit(1);
}

/** dotted action id -> name parts. "embedded.commerce.carts.get.after" */
function names(actionId) {
  const segs = actionId.split(".");
  const pascal = segs
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  const camel = pascal.charAt(0).toLowerCase() + pascal.slice(1);
  return {
    pascal, // EmbeddedCommerceCartsGetAfter
    camel, // embeddedCommerceCartsGetAfter
    fn: camel + "Fn", // embeddedCommerceCartsGetAfterFn
    context: pascal + "Context", // EmbeddedCommerceCartsGetAfterContext
  };
}

/** Pull the typed list of ActionIds straight from the enum (source of truth). */
function readActionIds() {
  const src = read(ARC_TYPES);
  const enumBody = src.match(/export enum ActionId\s*{([\s\S]*?)}/);
  if (!enumBody) die("Could not locate `export enum ActionId` in arcTypes.");
  return enumBody[1]
    .split("\n")
    .map((l) => l.match(/"([^"]+)"/))
    .filter(Boolean)
    .map((m) => m[1]);
}

/** Which `<X>Context` types are defined in arcTypes (interface or type alias). */
function readContextTypes() {
  const src = read(ARC_TYPES);
  const set = new Set();
  const re = /export (?:interface|type) ([A-Za-z0-9]+Context)\b/g;
  let m;
  while ((m = re.exec(src))) set.add(m[1]);
  return set;
}

// ---------- file generators --------------------------------------------------

function functionFileSource(actionId, n, hasContext) {
  const importLine = hasContext
    ? `import { Callback, ${n.context} } from "../arcTypes";`
    : `import { Callback } from "../arcTypes";`;
  const ctxType = hasContext ? n.context : "any";
  return `${importLine}

async function ${n.camel}(context: ${ctxType}, callback: Callback) {
  console.log("${actionId}");

  // TODO: extension logic here.
  // const config = new Configuration(context);

  callback();
}

export default ${n.camel};
`;
}

function testFileSource(actionId, n) {
  return `import ${n.camel} from "../src/functions/${actionId}";

describe("${n.camel}", () => {
  // TODO: replace this placeholder with real assertions.
  // The function is async with no await points, so the callback fires
  // synchronously — call it and assert against the mutated context and any
  // error string passed to the callback (Callback is (errorMessage?: string) => void).
  it("calls back without error on an empty context", () => {
    const context: any = {
      get: {},
      exec: {},
      request: { body: {} },
      response: { body: {} },
      apiContext: {},
      configuration: {},
    };
    let error: string | null | undefined;
    ${n.camel}(context, (e?: string | null) => {
      error = e;
    });

    expect(error).toBeUndefined();
  });
});
`;
}

function wrapperSource(actionId, n) {
  return `const ${n.fn} = createArcFunction(
  ActionId["${actionId}"],
  async function (context: any, callback: Callback) {
    try {
      await extensionFunctions.${n.camel}(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);
`;
}

// ---------- patchers ---------------------------------------------------------

function patchArcTypesEnum(actionId) {
  let src = read(ARC_TYPES);
  if (src.includes(`"${actionId}"`)) return false;
  src = src.replace(
    /(export enum ActionId\s*{)/,
    `$1\n  "${actionId}",`
  );
  write(ARC_TYPES, src);
  return true;
}

function patchIndex(actionId, n) {
  let src = read(INDEX);
  if (new RegExp(`from "\\./${actionId.replace(/\./g, "\\.")}"`).test(src)) {
    return false;
  }
  // add import after the last existing import line (or at the top if none)
  const importLine = `import ${n.camel} from "./${actionId}";\n`;
  const lastImport = src.lastIndexOf("import ");
  if (lastImport === -1) {
    src = importLine + src;
  } else {
    const lineEnd = src.indexOf("\n", lastImport) + 1;
    src = src.slice(0, lineEnd) + importLine + src.slice(lineEnd);
  }

  // add to the export { ... } block (create one if absent / empty)
  if (/export\s*{\s*}/.test(src)) {
    // empty barrel: `export {};` -> seed a multi-line block
    src = src.replace(/export\s*{\s*};?/, `export {\n  ${n.camel},\n};`);
  } else if (/export\s*{[\s\S]*?\n};\s*$/.test(src)) {
    src = src.replace(/\n};\s*$/, `\n  ${n.camel},\n};\n`);
  } else {
    // no export block at all: append one
    src = src.replace(/\s*$/, "\n") + `\nexport {\n  ${n.camel},\n};\n`;
  }
  write(INDEX, src);
  return true;
}

function patchMain(actionId, n) {
  let src = read(MAIN);
  const marker = "const enabledFunctions = {";
  if (!src.includes(marker)) die("Could not find `enabledFunctions` in main.ts.");

  if (!src.includes(`const ${n.fn} = createArcFunction`)) {
    src = src.replace(marker, wrapperSource(actionId, n) + "\n" + marker);
  }

  const idEsc = actionId.replace(/\./g, "\\.");
  const activeRe = new RegExp(`^\\s*"${idEsc}":\\s*${n.fn},`, "m");
  if (activeRe.test(src)) {
    write(MAIN, src);
    return "already active";
  }

  // if a commented stub exists, uncomment it in place (don't duplicate)
  const commentedRe = new RegExp(`^(\\s*)//\\s*("${idEsc}":\\s*${n.fn},)`, "m");
  if (commentedRe.test(src)) {
    src = src.replace(commentedRe, `$1$2`);
    write(MAIN, src);
    return "uncommented";
  }

  // otherwise insert a fresh active entry right under the opening brace
  src = src.replace(marker, marker + `\n  "${actionId}": ${n.fn},`);
  write(MAIN, src);
  return "added";
}

// ---------- scaffold a single extension --------------------------------------

/** Wire one actionId into all 4 (+1) places. Returns nothing; logs progress. */
function scaffold(actionId, allowNew) {
  if (!/^[a-z]+(\.[A-Za-z]+)+$/.test(actionId)) {
    die(`"${actionId}" is not a valid dotted action id (e.g. embedded.commerce.carts.get.after).`);
  }

  const known = readActionIds().includes(actionId);
  if (!known && !allowNew) {
    die(
      `"${actionId}" is not in the ActionId enum.\n` +
        `  Run with --new to add it, or use --list to see valid ids.`
    );
  }

  const n = names(actionId);
  const hasContext = readContextTypes().has(n.context);

  console.log(`\n── ${actionId} ──`);

  // 0. ActionId enum (only when --new)
  if (!known) {
    patchArcTypesEnum(actionId);
    console.log(`✓ arcTypes ActionId enum  + "${actionId}"`);
  }

  // 1. function file
  const fnPath = path.join(FUNCTIONS_DIR, `${actionId}.ts`);
  if (fs.existsSync(fnPath)) {
    console.log(`• function file already exists, skipping  ${path.relative(ROOT, fnPath)}`);
  } else {
    write(fnPath, functionFileSource(actionId, n, hasContext));
    console.log(
      `✓ function file           ${path.relative(ROOT, fnPath)}  (context: ${
        hasContext ? n.context : "any (default)"
      })`
    );
  }

  // 2. index.ts
  console.log(patchIndex(actionId, n) ? "✓ functions/index.ts      import + export" : "• index.ts already wired");

  // 3 + 4. main.ts wrapper + enabledFunctions
  const mainResult = patchMain(actionId, n);
  console.log(`✓ main.ts                 wrapper + enabledFunctions (${mainResult})`);

  // 5. placeholder Jest test
  const testPath = path.join(TESTS_DIR, `${actionId}.test.ts`);
  if (fs.existsSync(testPath)) {
    console.log(`• test file already exists, skipping      ${path.relative(ROOT, testPath)}`);
  } else {
    if (!fs.existsSync(TESTS_DIR)) fs.mkdirSync(TESTS_DIR, { recursive: true });
    write(testPath, testFileSource(actionId, n));
    console.log(`✓ tests/                  placeholder test  ${path.relative(ROOT, testPath)}`);
  }

  if (!hasContext) {
    console.log(
      `⚠ No "${n.context}" interface in arcTypes — context typed as \`any\`.`
    );
  }
}

/** Has this actionId already been scaffolded (function file exists)? */
function isScaffolded(actionId) {
  return fs.existsSync(path.join(FUNCTIONS_DIR, `${actionId}.ts`));
}

// ---------- interactive multi-select picker ----------------------------------

/**
 * Zero-dependency checkbox list rendered to a TTY.
 *  ↑/↓   move      space  toggle      a  toggle all      type  filter
 *  enter submit    esc/ctrl-c  cancel
 * Resolves with an array of selected ids.
 */
function multiSelect(ids) {
  return new Promise((resolve) => {
    const input = process.stdin;
    const out = process.stdout;
    if (!input.isTTY) {
      die("Interactive mode needs a TTY. Pass an action id directly, e.g. `node scripts/add-extension.js <action.id>`.");
    }

    const selected = new Set();
    let filter = "";
    let cursor = 0; // index into the currently-filtered list
    let top = 0; // viewport scroll offset
    const VIEW = Math.max(5, Math.min(15, (out.rows || 24) - 6));
    let lastLines = 0;

    function filtered() {
      if (!filter) return ids;
      const f = filter.toLowerCase();
      return ids.filter((id) => id.toLowerCase().includes(f));
    }

    function clamp() {
      const list = filtered();
      if (cursor >= list.length) cursor = list.length - 1;
      if (cursor < 0) cursor = 0;
      if (cursor < top) top = cursor;
      if (cursor >= top + VIEW) top = cursor - VIEW + 1;
      if (top < 0) top = 0;
    }

    function render() {
      const list = filtered();
      clamp();
      const lines = [];
      lines.push(
        `Select extensions to scaffold  (${selected.size} selected)`
      );
      lines.push(
        `↑/↓ move · space toggle · a all · type to filter · enter submit · esc cancel`
      );
      lines.push(`filter: ${filter ? filter : "(none)"}`);
      if (list.length === 0) {
        lines.push("  (no matches)");
      }
      const end = Math.min(top + VIEW, list.length);
      for (let i = top; i < end; i++) {
        const id = list[i];
        const pointer = i === cursor ? "\x1b[36m›\x1b[0m" : " ";
        const box = selected.has(id) ? "\x1b[32m◉\x1b[0m" : "◯";
        const done = isScaffolded(id) ? " \x1b[90m(exists)\x1b[0m" : "";
        const label = i === cursor ? `\x1b[36m${id}\x1b[0m` : id;
        lines.push(`${pointer} ${box} ${label}${done}`);
      }
      if (list.length > VIEW) {
        lines.push(`  \x1b[90m…showing ${top + 1}-${end} of ${list.length}\x1b[0m`);
      }

      // repaint: move cursor up over previous frame, clear, rewrite
      if (lastLines > 0) out.write(`\x1b[${lastLines}A`);
      for (const l of lines) out.write(`\x1b[2K${l}\n`);
      lastLines = lines.length;
    }

    function cleanup() {
      input.setRawMode(false);
      input.pause();
      input.removeListener("data", onData);
      out.write("\n");
    }

    function onData(buf) {
      const key = buf.toString();

      // ctrl-c or esc -> cancel
      if (key === "\x03" || key === "\x1b") {
        cleanup();
        console.log("Cancelled. Nothing scaffolded.");
        process.exit(0);
      }
      // enter -> submit
      if (key === "\r" || key === "\n") {
        cleanup();
        resolve([...selected]);
        return;
      }
      // arrows
      if (key === "\x1b[A") {
        cursor--;
        render();
        return;
      }
      if (key === "\x1b[B") {
        cursor++;
        render();
        return;
      }
      // space -> toggle current
      if (key === " ") {
        const list = filtered();
        const id = list[cursor];
        if (id) {
          selected.has(id) ? selected.delete(id) : selected.add(id);
        }
        render();
        return;
      }
      // 'a' -> toggle all currently-filtered
      if (key === "a") {
        const list = filtered();
        const allOn = list.every((id) => selected.has(id));
        list.forEach((id) => (allOn ? selected.delete(id) : selected.add(id)));
        render();
        return;
      }
      // backspace -> trim filter
      if (key === "\x7f" || key === "\b") {
        filter = filter.slice(0, -1);
        cursor = 0;
        top = 0;
        render();
        return;
      }
      // printable -> extend filter
      if (key.length === 1 && key >= " " && key <= "~") {
        filter += key;
        cursor = 0;
        top = 0;
        render();
        return;
      }
    }

    input.setRawMode(true);
    input.resume();
    input.setEncoding("utf8");
    input.on("data", onData);
    render();
  });
}

// ---------- main -------------------------------------------------------------

const args = process.argv.slice(2);

if (args.includes("--list")) {
  const ids = readActionIds();
  console.log(`Valid ActionIds (${ids.length}):\n`);
  ids.forEach((id) => console.log("  " + id));
  process.exit(0);
}

// Direct (non-interactive) mode: an action id was passed.
const positional = args.filter((a) => !a.startsWith("--"));
if (positional.length > 0) {
  const allowNew = args.includes("--new");
  positional.forEach((id) => scaffold(id, allowNew));
  console.log(`\nDone. Build & upload with:  grunt`);
  process.exit(0);
}

// Interactive mode (default): pick from the list with space, submit with enter.
(async function interactive() {
  const ids = readActionIds();
  const chosen = await multiSelect(ids);
  if (chosen.length === 0) {
    console.log("No extensions selected. Nothing scaffolded.");
    process.exit(0);
  }
  console.log(`Scaffolding ${chosen.length} extension(s)…`);
  chosen.forEach((id) => scaffold(id, false));
  console.log(`\nDone (${chosen.length}). Build & upload with:  grunt`);
  process.exit(0);
})();
