const getTableProximityWeight = (tableProximity) => {
  const maxProx = 19;
  const weightProportion = 100 / maxProx;
  //Assumes that the user wants to see a game between the closest teams
  const weightDeduction = Math.round(weightProportion * (tableProximity - 1));

  return 100 - weightDeduction;
};

export const getWeightedRanking = (tableProximity) => {
  return getTableProximityWeight(tableProximity);
};
