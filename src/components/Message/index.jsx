/* eslint-disable react/prop-types */
import styled from "styled-components";

const MessageWrapper = styled.div`
  padding: 10px;
  margin: 5px 0;
  border-radius: 6px;
  background-color: ${({ sender }) => (sender === "Você" ? "#d1c4e9" : "#e0f7fa")};
  text-align: ${({ sender }) => (sender === "Você" ? "right" : "left")};
`;

const Message = ({ sender, text }) => (
  <MessageWrapper sender={sender}>
    <strong>{sender}:</strong>
    <div dangerouslySetInnerHTML={{ __html: text }} />

  </MessageWrapper>
);

export default Message;
