import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const displayTasks = tasks.map((element, index) => {
    return <Todo task={element} key={index} />
  })

  return (
      //Confused about why setTasks can take in two variables.
    <div className="App">
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => setTasks([...tasks, input])}>Add Task</button>
      {displayTasks}
      test
    </div>
  );
}

export default App;
