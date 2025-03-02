import { useState } from "react";
import {
  NavbarContainer,
  Logo,
  MenuButton,
  NavLinks,
  Sidebar,
  CloseButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import NavLogo from "../../assets/logo_title_only.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <NavbarContainer>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>☰</MenuButton>
        <Logo>
          <img src={NavLogo} alt="" />
        </Logo>
        <NavLinks>
          <li></li>
          <li>Docs</li>
          <li>Sobre</li>
          <li>Github</li>
          <li onClick={() => navigate("/")}>Voltar</li>
        </NavLinks>
      </NavbarContainer>

      <Sidebar isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(!isOpen)}>×</CloseButton>
        <ul>
          <li onClick={() => setIsOpen(!isOpen)}>Docs</li>
          <hr />
          <li onClick={() => setIsOpen(!isOpen)}>Sobre</li>
          <hr />
          <li onClick={() => setIsOpen(!isOpen)}>Github</li>
          <hr />
          <li onClick={() => [setIsOpen(!isOpen), navigate("/")]}>
            Voltar
          </li>{" "}
          <hr />
        </ul>
      </Sidebar>
    </>
  );
};

export default Navbar;
