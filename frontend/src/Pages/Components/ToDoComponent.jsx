import React from 'react'
import './ToDoComponent.css'

const ToDoComponent = (todo, ...props) => {
  const thisTodo = todo.todo
  const handleClick = () =>{
    thisTodo.isComplete = !thisTodo.isComplete
    console.log("Clicked:" + thisTodo.isComplete);
  }
  return (
    <div className="todo">
      <span className="task">{thisTodo.task}</span>
      <div className={thisTodo.isComplete ? "isComplete complete" : "isComplete  incomplete"} onClick={handleClick}></div>
      <div className="border"></div>
    </div>
  )
}

export default ToDoComponent
