import { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import "./App.scss";

function App() {
  return (
    <div id="content" className="main__cont">
      <Left />
      <Right />
    </div>
  );
}

export default App;
