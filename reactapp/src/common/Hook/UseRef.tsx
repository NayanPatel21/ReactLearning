import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [number, setNumber] = useState(0);
  const numberref = useRef(0);

  useEffect(() => {
    console.log("Clicked and render");
  });

  const btnClick = () => {
    setNumber((C) => C + 1);
  };

  const btnRefClick = () => {
    numberref.current++;
  };

  return (
    <div>
      <div className="box">
        <h1> use State {number}</h1>
        <button onClick={btnClick}>Click Me</button>
      </div>
      <br></br>
      <div className="box">
        <h1> Use Ref {numberref.current}</h1>
        <button onClick={btnRefClick}>Click Me Ref</button>
      </div>
    </div>
  );
};

export default UseRef;
