// app/components/PokemonList/PokemonList.tsx
import React from 'react';
import { FlatList } from 'react-native';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import EmptyState from '@/components/Loading/EmptyState';
import tw from 'twrnc';
import { Pokemon } from '@/types/Pokemon'; // (Giả sử bạn đã có type Pokemon ở đây)

interface PokemonListProps {
  pokemons: Pokemon[];
  onPress: (pokemonId: number) => void;
  flatListRef: React.RefObject<FlatList<Pokemon>>;
}

export default function PokemonList({ pokemons, onPress, flatListRef }: PokemonListProps) {
  if (pokemons.length === 0) {
    return <EmptyState />;
  }

  return (
    <FlatList
      ref={flatListRef}
      data={pokemons}
      renderItem={({ item }) => (
        <PokemonCard
          pokemon={item}
          onPress={() => onPress(item.id)}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={tw`p-2 pb-20`}
      showsVerticalScrollIndicator={true}
    />
  );
}
