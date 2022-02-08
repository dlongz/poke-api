import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
  })

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
