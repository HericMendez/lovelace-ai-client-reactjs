import styled from "styled-components";

// Container principal responsivo com padding ajustável
export const Container = styled.div`
  padding: 20px;
  height: 100vh;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const Content = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`


// Título principal com tamanho adaptável
export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

// Seção de conteúdo centralizada com largura máxima definida
export const Section = styled.div`
  width: 100%;
  max-width: 1000px;
  background: #fff;
  padding: 20px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Subtítulo com responsividade
export const Subtitle = styled.h2`
  font-size: 20px;
  color: #007bff;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

// Texto com espaçamento para leitura
export const Text = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 16px;
  code {
    font-family: "Ubuntu Mono", serif;
    font-weight: 700;
  }

  li {
    margin-left: 2rem;
  }
`;

// Bloco de código com estilo para destacar exemplos
export const CodeBlock = styled.pre`
  background-color: #222;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  font-size: 16px;
  margin: 10px 0;
  color: #fff;
  font-family: "Ubuntu Mono", serif;
`;