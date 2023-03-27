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
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-screen-md">
        <h1 className="text-4xl font-bold mb-8 text-center">Pokédex</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-3 md:col-span-1">
            <PokemonList
              pokemons={data!}
              onPokemonClick={setSelectedPokemon}
              selectedPokemon={selectedPokemon}
            />
            <div className="flex justify-center mt-8">
              {/* ... */}
            </div>
          </div>
          {selectedPokemon && (
            <div className="hidden md:block md:col-span-2">
              <PokemonDetail pokemon={selectedPokemon} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
