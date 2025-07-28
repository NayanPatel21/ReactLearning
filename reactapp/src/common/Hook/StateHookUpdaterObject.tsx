import React, { useState, type ChangeEvent } from "react";

const StateHookUpdaterObject = () => {
  const [car, setcar] = useState({
    year: 2024,
    model: "Ford",
    make: "Mustang",
  });

  function updateyear(event: ChangeEvent<HTMLInputElement>) {
    setcar((car) => ({ ...car, year: parseInt(event.target.value) }));
  }

  function updatemodel(event: ChangeEvent<HTMLInputElement>) {
    setcar((car) => ({ ...car, model: event.target.value }));
  }

  function updatemake(event: ChangeEvent<HTMLInputElement>) {
    setcar((car) => ({ ...car, make: event.target.value }));
  }

  return (
    <div>
      <h2>
        Car Model - {car.model} , Make - {car.make} , year - {car.year}
      </h2>
      <br></br>
      <input onChange={updatemodel} type="text"></input>
      <br></br>
      <input onChange={updatemake} type="text"></input>
      <br></br>
      <input onChange={updateyear} type="number"></input>
    </div>
  );
};

export default StateHookUpdaterObject;
