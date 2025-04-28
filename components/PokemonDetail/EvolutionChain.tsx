// app/components/PokemonCard/EvolutionChain.tsx

import React from 'react';
import { View, Text, Image } from 'react-native';
import EvolutionCard from '@/components/PokemonCard/EvolutionCard'; // Import EvolutionCard
import tw from 'twrnc';
import { Evolution } from '@/types/PokemonDetail';

interface EvolutionChainProps {
  evolutionChain: Evolution[];
  onEvolutionPress: (pokemonId: string) => void;
}

const EvolutionChain: React.FC<EvolutionChainProps> = ({ evolutionChain, onEvolutionPress }) => {
  return (
    <View style={tw`mt-6`}>
      <View style={tw`flex-row items-center justify-center`}>
        <Image
          source={require('@/assets/images/Pokeball.png')}
          style={tw`w-6 h-6 mr-2`}
          resizeMode="contain"
        />
        <Text style={tw`text-2xl font-semibold text-white text-center mr-2`}>
          Evolution Chain
        </Text>
        <Image
          source={require('@/assets/images/Pokeball.png')}
          style={tw`w-6 h-6 mr-2`}
          resizeMode="contain"
        />
      </View>
      {evolutionChain.map((evolution, index) => (
        <EvolutionCard key={index} evolution={evolution} onPress={onEvolutionPress} />
      ))}
    </View>
  );
};

export default EvolutionChain;
