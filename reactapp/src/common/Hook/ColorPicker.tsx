import React, { useState, type ChangeEvent } from "react";

const ColorPicker = () => {
  const [color, setcolor] = useState("#FFFFFF");

  const setcolorFunc = (event: ChangeEvent<HTMLInputElement>) => {
    setcolor(event.target.value);
  };

  return (
    <div>
      <div style={{ backgroundColor: color }}>
        <p>Selected color # {color}</p>
      </div>
      <div>
        <input type="color" name="col" onChange={setcolorFunc}></input>
      </div>
    </div>
  );
};

export default ColorPicker;
