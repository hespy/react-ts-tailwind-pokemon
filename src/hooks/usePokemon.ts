import { useQuery } from 'react-query';
import axios from 'axios';
import { Pokemon } from '../types/Pokemon';

const fetchPokemons = async (page: number, limit = 20): Promise<Pokemon[]> => {
  const offset = (page - 1) * limit;
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  return data.results.map(async (pokemon: any) => {
    const response = await axios.get(pokemon.url);
    return response.data;
  });
};

export const usePokemon = (page: number) => {
  return useQuery(['pokemon', page], () => fetchPokemons(page));
};
