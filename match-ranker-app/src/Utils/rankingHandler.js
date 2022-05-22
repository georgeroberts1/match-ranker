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

  const tableProximity = getTableProximity(
    tableData[homeTeamID].position,
    tableData[awayTeamID].position
  );

  const ranking = getWeightedRanking(tableProximity);

  return { ranking: ranking };
};

export default getRankingData;
