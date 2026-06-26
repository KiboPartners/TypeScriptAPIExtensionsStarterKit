import embeddedCommerceCartsGetAfter from "../src/functions/embedded.commerce.carts.get.after";

describe("embeddedCommerceCartsGetAfter", () => {
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
    embeddedCommerceCartsGetAfter(context, (e?: string | null) => {
      error = e;
    });

    expect(error).toBeUndefined();
  });
});
