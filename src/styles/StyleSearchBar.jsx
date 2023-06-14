import React from 'react';
import { StyleSheet } from 'react-native';

export const StyleSearchBar = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  row: {
    flexDirection: 'row',
  },
  barra: {
    backgroundColor: '#343435',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 5,
    color: '#f5fdff',
  },
  suggestionsContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: -10,
    backgroundColor: '#343435',
    borderRadius: 10,
    maxHeight: 100,
    paddingHorizontal: 7,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 370,
  },
  suggestionItem: {
    paddingVertical: 5,
  },
  suggestionText: {
    fontSize: 16,
    color: '#f5fdff',
  },
});
export default StyleSearchBar;