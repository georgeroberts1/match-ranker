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

  const ranking = getWeightedRanking(tableProximity, combinedTablePosition);

  return { ranking: ranking };
};

export default getRankingData;
