import React, { useRef, useState } from 'react';
import { View, FlatList } from 'react-native';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import ScrollButtons from '@/components/PokemonList/ScrollButtons';
import { useFetchPokemons } from '@/hooks/useFetchPokemons';
import SearchBar from '@/components/SearchBar/SearchBar';
import LoadingScreen from '@/components/Loading/LoadingScreen';
import EmptyState from '@/components/Loading/EmptyState';
import Filter from '@/components/Filter/Filter';
import tw from 'twrnc';

export default function PokemonListScreen() {
  const { pokemonList, loading } = useFetchPokemons();
  const flatListRef = useRef<FlatList>(null);
  const [searchText, setSearchText] = useState('');
  
  // Các state cho việc lọc
  const [selectedType, setSelectedType] = useState('');
  const [selectedGeneration, setSelectedGeneration] = useState('');

  const filterPokemons = () => {
    return pokemonList.filter((pokemon) => {
      const matchesType = selectedType === 'All' || pokemon.types.includes(selectedType);
      const matchesGeneration = selectedGeneration === 'All' || pokemon.generation === selectedGeneration;
      const matchesSearch = pokemon.name.toLowerCase().includes(searchText.toLowerCase());

      return matchesSearch && matchesType && matchesGeneration;
    });
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  const scrollToEnd = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const handlePress = (pokemonId: number) => {
    console.log(`Pokemon with ID: ${pokemonId} clicked`);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  const filteredPokemons = filterPokemons();

  return (
    <View style={tw`flex-1`}>
      <SearchBar searchText={searchText} setSearchText={setSearchText}/>
      {/* Hiển thị Filter */}
      <Filter
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedGeneration={selectedGeneration}
        setSelectedGeneration={setSelectedGeneration}
      />
      
      {/* Nếu không có Pokémon nào */}
      {pokemonList.length === 0 || filteredPokemons.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          ref={flatListRef}
          data={filteredPokemons}
          renderItem={({ item }) => (
            <PokemonCard
              pokemon={item}
              onPress={() => handlePress(item.id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={tw`p-2 pb-20`}
          showsVerticalScrollIndicator={true}
        />
      )}

      {/* ScrollButtons component */}
      <ScrollButtons onScrollToTop={scrollToTop} onScrollToEnd={scrollToEnd} />
    </View>
  );
}
