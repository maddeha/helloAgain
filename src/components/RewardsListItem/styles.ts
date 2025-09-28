import { StyleSheet } from 'react-native';

import { colors } from '@utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryDark,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  textContainer: {
    flex: 1
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.white
  },
  description: {
    fontSize: 12,
    color: colors.secondaryText
  },
  amount: {
    fontSize: 12,
    color: colors.primaryPurple,
    fontWeight: '600'
  },
  selected: {
    opacity: 0.5
  }
});

export default styles;
