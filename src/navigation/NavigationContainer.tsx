import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigation from './BottomTabNavigation/BottomTabNavigation';
import { navigationRef } from './RootNavigation';

function Navigation(): React.JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
