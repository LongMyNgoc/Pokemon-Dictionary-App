import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { getTypeColor } from '@/utils/typeColors';
import { Pokemon } from '@/types/Pokemon';
import { capitalize } from '@/utils/Capitalize';

interface PokemonDetailCardProps {
    pokemon: Pokemon;
    height: number;
    weight: number;
    abilities: string[];
    onGoBack: () => void;
}

const PokemonDetailCard: React.FC<PokemonDetailCardProps> = ({ pokemon, weight, height, abilities, onGoBack }) => {
    const screenWidth = Dimensions.get('window').width;
    const imageWidth = 1024;
    const imageHeight = 2020;
    const aspectRatio = imageHeight / imageWidth;
    const imageHeightAdjusted = screenWidth * aspectRatio;

    return (
        <ImageBackground
            source={require('@/assets/images/Background_Detail.png')}
            style={[tw`w-full`, { height: imageHeightAdjusted }]}
            resizeMode="contain"
        >
            {/* Biểu tượng quay lại */}
            <TouchableOpacity
                onPress={onGoBack}
                style={[tw`absolute top-10 left-4 p-2 bg-white rounded-full shadow-lg`, { zIndex: 10 }]}
                activeOpacity={0.7}
            >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* ID */}
            <Text style={tw`text-2xl font-bold mb-4 text-center pt-30`}>
                #{pokemon.id}
            </Text>

            {/* Tên */}
            <Text style={tw`text-2xl font-bold mb-4 text-center`}>
                {capitalize(pokemon.name)}
            </Text>

            {/* Hình Pokémon */}
            <Image
                source={{ uri: pokemon.image_url }}
                style={tw`w-40 h-40 mb-4 self-center`}
                resizeMode="contain"
            />

            {/* Các loại Pokémon */}
            <View style={tw`flex-row justify-center mb-4`}>
                {pokemon.types && pokemon.types.map((type: string, index: number) => (
                    <View
                        key={index}
                        style={[
                            tw`flex items-center justify-center px-4 py-2 rounded-full mr-2`,
                            { backgroundColor: getTypeColor(type) }
                        ]}
                    >
                        <Text style={tw`text-white text-center font-bold`}>
                            {capitalize(type)}
                        </Text>
                    </View>
                ))}
            </View>

            {/* Chiều cao, Cân nặng và Abilities */}
            <View style={tw`flex-row justify-center mb-4`}>
                {/* Chiều cao */}
                <View style={tw`items-center mx-4`}>
                    <Text style={tw`text-gray-600 font-bold text-base`}>Height</Text>
                    <Text style={tw`text-lg font-semibold`}>{height / 10} m</Text>
                </View>

                {/* Abilities */}
                <View style={tw`items-center mx-4`}>
                    <Text style={tw`text-gray-600 font-bold text-base`}>Abilities</Text>
                    {abilities.map((ability, index) => (
                        <Text key={index} style={tw`text-lg font-semibold`}>
                            {capitalize(ability)}
                        </Text>
                    ))}
                </View>

                {/* Cân nặng */}
                <View style={tw`items-center mx-4`}>
                    <Text style={tw`text-gray-600 font-bold text-base`}>Weight</Text>
                    <Text style={tw`text-lg font-semibold`}>{weight / 10} kg</Text>
                </View>

            </View>
        </ImageBackground>
    );
};

export default PokemonDetailCard;
