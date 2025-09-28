import React from 'react';

import { RefreshControl } from 'react-native';

import { colors } from '@utils/colors';

type RefreshControlFlatlistProps = {
  isRefreshing?: boolean;
  getRefreshedData?: () => void;
};

const RefreshControlFlatlist: React.FC<RefreshControlFlatlistProps> = ({
  getRefreshedData,
  isRefreshing,
  ...props
}) => {
  return (
    <RefreshControl
      tintColor={colors.white}
      refreshing={isRefreshing ?? false}
      colors={[colors.white]}
      titleColor={colors.white}
      onRefresh={getRefreshedData}
      {...props}
    />
  );
};

export default RefreshControlFlatlist;
