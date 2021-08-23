import React, { useState } from 'react'
import TodoCard, { TodoItem } from './TodoCard'
import InputForm from './InputForm'
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
  const [ todos, setTodos ] = useState<TodoItem[]>([{ // temporary initialization
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

  const handleTodoItemAdd = (title: string, dueDate: Date, tagList: string[]) => {
    setTodos(todos.concat([{ title, dueDate, tagList, completed: false }]));
  }

  return (
    <div>
      <h3>Todo List!</h3>


      <InputForm handleTodoItemAdd={handleTodoItemAdd} />

        
      {todos.map((todo, index) => <TodoCard todo={todo} handleCheck={() => handleCheck(index)} key={index} />)}
    </div>
  )
}
