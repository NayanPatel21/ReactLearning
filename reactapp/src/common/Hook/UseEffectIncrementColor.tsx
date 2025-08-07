import React, { useEffect, useState } from "react";
const UseEffectIncrementColor = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Green");
  useEffect(() => {
    console.log(count);
    document.title = `Count : ${count} : ${color}`;
    return () => {
      console.log("cleanup count : " + count);
    };
  }, [count, color]);

  function updatecolor() {
    setColor((c) => (c === "Green" ? "Red" : "Green"));
  }

  return (
    <div>
      <p>Use state and use Effect</p> <br></br>
      <p style={{ backgroundColor: color }}> Count : {count}</p> <br></br>
      <div>
        <button name="Increment" onClick={() => setCount((c) => c + 1)}>
          {" "}
          Increment
        </button>{" "}
        &nbsp; &nbsp;
        <button name="Decrement" onClick={() => setCount((c) => c - 1)}>
          {" "}
          Decrement
        </button>
        <br></br>
        <button name="updatecolor" onClick={updatecolor}>
          {" "}
          Update color
        </button>
      </div>
    </div>
  );
};

export default UseEffectIncrementColor;
