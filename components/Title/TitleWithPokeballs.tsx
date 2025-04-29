import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

interface TitleWithPokeballsProps {
  title: string; // Truyền vào tên tiêu đề
}

const TitleWithPokeballs: React.FC<TitleWithPokeballsProps> = ({ title }) => {
  return (
    <View
      style={[
        tw`flex-row items-center justify-center mb-4 py-2 px-4 rounded-lg`,
        { backgroundColor: '#2ECC71' }, // Thêm màu nền vàng sáng
      ]}
    >
      <Image
        source={require('@/assets/images/Pokeball.png')}
        style={tw`w-6 h-6 mr-2`}
        resizeMode="contain"
      />
      <Text style={tw`text-2xl font-semibold text-white text-center mr-2`}>
        {title}
      </Text>
      <Image
        source={require('@/assets/images/Pokeball.png')}
        style={tw`w-6 h-6 mr-2`}
        resizeMode="contain"
      />
    </View>
  );
};

export default TitleWithPokeballs;
