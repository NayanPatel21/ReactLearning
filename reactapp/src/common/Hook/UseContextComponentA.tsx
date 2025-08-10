import UseContextComponentB from "./UseContextComponentB";

const UseContextComponentA = () => {
  const user = " Nayan";
  return (
    <>
      <div className="box">
        <h1>Component A</h1>
        <h2> User : {user}</h2>
        <UseContextComponentB user={user}></UseContextComponentB>
      </div>
    </>
  );
};

export default UseContextComponentA;
