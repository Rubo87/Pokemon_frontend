import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokemon-backend-1f5a.vercel.app/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [id]);

  return (
    <div>
      <h2>Pokémon Details</h2>
      {pokemon && (
        <div>
          <p>Name: {pokemon.name_english}</p>
          <p>Type: {pokemon.type1}
            {pokemon.type2 && `, ${pokemon.type2}`}</p>
          <p>Attack: {pokemon.base_attack}</p>
          <p>Defense: {pokemon.base_defense}</p>
          <p>HP: {pokemon.base_hp}</p>
          <p>Sp. Attack: {pokemon.base_spattack}</p>
          <p>Sp. Defense: {pokemon.base_spdefense}</p>
          <p>Speed: {pokemon.base_speed}</p>
        </div>
      )}
    </div>
  );
}

export default PokemonDetail;