import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ListItem from '../src/components/listItem';
import { useNavigation } from '@react-navigation/native';

const item = {
  id: "1",
  nombre: "Cloud Bread",
  foto: "https://i.blogs.es/37cda4/tik-tok1/1366_2000.jpg",
  porciones: "9 unidades",
  ingredientes: [
    {
      ingrediente: "Eggs",
      cantidad: "3 pz"
    },
    {
      ingrediente: "Cream cheese",
      cantidad: "100 g"
    },
    {
      ingrediente: "Baking soda",
      cantidad: "1/4 teaspoon"
    }
  ]
}

jest.mock('@react-navigation/native');

test('Navigates on pressing item', () => {
  const navigateMock = jest.fn();
  useNavigation.mockReturnValue({ navigate: navigateMock });

  const { getByTestId } = render(<ListItem item={item} 
    img={item.foto}
    text={item.nombre}
    height={115}
    width={115}
    section={'TRENDING'}
    />);
  const button = getByTestId('buttonNavigation');
  fireEvent.press(button);
  
  expect(navigateMock).toHaveBeenCalledWith('Detalle', {
    item: item,
    section: 'TRENDING', // Actualiza esto según el valor de la sección en tu componente HorizontalList
  });
});
