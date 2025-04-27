// components/Filter.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import FilterModal from './FilterModal';
import { capitalize } from '@/utils/Capitalize';
import { getTypeColor } from '@/utils/typeColors';

type FilterProps = {
  selectedType: string;
  selectedGeneration: string;
  onTypeChange: (type: string) => void;
  onGenerationChange: (generation: string) => void;
};

const Filter: React.FC<FilterProps> = ({ selectedType, selectedGeneration, onTypeChange, onGenerationChange }) => {
  const [isTypeModalVisible, setIsTypeModalVisible] = useState(false);
  const [isGenerationModalVisible, setIsGenerationModalVisible] = useState(false);

  // Các lựa chọn cho Type và Generation
  const typeOptions = ['All', 'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
  const generationOptions = ['All', 'Gen 1', 'Gen 2', 'Gen 3', 'Gen 4', 'Gen 5', 'Gen 6', 'Gen 7', 'Gen 8', 'Gen 9'];

  const backgroundColor = getTypeColor(selectedType);

  return (
    <View style={tw`flex-row justify-between p-2`}>
      {/* Lọc theo loại */}
      <View style={tw`flex-1 mr-2`}>
        <Text style={[tw`text-lg`, { fontWeight: 'bold', color: 'white', textAlign: 'center' }]}>Type</Text>
        <TouchableOpacity
          style={[tw`bg-gray-300 p-2 rounded-lg`, { backgroundColor }]}
          onPress={() => setIsTypeModalVisible(true)}
        >
          <Text style={tw`text-sm font-bold`}>{capitalize(String(selectedType))}</Text>
        </TouchableOpacity>
      </View>

      {/* Lọc theo thế hệ */}
      <View style={tw`flex-1 ml-2`}>
        <Text style={[tw`text-lg`, { fontWeight: 'bold', color: 'white', textAlign: 'center' }]}>Generation</Text>
        <TouchableOpacity
          style={[tw`bg-gray-300 p-2 rounded-lg`, { backgroundColor }]}
          onPress={() => setIsGenerationModalVisible(true)}
        >
          <Text style={tw`text-sm font-bold`}>{selectedGeneration}</Text>
        </TouchableOpacity>
      </View>

      {/* Modal cho lọc loại */}
      <FilterModal
        visible={isTypeModalVisible}
        onClose={() => setIsTypeModalVisible(false)}
        title="Select Type"
        options={typeOptions}
        onSelect={(value) => onTypeChange(value)}
      />

      {/* Modal cho lọc thế hệ */}
      <FilterModal
        visible={isGenerationModalVisible}
        onClose={() => setIsGenerationModalVisible(false)}
        title="Select Generation"
        options={generationOptions}
        onSelect={(value) => onGenerationChange(value)}
      />
    </View>
  );
};

export default Filter;