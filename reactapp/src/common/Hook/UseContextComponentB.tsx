import UseContextComponentC from "./UseContextComponentC";

const UseContextComponentB = ({ user }: { user: string }) => {
  return (
    <>
      <div className="box">
        {" "}
        <h1>Component B</h1>
        <UseContextComponentC user={user}></UseContextComponentC>{" "}
      </div>
    </>
  );
};

export default UseContextComponentB;
