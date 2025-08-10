import UseContextComponentD from "./UseContextComponentD";

const UseContextComponentC = ({ user }: { user: string }) => {
  return (
    <>
      <div className="box">
        {" "}
        <h1>Component C</h1>
        <UseContextComponentD user={user}></UseContextComponentD>
      </div>
    </>
  );
};

export default UseContextComponentC;
