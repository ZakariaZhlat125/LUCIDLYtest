// modalState.ts
import { atom } from 'recoil';

export const currentPageState = atom<number>({
    key: 'currentPageState',
    default: 1,
});

export const inputValueNameState = atom<string>({
    key: 'inputValueNameState',
    default: '',
});

export const inputValueLangState = atom<string>({
    key: 'inputValueLangState',
    default: '',
});

export const inputValueCountryState = atom<string>({
    key: 'inputValueCountryState',
    default: '',
});

export const selectedItemsState = atom<string[]>({
    key: 'selectedItemsState',
    default: [],
});
