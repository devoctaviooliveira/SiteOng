import HeaderLogo from "../../assets/HeaderLogo.svg"
import {StandardButton} from "../StandardButton/index.jsx"
import { IoMdMenu } from "react-icons/io";
import React, { useState } from 'react';


import { Container, Links, Button, HomeButton, DropDownMenu, MobileLinks  } from "./styles";

export function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Links>
        <HomeButton>
          <a href="/homepage"><img src={HeaderLogo} alt="Logotipo da ONG" /></a>
        </HomeButton>
        <a className="DesktopVersion" href="/about">Sobre nós</a>
        <a className="DesktopVersion" href="/adopt">Adote</a>
        <a className="DesktopVersion" href="/donate">Contribua</a>
        <a className="DesktopVersion" href="/fale-conosco">Fale conosco</a>
      </Links>

      <Button>
        <StandardButton className='WhatsAppButton' title="WhatsApp" />
      </Button>

      <DropDownMenu onClick={toggleMenu}>
        <IoMdMenu className="Icon" />
      </DropDownMenu>

      {isOpen && (
        <MobileLinks>
          <a href="/about">Sobre nós</a>
          <a href="/adopt">Adote</a>
          <a href="/donate">Contribua</a>
          <a href="/fale-conosco">Fale conosco</a>
        </MobileLinks>
      )}
    </Container>
  )
}