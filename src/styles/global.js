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
    overflow-x: hidden;
  }
  .math {
  font-family: 'Times New Roman', Times, serif; 
  font-style: italic;        
  font-size: 1.1em;          
  color: #333;             
  background-color: #f0f0f0; 
  padding: 0.2em 0.4em;      
  border-radius: 0.3em;  
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
.code-block {
  background-color: #222;
  width: 80%;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  font-size: 16px;
  margin: 10px 0;
  color: #fff;
  font-family: "Ubuntu Mono", serif;
}
`;

export default GlobalStyles