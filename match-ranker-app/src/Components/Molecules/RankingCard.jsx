import styled from 'styled-components';
import { removeFC } from '../../Utils/general'

const FixtureCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #00A650;
    width: 100%;
    padding: 10px;
    border: solid 5px #5EBA7D;
    margin: 10px;
    border-radius: 10px;
    color: #FFF;
`
const RankingHeaderStyled = styled.span`
    font-size: 30px;
`

const BigNumberStyled = styled.span`
    font-size: 30px;
    font-weight: 800;
`

const RankingBlockStyle = styled.div`
`

const RankingCard = props => {
    // console.log(props)
    const isGameFinished = props.status === "Finished"
    return (
        <>
        {isGameFinished &&
        <FixtureCard>
            <h3></h3>
            <RankingBlockStyle>
                <RankingHeaderStyled>Match Rank</RankingHeaderStyled>
                <br />
                <BigNumberStyled>{props.rankingData.ranking || 'Unranked'}</BigNumberStyled>
            </RankingBlockStyle>
            <RankingBlockStyle>
                Combined Goal Difference: {props.rankingData.combinedGoalDifference} <br />
                Sum of Table Positions: {props.rankingData.combinedTablePosition} <br />
                Gap Between Table Position: {props.rankingData.tableProximity} <br />
            </RankingBlockStyle>
        </FixtureCard>
        }

        {!isGameFinished && 
            <FixtureCard>
                <BigNumberStyled>
                    {props.score.fullTime.homeTeam}
                </BigNumberStyled>
                {props.score.winner === "HOME_TEAM" ? removeFC(props.homeTeamData.name) : removeFC(props.awayTeamData.name)} <br />
                <BigNumberStyled>
                    {props.score.fullTime.awayTeam}
                </BigNumberStyled>
            </FixtureCard>
        }
        </>
    )
}

export default RankingCard