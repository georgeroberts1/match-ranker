import { getWeightedRanking } from "./weightingHandler";

test("returns value provided as param", () => {
  expect(getWeightedRanking(3)).toBe(89);
});
