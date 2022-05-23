import { getSessionData } from "./sessionStorage";
import { getWeightedRanking } from "./weightingHandler";

const getTableProximity = (homeTeamPosition, awayTeamPosition) => {
  return Math.abs(homeTeamPosition - awayTeamPosition);
};

const getRankingData = (fixtureData) => {
  const {
    awayTeam,
    homeTeam,
    lastUpdated,
    matchday,
    referees,
    utcDate,
    stage,
  } = fixtureData;
  const homeTeamID = homeTeam.id;
  const awayTeamID = awayTeam.id;
  const tableData = getSessionData("tableData");
  const teamData = getSessionData("teamData");

  // Theory: Teams closer together should have closer games
  const tableProximity = getTableProximity(
    tableData[homeTeamID].position,
    tableData[awayTeamID].position
  );

  // Theory: Teams with higher table positions (equates to smallest number)
  // are better teams
  const combinedTablePosition =
    tableData[homeTeamID].position + tableData[awayTeamID].position;

  const getCombinedGoalDifferenceData = () => {
    let minGoalDifferenceCombined = 0;
    let maxGoalDifferenceCombined = 0;
    const topTwo = Object.values(tableData)
      .filter((team) => (team.position <= 2 ? team : null))
      .forEach((team) => (maxGoalDifferenceCombined += team.goalDifference));
    const bottomTwo = Object.values(tableData)
      .filter((team) => (team.position >= 19 ? team : null))
      .forEach((team) => (minGoalDifferenceCombined += team.goalDifference));

    const combinedGoalDifference =
      tableData[homeTeamID].goalDifference +
      tableData[awayTeamID].goalDifference;

    return {
      minGoalDifferenceCombined,
      maxGoalDifferenceCombined,
      combinedGoalDifference,
    };
  };

  const combinedGoalDifferenceData = getCombinedGoalDifferenceData();

  const rankingDataPoints = {
    tableProximity,
    combinedTablePosition,
    combinedGoalDifferenceData,
  };

  const rankingWeight = getWeightedRanking(rankingDataPoints);

  return { ranking: rankingWeight, ...rankingDataPoints };
};

export default getRankingData;
