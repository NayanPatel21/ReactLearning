import UseContextComponentC from "./UseContextComponentC";

const UseContextComponentB = () => {
  return (
    <>
      <div className="box">
        {" "}
        <h1>Component B</h1>
        <UseContextComponentC></UseContextComponentC>{" "}
      </div>
    </>
  );
};

export default UseContextComponentB;
