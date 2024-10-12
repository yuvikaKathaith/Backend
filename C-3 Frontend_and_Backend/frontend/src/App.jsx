import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
        setJokes(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  });
  
  return (
    <>
        <h2>Chai aur fullstack</h2>
        <h1>Jokes: {jokes.length}</h1>
        {
          jokes.map((joke) => (
            <div key={joke.id}>
              <h2>{joke.title}</h2>
              <p>{joke.content}</p>
            </div>
          ))
        }
    </>
  )
}

export default App
