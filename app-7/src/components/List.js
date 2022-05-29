import React, { useState } from "react";
import Todo from "./Todo";

const List = (props) => {
  const list = props.tasks.map((element, index) => {
    return <Todo task={element} key={index}></Todo>;
  });
  return <div>{list}</div>;
};

export default List;
