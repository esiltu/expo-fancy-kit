import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
