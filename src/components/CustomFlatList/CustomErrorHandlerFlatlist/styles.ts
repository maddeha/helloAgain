import { StyleSheet } from 'react-native';

import { colors } from '@utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMessage: {
    color: colors.danger,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 24
  }
});
