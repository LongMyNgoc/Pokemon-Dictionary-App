import React from 'react';
import { View, Text } from 'react-native';
import { PokemonMove } from '@/types/PokemonMove';
import tw from 'twrnc';
import TitleWithPokeballs from '../Title/TitleWithPokeballs';
import LoadingScreen from '../Loading/LoadingScreen';
import EmptyState from '../Loading/EmptyState';
import { getTypeColor } from '@/utils/typeColors';

interface MoveListProps {
  moves: PokemonMove[];
  isLoading: boolean;
}

const MoveList: React.FC<MoveListProps> = ({ moves, isLoading }) => {
  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!moves || moves.length === 0) {
    return <EmptyState />;
  }

  return (
    <View style={tw`p-4`}>
      <TitleWithPokeballs title="Moves" />

      {/* Header of the table */}
      <View style={tw`flex-row mb-2 border-b border-gray-300`}>
        <Text style={tw`flex-1 font-bold text-sm text-center p-2 border-r border-gray-300`}>Move</Text>
        <Text style={tw`flex-1 font-bold text-sm text-center p-2 border-r border-gray-300`}>Power</Text>
        <Text style={tw`flex-1 font-bold text-sm text-center p-2 border-r border-gray-300`}>Accuracy</Text>
        <Text style={tw`flex-1 font-bold text-sm text-center p-2`}>Type</Text>
      </View>

      {/* Table rows */}
      {moves.map((item) => (
        <View
          key={item.move}
          style={tw`flex-row mb-2 p-3 bg-gray-100 rounded-lg border-b border-gray-200`}
        >
          <Text style={tw`flex-1 text-sm text-center p-2 border-r border-gray-300`}>{item.move}</Text>
          <Text style={tw`flex-1 text-sm text-center p-2 border-r border-gray-300`}>{item.power ?? '—'}</Text>
          <Text style={tw`flex-1 text-sm text-center p-2 border-r border-gray-300`}>{item.accuracy ?? '—'}</Text>

          {/* Type with background color */}
          <View
            style={[
              tw`flex-1 text-sm text-center p-2 rounded`,
              { backgroundColor: getTypeColor(item.type.name.toLowerCase()) },
            ]}
          >
            <Text style={tw`text-white`}>{item.type.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default MoveList;
