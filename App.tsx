import React, { useState } from 'react';
import { PokemonList } from './components/PokemonList';
import { PokemonDetail } from './components/PokemonDetail';
import { Pokemon } from './types/Pokemon';
import { usePokemon } from './hooks/usePokemon';

const App: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = usePokemon(page);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Pokédex</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <PokemonList pokemons={data!} onPokemonClick={setSelectedPokemon} />
          <div className="flex justify-center mt-8">
            <button
              className="bg-gray-600 px-4 py-2 rounded-lg mr-2"
              onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            >
              Previous
            </button>
            <button
              className="bg-gray-600 px-4 py-2 rounded-lg ml-2"
              onClick={() => setPage((prevPage) => prevPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
        {selectedPokemon && (
          <div className="col-span-2">
            <PokemonDetail pokemon={selectedPokemon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
