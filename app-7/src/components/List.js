import React, { useState } from "react";
import Todo from "./Todo";

const List = (props) => {
  console.log("This is the props that should be an array", props.tasks)
  //why are we setting the key as the index? when i try to console.log it I get the error, Todo: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop.
  const list = props.tasks.map((element, index) => { 
    return <Todo task={element} key={index}></Todo>;
  });
  return <div>{list}</div>;
};

export default List;
