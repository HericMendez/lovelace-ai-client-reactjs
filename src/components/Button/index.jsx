/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = ({ id, Text, Color,  onClick, Type = "button", disabled }) => {

    const Button = styled.button`
    padding: 16px 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    background-color: ${!disabled? (Color|| '#046ee5'): '#ccc'};
    color: white;
    font-weight: 600;
    font-size: 16px;

  `;

  return (
    <Button id={id} type={Type} onClick={onClick} disabled={disabled} d>
      {Text}
    </Button>
  );
};

export default Button;