import React, { useState } from "react";

const StateHookUpdaterToDoList = () => {
  const [task, setTasks] = useState(["walk up", "breakfast", "work"]);
  const [newTask, setnewValue] = useState<string>("");

  function AddTask() {
    if (newTask.trim() === "") return;
    setTasks((prev) => [...prev, newTask.trim()]);
    setnewValue("");
  }

  function upTask(index: number) {
    if (index > 0) {
      const updatedtask = [...task];
      [updatedtask[index], updatedtask[index - 1]] = [
        updatedtask[index - 1],
        updatedtask[index],
      ];
      setTasks(updatedtask);
    }
  }

  function downTask(index: number) {
    if (index < task.length - 1) {
      const updatedtask = [...task];
      [updatedtask[index], updatedtask[index + 1]] = [
        updatedtask[index + 1],
        updatedtask[index],
      ];
      setTasks(updatedtask);
    }
  }

  function removeTask(index: number) {
    setTasks(task.filter((_, i) => i !== index));
    // setfood(food.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2> To Do List</h2>
      <ul>
        {task.map((f, index) => (
          <li key={index}>
            {f}
            <button onClick={() => removeTask(index)}>Remove</button>
            <button onClick={() => upTask(index)}>up</button>
            <button onClick={() => downTask(index)}>downTask</button>
          </li>
        ))}
      </ul>
      <br></br>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setnewValue(e.target.value)}
      ></input>
      <button onClick={AddTask}>Add Task Item</button>
    </div>
  );
};

export default StateHookUpdaterToDoList;
