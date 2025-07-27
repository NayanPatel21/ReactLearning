import React, { useState, type ChangeEvent } from "react";

const OnChangeHook = () => {
  const [inputVal, setInputval] = useState("");
  const [textAreaVal, settextAreaval] = useState("");
  const [radioVal, setRadioval] = useState("PickUp");
  const [dropdownVal, setDropDownval] = useState("");

  const settextAreaValFunc = (event: ChangeEvent<HTMLTextAreaElement>) => {
    settextAreaval(event.target.value);
  };

  const setRadioValFunc = (event: ChangeEvent<HTMLInputElement>) => {
    setRadioval(event.target.value);
  };

  const setInputValFunc = (event: ChangeEvent<HTMLInputElement>) => {
    setInputval(event.target.value);
  };

  const setDropDownValFunc = (event: ChangeEvent<HTMLSelectElement>) => {
    setDropDownval(event.target.value);
  };

  return (
    <div>
      <input type="number" value={inputVal} onChange={setInputValFunc}></input>
      <br></br>
      <p> {inputVal}</p>
      <br></br>

      <textarea value={textAreaVal} onChange={settextAreaValFunc}></textarea>
      <br></br>
      <p> {textAreaVal}</p>
      <br></br>

      <select value={dropdownVal} onChange={setDropDownValFunc}>
        <option value="Visa"> visa</option>
        <option value="MasterCard"> Master Card</option>
        <option value="Rupay"> Rupay</option>
      </select>
      <br></br>
      <p> {dropdownVal}</p>
      <br></br>
      <label>
        <input
          type="radio"
          value="PickUp"
          name="choice"
          onChange={setRadioValFunc}
          checked={radioVal === "PickUp"}
        />
        Pick Up Value
      </label>

      <br></br>
      <label>
        <input
          type="radio"
          value="Drop"
          name="choice"
          onChange={setRadioValFunc}
          checked={radioVal === "Drop"}
        />
        Drop
      </label>

      <br></br>
      <p> {radioVal}</p>
      <br></br>
    </div>
  );
};

export default OnChangeHook;
