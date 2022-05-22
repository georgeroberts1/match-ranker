import CallFootballAPI from "./callFootballAPI";

const getPlTableData = async () => {
  const plTable = await CallFootballAPI(
    "https://api.football-data.org/v2/competitions/2021/standings"
  );
  const jsonData = await plTable.json();
  const teamObj = {};
  jsonData.standings[0].table.forEach((position) => {
    const id = position.team.id;
    delete position.team.id;
    teamObj[id] = { ...position };
  });
  return teamObj;
};

export default getPlTableData;
