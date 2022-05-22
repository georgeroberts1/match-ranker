import { useEffect, useState } from "react";
import getPlTeamData from "../../Services/getPlTeamData";
import getPlFixtureData from "../../Services/getPlFixtureData";
import FixtureRow from "../Organisms/FixtureRow";
import getPlTableData from "../../Services/getPlTableData";
import getRankingData from '../../Utils/rankingHandler'
import { setSessionData, getSessionData } from '../../Utils/sessionStorage'
import styled from "styled-components";

const FixtureListStyled = styled.div`
  width: 70%;
`

function FixtureList() {
  const [plPositions, setPlPositions] = useState([]);
  const [plTeams, setPlTeams] = useState([]);
  const [plFixturesRanked, setPlFixturesRanked] = useState([]);

  const sortByRank = array => {
    return array.sort((a, b) => b.rankingData.ranking - a.rankingData.ranking)
  }

  const setFixtureRanking = fixtureArray => {
    const fixturesWithRanking = fixtureArray.reduce((array, fixture) => {
      const rankingData = getRankingData(fixture)
      array.push({...fixture, rankingData})
      return(array)
    }, [])
    return sortByRank(fixturesWithRanking)
  }

  const dataHandler = (sessionKey, getData, setState) => {
    const sessionData = getSessionData(sessionKey)
    if(!sessionData) {
      getData().then((data) => {
        if(sessionKey === 'fixtureData') {
          const rankedFixtureData = setFixtureRanking(data)
          data = rankedFixtureData
          setState(rankedFixtureData)
        }
        setSessionData(sessionKey, data)
        setState(data);
      });
    } else {
      console.log(sessionData)
      setState(sessionData)
    }
  }

  const setPlData = async () => {
    dataHandler('tableData', getPlTableData, setPlPositions)
    dataHandler('teamData', getPlTeamData, setPlTeams)
    dataHandler('fixtureData', getPlFixtureData, setPlFixturesRanked)
  };
  
  useEffect(() => {
    setPlData()
  }, []);
 
  const teamsData = {
    teamData: plTeams,
    tableData: plPositions,
  }

  return <FixtureListStyled>
    {plFixturesRanked.map(fixture => <FixtureRow key={fixture.id} {...fixture} {...teamsData} />)}
  </FixtureListStyled>
}

export default FixtureList;