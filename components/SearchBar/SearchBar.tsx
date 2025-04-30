// app/components/SearchBar/SearchBar.tsx

import React from 'react';
import { View, TextInput } from 'react-native';
import tw from 'twrnc';

interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText }) => {
  return (
    <View style={tw`px-4 pt-4`}>
      <View style={tw`flex-row items-center bg-white rounded-full px-4 shadow-md`}>
        <TextInput
          style={tw`flex-1 text-sm text-gray-700 p-2`}
          placeholder="🔍 Search Pokémon..."
          placeholderTextColor="#9CA3AF"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
    </View>
  );
};

export default SearchBar;
