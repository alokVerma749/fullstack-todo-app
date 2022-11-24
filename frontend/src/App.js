import React, { useState } from 'react'
import './App.css';
import CreateTodoForm from './components/CreateTodoForm'
import AllTodos from './components/AllTodos'

function App() {
  // declaring global states
  const [todo, settodo] = useState("")

  return (
    <>
      <CreateTodoForm todo={todo} settodo={settodo} />
      <AllTodos todo={todo} />
    </>
  );
}

export default App;
