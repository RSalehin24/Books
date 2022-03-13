import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostBooks from './src/PostBooks';
import GetBooks from './src/GetBooks';
import MainPage from './src/MainPage';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='MainPage'>
        <Stack.Screen name='MainPage' component={MainPage} />
        <Stack.Screen name='GetBooks' component={GetBooks} />
        <Stack.Screen name='PostBooks' component={PostBooks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}