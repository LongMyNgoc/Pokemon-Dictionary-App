import React from 'react';
import { View, Text } from 'react-native';
import { PokemonMove } from '@/types/PokemonMove';
import tw from 'twrnc';

interface MoveListProps {
  moves: PokemonMove[];
  isLoading: boolean;
}

const MoveList: React.FC<MoveListProps> = ({ moves, isLoading }) => {
  if (isLoading) {
    return <Text style={tw`text-center text-gray-500 my-4`}>Loading moves...</Text>;
  }

  if (!moves || moves.length === 0) {
    return <Text style={tw`text-center text-gray-500 my-4`}>No moves available.</Text>;
  }

  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-lg font-bold mb-2`}>Moves</Text>
      {moves.map((item) => (
        <View key={item.move} style={tw`mb-2 p-3 bg-gray-100 rounded-lg`}>
          <Text style={tw`text-base font-semibold capitalize`}>{item.move}</Text>
          <Text style={tw`text-sm`}>Power: {item.power ?? '—'}</Text>
          <Text style={tw`text-sm`}>Accuracy: {item.accuracy ?? '—'}</Text>
          <Text style={tw`text-sm`}>Type: {item.type.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default MoveList;
