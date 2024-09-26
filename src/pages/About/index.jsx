import { Header } from "../../components/Header";
import { StandardButton } from "../../components/StandardButton";
import AboutImg1 from "../../assets/AboutImg1.png"
import AboutImg2 from "../../assets/AboutImg2.png"

import { Container, MainContent, TextContent, ImgContent, FirstText, SecondText } from "./styles";

export function About() {
  return(
    <Container>
      <Header />
      <MainContent>
        <TextContent>
          <FirstText>
            <p>
              Na IMG, nos dedicamos a resgatar e realocar animais de estimação necessitados, 
              garantindo que eles encontrem o amor que merecem. Com compaixão e comunidade em nosso núcleo, 
              pretendemos combinar cada animal de estimação com sua família perfeita para sempre, promovendo laços de amor para toda a vida.
            </p>
          </FirstText>
          
          <SecondText>
            <span>
              <h1>5K</h1>
              <p>Seguidores</p>
            </span>

            <span>
              <h1>+30</h1>
              <p>Anos com doação</p>
            </span>
          </SecondText>
        </TextContent>

        <a href="https://www.instagram.com/institutomarilugodoi/" target="_blank"><StandardButton title="Visite nosso Instagram" className="Button"/></a>
        

        <ImgContent>
          <img className="IMG1" src={AboutImg1} alt="Imagem de um cachorro" />
          <img className="IMG2" src={AboutImg2} alt="Imagem de um cachorro" />
        </ImgContent>
      </MainContent>
    </Container>
  )
}