import { useEffect, useState } from "react";

const UseEffectEventListner = () => {
  const [Height, setHeight] = useState(window.innerHeight);
  const [Width, setWidth] = useState(window.innerWidth);

  const handleResize = (): void => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("called");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("called - removed");
    };
  }, []);

  return (
    <>
      <h1>Height : {Height}</h1>
      <br></br>
      <h1>width : {Width}</h1>
      <br></br>
    </>
  );
};

export default UseEffectEventListner;
