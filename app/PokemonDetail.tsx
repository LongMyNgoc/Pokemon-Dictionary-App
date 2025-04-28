import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import LoadingScreen from "@/components/Loading/LoadingScreen";
import EmptyState from "@/components/Loading/EmptyState";
import tw from 'twrnc';
import { getTypeColor } from "@/utils/typeColors";
import { Ionicons } from '@expo/vector-icons';

export default function PokemonDetail() {
  const { id } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      fetch(`https://pokemon-dictionary-be-production.up.railway.app/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching Pokémon:', error);
          setLoading(false);
        });
    }
  }, [id]);

  const handleGoBack = () => {
    router.push('/');  // Quay về trang index
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (!pokemon) {
    return <EmptyState />;
  }

  return (
    <ImageBackground
      source={require('@/assets/images/Background_Detail.png')}
      style={tw`flex-1 w-full`}
      resizeMode="cover"
    >
      {/* Biểu tượng quay lại */}
      <TouchableOpacity
        onPress={handleGoBack}
        style={[
          tw`absolute top-10 left-4 p-2 bg-white rounded-full shadow-lg`,
          { zIndex: 10 }  // Đảm bảo nút luôn nằm trên các phần tử khác
        ]}
        activeOpacity={0.7}  // Thêm hiệu ứng khi nhấn vào nút
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={tw`text-2xl font-bold mb-4 text-center pt-44`}>{pokemon.name}</Text>
      <Image 
        source={{ uri: pokemon.image_url }}
        style={tw`w-40 h-40 mb-4 self-center`}
        resizeMode="contain"
      />
      <View style={tw`flex-row justify-center space-x-2`}>
        {pokemon.types && pokemon.types.map((type: string, index: number) => (
          <Text
            key={index}
            style={[
              tw`text-white px-4 py-2 rounded-full`,
              { backgroundColor: getTypeColor(type) }
            ]}
          >
            {type}
          </Text>
        ))}
      </View>
    </ImageBackground>
  );
}
