import TeamCard from "../Molecules/TeamCard"
import FixtureCard from "../Molecules/FixtureCard"
import styled from "styled-components"

const FixtureRowStyled = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
    border-top: 1em solid b0b0b0;
    background-color: #FFF;
    border-radius: 15px;
    margin-bottom: 10px;
    background: #ffffff;
    box-shadow:  5px 5px 10px #b0b0b0,
                -5px -5px 10px #ffffff;
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
    // console.log(props)
    const homeTeamData = getTeamData(props, 'homeTeam')
    const awayTeamData = getTeamData(props, 'awayTeam')
    const fixtureCardProps = {
        awayTeamData,
        homeTeamData,
        rankingData: props.rankingData,
        score: props.score,
        status: props.status,
        utcDate: props.utcDate
    }
    return <FixtureRowStyled><TeamCard {...homeTeamData} /><FixtureCard {...fixtureCardProps} /> <TeamCard {...awayTeamData} /></FixtureRowStyled>
}

export default FixtureRow