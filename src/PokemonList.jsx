import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
    console.log(pokemonList)
  useEffect(() => {
    fetch('https://pokemon-backend-1f5a.vercel.app/pokemon')
      .then((response) => response.json())
      .then((data) => setPokemonList(data));
  }, []);

  return (
    <div>
      <h2>All Pokémon</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name_english}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;