import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './App';

const MainAppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AppNavigator />
    </NavigationContainer>
  );
};
export default MainAppNavigator;
