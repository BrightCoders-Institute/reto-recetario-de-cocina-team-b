import React from 'react';
import { StyleSheet } from 'react-native';

const StyleRecipeDetail = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#282828',
  },
  textTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 10,
  },
  item: {
    flex: 1,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#2E2E2E',
    borderBottomWidth: 2,
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 16,
    paddingBottom: 15,
  },
});

export default StyleRecipeDetail;
