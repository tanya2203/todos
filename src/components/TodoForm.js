import React, { useReducer, useState } from 'react'
import {Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap" 
// import { Input } from 'reactstrap'
import { TodoContext } from '../context/TodoContext'
import { useContext } from "react"
import { v4 } from 'uuid'
import { ADD_TODO, REMOVE_TODO } from '../action.types'

import { TodoReducer } from '../context/TodoReducer'
export const TodoForm = () => {
    const[TodoInput,setTodoInput]= useState('');

    const [Todos, dispatch] = useReducer(TodoReducer, []);
    const handleSubmit=(e)=>{

e.preventDefault();
const newTodo={
    TodoInput,
    id:v4(),
}
dispatch({
    type: ADD_TODO,
    payload:newTodo
})
setTodoInput('');


    }
    const removeTodo = (id) => {
        dispatch({
          type: REMOVE_TODO,
          payload: id
        })
      }
      
  return (
    <Container>
        <Row>
            <Col>
    <Form onSubmit={handleSubmit}>
<FormGroup>
    

    <Input
    type="text"
        name="todo"
        id="todo"
        placeholder="enter todo"
        value={TodoInput} onChange={(e)=>setTodoInput(e.target.value)}
        // The code onChange={(e) => setTodoInput(e.target.value)} is a React event handler that is used to update the state of a component when an input field (such as a text box) changes its value.
// In this specific code snippet, the onChange event is attached to an Input component (which is likely a text box for entering a to-do item) and when a user types something into the text box, the event handler function is called with an event object (e) as its argument.
// The event handler function then calls the setTodoInput function, which is a state updater function for a useState hook. This function sets the state of the component to the new value entered by the user in the text box, which is obtained from the e.target.value property.
// Therefore, every time the user types something into the text box, the setTodoInput function is called with the new value, and the component's state is updated with the new value, causing the text box to display the new value entered by the user.






       

    >
            </Input>
         </FormGroup>
    <Button color='primary' type='submit'>Add todo

    </Button>


    
    



    </Form>

    <ul>
        {Todos.map((todo)=>(

<li key={todo.id}>
    
    {todo.TodoInput}
    <Button onClick={() => removeTodo(todo.id)}>remove</Button>

</li>
        )

  )}
        
    </ul>
    </Col>
    </Row>
</Container>
  )
}

export default TodoForm