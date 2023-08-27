import { createContext, useContext, useState } from 'react';

const initialState = {
  tasks: [],
  setTasks: () => null,
};

const TasksContext = createContext(initialState);

export const useTasksContext = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
