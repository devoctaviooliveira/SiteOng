import HeaderLogo from "../../assets/HeaderLogo.svg"
import {StandardButton} from "../StandardButton/index.jsx"
import {FaWhatsapp} from "react-icons/fa";


import { Container, Links, Button } from "./styles";

export function Header() {
  return (
    <Container>
      <Links>
        <img src={HeaderLogo} alt="Logotipo da ONG" />
        <a href="">Sobre nós</a>
        <a href="/adopt">Adote</a>
        <a href="">Contribua</a>
        <a href="">Fale conosco</a>
      </Links>

      <Button>
        <StandardButton className='WhatsAppButton' title="WhatsApp" />
      </Button>
    </Container>
  )
}