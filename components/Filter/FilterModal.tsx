// FilterModal.tsx
import React from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

interface FilterModalProps {
  visible: boolean;
  data: string[];
  onSelect: (value: string) => void;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, data, onSelect, onClose }) => {
  const renderItem = (item: string) => (
    <TouchableOpacity
      style={tw`p-4 border-b border-gray-200`}
      onPress={() => {
        onSelect(item);
        onClose(); // Đóng modal sau khi chọn item
      }}
    >
      <Text style={tw`text-lg`}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={tw`flex-1 justify-end bg-black opacity-50`} onTouchEnd={onClose} />
      <View style={tw`bg-white p-4 rounded-t-lg`}>
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    </Modal>
  );
};

export default FilterModal;
