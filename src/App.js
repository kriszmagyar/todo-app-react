import React, { useState } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Nav from './components/Nav';
import TodoList from './todos/TodoList';
import AddButton from './components/AddButton';
import TodoDialog from './todos/TodoDialog';

export default function App() {

  const [open, setOpen] = useState(false);

  const handleDelete = (id) => {
    console.log("Deleting: " + id);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Nav />
        <Container>
          <TodoList handleDelete={handleDelete} />
          <AddButton handleClick={() => setOpen(true)} />
          <TodoDialog open={open} handleClose={() => setOpen(false)} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}