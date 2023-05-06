'use client';
import { atom } from 'recoil';

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

const point = atom({
  key: 'point',
  default: [0, 0, 0, 0, 0, 0],
});

export { step, keysIdx, nickname, gender, point };
