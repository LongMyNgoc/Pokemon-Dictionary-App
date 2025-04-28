// app/hooks/useFetchPokemons.ts
import { useEffect, useState } from "react";
import type { Pokemon } from "@/types/Pokemon";
import { getGenerationFromId } from "@/types/Pokemon";
import { usePokemonStore } from "@/data/pokemonStore"; // 💥 dùng store zustand

export function useFetchPokemons() {
  const { pokemonList, setPokemonList } = usePokemonStore(); // ✅ dùng zustand
  const [loading, setLoading] = useState(true); // vẫn dùng local loading thôi

  useEffect(() => {
    const fetchData = async () => {
      // Nếu trong store đã có data rồi thì không fetch nữa
      if (pokemonList.length > 0) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("https://pokemon-dictionary-be-production.up.railway.app/pokemons");
        const data = await res.json();
        const list = Array.isArray(data.pokemons) ? data.pokemons : Array.isArray(data) ? data : [];

        // Tính generation
        const pokemonsWithGeneration = list.map((pokemon: Pokemon) => ({
          ...pokemon,
          generation: getGenerationFromId(pokemon.id),
        }));

        setPokemonList(pokemonsWithGeneration); // ✅ cập nhật vào store zustand
      } catch (err) {
        console.error("Fetch error:", err);
        setPokemonList([]); // nếu lỗi thì clear store
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pokemonList, setPokemonList]); // depend vào store, đảm bảo chuẩn React

  return { pokemonList, loading };
}
