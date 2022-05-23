const weightOutOf100 = (min, max, value, isLowBetter) => {
  const diff = max - min;
  const weightProportion = 100 / diff;
  const weightDeduction = Math.round(weightProportion * (value - min));
  return isLowBetter ? 100 - weightDeduction : weightDeduction;
};

export const getTableProximityWeight = (tableProximity) => {
  //Assumes that the user wants to see a game between the closest teams
  const minProx = 1;
  const maxProx = 19;
  return weightOutOf100(minProx, maxProx, tableProximity, true);
};

export const getCombinedTablePositionWeight = (combinedTablePosition) => {
  const minCombined = 3;
  const maxCombined = 39;
  return weightOutOf100(minCombined, maxCombined, combinedTablePosition, true);
};

export const getCombinedGoalDifferenceWeight = (goalDifferenceData) => {
  const {
    minGoalDifferenceCombined,
    maxGoalDifferenceCombined,
    combinedGoalDifference,
  } = goalDifferenceData;

  return weightOutOf100(
    minGoalDifferenceCombined,
    maxGoalDifferenceCombined,
    combinedGoalDifference,
    false
  );
};

export const getWeightAverage = (...weights) => {
  const weightSum = weights.reduce((a, b) => a + b, 0);
  return Math.round(weightSum / weights.length);
};

export const getWeightedRanking = (rankingDataPoints) => {
  const { tableProximity, combinedTablePosition, combinedGoalDifferenceData } =
    rankingDataPoints;

  // Assume for now all weights have equal value
  const tableProximityWeight = getTableProximityWeight(tableProximity);
  const combinedTablePositionWeight = getCombinedTablePositionWeight(
    combinedTablePosition
  );
  const combinedGoalDifferenceWeight = getCombinedGoalDifferenceWeight(
    combinedGoalDifferenceData
  );

  return getWeightAverage(
    tableProximityWeight,
    combinedTablePositionWeight,
    combinedGoalDifferenceWeight
  );
};
