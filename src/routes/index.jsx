 
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "../pages/ChatPage";
import WelcomePage from "../pages/WelcomePage";
import TogetherAIVersusLangGraphPage from "../pages/Signup";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<ChatPage />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<TogetherAIVersusLangGraphPage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
