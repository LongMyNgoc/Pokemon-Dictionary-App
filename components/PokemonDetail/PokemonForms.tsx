import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { Pokemon } from '@/types/Pokemon'; // Đảm bảo kiểu Pokemon
import PokemonFormCard from '@/components/PokemonCard/PokemonFormCard'; // Import component PokemonFormCard
import LoadingScreen from '../Loading/LoadingScreen'; // Màn hình loading
import EmptyState from '../Loading/EmptyState';
import TitleWithPokeballs from '@/components/Title/TitleWithPokeballs'; // Import component TitleWithPokeballs

interface PokemonFormsProps {
  forms: Pokemon[]; // Dữ liệu của các Pokemon form
  isLoading: boolean;
  onPress: (pokemonId: string) => void;
}

const PokemonForms: React.FC<PokemonFormsProps> = ({ forms, isLoading, onPress }) => {

    const handleCardPress = (id: string) => {
        onPress(id);
      }; 

  if (isLoading) {
    return <LoadingScreen />; // Hiển thị LoadingScreen khi đang tải dữ liệu
  }

  return (
    <View style={tw`mt-6`}>
      {/* Sử dụng component TitleWithPokeballs để hiển thị tiêu đề */}
      <TitleWithPokeballs title="Forms" />

      {/* Kiểm tra có forms hay không, nếu có thì render các PokemonFormCard */}
      {forms.length > 0 ? (
        forms.map((form) => (
          <PokemonFormCard key={form.id} form={form} onPressCard={handleCardPress}/> // Hiển thị thông tin Pokemon Form
        ))
      ) : (
        <EmptyState />
      )}
    </View>
  );
};

export default PokemonForms;
