import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([
    "spaghetti",
    "ice cream",
    "sushi",
    "bologna",
    "cheese",
    "spa",
  ]);

  const [filtered, setFiltered] = useState("");

  const array = list
    .filter((element) => {
      return element.includes(filtered);
    })
    .map((element, index) => {
      console.log(element, index);
      return <h1 key={index}>{element}</h1>;
    });

  const changeHandler = (e) => {
    setFiltered(e.target.value);
  };
  return (
    <div className="App">
      <input onChange={changeHandler}></input>
      {array}
    </div>
  );
}

export default App;
