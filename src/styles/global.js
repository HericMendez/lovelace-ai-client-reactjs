import { createGlobalStyle } from "styled-components";

 const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;

  }

  body {
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .math {
  font-family: 'Times New Roman', Times, serif; /* Fonte clássica para conteúdos matemáticos */
  font-style: italic;        /* Estiliza as expressões com itálico */
  font-size: 1.1em;          /* Tamanho ligeiramente maior, ajuste conforme necessário */
  color: #333;               /* Cor do texto */
  background-color: #f0f0f0; /* Fundo claro para destacar a expressão */
  padding: 0.2em 0.4em;      /* Espaçamento interno para melhor legibilidade */
  border-radius: 0.3em;      /* Bordas suavizadas */
}
.math-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f5f5f5;
  padding: 12px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 16px;
  color: #333;
  width: fit-content;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
}

.math-step {
  display: flex;
  justify-content: flex-start;
  padding: 2px 0;
  white-space: nowrap;
}

`;

export default GlobalStyles