import React from "react";
import "./App.css";
import Header from "./Header.js";
import Game from "./components/Game.js";
import Square from "./components/Square.js";

function App() {
  return (
    <div className="body">
      <Game />
    </div>
  );
}

export default App;
