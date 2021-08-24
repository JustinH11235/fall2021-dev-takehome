import React, { useState } from 'react'
import TodoCard, { TodoItem } from './TodoCard'
import InputForm from './InputForm'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap'
/**
 * Thank you for applying to Bits of Good. You are free to add/delete/modify any 
 * parts of this project. That includes changing the types.ts, creating css files, 
 * modifying import statements, using contexts, etc. We do recommend to keep it simple. 
 * You will not be judged based on complexity. We also recommend using 
 * multiple components instead of coding everything on this file :)
 * 
 * Have fun! Please reach out to hello@bitsofgood.org or wkim330@gatech.edu if you
 * have any questions!
 * 
 * Bits of Good Engineering Team
 * 
 */

export default function TodoList() {
  const [ todos, setTodos ] = useState<TodoItem[]>([]);
  
  const [ dateSort, setDateSort ] = useState<boolean>(false);
  const [ completedSort, setCompletedSort ] = useState<boolean>(false);

  const handleCheck = (index: number) => {
    const newTodos = [...todos];

    newTodos[index].completed = !todos[index].completed

    setTodos(newTodos);
  };

  const handleDateSort = () => {
    setDateSort(!dateSort);
  }

  const handleCompletedSort = () => {
    setCompletedSort(!completedSort);
  }

  const handleTodoItemAdd = (title: string, dueDate: Date, tagList: string[]) => {
    setTodos(todos.concat([{ title, dueDate, tagList, completed: false }]));
  }

  var sortFunc;
  if (dateSort && completedSort) {
    sortFunc = (first: TodoItem, second: TodoItem) => 
      (first.completed ? 1 : 0) - (second.completed ? 1 : 0) ||
          first.dueDate.getTime() - second.dueDate.getTime();
  } else if (completedSort) {
    sortFunc =  (first: TodoItem, second: TodoItem) => 
      (first.completed ? 1 : 0) - (second.completed ? 1 : 0);
  } else if (dateSort) {
    sortFunc =  (first: TodoItem, second: TodoItem) => 
      first.dueDate.getTime() - second.dueDate.getTime();
  } else {
    sortFunc =  (first: TodoItem, second: TodoItem) => 0;
  }

  return (
    <div>
      <h3>Todo List!</h3>


      <InputForm handleTodoItemAdd={handleTodoItemAdd} />

      <br />

      <Button id="dateSort" onClick={handleDateSort} value="test" variant="primary" >Sort by Date</Button>
      <br />
      <Button id="completeSort" onClick={handleCompletedSort} value="test" variant="primary">Sort by Completed</Button>

      <br /><br />

      <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center'}}>
        {[...todos].sort(sortFunc).map((todo, index) => {
          return (
            <Row><TodoCard todo={todo} handleCheck={() => handleCheck(index)} key={index} /></Row>
          );
        })}
      </div>
    </div>
  )
}
