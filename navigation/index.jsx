import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';

import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

export default function RootStack() {
  const [isShowSplash, setIsShowSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false)
    }, 6000)
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isShowSplash ?
          <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
          :
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
