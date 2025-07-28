import React, { useState } from "react";

const StateHookUpdater = () => {
  const [number, setNumber] = useState(0);

  function incrementNumber() {
    setNumber((number) => number + 1);
    setNumber((n) => n + 1);
  }

  function decrementNumber() {
    setNumber((number) => number - 1);
    setNumber((n) => n - 1);
  }

  const resetNumber = () => setNumber(0);

  return (
    <div className="State-hook">
      <h2 className="State-hook-number">{number}</h2>
      <button onClick={incrementNumber} className="State-hook-button">
        {" "}
        Increment Number
      </button>
      <button onClick={decrementNumber} className="State-hook-button">
        {" "}
        Decrement Number
      </button>
      <button onClick={resetNumber} className="State-hook-button">
        {" "}
        reset Number
      </button>
    </div>
  );
};

export default StateHookUpdater;
