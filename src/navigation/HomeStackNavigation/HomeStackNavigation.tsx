import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@screens/HomeScreen/HomeScreen';
import { HOME_SCREEN } from '@utils/screenNames';

export type HomeStackParamList = {
  [HOME_SCREEN]: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigation = (): React.JSX.Element => (
  <HomeStack.Navigator
    screenOptions={{ headerShown: false, animation: 'none' }}
  >
    <HomeStack.Screen name={HOME_SCREEN} component={HomeScreen} />
  </HomeStack.Navigator>
);

export default HomeStackNavigation;
