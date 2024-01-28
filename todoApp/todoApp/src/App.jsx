import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    // console.log(event.target.value)
    let EventName=event.target.name;
    let targetName=EventName==="completed"?event.target.checked:event.target.value;

    setFormState({
      ...formState,

      [EventName] : targetName
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event)
    setTasks([
      ...tasks,
      formState
    ])

    setFormState({
      task: "", // string
      completed: false, // boolean
      taskAssignedTo: "", // string
    })
    
    
  }


  function handelDelete(index){
    let deletedArray=[...tasks];
    deletedArray.splice(index,1)
    setTasks(deletedArray)
  }



  function handelToggle(index){
    let toggledArray=[...tasks];
    toggledArray[index].completed = !toggledArray[index].completed;
    setTasks(toggledArray)
  }


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" value={formState.task} type="text" placeholder="Add Task" onChange={handleChange} />
          <label>
            Completed:
            <input name="completed" value={formState.completed} type="checkbox"  onChange={handleChange}/>
          </label>
          <select value={formState.taskAssignedTo} name="taskAssignedTo" onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit" onClick={handleSubmit}>Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} handelDelete={()=>handelDelete(index)} handelToggle={()=>handelToggle(index)} />
      ))}
    </>
  );
}

export default App;
