import { useCallback, useEffect } from 'react';
import useHttp from './useHttp';
import { useTasksContext } from '../store/Tasks';

const baseUrl = process.env.REACT_APP_FIREBASE_DATABASE;
const url = `${baseUrl}/tasks.json`;
const deleteUrl = `${baseUrl}/tasks/:id.json`;

const useTasks = ({ retrieveOnLoad = false } = {}) => {
  const { setTasks, tasks } = useTasksContext();
  const { error, isLoading, call } = useHttp();

  const transform = useCallback(
    (data) => {
      if (data)
        setTasks(
          Object.entries(data).map(([id, { text }]) => ({
            id,
            text,
          }))
        );
    },
    [setTasks]
  );

  const getTasks = useCallback(async () => {
    await call({ url, transform });
  }, [call, transform]);

  const addTask = async (text) => {
    const data = await call({
      url,
      config: {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    });

    setTasks((prevTasks) => prevTasks.concat({ id: data.name, text }));
  };

  const deleteTask = async (id) => {
    await call({
      url: deleteUrl.replace(':id', id),
      config: {
        method: 'DELETE',
      },
    });

    setTasks((prev) => prev.filter(({ id: taskId }) => taskId !== id));
  };

  useEffect(() => {
    if (retrieveOnLoad) getTasks();
  }, [retrieveOnLoad, getTasks]);

  return {
    error,
    isLoading,
    tasks,
    addTask,
    getTasks,
    deleteTask,
  };
};

export default useTasks;
