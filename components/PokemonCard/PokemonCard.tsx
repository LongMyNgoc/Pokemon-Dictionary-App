import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';
import { getTypeColor } from '@/utils/typeColors';  // Import hàm getTypeColor từ file utils

type PokemonProps = {
  pokemon: {
    id: number;
    name: string;
    image_url: string;
    types: string[];
  };
};

export default function PokemonCard({ pokemon }: PokemonProps) {
  return (
    <View style={tw`flex-row bg-gray-100 p-4 mb-2 rounded-lg shadow-md`}>
      <Image source={{ uri: pokemon.image_url }} style={tw`w-16 h-16 mr-4`} />
      <View style={tw`flex-1`}>
        <Text style={tw`text-lg font-bold`}>
        #{String(pokemon.id)} {capitalize(String(pokemon.name))}
        </Text>
        <View style={tw`flex-row flex-wrap`}>
          {pokemon.types.map((type, index) => {
            const typeColor = getTypeColor(type);  // Sử dụng hàm getTypeColor để lấy màu
            return (
              <View
                key={index}
                style={[tw`px-2 py-1 rounded-full mr-2 mb-2`, { backgroundColor: typeColor }]}  // Áp dụng màu từ getTypeColor
              >
                <Text style={tw`text-white text-sm`}>{capitalize(String(type))}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

function capitalize(str: string) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
