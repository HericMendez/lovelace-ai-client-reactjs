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
import NavLogo from '../../assets/logo_title_only.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("isOpen ==> ", isOpen);
  const navigate = useNavigate()
  return (
    <>
      <NavbarContainer>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>☰</MenuButton>
        <Logo><img src={NavLogo} alt=""/></Logo>
        <NavLinks>
          <li></li>
          <li>About</li>
          <li onClick={() => navigate("/")}>Sair</li>
        </NavLinks>
      </NavbarContainer>

      <Sidebar isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(!isOpen)}>×</CloseButton>
        <ul>
          <li onClick={() => setIsOpen(!isOpen)}>Sobre</li>
          <li onClick={() => setIsOpen(!isOpen)}>Contato</li>
        </ul>
        <hr />
      </Sidebar>
    </>
  );
};

export default Navbar;
