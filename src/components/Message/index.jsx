/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatHtmlContent } from "../../utils/formatHtmlContent";

const MessageWrapper = styled.div`
  padding: 10px;
  margin: 5px 0;
  border-radius: 6px;
  background-color: ${({ sender }) =>
    sender === "Você" ? "#d1c4e9" : "#e0f7fa"};
  text-align: ${({ sender }) => (sender === "Você" ? "right" : "left")};
`;

const Message = ({ sender, text }) => {
  console.log("text is array?", Array.isArray(text));
  return (
    <MessageWrapper sender={sender}>
      <strong>{sender ? sender : "Ada"}:</strong>

      <div>
        {Array.isArray(text) ? (
          text.map((item, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ))
        ) : (
          <div dangerouslySetInnerHTML={{ __html: formatHtmlContent(text) }} />
        )}{" "}
        {/* this decision structure avoids code breaking due to wrong data types */}
      </div>
    </MessageWrapper>
  );
};

export default Message;
