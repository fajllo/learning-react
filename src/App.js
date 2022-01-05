import React, { Component } from "react";
import Lottery from "./Lottery";

function App() {
  return (
    <div>
      <Lottery />
      <Lottery title="mini lottery" maxNum={10} numBals={3} />
    </div>
  );
}

export default App;
