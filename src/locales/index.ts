import { getStoredLanguage, setStoredLanguage } from '@storage/storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './en/en';
import fr from './fr/fr';

export const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
} as const;

export type AppLanguage = keyof typeof resources;

export const getLanguage = async (): Promise<AppLanguage | null> => {
  try {
    const value = await getStoredLanguage();
    if (value && Object.keys(resources).includes(value)) {
      return value as AppLanguage;
    }
  } catch (e) {
    console.warn('Failed to get stored language', e);
  }
  return null;
};

export const setLanguage = async (lang: AppLanguage): Promise<void> => {
  await i18n.changeLanguage(lang);
  await setStoredLanguage(lang);
};

// 👇 Initialize i18n
export const initI18n = async (): Promise<void> => {
  const storedLang = await getLanguage();

  const fallbackLang: AppLanguage = 'en';
  const bestLang =
    storedLang ??
    RNLocalize.findBestLanguageTag(Object.keys(resources))?.languageTag ??
    fallbackLang;

  await i18n.use(initReactI18next).init({
    lng: bestLang,
    fallbackLng: fallbackLang,
    ns: ['translation'],
    defaultNS: 'translation',
    resources,
    interpolation: {
      escapeValue: false
    }
  });
};

export default i18n;
