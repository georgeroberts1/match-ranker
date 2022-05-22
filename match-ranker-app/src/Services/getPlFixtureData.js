import CallFootballAPI from "./callFootballAPI";

const getPlTeamData = async () => {
  const plTeamData = await CallFootballAPI(
    "https://api.football-data.org/v2/competitions/PL/matches?matchday=38"
  );
  const jsonData = await plTeamData.json();
  return jsonData.matches;
};

export default getPlTeamData;
