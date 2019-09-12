import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = {};

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/api/todos')
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      } )
      .then(res => setTodos(res))
      .catch(err => console.error(err))
  }, []);

  const handleClick = () => {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: 'Todo from fontend'})
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ul>
          { todos.map(todo => 
            <li key={todo.id}>{todo.id} - {todo.title}</li>
          ) }
        </ul>
        <button onClick={handleClick}>POST</button>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
