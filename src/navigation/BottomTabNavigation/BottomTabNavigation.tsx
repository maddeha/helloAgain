import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GiftIcon from '@assets/icons/GiftIcon.svg';
import HomeIcon from '@assets/icons/HomeIcon.svg';
import CollectedRewardsStackNavigation from '@navigation/CollectedRewardsStackNavigation/CollectedRewardsStackNavigation';
import HomeStackNavigation from '@navigation/HomeStackNavigation/HomeStackNavigation';
import {
  BOTTOM_BAR_ACTIVE_COLOR,
  BOTTOM_BAR_BACKGROUND_COLOR,
  BOTTOM_BAR_INACTIVE_COLOR
} from '@utils/constants';
import { BOTTOM_BAR_ICON_SIZE } from '@utils/dimensions';
import { COLLECTED_REWARDS_STACK, HOME_STACK } from '@utils/screenNames';
import { t } from 'i18next';
import { SvgProps } from 'react-native-svg';

import styles from './styles';

const Tab = createBottomTabNavigator();

const renderTabIcon = (
  Icon: React.FC<SvgProps>,
  focused: boolean
): React.JSX.Element => (
  <Icon
    width={BOTTOM_BAR_ICON_SIZE}
    height={BOTTOM_BAR_ICON_SIZE}
    color={focused ? BOTTOM_BAR_ACTIVE_COLOR : BOTTOM_BAR_INACTIVE_COLOR}
  />
);

const TabIcon = ({
  routeName,
  focused
}: {
  routeName: string;
  focused: boolean;
}): React.JSX.Element => {
  return renderTabIcon(routeName === HOME_STACK ? HomeIcon : GiftIcon, focused);
};

const BottomTabNavigation = (): React.JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }): React.JSX.Element =>
          TabIcon({ routeName: route.name, focused }),
        tabBarActiveTintColor: BOTTOM_BAR_ACTIVE_COLOR,
        tabBarInactiveTintColor: BOTTOM_BAR_INACTIVE_COLOR,
        headerShown: false,
        tabBarActiveBackgroundColor: BOTTOM_BAR_BACKGROUND_COLOR,
        tabBarInactiveBackgroundColor: BOTTOM_BAR_BACKGROUND_COLOR,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabLabelStyle
      })}
    >
      <Tab.Screen
        name={HOME_STACK}
        component={HomeStackNavigation}
        options={{ tabBarLabel: t('home.tabName') }}
      />
      <Tab.Screen
        name={COLLECTED_REWARDS_STACK}
        component={CollectedRewardsStackNavigation}
        options={{ tabBarLabel: t('collectedRewards.tabName') }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
