import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background: #111;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
  position: fixed;
`;

export const Logo = styled.h1`
  text-align: right;
  font-size: 22px;
  img {
    max-width: 250px;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ToggleContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0 30px;

  li {
    cursor: pointer;

    font-family: "Ubuntu Mono", serif;
    font-weight: 700;

    font-size: 18px;
    margin-left: 20px;
    text-decoration: underline;
    &:hover {
      color: #ccc;
    }
    a {
      color: #fff !important;
      &:hover {
        color: #ccc !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background: #111;
  padding: 20px;
  transition: left 0.3s ease-in-out;
  z-index: 1000; /* Abaixo da navbar para que esta permaneça visível */

  ul {
    list-style: none;
    padding: 0;
    margin-top: 60px; /* Espaço para não sobrepor o botão de fechar */
  }

  li {
    padding: 10px 0;
    color: white;
    cursor: pointer;
    font-family: "Ubuntu Mono", serif;

    font-weight: 700;
    font-size: 20px;
    &:hover {
      color: #ccc;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 20px;

  @media (min-width: 769px) {
    display: none;
  }
`;
export const Footer = styled.div`
  text-align: right;

  display: flex;

  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  width: 100%;
`;

export const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
`;
export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #666;
`;
export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
`;