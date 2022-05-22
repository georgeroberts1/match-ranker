const lowerIsBetter = (min, max, value) => {
  const diff = max - min;
  const weightProportion = 100 / diff;
  const weightDeduction = Math.round(weightProportion * (value - min));
  return 100 - weightDeduction;
};

export const getTableProximityWeight = (tableProximity) => {
  //Assumes that the user wants to see a game between the closest teams
  const minProx = 1;
  const maxProx = 19;
  return lowerIsBetter(minProx, maxProx, tableProximity);
};

export const getCombinedTablePositionWeight = (combinedTablePosition) => {
  const minCombined = 3;
  const maxCombined = 39;
  return lowerIsBetter(minCombined, maxCombined, combinedTablePosition);
};

export const getWeightedRanking = (tableProximity, combinedTablePosition) => {
  // Assume for now all weights have equal value
  const tableProximityWeight = getTableProximityWeight(tableProximity);
  const combinedTablePositionWeight = getCombinedTablePositionWeight(
    combinedTablePosition
  );
  const weightCount = 2;
  const weightArray = [tableProximityWeight, combinedTablePositionWeight];
  const weightSum = weightArray.reduce((a, b) => a + b, 0);
  return Math.round(weightSum / weightCount);
};
