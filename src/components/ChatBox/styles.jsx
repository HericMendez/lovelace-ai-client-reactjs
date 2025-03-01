import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  margin-top: 5vh;
  @media (min-width: 768px) {
    width: 800px;
    max-width: 80vw;
    height: auto;
    margin-top: 20px;
    background: #fff;
    border-radius: 8px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #444;
  font-family: "Ubuntu Mono", serif;
  font-weight: 700;
`;

export const ChatArea = styled.div`
  overflow-y: auto;
  padding: 10px;
  margin-top: 24px;
  border: 1px solid #808080;
  border-radius: 8px;
  background: #e2f5f5;
  height: 70vh;
  
  @media (min-width: 768px) {
    height: 60vh;
  }
`;

export const InputArea = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const TextArea = styled.textarea`
  flex: 1;
  padding: 10px;
  border: 1px solid #808080;
  border-radius: 4px;
  min-height: 10vh;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  margin-left: 5px;
  min-width: 75px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
