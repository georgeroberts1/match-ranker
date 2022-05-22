import CallFootballAPI from "./callFootballAPI";

const getPlTeamData = async () => {
  const plTeamData = await CallFootballAPI(
    "https://api.football-data.org/v2/competitions/2021/teams"
  );
  const jsonData = await plTeamData.json();
  const teamObj = {};
  jsonData.teams.forEach((team) => {
    const id = team.id;
    delete team.id;
    teamObj[id] = { ...team };
  });
  return teamObj;
};

export default getPlTeamData;
