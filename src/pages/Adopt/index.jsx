import { Header } from "../../components/Header";
import Dog1 from "../../assets/dog1.png"
import Dog2 from "../../assets/dog2.png"
import Dog3 from "../../assets/dog3.png"
import Dog4 from "../../assets/dog4.png"
import { StandardButton } from "../../components/StandardButton";

import { Container, Grid, MainContent, TextContent } from "./styles";

export function Adopt() {
  return(
    <Container>
      <Header/>

      <MainContent>
        <Grid>
          <img src={Dog1} alt="Imagem de um cachorro" />
          <img src={Dog2} alt="Imagem de um cachorro" />
          <img src={Dog3} alt="Imagem de um cachorro" />
          <img src={Dog4} alt="Imagem de um cachorro" />
        </Grid>

        <TextContent>
          <h1>Encontre um amigo para a vida toda. Adote, transforme uma vida e encante a sua de amor e companheirismo incondicional.</h1>
          <StandardButton title="Entre em contato" className="Button"/>
        </TextContent>
      </MainContent>
    </Container>
  )
}