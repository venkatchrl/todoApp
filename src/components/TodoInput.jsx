import { useState } from "react";

function TodoInput({addTodo}){

const [todo, setTodo]=useState('');
const[count, setCount]= useState(0);

function userInput(e){
    const value = e.target.value;
    if(value !== ""){
    setTodo(e.target.value);
    }
}

function onSubmitHandler(e){
    e.preventDefault();
    if(todo){
        let todoItem ={
            id : count,
            name : todo,
            active : true
        };
        addTodo(todoItem);
        setCount(count+1);
        setTodo('');
    }
}


    return(
        <div>
        <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="Enter your tasks" 
            onChange={userInput}
            value={todo}>
            </input>
            </form>
        </div>

    )
}

export default TodoInput