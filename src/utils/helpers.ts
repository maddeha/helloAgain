import i18n from '@i18n/index';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import Toast from 'react-native-toast-message';

import { TOAST_DURATION } from './constants';
import { PaginatedApplication, PaginatedResponse } from './types';

type ErrorBody = { message?: string };

export const getErrorMessage = (err: unknown): string => {
  const fallback = i18n.t('common.somethingWrong');
  if (typeof err === 'object' && err !== null) {
    // FetchBaseQueryError → may have .data
    if ('status' in err) {
      const fbqe = err as FetchBaseQueryError;
      const data = fbqe.data as ErrorBody | string | undefined;
      if (typeof data === 'string') return data;
      return data?.message ?? fallback;
    }
    // SerializedError
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ('message' in err && typeof (err as any).message === 'string') {
      return (err as SerializedError).message!;
    }
  }
  return fallback;
};

const showToast = (message: string, type: string, title?: string): void => {
  Toast.show({
    type,
    text1: message,
    text2: title,
    autoHide: true,
    visibilityTime: TOAST_DURATION
  });
};

export const showErrorToast = (message: string): void => {
  showToast(message, 'error');
};

export const decodePaginatedResponse = <T, V>(
  serverData: PaginatedResponse<T>,
  decoder: (input: T[]) => V[]
): PaginatedApplication<V> => {
  return {
    count: serverData.count,
    results: decoder(serverData.results)
  };
};
