 
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import TogetherAIVersusLangGraphPage from "../pages/Signup";



const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/" element={<Signin />} />
          <Route path="*" element={<Signin />} />
          <Route path="/signup" element={<TogetherAIVersusLangGraphPage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
