import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from 'Screens/Home';
import VideoList from 'Screens/VideoList';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
      }}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'VideoList'} component={VideoList} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
