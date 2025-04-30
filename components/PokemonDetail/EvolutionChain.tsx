// app/components/PokemonCard/EvolutionChain.tsx

import React from 'react';
import { View } from 'react-native';
import EvolutionCard from '@/components/PokemonCard/EvolutionCard'; // Import EvolutionCard
import tw from 'twrnc';
import { Evolution } from '@/types/PokemonDetail';
import TitleWithPokeballs from '../Title/TitleWithPokeballs';

interface EvolutionChainProps {
  evolutionChain: Evolution[];
  onEvolutionPress: (pokemonId: string) => void;
}

const EvolutionChain: React.FC<EvolutionChainProps> = ({ evolutionChain, onEvolutionPress }) => {
  return (
    <View style={tw`mt-6`}>
      <TitleWithPokeballs title="Evolution Chain" />
      {evolutionChain.map((evolution, index) => (
        <EvolutionCard key={index} evolution={evolution} onPress={onEvolutionPress} />
      ))}
    </View>
  );
};

export default EvolutionChain;
