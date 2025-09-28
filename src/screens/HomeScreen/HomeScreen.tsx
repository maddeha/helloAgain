import React, { useCallback } from 'react';

import CustomFlatlist from '@components/CustomFlatList/CustomFlatList/CustomFlatlist';
import CustomHeader from '@components/CustomHeader/CustomHeader';
import RewardSkeleton from '@components/RewardSkeleton/RewardSkeleton';
import RewardsListItem from '@components/RewardsListItem/RewardsListItem';
import ScreenWrapper from '@components/ScreenWrapper/ScreenWrapper';
import useFetchPaginated from '@hooks/useFetchPaginated';
import { Reward } from '@models/Rewards/Rewards';
import { rewardsApi } from '@store/api/rewardsApi';
import { addReward } from '@store/features/user/userSlice';
import { useAppDispatch } from '@store/hooks';
import { REWARDS_PER_PAGE } from '@utils/constants';
import { useTranslation } from 'react-i18next';

const HomeScreen = (): React.JSX.Element => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const fetchRewards = useCallback(
    async (page: number) => {
      const payload = { page, limit: REWARDS_PER_PAGE };

      const query = dispatch(
        rewardsApi.endpoints.rewards.initiate(payload, { subscribe: false })
      );

      try {
        return await query.unwrap();
      } finally {
        query.unsubscribe();
      }
    },
    [dispatch]
  );

  const {
    data,
    failedError,
    getDataOnMount,
    getMoreData,
    getRefreshedData,
    isLoading,
    isLoadingMore,
    isRefreshing,
    loadingMoreError,
    refreshError,
    resultsCount
  } = useFetchPaginated<Reward>(fetchRewards);

  const renderCustomSkeletonLoader = useCallback(() => {
    return <RewardSkeleton />;
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Reward }) => (
      <RewardsListItem
        reward={item}
        onPress={() => {
          dispatch(addReward(item));
        }}
      />
    ),
    []
  );

  return (
    <ScreenWrapper>
      <CustomHeader title={t('home.headerTitle')} />
      <CustomFlatlist<Reward>
        data={data}
        getDataOnMount={() => {
          getDataOnMount();
        }}
        getMoreData={() => {
          getMoreData();
        }}
        getRefreshedData={() => {
          getRefreshedData();
        }}
        renderItem={renderItem}
        renderCustomSkeletonLoader={renderCustomSkeletonLoader}
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        isRefreshing={isRefreshing}
        hasLoadedAll={data.length === resultsCount}
        keyExtractor={(item: Reward) => item.id}
        refreshError={refreshError}
        failedError={failedError}
        loadingMoreError={loadingMoreError}
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;
