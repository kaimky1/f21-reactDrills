import React from 'react'

const Todo = (props) => {
  console.log("This is the props from the Todo file", props)
  console.log(props.key)
  return (
    <div>{props.task}</div>
  )
}

export default Todo