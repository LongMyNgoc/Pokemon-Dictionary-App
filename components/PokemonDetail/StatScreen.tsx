import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StatProgressBar from './StatProgressBar';
import tw from 'twrnc';
import { Stats } from '@/types/PokemonDetail';

// Định nghĩa kiểu dữ liệu cho props
interface StatsProps {
  stats: Stats;
}

const StatScreen: React.FC<StatsProps> = ({ stats }) => {
  const totalStats = Object.values(stats).reduce((acc, stat) => acc + stat, 0);

  return (
    <ImageBackground
      source={require('@/assets/images/Background_Stats.png')} // <-- Thay đúng đường dẫn tới ảnh background của bạn
      resizeMode="cover"
      style={tw`mt-6 mx-4 p-4 rounded-2xl overflow-hidden`}
    >
    <View style={tw`mt-6 mx-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Stats</Text>

      <StatProgressBar statName="HP" statValue={stats.hp} maxStatValue={255} />
      <StatProgressBar statName="Attack" statValue={stats.attack} maxStatValue={255} />
      <StatProgressBar statName="Defense" statValue={stats.defense} maxStatValue={255} />
      <StatProgressBar statName="Special Attack" statValue={stats['special-attack']} maxStatValue={255} />
      <StatProgressBar statName="Special Defense" statValue={stats['special-defense']} maxStatValue={255} />
      <StatProgressBar statName="Speed" statValue={stats.speed} maxStatValue={255} />

      <View style={tw`mt-4`}>
        <Text style={tw`text-xl font-semibold`}>Total Stats: {totalStats}</Text>
      </View>
    </View>
    </ImageBackground>
  );
};

export default StatScreen;
