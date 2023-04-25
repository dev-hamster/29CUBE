'use client';

import Image from 'next/image';
import Form from '@/app/components/Form';
import Quiz from '@/app/components/Quiz';
import style from './Color.module.scss';
import { useState } from 'react';

export default function Texture() {
  const [checkedValue, setChecekdValue] = useState<null | string>(null);

  const textures = [
    { value: '1', url: '/images/texture1.png' },
    { value: '2', url: '/images/texture2.png' },
    { value: '3', url: '/images/texture3.png' },
    { value: '4', url: '/images/texture4.png' },
    { value: '5', url: '/images/texture5.png' },
    { value: '6', url: '/images/texture6.png' },
  ];

  return (
    <div>
      <Quiz>
        응삼이님을 텍스쳐로 <br />
        표현한다면 어떤 모습일까요?
      </Quiz>
      <Form>
        <label htmlFor=''>한 개의 텍스쳐를 골라주세요.</label>
        <div className={style.container}>
          {textures.map(({ value, url }) => {
            let className = '';
            if (checkedValue === null) {
              className = '';
            } else {
              className = value === checkedValue ? '' : style.notchecked;
            }
            return (
              <div key={value} className={style.color}>
                <input
                  type='radio'
                  id={value}
                  name='color'
                  value={value}
                  onChange={() => setChecekdValue(value)}
                />
                <label htmlFor={value} className={className}>
                  <Image src={url} width={136} height={136} alt='' />
                </label>
              </div>
            );
          })}
        </div>
      </Form>
    </div>
  );
}
