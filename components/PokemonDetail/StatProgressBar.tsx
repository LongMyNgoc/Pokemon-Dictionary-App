import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

interface StatProgressBarProps {
  statName: string;
  statValue: number;
  maxStatValue: number;
}

const StatProgressBar: React.FC<StatProgressBarProps> = ({ statName, statValue, maxStatValue }) => {
  const progress = (statValue / maxStatValue) * 100;

  // Hàm chọn màu động với tw
  const getProgressColor = (statValue: number) => {
    if (statValue >= 100) return 'bg-green-500'; // Xanh lá khi >= 75%
    if (statValue >= 50) return 'bg-yellow-400'; // Vàng khi >= 50%
    return 'bg-red-500';                    // Đỏ nếu thấp hơn 50%
  };

  const progressColor = getProgressColor(statValue);

  return (
    <View style={tw`mb-4`}>
      {/* Tiêu đề và chỉ số */}
      <View style={tw`flex-row justify-between items-center mb-2`}>
        <Text style={tw`text-gray-600 font-semibold`}>
          {statName}
        </Text>
        <Text style={tw`text-lg font-bold`}>
          {statValue}
        </Text>
      </View>

      {/* Progress bar */}
      <View style={tw`h-2 bg-gray-200 rounded-full overflow-hidden`}>
        <View
          style={[tw`${progressColor} h-full rounded-full`, { width: `${progress}%` }]}
        />
      </View>
    </View>
  );
};

export default StatProgressBar;
