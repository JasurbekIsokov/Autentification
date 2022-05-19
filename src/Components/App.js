import "antd/dist/antd.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

// local Components
import Demo from "./LoginPage";
import Spinner from "./Spinner";
import Susses from "./MainPage";

// Local CSS
import "../css/Spinner.css";
import "../css/Login.css";

const App = () => {
  return (
    <BrowserRouter>
      <Demo />
    </BrowserRouter>
  );
};

export default App;
