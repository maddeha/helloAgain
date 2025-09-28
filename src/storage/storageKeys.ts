const storageKeys = {
  LANGUAGE: 'app-language'
} as const;

export type StorageKey = keyof typeof storageKeys;

export default storageKeys;
