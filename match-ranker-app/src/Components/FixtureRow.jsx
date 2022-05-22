import TeamCard from "./TeamCard"
import RankingCard from "./RankingCard"
import styled from "styled-components"

const FixtureRowStyled = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
    border-top: 0.1em solid black;
    background-color: #FFF;
`
const getTeamData = (props, homeOrAway) => {
    const teamID = props[homeOrAway].id
    return {
        ...props[homeOrAway],
        tableData: props.tableData[teamID],
        teamData: props.teamData[teamID]
    }
}

const FixtureRow = props => {
    const homeTeamData = getTeamData(props, 'homeTeam')
    const awayTeamData = getTeamData(props, 'awayTeam')
    return <FixtureRowStyled><TeamCard {...homeTeamData} /><b>VS</b> <TeamCard {...awayTeamData} /> <RankingCard {...props} /></FixtureRowStyled>
}

export default FixtureRow