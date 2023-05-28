'use client';
import { atom } from 'recoil';
import { Item, Step } from '@/app/utils/type';

const step = atom({
  key: 'step',
  default: 0,
});

const keysIdx = atom({
  key: 'keyIdx',
  default: 0,
});

const nickname = atom({
  key: 'nickname',
  default: '',
});

const gender = atom({
  key: 'gender',
  default: '',
});

const pointHistory = atom<Item[][]>({
  key: 'pointHistory',
  default: [],
});

const steps = atom<Record<string, Step>>({
  key: 'steps',
  default: {},
});

export { step, keysIdx, nickname, gender, pointHistory, steps };
