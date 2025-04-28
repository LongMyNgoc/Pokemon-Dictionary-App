import { create } from 'zustand';
import { Pokemon } from '@/types/Pokemon'; // chỉnh import nếu bạn có types riêng

interface PokemonStore {
  pokemonList: Pokemon[];
  setPokemonList: (pokemons: Pokemon[]) => void;
}

export const usePokemonStore = create<PokemonStore>((set) => ({
  pokemonList: [],
  setPokemonList: (pokemons) => set({ pokemonList: pokemons }),
}));
