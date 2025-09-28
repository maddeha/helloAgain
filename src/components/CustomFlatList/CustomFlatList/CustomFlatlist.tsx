/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo } from 'react';

import {
  FlatList,
  type FlatListProps,
  type ListRenderItem,
  View
} from 'react-native';

import CustomLoader from '@components/CustomLoader/CustomLoader';
import { DEFAULT_ROWS_PER_PAGE } from '@utils/constants';
import { showErrorToast } from '@utils/helpers';

import CustomErrorHandlerFlatlist from '../CustomErrorHandlerFlatlist/CustomErrorHandlerFlatlist';
import FooterFlatlist from '../FooterFlatlist/FooterFlatlist';
import RefreshControlFlatlist from '../RefreshControlFlatlist/RefreshControlFlatlist';

import styles from './styles';

const Separator = React.memo(() => <View style={styles.separator} />);

interface CustomFlatListProps<T> extends FlatListProps<T> {
  data: T[];
  isLoading?: boolean;
  isRefreshing?: boolean;
  isLoadingMore?: boolean;
  hasLoadedAll?: boolean;

  getDataOnMount?: () => void;
  getMoreData?: () => void;
  getRefreshedData?: () => void;

  failedError?: string;
  loadingMoreError?: string;
  refreshError?: string;

  renderEmptyList?: () => React.JSX.Element;
  renderItem: ListRenderItem<any>;
  onEndReachedThreshold?: number | null;
  renderCustomSkeletonLoader?: () => React.JSX.Element;

  numColumns?: number;
}
const CustomFlatlist = <T,>({
  data,
  isLoading,
  isRefreshing,
  isLoadingMore,
  getMoreData,
  renderItem,
  renderEmptyList,
  loadingMoreError,
  getDataOnMount,
  failedError,
  hasLoadedAll,
  getRefreshedData,
  refreshError,
  renderCustomSkeletonLoader,
  onEndReachedThreshold = 0.4,
  numColumns,
  ...otherProps
}: CustomFlatListProps<T>): React.JSX.Element => {
  const loadMore = (): void => {
    if (
      !isRefreshing &&
      !isLoading &&
      !isLoadingMore &&
      !hasLoadedAll &&
      !loadingMoreError &&
      data !== undefined &&
      getMoreData
    ) {
      getMoreData();
    }
  };

  const renderLoader = useCallback(() => {
    if (renderCustomSkeletonLoader) {
      return (
        <FlatList
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          numColumns={numColumns}
          data={Array.from({ length: DEFAULT_ROWS_PER_PAGE })}
          renderItem={renderCustomSkeletonLoader}
        />
      );
    }
    return (
      <View style={styles.centeredContainer}>
        <CustomLoader />
      </View>
    );
  }, [renderCustomSkeletonLoader]);

  const renderFlatlistFooter = useCallback(() => {
    return (
      <FooterFlatlist
        getMoreData={getMoreData}
        isLoadingMore={isLoadingMore}
        loadingMoreError={loadingMoreError}
      />
    );
  }, [getMoreData, isLoadingMore, loadingMoreError]);

  const renderFlatlistRefreshControl = useMemo(() => {
    return (
      <RefreshControlFlatlist
        getRefreshedData={getRefreshedData}
        isRefreshing={isRefreshing}
      />
    );
  }, [getRefreshedData, isRefreshing]);

  const renderFlatlistEmptyList = useCallback(() => {
    if (renderEmptyList) {
      return renderEmptyList();
    }
    return <></>;
  }, [renderEmptyList]);

  const renderFlatlist = useCallback(() => {
    if (failedError && data.length === 0) {
      return (
        <View style={styles.centeredContainer}>
          <CustomErrorHandlerFlatlist
            errorMessage={failedError}
            onButtonPress={getDataOnMount}
          />
        </View>
      );
    } else {
      if (isLoading) {
        return renderLoader();
      }
      return (
        <FlatList
          contentContainerStyle={[
            data.length === 0 && styles.centeredContainer,
            styles.contentContainerStyle
          ]}
          refreshControl={renderFlatlistRefreshControl}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          ListEmptyComponent={renderFlatlistEmptyList}
          renderItem={renderItem}
          ListFooterComponent={renderFlatlistFooter}
          onEndReached={loadMore}
          onEndReachedThreshold={onEndReachedThreshold}
          numColumns={numColumns}
          ItemSeparatorComponent={Separator}
          {...otherProps}
        />
      );
    }
  }, [
    failedError,
    data,
    isLoading,
    isRefreshing,
    isLoadingMore,
    getMoreData,
    renderItem,
    renderEmptyList,
    loadingMoreError,
    getDataOnMount,
    getRefreshedData,
    renderFlatlistFooter,
    onEndReachedThreshold,
    otherProps
  ]);

  useEffect(() => {
    if (refreshError) {
      showErrorToast(refreshError);
    }
  }, [refreshError]);

  useEffect(() => {
    if (failedError) {
      showErrorToast(failedError);
    }
  }, [failedError]);

  return <View style={styles.container}>{renderFlatlist()}</View>;
};

export default CustomFlatlist;
