// app/hooks/useFetchPokemon.ts
import { useState, useEffect } from 'react';
import { PokemonDetail } from '@/types/PokemonDetail';  // Import kiểu dữ liệu PokemonDetail

const useFetchPokemon = (id: string | undefined) => {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);  // Sử dụng kiểu PokemonDetail
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      const numericId = Number(id);
      const url = numericId > 10000
        ? `https://pokemon-dictionary-be-production.up.railway.app/pokemon_form/${id}` 
        : `https://pokemon-dictionary-be-production.up.railway.app/pokemon/${id}`;

      fetch(url)
        .then((response) => response.json())
        .then((data: PokemonDetail) => {  // Đảm bảo dữ liệu trả về khớp với kiểu PokemonDetail
          setPokemon(data);
          setLoading(false);
        })
        .catch((error) => {
          setError('Failed to fetch Pokémon');
          console.error('Error fetching Pokémon:', error);
          setLoading(false);
        });
    }
  }, [id]);

  return { pokemon, loading, error };
};

export default useFetchPokemon;
