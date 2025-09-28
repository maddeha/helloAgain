import { StyleSheet } from 'react-native';

import { colors } from '@utils/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '500'
  },
  message: {
    fontSize: 14,
    color: colors.secondaryText
  },
  customToast: {
    width: '95%',
    padding: 16,
    backgroundColor: colors.gray,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 0.2,
    borderColor: colors.gray,
    gap: 8
  },
  error: {
    borderColor: colors.danger,
    color: colors.danger
  },
  contentContainer: {
    flex: 1
  }
});
