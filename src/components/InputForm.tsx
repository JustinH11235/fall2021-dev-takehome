import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

// get today's date
var defaultDate = new Date(0);

interface InputFormProps {
  handleTodoItemAdd: (title: string, dueDate: Date, tagList: string[]) => void;
}
const InputForm: React.FC<InputFormProps> = ({handleTodoItemAdd}) => {
  const [ tags, setTags ] = useState<string[]>([]);
  const [ title, setTitle ] = useState<string>('');
  const [ date, setDate ] = useState<Date>(defaultDate);
  
  // input to add new tags
  const [inputTag, setInputTag] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value.replace(/-/g, '/')));
  }

  const handleInputTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTag(e.target.value);
  }

  const handleAddTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    // validate input
    if (!inputTag.trim()) {
      return;
    }

    setTags(tags.concat(inputTag));

    // clear input
    setInputTag('');
  }

  const handleTagDelete = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    const newTags = tags.filter((_, ind) => ind !== index);
    setTags(newTags);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // validate inputs
    if (!title || date === defaultDate) {
      return;
    }

    handleTodoItemAdd(title, date, tags);

    // clear inputs
    setTitle('');
    setDate(defaultDate);
    setTags([]);

    setInputTag('');
  }

  return (
    <div>

      <label htmlFor="titleInput">Title: </label>
      <br />
      <input onChange={handleTitleChange} id="titleInput" type="text" value={title} />

      <br />
      <br />

      <p>Tags: </p>
      <label htmlFor="createTagInput">Create New Tag: </label>
      <input id="createTagInput" type="text" value={inputTag} onChange={handleInputTagChange} />
      <button onClick={handleAddTag}>
        Add Tag
      </button>

      <br />

      {/* taglist button styles from: https://react-bootstrap.github.io/components/buttons/ */}
      {tags.map((tag, index) => {
        return <Button onClick={(e) => handleTagDelete(e, index)} key={index} variant="primary">{tag}</Button>
      })}

      <br />

      <label htmlFor="dueDateInput">Due Date: </label>
      <br />
      <input onChange={handleDateChange} id="dueDateInput" type="date" value={date?.toLocaleDateString()} />

      <br />
      <br />

      <button onClick={handleSubmit} type="submit">
        Add
      </button>

    </div>
  )
}

export default InputForm;
