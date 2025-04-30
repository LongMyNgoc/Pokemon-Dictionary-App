import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import tw from "twrnc";

interface PokemonDescriptionProps {
  description: string;
}

const PokemonDescription: React.FC<PokemonDescriptionProps> = ({ description }) => {
  return (
    <View style={tw`px-6`}>
      <ImageBackground
        source={require('@/assets/images/Background_Description.png')}
        style={tw`rounded-xl overflow-hidden`}
        imageStyle={tw`rounded-xl`}
        resizeMode="cover"
      >
        {/* Nền mờ màu trắng để dễ đọc */}
        <View style={tw`p-4 rounded-xl`}>
          {/* Hàng chứa Pokeball + Text */}
          <View style={tw`flex-row items-center justify-center`}>
            <Image
              source={require('@/assets/images/Pokeball.png')} // 🖼️ Đường dẫn hình pokeball nhỏ
              style={tw`w-6 h-6 mr-2`} // width-height 24px, margin phải 8px
              resizeMode="contain"
            />
            <Text style={tw`text-2xl font-semibold text-orange-400 text-center mr-2`}>
              Description
            </Text>
            <Image
              source={require('@/assets/images/Pokeball.png')} // 🖼️ Đường dẫn hình pokeball nhỏ
              style={tw`w-6 h-6 mr-2`} // width-height 24px, margin phải 8px
              resizeMode="contain"
            />
          </View>

          <View style={tw`mt-2`}>
            <Text style={tw`text-base text-gray-600 font-bold`}>
              {description || "No description available."}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PokemonDescription;
