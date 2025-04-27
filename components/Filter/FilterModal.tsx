// components/FilterModal.tsx
import React from 'react';
import { View, Text, Button, Modal, ScrollView } from 'react-native';
import tw from 'twrnc';

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
  title: string;
  options: string[];
  onSelect: (value: string) => void;
};

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose, title, options, onSelect }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      transparent={true}
    >
      <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
        <View style={tw`w-3/4 bg-white p-4 rounded-lg`}>
          <Text style={[tw`text-lg mb-4`, { fontWeight: 'bold', color: '#333' }]}>{title}</Text>

          {/* Thêm ScrollView để có thể cuộn danh sách */}
          <ScrollView style={tw`max-h-60`}>
            {options.map((option, index) => (
              <Button key={index} title={option} onPress={() => { onSelect(option); onClose(); }} />
            ))}
          </ScrollView>

          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
