import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./Components/App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App />);
