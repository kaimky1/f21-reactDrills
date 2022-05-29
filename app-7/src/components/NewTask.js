import React, {useState} from 'react'



const NewTask = (props) => {
    const [input, setInput] = useState('')

    const buttonHandler = () => {
      props.addTask(input)
    }
  return (
    <div>
        <input type="text" onChange={(e) => setInput(e.target.value)}/>
        <button onClick={buttonHandler}>Add Task</button>
    </div>
  )
}

export default NewTask