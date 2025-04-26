import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import FilterModal from './FilterModal';

interface FilterProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedGeneration: string;
  setSelectedGeneration: (generation: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  selectedType,
  setSelectedType,
  selectedGeneration,
  setSelectedGeneration,
}) => {
  const [typeModalVisible, setTypeModalVisible] = useState(false);
  const [generationModalVisible, setGenerationModalVisible] = useState(false);

  return (
    <View style={tw`p-4 bg-white rounded-lg shadow-lg mb-4`}>

      <View style={tw`flex-row justify-between`}>
        <View style={tw`flex-1 mr-2`}>
          <Text style={tw`text-sm font-medium text-gray-700 mb-2 text-center`}>Type</Text>
          <TouchableOpacity
            style={tw`p-2 bg-gray-100 border border-gray-300 rounded-lg`} // Reduce padding here
            onPress={() => setTypeModalVisible(true)}
          >
            <Text style={tw`text-base`}>{selectedType || 'All'}</Text> {/* Reduce font size here */}
          </TouchableOpacity>
        </View>

        <View style={tw`flex-1 ml-2`}>
          <Text style={tw`text-sm font-medium text-gray-700 mb-2 text-center`}>Generation</Text>
          <TouchableOpacity
            style={tw`p-2 bg-gray-100 border border-gray-300 rounded-lg`} // Reduce padding here
            onPress={() => setGenerationModalVisible(true)}
          >
            <Text style={tw`text-base`}>{selectedGeneration || 'All'}</Text> {/* Reduce font size here */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Type Modal */}
      <FilterModal
        visible={typeModalVisible}
        data={['All', 'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy']}
        onSelect={setSelectedType}
        onClose={() => setTypeModalVisible(false)}
      />

      {/* Generation Modal */}
      <FilterModal
        visible={generationModalVisible}
        data={['All', 'Gen 1', 'Gen 2', 'Gen 3', 'Gen 4', 'Gen 5', 'Gen 6', 'Gen 7', 'Gen 8', 'Gen 9']}
        onSelect={setSelectedGeneration}
        onClose={() => setGenerationModalVisible(false)}
      />
    </View>
  );
};

export default Filter;
