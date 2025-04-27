import React, { useRef, useState } from 'react';
import { View, FlatList } from 'react-native';
import ScrollButtons from '@/components/PokemonList/ScrollButtons';
import { useFetchPokemons } from '@/hooks/useFetchPokemons';
import SearchBar from '@/components/SearchBar/SearchBar';
import LoadingScreen from '@/components/Loading/LoadingScreen';
import PokemonList from './PokemonList';
import Filter from '@/components/Filter/Filter'; // Import component Filter
import Title from '@/components/Title/Title';
import tw from 'twrnc';

export default function PokemonListScreen() {
  const { pokemonList, loading } = useFetchPokemons();
  const flatListRef = useRef<FlatList>(null);
  const [searchText, setSearchText] = useState('');

  // Các state cho việc lọc
  const [selectedType, setSelectedType] = useState('All');
  const [selectedGeneration, setSelectedGeneration] = useState('All');

  // Hàm lọc Pokémon
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
      <Title />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      {/* Sử dụng Filter component */}
      <Filter
        selectedType={selectedType}
        selectedGeneration={selectedGeneration}
        onTypeChange={setSelectedType}
        onGenerationChange={setSelectedGeneration}
      />

      <PokemonList
        pokemons={filteredPokemons}
        onPress={handlePress}
        flatListRef={flatListRef}
      />

      {/* ScrollButtons component */}
      <ScrollButtons onScrollToTop={scrollToTop} onScrollToEnd={scrollToEnd} />
    </View>
  );
}
