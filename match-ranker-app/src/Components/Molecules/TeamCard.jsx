import styled from 'styled-components';
import { removeFC } from '../../Utils/general'

const TeamLogo = styled.img`
    object-fit: contain;
    height: 100px;
`
const TeamCardStyled = styled.div`
    text-align: center;
    flex-direction: column;
    align-items: start;
    padding: 10px;
    width: 100px;
    height: 100%;
`

const TeamCard = props => {
    return (
        <TeamCardStyled>
            <TeamLogo src={props.teamData.crestUrl} alt={removeFC(props.teamData.name)} />
        </TeamCardStyled>
    )
}

export default TeamCard