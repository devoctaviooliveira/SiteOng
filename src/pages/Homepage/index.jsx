import { Header } from "../../components/Header";
import LogoHomepage from "../../assets/LogoHomepage.png"
import DogHomepage from "../../assets/DogHomepage.png"

import { Container, MainContent, FirstHalf, SecondHalf } from "./styles";

export function Homepage() {
  return (
    <Container>
      <Header/>
      <MainContent>
        <FirstHalf>
          <img src={LogoHomepage} alt="Logotipo da ONG" />
          <h1>Respeito por Todas <br /> as Formas de Vida!</h1>
        </FirstHalf>

        <SecondHalf>
          <img src={DogHomepage} alt="Imagem de um cachorro" />
        </SecondHalf>
      </MainContent>
    </Container>
  )
}