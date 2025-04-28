import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import tw from 'twrnc';
import { getTypeColor } from '@/utils/typeColors';
import { capitalize } from '@/utils/Capitalize';
import { Pokemon } from '@/types/Pokemon';

type PokemonProps = {
  pokemon: Pokemon;
  onPress: () => void;
};

function PokemonCard({ pokemon, onPress }: PokemonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={tw`mb-2`}>
      {/* Use ImageBackground for the card background */}
      <ImageBackground
        source={require('@/assets/images/Background_Card.png')} // Đường dẫn tới ảnh nền PNG của bạn
        style={tw`flex-row p-4 rounded-lg shadow-md`}
        imageStyle={tw`rounded-lg`} // Đảm bảo ảnh nền có góc bo tròn như card
      >
        <View style={tw`flex-1`}>
          <Text
            style={[tw`text-base font-bold text-white`, { maxWidth: 160 }]} // thêm maxWidth
            numberOfLines={1} // chỉ cho phép 1 dòng
            ellipsizeMode="tail" // nếu quá dài thì hiện "..."
          >
            #{String(pokemon.id)} {capitalize(String(pokemon.name))}
          </Text>
          <View style={tw`flex-row flex-wrap`}>
            {pokemon.types.map((type, index) => {
              const typeColor = getTypeColor(type);
              return (
                <View
                  key={index}
                  style={[tw`px-2 py-1 rounded-full mr-2 mb-2`, { backgroundColor: typeColor }]}
                >
                  <Text style={tw`text-white text-sm font-bold`}>{capitalize(String(type))}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <Image source={{ uri: pokemon.image_url }} style={tw`w-18 mr-4`} />
      </ImageBackground>
    </TouchableOpacity>
  );
}

// Wrap component with React.memo
export default React.memo(PokemonCard);
