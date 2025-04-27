import React from 'react';
import { Image } from 'react-native';
import tw from 'twrnc';

const Title = () => {
  return (
    <Image
      source={require('@/assets/images/Title.png')}
      style={tw`w-40 h-12 mx-auto mt-4`}
      resizeMode="contain"
    />
  );
};

export default Title;
