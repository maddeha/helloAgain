import { StyleSheet } from 'react-native';

import {
  CUSTOM_FLAT_LIST_FOOTER_HEIGHT,
  DEFAULT_PADDING
} from '@utils/dimensions';

export default StyleSheet.create({
  footer: {
    padding: DEFAULT_PADDING,
    height: CUSTOM_FLAT_LIST_FOOTER_HEIGHT,
    justifyContent: 'center'
  }
});
