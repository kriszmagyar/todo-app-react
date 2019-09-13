import React, { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Nav from './components/Nav';
import TodoList from './todos/TodoList';
import AddButton from './components/AddButton';

export default function App() {

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

  const handleDelete = (id) => {
    console.log("Deleting: " + id);
  }

  const handleEdit = (id) => {
    console.log("Editing: " + id);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Nav />
        <Container>
          <TodoList todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} />
          <AddButton handleClick={handleClick} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}