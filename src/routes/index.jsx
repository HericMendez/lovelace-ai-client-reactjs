 
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "../pages/Chat";
import WelcomePage from "../pages/Welcome";
import DocsPage from "../pages/Docs";
import ExplanationPage from "../pages/Explanation";

const RoutesApp = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/chat" element={<ChatPage />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/models" element={<ExplanationPage />} />
      </Routes>
    </Fragment>
  );
};

export default RoutesApp;
