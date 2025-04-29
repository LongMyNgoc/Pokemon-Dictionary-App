// app/components/LoadingScreen/LoadingScreen.tsx

import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import tw from 'twrnc';

const LoadingScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center p-4 bg-blue-50`}>
      <ActivityIndicator size="large" color="#4F46E5" />
      <Text style={tw`text-2xl font-bold text-blue-700 mt-4 text-center`}>
        Loading Pokemon data...
      </Text>
      <Text style={tw`text-xl font-bold text-blue-500 mt-4 text-center`}>
        Estimated loading time: less than 1 minute
      </Text>
    </View>
  );
};

export default LoadingScreen;
