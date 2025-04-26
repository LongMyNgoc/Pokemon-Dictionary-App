// app/hooks/useFetchPokemons.ts
import { useEffect, useState } from "react";
import type { Pokemon } from "@/types/Pokemon"; // 💥 import đúng kiểu

export function useFetchPokemons() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://pokemon-dictionary-be-production.up.railway.app/pokemons");
        const data = await res.json();
        const list = Array.isArray(data.pokemons) ? data.pokemons : Array.isArray(data) ? data : [];

        // Ép kiểu cứng luôn nếu muốn chắc chắn
        setPokemonList(list as Pokemon[]);
      } catch (err) {
        console.error("Fetch error:", err);
        setPokemonList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { pokemonList, loading };
}
