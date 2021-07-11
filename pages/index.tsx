import NavBar from "../components/NavBar";
import HomeLayout from "../components/Layouts/HomeLayout";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0px auto;
  @media (max-width: 480px) {
    padding: 0px 25px;
  }
  @media (max-width: 1080px) {
    padding: 0px 25px;
  }
  padding: 0px 150px;
`;

export default function Home() {
  return (
    <MainContainer>
      <NavBar/>
      <HomeLayout/>
    </MainContainer>
  )
}
