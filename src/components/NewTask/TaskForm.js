import { useState } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = (props) => {
  const [input, setInput] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    setInput('');

    if (input.trim().length > 0) {
      props.onEnterTask(input);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type='text'
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
