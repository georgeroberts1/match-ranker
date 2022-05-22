import styled from 'styled-components';

const RankingCardStyle = styled.div`
    background-color: #00A650;
    width: 100%;
    padding: 10px;
    border: solid 5px #5EBA7D;
    margin: 10px;
    border-right: 0;
    border-radius: 30px 0 0 30px;
    color: #FFF;
`
const RankingHeaderStyled = styled.span`
    font-size: 30px;
`

const RankingStyled = styled.span`
    font-size: 30px;
    font-weight: 800;
`

const RankingCard = props => {
    return (
        <RankingCardStyle>
            <RankingHeaderStyled>Match Rank</RankingHeaderStyled><br /><RankingStyled>{props.rankingData.ranking || 'Unranked'}</RankingStyled>
        </RankingCardStyle>
    )
}

export default RankingCard