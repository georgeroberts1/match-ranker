import styled from 'styled-components';

const TeamLogo = styled.img`
    height: 100px;
    width: 100px;
    object-fit: contain;
    padding: 10px;
`

const TeamCard = props => {
    return (
        <div>
            <TeamLogo src={props.teamData.crestUrl} />
        </div>
    )
}

export default TeamCard