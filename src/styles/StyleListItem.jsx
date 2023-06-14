import React from 'react';
import { StyleSheet } from 'react-native';

function StyleListItem({ height, width }) {
  return StyleSheet.create({
    container: {
      marginLeft: 10,
      marginTop: 15,
      flex: 1,
    },
    text: {
      fontSize: 13,
      color: '#FFFFFF',
      marginBottom: 25,
    },
    img: {
      borderRadius: 4,
      height: height,
      width: width,
      marginBottom: 10,
    },
  });
}

export default StyleListItem;
