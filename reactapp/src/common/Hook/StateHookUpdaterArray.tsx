import React, { useState, type ChangeEvent } from "react";

const StateHookUpdaterArray = () => {
  const [food, setfood] = useState(["orange", "banana", "mango"]);
  const [inputValue, setInputValue] = useState<string>("");

  function AddFood() {
    if (inputValue.trim() === "") return;
    setfood((prev) => [...prev, inputValue.trim()]);
    setInputValue("");
  }

  function removeFood(index: number) {
    setfood(food.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2> Food Item</h2>
      <ul>
        {food.map((f, index) => (
          <li key={index} onClick={() => removeFood(index)}>
            {" "}
            {f}
          </li>
        ))}
      </ul>
      <br></br>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={AddFood}>Add Food Item</button>
    </div>
  );
};

export default StateHookUpdaterArray;
