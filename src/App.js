import React, { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import ListTodo from './components/ListTodo/ListTodo';


function App() {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem('todo')) || [])

  useEffect(() => {

    localStorage.setItem('todo', JSON.stringify(todo))

  }, [todo])
  console.log(todo);

  return (
    <div className='App'>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodo todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
