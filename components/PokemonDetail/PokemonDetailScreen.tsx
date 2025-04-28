import { ScrollView } from "react-native";
import LoadingScreen from "@/components/Loading/LoadingScreen";
import EmptyState from "@/components/Loading/EmptyState";
import PokemonDetailCard from "@/components/PokemonCard/PokemonDetailCard"; 
import PokemonDescription from "./PokemonDescription";
import useFetchPokemon from "@/hooks/useFetchPokemonDetail";  
import StatScreen from "./StatScreen";
import tw from 'twrnc';

interface PokemonDetailScreenProps {
  pokemonId: string;
  onGoBack: () => void;
}

const PokemonDetailScreen: React.FC<PokemonDetailScreenProps> = ({ pokemonId, onGoBack }) => {
  const { pokemon, loading, error } = useFetchPokemon(pokemonId); 

  if (loading) {
    return <LoadingScreen />;
  }

  if (error || !pokemon) {
    return <EmptyState />;
  }

  return (
    <ScrollView contentContainerStyle={tw`flex-grow`}>
      <PokemonDetailCard
        pokemon={pokemon}
        weight={pokemon.weight}
        height={pokemon.height}
        abilities={pokemon.abilities}
        onGoBack={onGoBack}
      />
      <PokemonDescription description={pokemon.description} />

      <StatScreen stats={pokemon.stats} />
    </ScrollView>
  );
};

export default PokemonDetailScreen;
