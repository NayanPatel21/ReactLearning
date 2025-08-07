import React, { useEffect, useState } from "react";
const UseEffectIncrement = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);

    return () => {
      console.log("cleanup count : " + count);
    };
  }, [count]);

  return (
    <div>
      <p>Use state and use Effect</p> <br></br>
      <p> Count : {count}</p> <br></br>
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
      </div>
    </div>
  );
};

export default UseEffectIncrement;
