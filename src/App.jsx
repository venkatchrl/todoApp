import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoContainer from './components/TodoContainer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoFilter from './components/TodoFilter'


function App() {
  const [todo, setTodo]=useState('');

  return(
    <div className='App'>
      <h1>MY TODO LIST</h1>
      {/* todoInput component */}
      <TodoInput addTodo={setTodo}/>
      <h2>Tasks Remaining</h2>
      {/* todoContainer component */}
      <TodoContainer />
      {/* todoFilter component */}
      <TodoFilter />
    </div>
  )
}

export default App
