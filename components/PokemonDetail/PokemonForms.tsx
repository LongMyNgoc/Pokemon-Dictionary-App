import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { Pokemon } from '@/types/Pokemon'; // Đảm bảo kiểu Pokemon
import PokemonFormCard from '@/components/PokemonCard/PokemonFormCard'; // Import component PokemonFormCard
import LoadingScreen from '../Loading/LoadingScreen'; // Màn hình loading
import TitleWithPokeballs from '@/components/Title/TitleWithPokeballs'; // Import component TitleWithPokeballs

interface PokemonFormsProps {
  forms: Pokemon[]; // Dữ liệu của các Pokemon form
  isLoading: boolean;
}

const PokemonForms: React.FC<PokemonFormsProps> = ({ forms, isLoading }) => {

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
          <PokemonFormCard key={form.id} form={form} /> // Hiển thị thông tin Pokemon Form
        ))
      ) : (
        // Nếu không có forms, hiển thị thông báo không tìm thấy
        <Text style={tw`text-center text-gray-500 mt-4`}>No alternate forms found.</Text>
      )}
    </View>
  );
};

export default PokemonForms;
