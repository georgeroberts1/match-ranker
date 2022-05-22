import FixtureList from "./Components/Pages/FixtureList";
import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppStyled>
      <h1>CASUAL FAN PREM GAMES RANKED</h1>
      <FixtureList />
    </AppStyled>
  );
}

export default App;
