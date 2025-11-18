import { describe, it, expect } from "vitest";
import { fetchData } from "../api/fetchData";

describe("fetchData", () => {
  it("should fetch real data from dad joke API", async () => {
    const result = await fetchData("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });
    expect(result).toHaveProperty("joke");
    expect(typeof result.joke).toBe("string");
  });

  it("should throw error with invalid URL", async () => {
    await expect(
      fetchData("https://this-url-does-not-exist-12345.com")
    ).rejects.toThrow();
  });

  it("should handle network errors gracefully", async () => {
    await expect(fetchData("https://invalid-web.com")).rejects.toThrow();
  });
});
