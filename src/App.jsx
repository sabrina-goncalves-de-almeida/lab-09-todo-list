import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskList from './components/TaskList';
import {TaskProvider} from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Header/>
        <TaskList/>
      </div>
    </TaskProvider>
    
  );
}

export default App;
