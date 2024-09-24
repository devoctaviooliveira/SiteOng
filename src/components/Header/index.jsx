import HeaderLogo from "../../assets/HeaderLogo.svg"
import {StandardButton} from "../StandardButton/index.jsx"
import {FaWhatsapp} from "react-icons/fa";


import { Container, Links, Button, HomeButton } from "./styles";

export function Header() {
  return (
    <Container>
      <Links>
        <HomeButton>
          <a href="/homepage"><img src={HeaderLogo} alt="Logotipo da ONG" /></a>
        </HomeButton>
        <a href="/about">Sobre nós</a>
        <a href="/adopt">Adote</a>
        <a href="/donate">Contribua</a>
        <a href="">Fale conosco</a>
      </Links>

      <Button>
        <StandardButton className='WhatsAppButton' title="WhatsApp" />
      </Button>
    </Container>
  )
}