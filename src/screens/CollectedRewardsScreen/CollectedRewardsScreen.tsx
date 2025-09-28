import { useCallback } from 'react';

import { Text } from 'react-native';

import CustomFlatlist from '@components/CustomFlatList/CustomFlatList/CustomFlatlist';
import CustomHeader from '@components/CustomHeader/CustomHeader';
import RewardsListItem from '@components/RewardsListItem/RewardsListItem';
import ScreenWrapper from '@components/ScreenWrapper/ScreenWrapper';
import { Reward } from '@models/Rewards/Rewards';
import { selectUser } from '@store/features/user/userSlice';
import { useAppSelector } from '@store/hooks';
import { useTranslation } from 'react-i18next';

import styles from './styles';

const CollectedRewardsScreen = (): React.JSX.Element => {
  const { t } = useTranslation();

  const collectedRewards = useAppSelector(selectUser).rewards;

  const renderItem = useCallback(
    ({ item }: { item: Reward }) => <RewardsListItem reward={item} />,
    []
  );

  const renderEmptyList = useCallback(
    () => (
      <Text style={styles.emptyListText}>
        {t('collectedRewards.emptyListText')}
      </Text>
    ),
    []
  );

  return (
    <ScreenWrapper>
      <CustomHeader title={t('collectedRewards.headerTitle')} />
      <CustomFlatlist<Reward>
        data={collectedRewards}
        renderItem={renderItem}
        renderEmptyList={renderEmptyList}
      />
    </ScreenWrapper>
  );
};

export default CollectedRewardsScreen;
