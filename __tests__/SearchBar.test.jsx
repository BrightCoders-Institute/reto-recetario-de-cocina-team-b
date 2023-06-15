import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBar from '../src/components/SearchBar';

// Hacemos el mocking de los módulos 'react-native' y '@react-navigation/native'
jest.unstable_mockModule('react-native', () => ({
  TextInput: 'MockedTextInput',
  View: 'MockedView',
  TouchableOpacity: 'MockedTouchableOpacity',
  Text: 'MockedText',
}));

jest.unstable_mockModule('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));

describe('SearchBar', () => {
  const recipes = [
    { id: 5, nombre: 'Birriamen' },
    { id: 2, nombre: 'Baked Oatmeal' },
    { id: 3, nombre: 'Pasta Chips' },
    { id: 4, nombre: 'Mug Cake' },
  ];

  it('filters recipes based on search term', () => {
    const setFilteredRecipesMock = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchBar recipes={recipes} setFilteredRecipes={setFilteredRecipesMock} />
    );

    const searchInput = getByPlaceholderText('What do you want to eat? ');

    fireEvent.changeText(searchInput, 'b');

    expect(setFilteredRecipesMock).toHaveBeenCalledWith([
      { id: 4, nombre: 'Birriamen' },
      { id: 2, nombre: 'Baked Oatmeal' },
    ]);
  });

  it('displays suggestions when search term is entered', () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchBar recipes={recipes} setFilteredRecipes={() => {}} />
    );

    const searchInput = getByPlaceholderText('What do you want to eat? ');

    fireEvent.changeText(searchInput, 'p');

    expect(getByText('Pasta Chips')).toBeTruthy();
  });

  it('navigates to detail screen when suggestion is pressed', () => {
    const setFilteredRecipesMock = jest.fn();
    const navigateMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <SearchBar
        recipes={recipes}
        setFilteredRecipes={setFilteredRecipesMock}
        navigation={{ navigate: navigateMock }}
      />
    );

    const searchInput = getByPlaceholderText('What do you want to eat? ');

    fireEvent.changeText(searchInput, 'm');

    const suggestionItem = getByText('Mug Cake');

    fireEvent.press(suggestionItem);

    expect(setFilteredRecipesMock).toHaveBeenCalledWith([{ id: 4, nombre: 'Mug Cake' }]);
    expect(navigateMock).toHaveBeenCalledWith('Detalle', {
      item: { id: 4, nombre: 'Mug Cake' },
      section: 'suggestions',
    });
  });
});
