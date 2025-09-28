import React from 'react';

import { SAFE_AREA_EDGES } from '@utils/constants';
import {
  SafeAreaView,
  useSafeAreaInsets
} from 'react-native-safe-area-context';

import styles from './styles';

interface ScreenWrapperProps {
  children: React.JSX.Element[] | React.JSX.Element;
}
const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      edges={SAFE_AREA_EDGES}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      {children}
    </SafeAreaView>
  );
};
export default ScreenWrapper;
