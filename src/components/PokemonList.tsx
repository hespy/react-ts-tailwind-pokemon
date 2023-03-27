import React from 'react';
import { Pokemon } from '../types/Pokemon';

interface Props {
  pokemons: Pokemon[];
  onPokemonClick: (pokemon: Pokemon) => void;
}

export const PokemonList: React.FC<Props> = ({ pokemons, onPokemonClick }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="bg-gray-700 rounded-lg p-4 cursor-pointer"
          onClick={() => onPokemonClick(pokemon)}
        >
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2 className="text-xl font-bold mt-2">{pokemon.name}</h2>
        </div>
      ))}
    </div>
  );
};
