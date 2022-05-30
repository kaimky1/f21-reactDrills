import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

const baseURL = "https://swapi.dev/api/people/1"

function App() {
  const[post, setPost] = useState(null)
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setPost(response.data)
    })
  }, [])

  if (!post) return null;
  
  const array = post.films.map((element, index) => {
    return <h1>Film: {element}</h1>
  })

  return (
    <div className="App">
      <h1>{post.name}</h1>
      {array}
    </div>
  );
}

export default App;
