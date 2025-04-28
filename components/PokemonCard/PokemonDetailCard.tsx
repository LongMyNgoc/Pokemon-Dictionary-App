// app/components/PokemonDetailCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { getTypeColor } from '@/utils/typeColors';
import { Pokemon } from '@/types/Pokemon';

interface PokemonDetailCardProps {
  pokemon: Pokemon;
  onGoBack: () => void;
}

const PokemonDetailCard: React.FC<PokemonDetailCardProps> = ({ pokemon, onGoBack }) => {
  return (
    <ImageBackground
      source={require('@/assets/images/Background_Detail.png')}
      style={tw`flex-1 w-full`} // Đảm bảo nó chiếm toàn bộ không gian của card
      resizeMode="cover"
    >
      {/* Biểu tượng quay lại */}
      <TouchableOpacity
        onPress={onGoBack}
        style={[tw`absolute top-10 left-4 p-2 bg-white rounded-full shadow-lg`, { zIndex: 10 }]}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={tw`text-2xl font-bold mb-4 text-center pt-44`}>{pokemon.name}</Text>
      <Image
        source={{ uri: pokemon.image_url }}
        style={tw`w-40 h-40 mb-4 self-center`}
        resizeMode="contain"
      />
      <View style={tw`flex-row justify-center space-x-2`}>
        {pokemon.types && pokemon.types.map((type: string, index: number) => (
          <Text
            key={index}
            style={[
              tw`text-white px-4 py-2 rounded-full`,
              { backgroundColor: getTypeColor(type) }
            ]}
          >
            {type}
          </Text>
        ))}
      </View>
    </ImageBackground>
  );
};

export default PokemonDetailCard;
