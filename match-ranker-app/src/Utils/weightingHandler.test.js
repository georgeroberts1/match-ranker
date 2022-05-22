import {
  getTableProximityWeight,
  getCombinedTablePositionWeight,
  getWeightedRanking,
} from "./weightingHandler";

test("returns weight based on mid range table proximity", () => {
  expect(getTableProximityWeight(3)).toBe(89);
});

test("returns 0 for max table proximity", () => {
  expect(getTableProximityWeight(19)).toBe(0);
});

test("returns 100 for min table proximity", () => {
  expect(getTableProximityWeight(1)).toBe(100);
});

// TODO: Figure out a way to minimise these repeated tests
test("returns weight based on mid range combined table position", () => {
  expect(getCombinedTablePositionWeight(17)).toBe(61);
});

test("returns 0 for max combined table position", () => {
  expect(getCombinedTablePositionWeight(39)).toBe(0);
});

test("returns 100 for min combined table position", () => {
  expect(getCombinedTablePositionWeight(3)).toBe(100);
});

test("Aggregate weight function returns 50 for 2 weights of 50", () => {
  expect(getWeightedRanking(3, 17)).toBe(75);
});
