import { describe, expect, it } from "vitest";

import { resolveCreateStreamingBaseUrl } from "./api";

describe("resolveCreateStreamingBaseUrl", () => {
  const providerBaseUrl = "https://prod.cloudmatchbeta.nvidiagrid.net/";

  it("preserves the region selected by the client for session creation", () => {
    const japanBaseUrl = "https://np-tyo-01.cloudmatchbeta.nvidiagrid.net/";

    expect(resolveCreateStreamingBaseUrl(japanBaseUrl, providerBaseUrl)).toBe(japanBaseUrl);
  });

  it("uses the provider endpoint only when no region was selected", () => {
    expect(resolveCreateStreamingBaseUrl(undefined, providerBaseUrl)).toBe(providerBaseUrl);
    expect(resolveCreateStreamingBaseUrl("   ", providerBaseUrl)).toBe(providerBaseUrl);
  });
});
