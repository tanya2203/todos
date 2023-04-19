// import logo from './logo.svg';
// import './App.css';
// import { TodoContext } from './context/TodoContext';
// import { Container } from 'reactstrap';
// import { useReducer } from 'react';
// import { TodoReducer } from './context/TodoReducer';

// function App() {
// const[Todos,dispatch]=useReducer(TodoReducer,[])

//   return (
//     <TodoContext.Provider value={{Todos,dispatch}}>
//     <Container fluid>
// <h1> todo app</h1>
//     </Container>

// </TodoContext.Provider>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import { TodoContext } from './context/TodoContext';
import { Container } from 'reactstrap';
import { useReducer } from 'react';
import { TodoReducer } from './context/TodoReducer';
import {TodoForm}from './components/TodoForm';

function App() {
  const [Todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={{ Todos, dispatch }}>
      <Container fluid>
        <h1>Todo App</h1>
<TodoForm/>
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
