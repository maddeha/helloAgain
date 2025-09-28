import React from 'react';

import { Text, View } from 'react-native';

import styles from './styles';

type Props = {
  title?: string;
};

const CustomHeader = ({ title }: Props): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomHeader;
