'use client';

import Image from 'next/image';
import Form from '@/app/components/Form';
import Quiz from '@/app/components/Quiz';
import style from './Color.module.scss';
import { useState } from 'react';

export default function Color() {
  const [checkedValue, setChecekdValue] = useState<null | string>(null);

  const colors = [
    { value: '1', url: '/images/color1.png' },
    { value: '2', url: '/images/color2.png' },
    { value: '3', url: '/images/color3.png' },
    { value: '4', url: '/images/color4.png' },
    { value: '5', url: '/images/color5.png' },
    { value: '6', url: '/images/color6.png' },
  ];

  return (
    <div>
      <Quiz>
        응삼이님 하면 이런 컬러, <br /> 이 중에 있나요?
      </Quiz>
      <Form>
        <label htmlFor=''>자연스럽게 떠오르는 컬러가 좋겠어요.</label>
        <div className={style.container}>
          {colors.map(({ value, url }) => {
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
