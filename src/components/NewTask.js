import React, {useState} from 'react'



const NewTask = (props) => {
    
    const [input, setInput] = useState('')
  return (
    <div>
        <input type="text" onChange={(e) => setInput(e.target.value)}/>
        <button onClick={() => setTasks([...tasks, input])}>Add Task</button>
    </div>
  )
}

export default NewTask