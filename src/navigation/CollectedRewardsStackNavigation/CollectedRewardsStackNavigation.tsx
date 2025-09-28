import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CollectedRewardsScreen from '@screens/CollectedRewardsScreen/CollectedRewardsScreen';
import { COLLECTED_REWARDS_SCREEN } from '@utils/screenNames';

export type CollectedRewardsStackParamList = {
  [COLLECTED_REWARDS_SCREEN]: undefined;
};

const CollectedRewardsStack =
  createNativeStackNavigator<CollectedRewardsStackParamList>();

const CollectedRewardsStackNavigation = (): React.JSX.Element => (
  <CollectedRewardsStack.Navigator
    screenOptions={{ headerShown: false, animation: 'none' }}
  >
    <CollectedRewardsStack.Screen
      name={COLLECTED_REWARDS_SCREEN}
      component={CollectedRewardsScreen}
    />
  </CollectedRewardsStack.Navigator>
);

export default CollectedRewardsStackNavigation;
