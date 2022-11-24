import React, { useState } from 'react'
import './App.css';
import CreateTodoForm from './components/CreateTodoForm'
import AllTodos from './components/AllTodos'
import AllTasks from './components/AllTasks'

function App() {
  // declaring global states
  const [todo, settodo] = useState("")
  const [tasks, settasks] = useState("")

  return (
    <>
      <CreateTodoForm todo={todo} settodo={settodo} />
      <div className="main flex flex-row justify-evenly">
        <AllTodos todo={todo} tasks={tasks} settasks={settasks} />
        <AllTasks tasks={tasks} settasks={settasks} />
      </div>
    </>
  );
}

export default App;
