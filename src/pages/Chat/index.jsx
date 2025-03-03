
import * as C from "./styles";
import ChatBox from "../../components/ChatBox";
import { useLocation } from "react-router-dom";

const ChatPage = () => {
  const { state } = useLocation();

  return (
    <C.Container>
      <ChatBox user={state?.user} model={state?.model} />
    </C.Container>
  );
};

export default ChatPage;
