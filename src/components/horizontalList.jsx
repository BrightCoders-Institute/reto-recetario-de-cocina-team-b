import React from 'react';
import {
  FlatList, Text, View,
} from 'react-native';
import ListItem from './listItem';
import StyleHorizontalList from '../styles/StyleHorizontalList';

function HorizontalList({
  titulo, data, imgHeight, imgWidth,
}) {
  return (
    <View style={StyleHorizontalList.container}>
      <Text style={StyleHorizontalList.text}>{titulo}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem
            img={item.foto}
            text={item.nombre}
            height={imgHeight}
            width={imgWidth}
            section={titulo}
            item={item}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
}

export default HorizontalList;
