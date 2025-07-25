function Button() {
  const inlinecss = {
    color: "white",
    "background-color": "hsl(200,100%,50%)",
    "border-radius": "5px",
    padding: "10px 20px",
    border: "none",
  };
  return (
    <>
      <button className="buttonexternal"> Click Me</button>
      <br></br>
      <br></br>
      <button style={inlinecss}> Click Me inline css</button>
    </>
  );
}
export default Button;
