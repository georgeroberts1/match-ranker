import styled from 'styled-components';
import { removeFC } from '../../Utils/general'

const FixtureCardStyled = styled.div`
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
const TableStyled = styled.table`
    width: 100%;
    td {
        width: 50%;
    }
`

const LabelTD = styled.td`
    text-align: right;
    font-weight: bold;
`

const getTableRow = (label, value) => {
    return <tr>
                <LabelTD>
                    {label}:
                </LabelTD>
                <td>
                    {value}
                </td>
            </tr>
}

const FixtureCard = props => {
    // console.log(props)
    const isGameFinished = props.status === "Finished"
    return (
        <>
        {isGameFinished &&
        <FixtureCardStyled>
            <RankingBlockStyle>
                <RankingHeaderStyled>Match Rank</RankingHeaderStyled>
                <br />
                <BigNumberStyled>{props.rankingData.ranking || 'Unranked'}</BigNumberStyled>
            </RankingBlockStyle>
            <RankingBlockStyle>
                Combined Goal Difference: {props.rankingData.combinedGoalDifferenceData.combinedGoalDifference} <br />
                Sum of Table Positions: {props.rankingData.combinedTablePosition} <br />
                Gap Between Table Position: {props.rankingData.tableProximity} <br />
            </RankingBlockStyle>
        </FixtureCardStyled>
        }

        {!isGameFinished && 
            <FixtureCardStyled>
                <BigNumberStyled>
                    {props.score.fullTime.homeTeam}
                </BigNumberStyled>
                
                <TableStyled>
                    {getTableRow('Winner', props.score.winner === "HOME_TEAM" ? removeFC(props.homeTeamData.name) : removeFC(props.awayTeamData.name))}
                    {getTableRow('Match Ranking', props.rankingData.ranking || 'Unranked')}
                </TableStyled>

                <BigNumberStyled>
                    {props.score.fullTime.awayTeam}
                </BigNumberStyled>
            </FixtureCardStyled>
        }
        </>
    )
}

export default FixtureCard