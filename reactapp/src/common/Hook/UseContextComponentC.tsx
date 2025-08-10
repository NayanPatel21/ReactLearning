import UseContextComponentD from "./UseContextComponentD";

const UseContextComponentC = () => {
  return (
    <>
      <div className="box">
        {" "}
        <h1>Component C</h1>
        <UseContextComponentD></UseContextComponentD>
      </div>
    </>
  );
};

export default UseContextComponentC;
