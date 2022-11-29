import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Constants
import Router from './router';
// Screens
import Favorites from 'src/screens/favorites';
import Home from 'src/screens/home';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name={Router.HomeScreen} component={Home} />
        <Stack.Screen name={Router.FavoriteScreen} component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
