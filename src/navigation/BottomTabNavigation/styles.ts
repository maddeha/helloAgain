import { StyleSheet } from 'react-native';

import { BOTTOM_BAR_BACKGROUND_COLOR } from '@utils/constants';

const styles = StyleSheet.create({
  tabLabelStyle: {
    fontSize: 14
  },
  tabBarStyle: {
    backgroundColor: BOTTOM_BAR_BACKGROUND_COLOR,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0
  }
});

export default styles;
