import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=2000')
        // .then(response => response.json()) // Remove pasrsing of Json
        .then(response => {
          console.log(response)
          console.log(response.data)
          console.log(response.data.results)
          console.log(response.data.results[0].name)
          setPokemon(response.data.results)
        }) // Change results to data
  }, [])

  return (
    <div className="App">
      <h1>Pokem Poke-Dex</h1>
      {pokemon.length > 0 && pokemon.map((poke, index) => {
        return(
          <div key={index}>
              <li>{poke.name}</li>
          </div>
        )
      })}
    </div>
  );
}

export default App;
