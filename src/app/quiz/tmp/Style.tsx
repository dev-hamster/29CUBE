'use client';

import Image from 'next/image';
import Form from '@/app/components/Form';
import Quiz from '@/app/components/Quiz';
import style from './Style.module.scss';
import { useEffect, useState } from 'react';

export default function Style() {
  const MAX_ITEM = 3;
  const [items, setItems] = useState<string[]>([]);

  const styles = [
    { value: '1', url: '/images/style1.png' },
    { value: '2', url: '/images/style2.png' },
    { value: '3', url: '/images/style3.png' },
    { value: '4', url: '/images/style4.png' },
    { value: '5', url: '/images/style5.png' },
    { value: '6', url: '/images/style6.png' },
  ];

  return (
    <div>
      <Quiz>
        당신이 생각하는 <br />
        응삼이만의 스타일이 있나요?
      </Quiz>
      <Form>
        <label htmlFor=''>그 모습과 가장 가까운 무드를 골라주세요.</label>
        <div className={style.container}>
          {styles.map(({ value, url }) => {
            let className =
              items.length === MAX_ITEM && !items.includes(value)
                ? style.notchecked
                : '';

            return (
              <div key={value} className={style.color}>
                <input
                  type='checkbox'
                  id={value}
                  name='color'
                  value={value}
                  checked={!!items.includes(value)}
                  onChange={(e) => {
                    const { value, checked } = e.target;
                    if (items.length == MAX_ITEM) {
                      if (items.includes(value)) {
                        const copy = items.filter((x) => x !== value);
                        setItems([...copy]);
                      } else {
                        const copy = items.slice(0, MAX_ITEM - 1);
                        setItems([...copy]);
                      }
                    }

                    if (checked) {
                      setItems((prev: string[]) => [...prev, value]);
                    } else {
                      setItems((prev) => prev.filter((x) => x !== value));
                    }
                  }}
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
