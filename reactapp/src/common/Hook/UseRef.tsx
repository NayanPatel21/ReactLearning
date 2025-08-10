import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [number, setNumber] = useState(0);
  const numberref = useRef(0);

  const inputRef1 = useRef<HTMLInputElement | null>(null);
  const inputRef2 = useRef<HTMLInputElement | null>(null);
  const inputRef3 = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log("Clicked and render");
  });

  const btnClick = () => {
    setNumber((C) => C + 1);
  };

  const btnRefClick = () => {
    numberref.current++;
  };

  const btnRefInputclick1 = () => {
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
    inputRef1.current?.focus();
  };

  const btnRefInputclick2 = () => {
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
    inputRef2.current?.focus();
  };

  const btnRefInputclick3 = () => {
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
    inputRef3.current?.focus();
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
      </div>{" "}
      <br></br>
      <div className="box">
        <h1> Use Ref Input</h1>
        <div className="box">
          <input ref={inputRef1} type="text"></input>&nbsp;&nbsp;
          <button onClick={btnRefInputclick1}>Click Me button Ref1</button>
        </div>
        <div className="box">
          <input ref={inputRef2} type="text"></input>&nbsp;&nbsp;
          <button onClick={btnRefInputclick2}>Click Me button Ref2</button>
        </div>
        <div className="box">
          <input ref={inputRef3} type="text"></input>&nbsp;&nbsp;
          <button onClick={btnRefInputclick3}>Click Me button Ref3</button>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
