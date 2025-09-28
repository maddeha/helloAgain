import { StyleSheet } from 'react-native';

import { colors } from '@utils/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryPurple,
    borderRadius: 77,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600'
  }
});

export default styles;
