import React, { useState } from "react";
import Seconds from "./Seconds";

const App = () => {
  //useState expects an initial value=> returns state/function to modify the state
  //array destructuring to get the variable(piece of state) and its value and then, get the changing function

  const [showTimer, setShowTimer] = useState(false);

  //const { setShowTimer } = this;
  //const { showTimer } = this.state;
  return (
    <div className="App">
      <h1>Learn hooks</h1>
      <button onClick={() => setShowTimer(!showTimer)}>
        {!showTimer ? "Start chronometer" : "Stop chronometer"}
      </button>
      {!showTimer ? (
        <div className="alert alert-danger">Off</div>
      ) : (
        <div className="alert alert-success">
          Active! <Seconds /> seconds
        </div>
      )}
    </div>
  );
};

export default App;
