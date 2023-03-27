import React from 'react';
import { Pokemon } from '../types/Pokemon';

interface Props {
  pokemons: Pokemon[];
  onPokemonClick: (pokemon: Pokemon) => void;
}

export const PokemonList: React.FC<Props> = ({ pokemons, onPokemonClick }) => {
  return (
    <div className="divide-y divide-gray-600">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="flex items-center py-4 cursor-pointer px-4 hover:bg-gray-700"
          onClick={() => onPokemonClick(pokemon)}
        >
          <img className="w-16 h-16" src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2 className="text-xl font-bold ml-4">{pokemon.name}</h2>
        </div>
      ))}
    </div>
  );
};
