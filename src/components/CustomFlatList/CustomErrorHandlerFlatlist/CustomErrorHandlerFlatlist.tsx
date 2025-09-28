import React from 'react';

import { Text, View } from 'react-native';

import CustomButton from '@components/CustomButton/CustomButton';
import { useTranslation } from 'react-i18next';

import styles from './styles';

interface CustomErrorHandlerFlatlistProps {
  errorMessage: string;
  onButtonPress?: () => void;
}

const CustomErrorHandlerFlatlist: React.FC<CustomErrorHandlerFlatlistProps> = ({
  errorMessage,
  onButtonPress
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      {onButtonPress && (
        <CustomButton title={t('common.retry')} onPress={onButtonPress} />
      )}
    </View>
  );
};

export default CustomErrorHandlerFlatlist;
