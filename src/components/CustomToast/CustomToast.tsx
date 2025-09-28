import React from 'react';

import { Text, View } from 'react-native';

import CloseIcon from '@assets/icons/CloseIcon.svg';
import ErrorIcon from '@assets/icons/ErrorIcon.svg';
import { t } from 'i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast, {
  type ToastConfig,
  ToastPosition
} from 'react-native-toast-message';

import { styles } from './styles';

const CustomToastConfig: ToastConfig = {
  error: ({ text1 }) => (
    <View style={[styles.customToast, styles.error]}>
      <ErrorIcon />
      <View style={styles.contentContainer}>
        <Text style={[styles.title, styles.error]}>{t('common.error')}</Text>
        <Text style={styles.message}>{text1}</Text>
      </View>
      <CloseIcon onPress={() => Toast.hide()} />
    </View>
  )
};

export const CustomToast = ({
  position
}: {
  position?: ToastPosition;
}): React.JSX.Element => {
  const insets = useSafeAreaInsets();

  return (
    <Toast
      config={CustomToastConfig}
      position={position ?? 'top'}
      topOffset={insets.top}
      bottomOffset={150}
    />
  );
};
