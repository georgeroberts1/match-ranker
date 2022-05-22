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

  const combinedGoalDifference =
    // TODO: Calculate lowest/highest combined goal difference and pass in here as object
    tableData[homeTeamID].goalDifference + tableData[awayTeamID].goalDifference;

  const rankingDataPoints = {
    tableProximity,
    combinedTablePosition,
    combinedGoalDifference,
  };

  const rankingWeight = getWeightedRanking(rankingDataPoints);

  return { ranking: rankingWeight, ...rankingDataPoints };
};

export default getRankingData;
