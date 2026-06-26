/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tests/tsconfig.json",
        // 151002: hybrid module kind (NodeNext) warning. We keep NodeNext to
        // match the project tsconfig; enabling isolatedModules to satisfy it
        // breaks ts-jest's transpiler on this TS version, so ignore the code.
        diagnostics: { ignoreCodes: [151002] },
      },
    ],
  },
};
