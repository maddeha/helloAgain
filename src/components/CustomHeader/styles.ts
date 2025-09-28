import { StyleSheet } from 'react-native';

import { colors } from '@utils/colors';
import { DEFAULT_PADDING } from '@utils/dimensions';

export default StyleSheet.create({
  container: {
    paddingBottom: 16,
    paddingHorizontal: DEFAULT_PADDING
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
    textAlign: 'center'
  }
});
