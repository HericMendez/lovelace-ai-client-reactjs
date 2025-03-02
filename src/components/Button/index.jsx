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
      background-color: ${!disabled ? Color || "#046ee5" : "#ccc"};
      color: white;
      font-weight: 700;
      font-size: 20px;
      font-family: "Ubuntu Mono", serif;
    `;

  return (
    <Button id={id} type={Type} onClick={onClick} disabled={disabled} d>
      {Text}
    </Button>
  );
};

export default Button;