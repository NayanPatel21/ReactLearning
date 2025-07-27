import React, { useState } from "react";

const UseStateDemo = () => {
  const [name, setName] = useState("Guest");
  const [isEmployee, setEmployeestate] = useState(false);
  const [age, setAge] = useState(0);

  const updateName = () => setName("nayan Patel");
  const updateIsEmployee = () => setEmployeestate(!isEmployee);
  const updateAge = () => setAge(age + 1);

  const nameHtml = (
    <div>
      <p> Name : {name}</p>
      <button onClick={updateName}> Update Name</button>
    </div>
  );
  const isEmployeeHtml = (
    <div>
      <p> IsEmaployee : {isEmployee ? "Yes" : "No"}</p>
      <button onClick={updateIsEmployee}> Update Employee Status</button>
    </div>
  );

  const AgeHtml = (
    <div>
      <p> Age : {age}</p>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
  return (
    <>
      UseStateDemo
      <br></br>
      <br></br>
      {nameHtml}
      <br></br>
      <br></br>
      {AgeHtml}
      <br></br>
      <br></br>
      {isEmployeeHtml}
    </>
  );
};

export default UseStateDemo;
