// app/screens/PokemonDetail.tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import PokemonDetailContent from "@/components/PokemonDetail/PokemonDetailScreen";  // Import component mới
import { ImageBackground, View } from 'react-native';
import tw from 'twrnc';

export default function PokemonDetail() {
  const { id } = useLocalSearchParams();
  const pokemonId = Array.isArray(id) ? id[0] : id;  // Kiểm tra và lấy phần tử đầu tiên nếu là mảng
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');  // Quay về trang index
  };

  return (
    <ImageBackground
      source={require('@/assets/images/background.png')}
      style={tw`flex-1`}  // Sử dụng flex-1 để chiếm toàn bộ màn hình
      resizeMode="cover"   // Đảm bảo background phủ kín màn hình
    >
      <View style={tw`flex-1`}>
        <PokemonDetailContent
          pokemonId={pokemonId}
          onGoBack={handleGoBack}
        />
      </View>
    </ImageBackground>
  );
}
