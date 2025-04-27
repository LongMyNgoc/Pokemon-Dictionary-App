import React from 'react';
import { ImageBackground, View } from 'react-native';
import PokemonListScreen from '@/components/PokemonList/PokemonListScreen';
import tw from 'twrnc';

export default function Index() {
  return (
    <ImageBackground
      source={require('@/assets/images/background.png')} 
      style={tw`flex-1`}  // Sử dụng flex-1 để chiếm toàn bộ màn hình
      resizeMode="cover"   // Đảm bảo background phủ kín màn hình
    >
      <View style={tw`flex-1`}>        
        <PokemonListScreen />
      </View>
    </ImageBackground>
  );
}
