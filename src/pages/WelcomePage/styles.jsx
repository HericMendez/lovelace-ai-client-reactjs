import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0;

  box-shadow: 0 1px 2px #0003;
  background-color: white;
  border-radius: 5px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;
export const Title = styled.h1`
  text-align: center;
  color: #444;
  font-family: "Ubuntu Mono", serif;
  font-size: 42px;
  font-weight: 700;
`;
export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;

  img {
    width: 350px;
    border-radius: 10px;
    margin: 20px;
  }
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
