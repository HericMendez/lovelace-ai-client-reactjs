import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo_full.png";
const WelcomePage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.id);

    if (!user) {
      setError("Insira seu nome de usuário!");
      return;
    }

    navigate("/home", { state: { user: user, model: e.target.id } });
  };

  return (
    <C.Container>
      <C.Label>
        <img src={Logo} alt="" />
      </C.Label>
      <C.Content>
        <C.Title>
          Bem-vindo!
        </C.Title>
        <Input
          type="text"
          placeholder="Digite seu nome"
          value={user}
          onChange={(e) => [setUser(e.target.value), setError("")]}
        />

        <C.labelError>{error}</C.labelError>

        <Button id="langChain" Text="Chatbot LangChain" onClick={handleLogin} />
        <Button
          id="langGraph"
          Text="Chatbot LangGraph"
          Color={"#28a745"}
          onClick={handleLogin}
        />
        {/*         <C.Strong>
          <Link to="/signup">&nbsp;Qual é a diferença?</Link>
        </C.Strong> */}
      </C.Content>
    </C.Container>
  );
};

export default WelcomePage;
