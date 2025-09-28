/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Dispatch, SetStateAction } from 'react';
import { useLayoutEffect, useState } from 'react';

import { getErrorMessage } from '@utils/helpers';
import { PaginatedApplication } from '@utils/types';

type OptionsType<T> = {
  initialData?: T[];
  initialResultsCount?: number;
};

export interface UseFetchPaginatedReturnType<T> {
  isLoading: boolean;
  isRefreshing: boolean;
  failedError: any;
  data: T[];
  resultsCount: number | null;
  currentPage: number;
  isLoadingMore: boolean;
  loadingMoreError: any;
  refreshError: any;
  getDataOnMount: () => Promise<void>;
  getMoreData: () => Promise<void>;
  getRefreshedData: () => Promise<void>;
  setData?: Dispatch<SetStateAction<T[]>>;
  setResultsCount: Dispatch<SetStateAction<number | null>>;
}

const useFetchPaginated = <T>(
  fetchDataCallback: (page: number) => Promise<PaginatedApplication<T>>,
  options?: OptionsType<T>
): UseFetchPaginatedReturnType<T> => {
  const { initialData, initialResultsCount } = options ?? {};
  const DEFAULT_PAGE_NUMBER = 1;

  const [data, setData] = useState<T[]>(initialData ?? []);
  const [resultsCount, setResultsCount] = useState<number | null>(
    initialResultsCount ?? null
  );
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE_NUMBER);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const [failedError, setFailedError] = useState<string | undefined>(undefined);
  const [loadingMoreError, setLoadingMoreError] = useState<string | undefined>(
    undefined
  );
  const [refreshError, setRefreshError] = useState<string | undefined>();

  const getDataOnMount = async (): Promise<void> => {
    try {
      if (failedError !== undefined) {
        setFailedError(undefined);
      }
      const res = await fetchDataCallback(DEFAULT_PAGE_NUMBER);
      setData(res.results);
      setResultsCount(res.count);
      setIsLoading(false);
      setFailedError(undefined);
    } catch (err) {
      setFailedError(getErrorMessage(err));
      setIsLoading(false);
    }
  };

  const getMoreData = async (): Promise<void> => {
    try {
      setIsLoadingMore(true);
      if (loadingMoreError !== undefined) {
        setLoadingMoreError(undefined);
      }
      const res = await fetchDataCallback(currentPage + 1);
      setCurrentPage(currentPage + 1);
      setData([...data, ...res.results]);
    } catch (err) {
      setLoadingMoreError(getErrorMessage(err));
    } finally {
      setIsLoadingMore(false);
    }
  };

  const getRefreshedData = async (): Promise<void> => {
    try {
      setIsRefreshing(true);
      if (refreshError !== undefined) {
        setRefreshError(undefined);
      }
      const res = await fetchDataCallback(DEFAULT_PAGE_NUMBER);
      setCurrentPage(DEFAULT_PAGE_NUMBER);
      setData(res.results);
      setResultsCount(res.count);
    } catch (err) {
      setRefreshError(getErrorMessage(err));
    } finally {
      setIsRefreshing(false);
    }
  };

  useLayoutEffect(() => {
    getDataOnMount();
  }, []);

  return {
    isLoading,
    isRefreshing,
    failedError,
    data,
    resultsCount,
    currentPage,
    isLoadingMore,
    loadingMoreError,
    refreshError,
    getDataOnMount,
    getMoreData,
    getRefreshedData,
    setData,
    setResultsCount
  };
};

export default useFetchPaginated;
