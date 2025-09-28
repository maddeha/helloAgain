import { StyleSheet } from 'react-native';

import { DEFAULT_PADDING } from '@utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  padding: {
    padding: DEFAULT_PADDING
  },
  centeredContainer: {
    padding: DEFAULT_PADDING,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  skeletonContainer: {
    flex: 1
  },
  separator: {
    height: 8
  },
  contentContainerStyle: {
    paddingVertical: DEFAULT_PADDING
  }
});
