import HeaderLogo from "../../assets/HeaderLogo.svg"
import {StandardButton} from "../StandardButton/index.jsx"

import { Container, Links, Button } from "./styles";

export function Header() {
  return (
    <Container>

      <Links>
        <img src={HeaderLogo} alt="Logotipo da ONG" />
        <a href="">Sobre nós</a>
        <a href="">Adote</a>
        <a href="">Brechó</a>
        <a href="">Eventos</a>
        <a href="">Contribua</a>
        <a href="">Fale conosco</a>
      </Links>

      <Button>
        <StandardButton className='WhatsAppButton'/>
      </Button>
    </Container>
  )
}