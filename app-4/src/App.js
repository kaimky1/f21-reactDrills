import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  return (
    <div className="App">
      <div>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button
          onClick={() => alert(`Username: ${username}. Password: ${password}.`)}
        >
          Log me In
        </button>
      </div>
    </div>
  );
}

export default App;
