import { describe, test } from "vitest";
import { sumNumbers } from "./mathServices";

describe("test math functions", () => {
  test("should make a sum 2 + 3 = 5", () => {
    expect(sumNumbers(2, 3)).toEqual(5);
  });
});
