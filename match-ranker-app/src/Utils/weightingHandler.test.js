import {
  getTableProximityWeight,
  getCombinedTablePositionWeight,
  getCombinedGoalDifferenceWeight,
  getWeightAverage,
  getWeightedRanking,
} from "./weightingHandler";

// test("returns weight based on mid range table proximity", () => {
//   expect(getTableProximityWeight(3)).toBe(89);
// });

// test("returns 0 for max table proximity", () => {
//   expect(getTableProximityWeight(19)).toBe(0);
// });

// test("returns 100 for min table proximity", () => {
//   expect(getTableProximityWeight(1)).toBe(100);
// });

// // TODO: Figure out a way to minimise these repeated tests
// test("returns weight based on mid range combined table position", () => {
//   expect(getCombinedTablePositionWeight(17)).toBe(61);
// });

// test("returns 0 for max combined table position", () => {
//   expect(getCombinedTablePositionWeight(39)).toBe(0);
// });

// test("returns 100 for min combined table position", () => {
//   expect(getCombinedTablePositionWeight(3)).toBe(100);
// });

test("returns weight based on mid range combined goal difference", () => {
  expect(
    getCombinedGoalDifferenceWeight({
      minGoalDifferenceCombined: -104,
      maxGoalDifferenceCombined: 141,
      combinedGoalDifference: -4,
    })
  ).toBe(41);
});

// test("Aggregate weight function returns 63 for 3 given weights", () => {
//   // 89+61+40/3 = 63
//   expect(getWeightAverage(89, 61, 40)).toBe(63);
// });

// test("Aggregate weight function returns 63 for 3 given weights", () => {
//   // 3->89 17->61 -4->40
//   expect(
//     getWeightedRanking({
//       tableProximity: 3,
//       combinedTablePosition: 17,
//       combinedGoalDifference: -4,
//     })
//   ).toBe(63);
// });
