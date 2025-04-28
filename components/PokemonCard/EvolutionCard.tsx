import React from 'react';
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { ImageBackground, Image, View, Text, TouchableOpacity } from 'react-native';
import { Evolution } from '@/types/PokemonDetail';
import { getTypeColor } from '@/utils/typeColors';
import { capitalize } from '@/utils/Capitalize';
import tw from 'twrnc';

interface EvolutionCardProps {
  evolution: Evolution;
  onPress: (pokemonId: string) => void;
}

const EvolutionCard: React.FC<EvolutionCardProps> = ({ evolution, onPress }) => {
  const hasConditions = evolution.evolution_conditions && evolution.evolution_conditions.length > 0;

  const [bgAspectRatio, setBgAspectRatio] = useState<number>(1); // tỉ lệ width / height của ảnh nền

  useEffect(() => {
    const bgImage = Image.resolveAssetSource(require('@/assets/images/Background_EvolutionCard.png'));
    if (bgImage && bgImage.width && bgImage.height) {
      setBgAspectRatio(bgImage.width / bgImage.height);
    }
  }, []);

  const [imageAspectRatio, setImageAspectRatio] = useState(1);

  useEffect(() => {
    if (evolution.image_url) {
      Image.getSize(evolution.image_url, (width, height) => {
        setImageAspectRatio(width / height);
      });
    }
  }, [evolution.image_url]);

  // Lấy width màn hình
  const screenWidth = Dimensions.get('window').width;
  const backgroundWidth = screenWidth * 1; // bạn muốn chiếm 90% width, tùy chỉnh
  const backgroundHeight = backgroundWidth / bgAspectRatio; // tính height dựa theo tỉ lệ ảnh

  return (
    <View style={tw`items-center`}>
      {hasConditions && (
        <View style={[tw`flex-row flex-wrap justify-center bg-gray-800`, { width: backgroundWidth }]}>
          <Text style={tw`w-full text-5xl font-semibold text-white text-center`}>
            ↓
          </Text>
          {evolution.evolution_conditions.map((cond, idx) => (
            <View key={idx} style={tw`items-center`}>
              <Text style={tw`text-xs text-white text-center font-bold`}>
                {cond.trigger && `${capitalize(cond.trigger)}`}
                {cond.min_level !== null && ` | Level: ${cond.min_level}`}
                {cond.item && ` | Item: ${capitalize(cond.item)}`}
                {cond.time_of_day && ` | Time of Day: ${capitalize(cond.time_of_day)}`}
                {cond.location && ` | Location: ${capitalize(cond.location)}`}
                {cond.happiness !== null && ` | Happiness: ${cond.happiness}`}
                {cond.beauty !== null && ` | Beauty: ${cond.beauty}`}
                {cond.held_item && ` | Held Item: ${capitalize(cond.held_item)}`}
                {cond.known_move && ` | Known Move: ${capitalize(cond.known_move)}`}
                {cond.known_move_type && ` | Known Move Type: ${capitalize(cond.known_move_type)}`}
              </Text>
            </View>
          ))}
        </View>
      )}

      <TouchableOpacity
        onPress={() => onPress(evolution.id)}
        style={[tw`overflow-hidden`, { width: backgroundWidth }]}
      >
        <ImageBackground
          source={require('@/assets/images/Background_EvolutionCard.png')}
          style={{
            width: backgroundWidth,
            height: backgroundHeight,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={tw`justify-center items-center mb-4`}>
            <Image
              source={{ uri: evolution.image_url }}
              style={[
                {
                  width: '50%',        // rộng 50% container
                  aspectRatio: imageAspectRatio,      // chiều cao tự động theo tỉ lệ 1:1 (nếu bạn muốn hình vuông)
                }
              ]}
            />
          </View>

          <Text
            style={[
              tw`text-xl font-bold text-white`,
              { position: 'absolute', top: 10, left: 10, maxWidth: backgroundWidth * 0.5 },
            ]}
            numberOfLines={1} // Giới hạn chỉ 1 dòng
            ellipsizeMode="tail" // Nếu vượt quá sẽ hiện "..."
          >
            {capitalize(evolution.name)}
          </Text>

          <View style={[tw`flex-row`, { position: 'absolute', top: 10, right: 10 }]}>
            {evolution.types.map((type, i) => (
              <View
                key={i}
                style={[
                  tw`px-2 py-1 rounded-full mr-2`,
                  { backgroundColor: getTypeColor(type) },
                ]}
              >
                <Text style={tw`text-white text-sm font-bold`}>{capitalize(type)}</Text>
              </View>
            ))}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(EvolutionCard);
