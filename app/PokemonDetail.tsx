// app/screens/PokemonDetail.tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import PokemonDetailContent from "@/components/PokemonDetail/PokemonDetailScreen";  // Import component mới

export default function PokemonDetail() {
  const { id } = useLocalSearchParams();
  const pokemonId = Array.isArray(id) ? id[0] : id;  // Kiểm tra và lấy phần tử đầu tiên nếu là mảng
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');  // Quay về trang index
  };

  return (
    <PokemonDetailContent
      pokemonId={pokemonId}
      onGoBack={handleGoBack}
    />
  );
}
