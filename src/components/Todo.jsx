import  { useState } from "react";

const Todo = ({todo, completeTask, deleteTask}) => {


  const deleteTodo = () => {
    deleteTask(todo.id);
  };

  const changeStatus = () => {
    completeTask(todo.id);
  };


  return (
    <div>
        <li>
          <input type="checkbox" onClick={changeStatus} />
          <span>{todo.name}</span>
          <button onClick={deleteTodo}>x</button>
        </li>
     
    </div>
  )}

export default Todo;