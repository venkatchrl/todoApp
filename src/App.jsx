import { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoContainer from './components/TodoContainer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoFilter from './components/TodoFilter'


function App() {
  const [todo, setTodo]=useState('');
  const [todoList, setTodoList]=useState([]);

  useEffect(() => {
    if (todo) {
      createTaskList();
    }
  }, [todo]);

  const createTaskList = () => {
    const updatedTodo = [...todoList, todo];
    setTodoList(updatedTodo);
  };

  const completeTask = id =>{
    const updatedTodo = todoList.map(todo => {
      if(todo.id == id){
        todo.active == !todo.active
      }
      return todo;
    })
    setTodoList(updatedTodo);
  }

  const  deleteTask = id => {
    const updatedTodo =todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodo);
  }

  return(
    <div className='App'>
      <h1>MY TODO LIST</h1>

      {/* todoInput component */}
      <TodoInput addTodo={setTodo}/>
      <h2>Tasks Remaining : {todoList.length}</h2>

      {/* todoContainer component */}
      <TodoContainer 
        todoList ={todoList}
        completeTask ={completeTask}
        deleteTask = {deleteTask}
      />

      {/* todoFilter component */}
      <TodoFilter />
    </div>
  )
}

export default App;