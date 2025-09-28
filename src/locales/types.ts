/* eslint-disable @typescript-eslint/no-explicit-any */
import { TranslationsType } from './en/en';
import type { resources } from './index';

// 👇 This gives you the type of a full translation object
export type Translations = (typeof resources)['en'];

// 👇 Recursive path builder
export type TxKeyPath = RecursiveKeyOf<TranslationsType>;

type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `.${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string
> = TValue extends any[]
  ? Text
  : TValue extends object
    ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
    : Text;
