import "antd/dist/antd.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// local Components
import Demo from "./LoginPage";
import Spinner from "./Spinner";
import Susses from "./MainPage";

// Local CSS
import "../css/Spinner.css";
import "../css/Login.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/Susses" element={<Susses />} />
      </Routes>
    </Router>
  );
};

export default App;

//https://github.com/OybekNarzullaev/task1-react-post/tree/main/client/src
