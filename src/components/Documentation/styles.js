import styled from "styled-components";

export const Nav = styled.nav`
  background: #ccc;
  color: #222;

  padding: 0 20px ;

  width: 100vw;
  margin-top: 120px;
   position: relative;
    height: 30vh;
    overflow-y:scroll ;
  border-bottom: 2px solid #222;
  @media (min-width: 768px) {
    width: 20vw;
    height: 100vh;
    overflow: auto;
    position: fixed;
    margin-top: 60px;
    top: 0;
    left: 0;
    
  }
`;

export const Header = styled.header`
  font-size: 1.5em;
  margin-bottom: 10px;

`;

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;

 
`;

export const HR = styled.hr`

  display: block;
  height: 1px;
  border: 0;
  border-top: 2px solid #222;
  padding: 0;

`


export const Li = styled.li`
  margin: 15px 0;
  color: #222;
  text-decoration: none;
`;

export const A = styled.a`
  color: #222;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #808080;
    cursor: pointer;
  }
  `

export const SectionContainer = styled.section`
padding: 20px;
border-bottom: 1px solid #ccc;

@media (min-width: 768px) {
  margin-left: 22vw;
  margin-top: 60px;
  width: 80vw;
}
`;


export const Article = styled.article`
font-size: 1em;
line-height: 1.5;
`;
