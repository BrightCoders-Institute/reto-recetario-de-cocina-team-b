import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyleListItem from '../styles/StyleListItem';

const ListItem = ({ img, text, item, height, width, section }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={StyleListItem({ height, width }).container}
      onPress={() => navigation.navigate('Detalle', { item, section })}
    >
      <Image
        style={StyleListItem({ height, width }).img}
        source={{
          uri: img,
        }}
      />
      <Text style={StyleListItem({ height, width }).text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
