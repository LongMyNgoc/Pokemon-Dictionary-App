import { View, Text, ScrollView } from "react-native";
import LoadingScreen from "@/components/Loading/LoadingScreen";
import EmptyState from "@/components/Loading/EmptyState";
import PokemonDetailCard from "@/components/PokemonCard/PokemonDetailCard"; // Import component mới
import PokemonDescription from "./PokemonDescription";
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
    <ScrollView contentContainerStyle={tw`flex-grow`}>
      {/* Sử dụng PokemonDetailCard để hiển thị chi tiết Pokémon */}
      <PokemonDetailCard
        pokemon={pokemon}
        weight={pokemon.weight}
        height={pokemon.height}
        abilities={pokemon.abilities}
        onGoBack={onGoBack}
      />
      <PokemonDescription description={pokemon.description} />
    </ScrollView>
  );
};

export default PokemonDetailScreen;
