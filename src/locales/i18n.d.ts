import type { resources } from '@i18n';
import type { AppLanguage } from '@i18n/types';
import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['en'];
    // defaultNS: 'en';
    returnNull: false;
    lng: AppLanguage;
  }
}
