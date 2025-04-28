// app/screens/PokemonDetailContent.tsx
import { View } from "react-native";
import LoadingScreen from "@/components/Loading/LoadingScreen";
import EmptyState from "@/components/Loading/EmptyState";
import PokemonDetailCard from "@/components/PokemonCard/PokemonDetailCard"; // Import component mới
import useFetchPokemon from "@/hooks/useFetchPokemonDetail";  // Import hook
import tw from 'twrnc';

interface PokemonDetailScreenProps {
  pokemonId: string | undefined;
  onGoBack: () => void;
}

const PokemonDetailScreen: React.FC<PokemonDetailScreenProps> = ({ pokemonId, onGoBack }) => {
  const { pokemon, loading, error } = useFetchPokemon(pokemonId);  // Sử dụng hook fetch

  if (loading) {
    return <LoadingScreen />;
  }

  if (error || !pokemon) {
    return <EmptyState />;
  }

  return (
    <View style={tw`flex-1`}>
      {/* Sử dụng PokemonDetailCard để hiển thị chi tiết Pokémon */}
      <PokemonDetailCard
        pokemon={pokemon}
        onGoBack={onGoBack}
      />
    </View>
  );
};

export default PokemonDetailScreen;
