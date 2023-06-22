'use client';

import Image from 'next/image';
import { NextButton } from '@/app/components/Button';
import './page.scss';
import { useEffect } from 'react';
import { fetchSteps } from '@/api';
import useSteps from '@/app/hooks/useStepData';
import useInit from '@/app/hooks/useInit';
import Shadow from './components/Shadow';

export default function Page() {
  const { handleSetSteps } = useSteps();

  useInit();
  useEffect(() => {
    fetchSteps().then((data) => handleSetSteps(data));
  }, []);

  return (
    <main className='container'>
      <div className='desc'>
        <p className='test-title'>
          <span className='brand-29cm'>29CM</span> 선물하기
        </p>
        <div className='test-title-logo'>
          <Image src='/images/title.svg' fill alt='' />
        </div>
        <div className='intro-desc'>
          <p>
            뭘 주면 좋아할까요? <br />
            취향 큐브로 선물을 준비해 보세요.
          </p>
        </div>
      </div>

      <div className='gift-wrppaer'>
        <div className='gift'>
          <Shadow
            styles={{
              zIndex: 1,
              top: 0,
              height: '257px',
              rotate: '180deg',
            }}
          />
          <div className='center'>
            <Image src='/images/cube.png' fill alt='' />
          </div>
          <Shadow
            styles={{
              bottom: 0,
              zIndex: 1,
            }}
          />
        </div>
      </div>

      <div className='step-button'>
        <NextButton type='link' href='/quiz' />
      </div>
    </main>
  );
}
