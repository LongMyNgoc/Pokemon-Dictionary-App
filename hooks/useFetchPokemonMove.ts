import { useState, useEffect } from 'react';
import { PokemonMove } from '@/types/PokemonMove';

const useFetchPokemonMoves = (id: string | undefined) => {
  const [moves, setMoves] = useState<PokemonMove[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setMoves([]);
      setLoading(false);
      return;
    }

    const fetchMoves = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://pokemon-dictionary-be-production.up.railway.app/pokemon_move/${id}`);
        const data = await res.json();

        // Kiểm tra nếu dữ liệu là đối tượng lỗi
        if (data && data.detail && data.detail === "Pokemon not found") {
          setError('Pokemon not found');
          setMoves([]);
        } else if (Array.isArray(data)) {
          // Kiểm tra chắc chắn data là mảng
          setMoves(data);
        } else {
          console.warn('Unexpected moves data:', data);
          setMoves([]); // fallback an toàn
          setError('Unexpected response data');
        }
      } catch (error) {
        console.error('Failed to fetch moves:', error);
        setMoves([]); // fallback an toàn khi lỗi
        setError('Failed to fetch moves');
      } finally {
        setLoading(false);
      }
    };

    fetchMoves();
  }, [id]);

  return { moves, loading, error };
};

export default useFetchPokemonMoves;
