import React, { useState, type ChangeEvent } from "react";

const StateHookUpdaterArrayInObject = () => {
  type Car = { years: number; makes: string; models: string };

  const [year, setYear] = useState(new Date().getFullYear());
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [car, setcar] = useState<Car[]>([]);

  function updateyear(event: ChangeEvent<HTMLInputElement>) {
    setYear(parseInt(event.target.value));
  }

  function updatemodel(event: ChangeEvent<HTMLInputElement>) {
    setModel(event.target.value);
  }

  function updatemake(event: ChangeEvent<HTMLInputElement>) {
    setMake(event.target.value);
  }

  function Addcar() {
    const newCar = {
      years: year,
      models: model,
      makes: make,
    };
    setcar((prevCars) => [...prevCars, newCar]);
  }

  function removeCar(index: number) {
    setcar(car.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2> car Item</h2>

      <ul>
        {car.map((f, index) => (
          <li key={index} onClick={() => removeCar(index)}>
            {f.years} - {f.makes} - {f.models}
          </li>
        ))}
      </ul>
      <br></br>
      <p>Year </p>
      <input type="number" value={year} onChange={updateyear}></input>

      <br></br>
      <p>make </p>
      <input type="text" value={make} onChange={updatemake}></input>

      <br></br>
      <p>Model </p>
      <input type="text" value={model} onChange={updatemodel}></input>
      <br></br>
      <button onClick={Addcar}>Add car Item</button>
    </div>
  );
};

export default StateHookUpdaterArrayInObject;
