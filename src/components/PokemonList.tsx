import React from 'react';
import { InView } from 'react-intersection-observer';
import { Pokemon } from '../types/Pokemon';
import { PokemonDetail } from './PokemonDetail';

interface Props {
  pokemons: Pokemon[];
  onPokemonClick: (pokemon: Pokemon) => void;
  selectedPokemon: Pokemon | null;
}

export const PokemonList: React.FC<Props> = ({
  pokemons,
  onPokemonClick,
  selectedPokemon,
}) => {
  return (
    <div className="divide-y divide-gray-600">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <div
            className="flex items-center py-4 cursor-pointer px-4 hover:bg-gray-700"
            onClick={() => onPokemonClick(pokemon)}
          >
            <InView as="img" src={pokemon.sprites.front_default} alt={pokemon.name} className="w-16 h-16" />
            <h2 className="text-xl font-bold ml-4">{pokemon.name}</h2>
          </div>
          {selectedPokemon?.id === pokemon.id && (
            <div className="md:hidden">
              <PokemonDetail pokemon={selectedPokemon} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
