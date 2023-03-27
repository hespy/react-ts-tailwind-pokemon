import React from 'react';
import { Pokemon } from '../types/Pokemon';

interface Props {
  pokemon: Pokemon;
}

export const PokemonDetail: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg h-full">
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h2 className="text-xl font-bold mt-2">{pokemon.name}</h2>
      <ul className="mt-4">
        {pokemon.types.map((type) => (
          <li key={type.slot} className="capitalize">
            {type.type.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
