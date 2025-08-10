import { createContext } from "react";
import UseContextComponentB from "./UseContextComponentB";

export const UserContext = createContext<string>("");

const UseContextComponentA = () => {
  const user = " Nayan";
  return (
    <>
      <div className="box">
        <h1>Component A</h1>
        <h2> User : {user}</h2>
        <UserContext.Provider value={user}>
          <UseContextComponentB></UseContextComponentB>
        </UserContext.Provider>
      </div>
    </>
  );
};

export default UseContextComponentA;
