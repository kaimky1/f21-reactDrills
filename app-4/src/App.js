import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('')

  const[password, setPassword] = useState('')
  
  const changeHandler = (e) => {
    setUsername(e.target.value)
  }
  
  const changeHandler2 = (e) => {
    setPassword(e.target.value)
  }

  const loginHandler = () => {
    alert(`Username: ${username} Password: ${password}`)
  }

  return (
    <div className="App">
      <form onSubmit={loginHandler}>
        <input type="text"onChange={changeHandler} name="username"></input>
        <input type="text"onChange={changeHandler2} name="password"></input>
        <button> Login </button>
      </form>
    </div>
  );
}

export default App;
