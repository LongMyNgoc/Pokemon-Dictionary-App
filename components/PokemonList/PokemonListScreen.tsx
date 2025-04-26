import React, { useRef } from 'react';
import { View, ActivityIndicator, Text, FlatList } from "react-native";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import ScrollButtons from "@/components/PokemonList/ScrollButtons"; // ✅ thêm dòng này
import { useFetchPokemons } from "@/hooks/useFetchPokemons";
import tw from 'twrnc';

export default function PokemonListScreen() {
  const { pokemonList, loading } = useFetchPokemons();
  const flatListRef = useRef<FlatList>(null);

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  const scrollToEnd = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center p-4 bg-blue-50`}>
        <ActivityIndicator size="large" color="#4F46E5" />
        <Text style={tw`text-2xl font-bold text-blue-700 mt-4 text-center`}>Đang tải dữ liệu Pokémon...</Text>
      </View>
    );
  }

  if (pokemonList.length === 0) {
    return (
      <View style={tw`flex-1 justify-center items-center p-4 bg-red-50`}>
        <Text style={tw`text-2xl font-bold text-red-700 mt-4 text-center`}>
          Không có Pokemon nào để hiển thị.
        </Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1`}>
      <FlatList
        ref={flatListRef}
        data={pokemonList}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={tw`p-2 pb-20`}
        showsVerticalScrollIndicator={true}
      />

      {/* ScrollButtons component */}
      <ScrollButtons onScrollToTop={scrollToTop} onScrollToEnd={scrollToEnd} />
    </View>
  );
}
