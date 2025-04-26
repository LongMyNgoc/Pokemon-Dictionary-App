import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';  // Import twrnc để sử dụng các lớp tailwind

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
          #{pokemon.id} {capitalize(pokemon.name)}
        </Text>
        <Text style={tw`text-sm text-gray-600`}>
          {pokemon.types.map((type) => capitalize(type)).join(' / ')}
        </Text>
      </View>
    </View>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
