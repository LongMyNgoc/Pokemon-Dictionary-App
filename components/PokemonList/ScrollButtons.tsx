import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';

type ScrollButtonsProps = {
  onScrollToTop: () => void;
  onScrollToEnd: () => void;
};

export default function ScrollButtons({ onScrollToTop, onScrollToEnd }: ScrollButtonsProps) {
  return (
    <View style={tw`absolute right-4 bottom-10 flex items-center`}>
      {/* Nút cuộn lên */}
      <TouchableOpacity
        style={tw`bg-gray-200 p-2 mb-3 rounded-full shadow`}
        onPress={onScrollToTop}
      >
        <AntDesign name="up" size={24} color="black" />
      </TouchableOpacity>

      {/* Nút cuộn xuống */}
      <TouchableOpacity
        style={tw`bg-gray-200 p-2 rounded-full shadow`}
        onPress={onScrollToEnd}
      >
        <AntDesign name="down" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
