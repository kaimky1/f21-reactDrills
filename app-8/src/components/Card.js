import React from 'react'

const Card = (props) => {
    console.log("This is the Card props", props)
  return (
    <div>
        <p>{props.post.films}</p>
    </div>
  )
}

export default Card