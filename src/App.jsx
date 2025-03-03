import Navbar from "./components/Navbar";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => (
  <Router>
    <Navbar />
    <RoutesApp />
    <GlobalStyle />
  </Router>
);

export default App;
