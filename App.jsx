import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerShown: false, presentation: 'modal',
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Detalle"
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
