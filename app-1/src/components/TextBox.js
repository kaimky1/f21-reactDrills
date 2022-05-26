import React, {useState} from 'react'

import DisplayText from './DisplayText'


const Textbox = () => {
  const[input, setInput] = useState('')
  
  const changeHandler = (e) => {
      setInput(e.target.value)
  }
    return (
      <div>
          Textbox
          <input type="text" onChange={(e) => changeHandler(e)}></input>
          <h1>{input}</h1>
      </div>
  )
}

export default Textbox