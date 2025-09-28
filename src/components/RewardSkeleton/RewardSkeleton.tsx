import React from 'react';

import { colors } from '@utils/colors';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const RewardSkeleton = (): React.JSX.Element => (
  <SkeletonPlaceholder
    highlightColor={colors.white}
    backgroundColor={colors.secondaryDark}
  >
    <SkeletonPlaceholder.Item height={100} marginBottom={8} borderRadius={10} />
  </SkeletonPlaceholder>
);

export default RewardSkeleton;
