import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import ListItem from '../src/components/listItem';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import DetailScreen from '../src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

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

test('Navigates on pressing item', () => {
  const push = jest.fn();
  const { getByTestId } = render(
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="List" component={ListItem} initialParams={{ item, section: 'RECENT' }} />
        <Stack.Screen
          name="Detalle"
          component={DetailScreen}
        />
        {/* <ListItem
          img={item.foto}
          text={item.nombre}
          item={item}
          height={115}
          width={115}
          section='RECENT'
          navigation={{ push }}
        /> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
  fireEvent.press(getByTestId('buttonNavigation'));
  expect(push).toHaveBeenCalledWith('Detalle');
});