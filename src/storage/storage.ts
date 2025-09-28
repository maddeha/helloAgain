import AsyncStorage from '@react-native-async-storage/async-storage';

import storageKeys from './storageKeys';

type Value = string | null;

export const setItem = async (key: string, value: string): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error(`[setItem] Error setting key "${key}":`, error);
    return false;
  }
};

export const getItem = async (key: string): Promise<Value> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(`[getItem] Error getting key "${key}":`, error);
    return null;
  }
};

export const removeItem = async (key: string): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`[removeItem] Error removing key "${key}":`, error);
    return false;
  }
};

export const getStoredLanguage = (): Promise<Value> =>
  getItem(storageKeys.LANGUAGE);
export const setStoredLanguage = (lang: string): Promise<boolean> =>
  setItem(storageKeys.LANGUAGE, lang);
export const removeStoredLanguage = (): Promise<boolean> =>
  removeItem(storageKeys.LANGUAGE);
