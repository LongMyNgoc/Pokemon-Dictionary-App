import React from 'react';
import { View, ActivityIndicator, Text, FlatList, TouchableOpacity } from "react-native";
import PokemonCard from "@/components/PokemonCard";
import { useFetchPokemons } from "@/hooks/useFetchPokemons";
import tw from 'twrnc'; // ✅ Import twrnc

export default function Index() {
  const { pokemonList, loading } = useFetchPokemons();
  const flatListRef = React.useRef<FlatList>(null); // Khai báo reference cho FlatList

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true }); // Cuộn lên trên cùng
  };

  const scrollToEnd = () => {
    flatListRef.current?.scrollToEnd({ animated: true }); // Cuộn xuống cuối
  };

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center p-4`}>
        <ActivityIndicator size="large" />
        <Text>Đang tải dữ liệu Pokémon...</Text>
      </View>
    );
  }

  if (pokemonList.length === 0) {
    return (
      <View style={tw`flex-1 justify-center items-center p-4`}>
        <Text>Không có Pokémon nào để hiển thị.</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1`}>
      {/* Các nút cuộn */}
      <View style={tw`absolute top-4 left-4`}>
        <TouchableOpacity onPress={scrollToTop}>
          <Text style={tw`text-lg font-bold`}>↑</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`absolute bottom-4 left-4`}>
        <TouchableOpacity onPress={scrollToEnd}>
          <Text style={tw`text-lg font-bold`}>↓</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList */}
      <FlatList
        ref={flatListRef} // Tham chiếu FlatList
        data={pokemonList}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={tw`p-2`} // Áp dụng tailwind vào padding
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </View>
  );
}
