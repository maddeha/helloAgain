import React from 'react';

import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import styles from './styles';

type Props = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  buttonHeight?: number;
};

const CustomButton = ({
  title,
  onPress,
  style,
  textStyle,
  buttonHeight
}: Props): React.JSX.Element => {
  return (
    <TouchableOpacity
      style={[styles.button, style, { height: buttonHeight ?? 40 }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
