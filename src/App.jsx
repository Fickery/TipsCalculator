import React, { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import "./App.scss";

function App() {
  const data = "Hello Everyone"; // Define the data here

  return (
    <div id="content" className="main__cont">
<<<<<<< HEAD
      <Left data={data} /> {/* Pass data as a prop */}
      <Right data={data} />
=======
      <Left />
      <Right />
>>>>>>> ba53136728b80820a9d11a18589afc289f57b7b2
    </div>
  );
}

export default App;
