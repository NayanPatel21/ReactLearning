import { useContext } from "react";
import { UserContext } from "./UseContextComponentA.tsx";
const UseContextComponentD = () => {
  ///{ user }: { user: string }
  const user = useContext(UserContext);
  return (
    <>
      <div className="box">
        {" "}
        <h1>Component D</h1>
        <h2> User : {user}</h2>
      </div>
    </>
  );
};

export default UseContextComponentD;
