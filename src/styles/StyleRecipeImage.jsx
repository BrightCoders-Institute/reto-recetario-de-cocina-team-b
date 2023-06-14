import React from 'react';
import { StyleSheet, NativeModules } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const { StatusBarManager } = NativeModules;

const StyleRecipeImage = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: 'rgba(40, 40, 40,0.75)',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginHorizontal: 5,
  },
  textSection: {
    color: '#FFFFFF',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  textTitle: {
    color: '#FFFFFF',
    fontSize: 25,
  },
});

export default StyleRecipeImage;
