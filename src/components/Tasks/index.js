import React from 'react';
import useTasks from '../../hooks/useTasks';
import NewTask from '../NewTask/NewTask';
import Tasks from './Tasks';

const TaskApp = () => {
  const { isLoading, error, tasks, addTask, getTasks, deleteTask } = useTasks({
    retrieveOnLoad: true,
  });

  return (
    <>
      <NewTask onAddTask={addTask} loading={isLoading} error={error} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={getTasks}
        onDeleteTask={deleteTask}
      />
    </>
  );
};

export default TaskApp;
