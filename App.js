import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Inicio" component={HomeScreen}
            options={{headerShown: false, animationEnabled:true}}
          />
          <Stack.Screen name="Detalle" component={DetailScreen}
            options={{headerShown: false, animationEnabled:true,}}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
