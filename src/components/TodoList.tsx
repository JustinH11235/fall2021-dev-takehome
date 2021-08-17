import React, { useState } from 'react'
import TodoCard, { TodoItem } from './TodoCard'
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
  const [ todos, setTodos ] = useState<TodoItem[]>([{
    title: 'Testtitle',
    dueDate: new Date(),
    tagList: ['tag1', 'tag2'],
    completed: false
  }, {
    title: 'Testtitle2',
    dueDate: new Date(),
    tagList: ['tag1', 'tag2'],
    completed: false
  }]);

  const handleCheck = (index: number) => {
    const newTodos = [...todos];

    newTodos[index].completed = !todos[index].completed

    setTodos(newTodos);
  };

  return (
    <div>
      <h3>Todo List!</h3>

      <form>
        <label htmlFor="titleInput">Title: </label>
        <br />
        <input id="titleInput" type="text" />

        <br />
        <br />

        <p>Tags: </p>
        <label htmlFor="createTagInput">Create New Tag: </label>
        <input id="createTagInput" type="text" />

        <br />
        List current tags here (this tag list will be part of state)

        <br />
        <br />

        <label htmlFor="dueDateInput">Due Date: </label>
        <br />
        <input id="dueDateInput" type="date" />

        <br />
        <br />

        <button onClick={() => console.log('clicked, change me')}>
          Add
        </button>
      </form>
        
      {todos.map((todo, index) => <TodoCard todo={todo} handleCheck={() => handleCheck(index)} key={index} />)}
    </div>
  )
}
