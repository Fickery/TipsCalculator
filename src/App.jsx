import React, { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import "./App.scss";

function App() {
  const data = "Hello Everyone"; // Define the data here

  return (
    <div id="content" className="main__cont">
      <Left data={data} /> {/* Pass data as a prop */}
      <Right data={data} />
    </div>
  );
}

export default App;
