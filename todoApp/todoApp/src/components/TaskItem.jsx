function TaskItem({item,index,handelDelete,handelToggle}) {
    return <div key={index}>
        <p>{item.task}</p>
        <button onClick={handelToggle}>{item.completed?"Yes":"No"}</button>
        <p>{item.taskAssignedTo}</p>
        <button onClick={handelDelete}>Delete</button>
    </div>;
  }
  
  export default TaskItem;