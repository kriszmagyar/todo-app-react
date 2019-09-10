import React, { useState, useEffect } from 'react';

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

  return (
    <div className="App">
      <ul>
        { todos.map(todo => 
          <li key={todo.id}>{ todo.title }</li>
        ) }
      </ul>
    </div>
  );
}

export default App;
