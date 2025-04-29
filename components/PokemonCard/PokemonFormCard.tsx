import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import { Pokemon } from '@/types/Pokemon'; // Đảm bảo kiểu Pokemon
import { getTypeColor } from '@/utils/typeColors'; // Hàm lấy màu theo loại
import { capitalize } from '@/utils/Capitalize'; // Hàm viết hoa đầu chữ
import tw from 'twrnc';

interface PokemonFormCardProps {
  form: Pokemon; // Dữ liệu của Pokemon form
  onPressCard: (id: string) => void;
}

const PokemonFormCard: React.FC<PokemonFormCardProps> = ({ form, onPressCard }) => {
  const [bgAspectRatio, setBgAspectRatio] = useState<number>(1); // Tỉ lệ ảnh nền
  const [imageAspectRatio, setImageAspectRatio] = useState(1);

  useEffect(() => {
    const bgImage = Image.resolveAssetSource(require('@/assets/images/Background_EvolutionCard.png')); // Hình nền của card
    if (bgImage && bgImage.width && bgImage.height) {
      setBgAspectRatio(bgImage.width / bgImage.height);
    }
  }, []);

  useEffect(() => {
    if (form.image_url) {
      Image.getSize(form.image_url, (width, height) => {
        setImageAspectRatio(width / height); // Cập nhật tỉ lệ ảnh Pokemon
      });
    }
  }, [form.image_url]);

  const screenWidth = Dimensions.get('window').width;
  const backgroundWidth = screenWidth * 1; // Chiếm 90% màn hình
  const backgroundHeight = backgroundWidth / bgAspectRatio; // Tính chiều cao từ tỉ lệ

  return (
    <TouchableOpacity onPress={() => onPressCard(form.id.toString())}>
      <View style={tw`items-center mb-6`}>
        <ImageBackground
          source={require('@/assets/images/Background_EvolutionCard.png')} // Hình nền
          style={{
            width: backgroundWidth,
            height: backgroundHeight,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <View style={tw`justify-center items-center`}>
            <Image
              source={{ uri: form.image_url }}
              style={{
                width: '50%',
                aspectRatio: imageAspectRatio,
              }}
            />
            <Text style={tw`text-xl font-bold text-white text-center`}>
              {capitalize(form.name)}
            </Text>
          </View>

          <Text
            style={[
              tw`text-xl font-bold text-white`,
              { position: 'absolute', top: 10, left: 10 },
            ]}
          >
            #{capitalize(form.id.toString())}
          </Text>

          <View style={[tw`flex-row`, { position: 'absolute', top: 10, right: 10 }]}>
            {form.types.map((type, index) => (
              <View
                key={index}
                style={[
                  tw`px-2 py-1 rounded-full mr-2`,
                  { backgroundColor: getTypeColor(type) }, // Màu sắc loại Pokemon
                ]}
              >
                <Text style={tw`text-white text-sm font-bold`}>{capitalize(type)}</Text>
              </View>
            ))}
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(PokemonFormCard);
