import{ NavigationContainer } from '@react-navigation/native' //importa la barra de navegación
import { createStackNavigator} from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={HomeScreen}/>
          <Stack.Screen name="Detalle" component={DetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
