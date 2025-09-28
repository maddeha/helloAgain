import React from 'react';

import { ActivityIndicator } from 'react-native';

import { colors } from '@utils/colors';

interface CustomLoaderProps {
  size?: number;
  color?: string;
}

const CustomLoader = ({
  size,
  color
}: CustomLoaderProps): React.JSX.Element => {
  return (
    <ActivityIndicator
      color={color ?? colors.primaryPurple}
      size={size ?? 'small'}
    />
  );
};

export default CustomLoader;
