import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Pokemon } from '@/types/Pokemon';

export function useFetchPokemonForms(name: string) {
  const [forms, setForms] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  const normalizeName = (name: string) => {
    return name.split('-')[0]; // Cắt tên tại dấu "-" và lấy phần đầu tiên
  };

  const refetch = useCallback(async () => {
    const normalizedName = normalizeName(name);
    if (!normalizedName) return;

    setLoading(true);
    try {
      const response = await axios.get(`https://pokemon-dictionary-be-production.up.railway.app/pokemon_form_by_name/${normalizedName}`);
      setForms(response.data);
    } catch (error) {
      setForms([]);
    } finally {
      setLoading(false);
    }
  }, [name]);

  useEffect(() => {
    refetch();
  }, [name, refetch]);

  return { forms, loading, refetch };
}
