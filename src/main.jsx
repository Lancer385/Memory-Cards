import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>MEMORY CARDS 😺</h1>
    <App />
  </StrictMode>,
);
