import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import LoadingScreen from '@/components/Loading/LoadingScreen';
import EmptyState from '@/components/Loading/EmptyState';
import PokemonDetailCard from '@/components/PokemonCard/PokemonDetailCard';
import PokemonDescription from './PokemonDescription';
import useFetchPokemon from '@/hooks/useFetchPokemonDetail';
import { useFetchPokemonForms } from '@/hooks/useFetchPokemonForms';
import useFetchPokemonMoves from '@/hooks/useFetchPokemonMove';
import StatScreen from './StatScreen';
import EvolutionChain from '@/components/PokemonDetail/EvolutionChain'; // Import EvolutionChain
import PokemonForms from '@/components/PokemonDetail/PokemonForms'; // Import new component
import MoveList from './PokemonMoves';
import tw from 'twrnc';

interface PokemonDetailScreenProps {
  pokemonId: string;
  onGoBack: () => void;
}

const PokemonDetailScreen: React.FC<PokemonDetailScreenProps> = ({ pokemonId, onGoBack }) => {
  const [currentPokemonId, setCurrentPokemonId] = useState(pokemonId); // State để lưu pokemonId hiện tại
  const { pokemon, loading, error } = useFetchPokemon(currentPokemonId); // Gọi API với pokemonId hiện tại
  const [currentPokemonName, setCurrentPokemonName] = useState<string>(''); // Lưu name của pokemon
  const { forms, loading: formsLoading, refetch: refetchForms } = useFetchPokemonForms(currentPokemonName);
  const { moves, loading: movesLoading } = useFetchPokemonMoves(currentPokemonId);

  useEffect(() => {
    // Khi pokemonId thay đổi, cập nhật lại currentPokemonId và currentPokemonName
    setCurrentPokemonId(pokemonId);
  }, [pokemonId]);

  useEffect(() => {
    // Khi pokemonId thay đổi, reset forms loading lại về true
    refetchForms(); // Gọi lại hàm refetch để tải lại forms
  }, [pokemonId, refetchForms]);

  useEffect(() => {
    // Khi pokemon thay đổi (dữ liệu từ useFetchPokemon), cập nhật currentPokemonName
    if (pokemon) {
      setCurrentPokemonName(pokemon.name); // Lấy name từ pokemon và gọi lại useFetchPokemonForms
    }
  }, [pokemon]); // Chạy lại khi pokemon được thay đổi

  const handleEvolutionPress = (evolutionId: string) => {
    // Khi nhấn vào tiến hóa, cập nhật pokemonId
    setCurrentPokemonId(evolutionId);
  };

  const handleFormPress = (FormId: string) => {
    // Khi nhấn vào tiến hóa, cập nhật pokemonId
    setCurrentPokemonId(FormId);
  };

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

      {/* Hiển thị chuỗi tiến hóa */}
      {pokemon.evolution_chain.length > 0 && (
        <EvolutionChain
          evolutionChain={pokemon.evolution_chain}
          onEvolutionPress={handleEvolutionPress}
        />
      )}

      {/* Hiển thị Pokemon Forms */}
      <PokemonForms forms={forms} isLoading={formsLoading} onPress={handleFormPress}/>
      <MoveList moves={moves} isLoading={movesLoading} />

    </ScrollView>
  );
};

export default PokemonDetailScreen;
