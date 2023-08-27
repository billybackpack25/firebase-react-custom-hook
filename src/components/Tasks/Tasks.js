import Section from '../UI/Section';
import TaskItem from './TaskItem';
import classes from './Tasks.module.css';

const Tasks = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  const deleteTask = (id) => (
    <button className={classes.delete} onClick={() => props.onDeleteTask(id)}>
      (delete)
    </button>
  );

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map(({ id, text }) => (
          <TaskItem key={id} id={id}>
            {text} {deleteTask(id)}
          </TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading tasks...';
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
