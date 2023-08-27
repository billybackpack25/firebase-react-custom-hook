import TaskApp from './components/Tasks';
import { TasksProvider } from './store/Tasks';

function App() {
  const checkEnv = () => {
    if (!process.env.REACT_APP_FIREBASE_DATABASE)
      alert("Don't forget to set your REACT_APP_FIREBASE_DATABASE url env");
  };

  checkEnv();

  return (
    <TasksProvider>
      <TaskApp />
    </TasksProvider>
  );
}

export default App;
