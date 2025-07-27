import React from "react";

function ButtonEvent() {
  const voidclick = () => console.log("Click Me");
  const voidclickname = (name: string) => console.log("Click Me : " + name);
  const voidclickEvent = (e: React.MouseEvent<HTMLButtonElement>) =>
    console.log(e);
  return (
    <>
      <button onClick={voidclick}> Click Me</button> <br></br> <br></br>
      <button onClick={() => voidclickname("Nayan")}> Click Me</button>{" "}
      <br></br> <br></br>
      <button onClick={voidclickEvent}> Click Me</button>
    </>
  );
}
export default ButtonEvent;
