import React, {useState} from 'react';
import './App.css';
import NewTask from './components/NewTask';

function App() {
  const [tasks, setTasks] = useState([])

const addTaskHandler = (task) => {
  console.log(task)
  setTasks(...tasks, task)
  console.log(tasks)
}

  return (
    <div className="App">
      <NewTask addTask={addTaskHandler}></NewTask>
    </div>
  );
}

export default App;
