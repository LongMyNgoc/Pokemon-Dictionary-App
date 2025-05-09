import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function EmptyState() {
  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <Text style={tw`text-2xl font-bold text-white mt-4 text-center`}>
        No Pokemon available to display.
      </Text>
    </View>
  );
}
