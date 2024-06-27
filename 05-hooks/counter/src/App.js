import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    let counterVar = counter;
    if (counterVar < 20) {
      counterVar++;
    }
    setCounter(counterVar);
    console.log("Add btn clicked", counterVar);
  };

  const decreaseValue = () => {
    let counterVar = counter;
    if (counterVar > 0) {
      counterVar--;
    }
    setCounter(counterVar);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  );
}

export default App;
