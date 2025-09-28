import { StyleSheet } from 'react-native';

import { colors } from '@utils/colors';
import { DEFAULT_PADDING } from '@utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: DEFAULT_PADDING,
    backgroundColor: colors.primaryDark
  }
});
