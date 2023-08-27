// import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => (
  <Section>
    <TaskForm onEnterTask={props.onAddTask} loading={props.isLoading} />
    {props.error && <p>{props.error}</p>}
  </Section>
);

export default NewTask;
