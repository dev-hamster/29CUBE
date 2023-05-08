'use client';
import { atom } from 'recoil';
import { Item } from '@/app/utils/type';

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

export { step, keysIdx, nickname, gender, pointHistory };
