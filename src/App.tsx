import React from "react";
import { ThemeContext, Theme } from "./contextApi/ThemeContext";
import "./App.css";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
