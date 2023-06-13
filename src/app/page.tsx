'use client';

import Image from 'next/image';
import { NextButton } from '@/app/components/Button';
import './page.scss';
import { useEffect } from 'react';
import { fetchSteps } from '@/api';
import useSteps from '@/app/hooks/useStepData';
import useInit from '@/app/hooks/useInit';

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

      <div className='gift'>
        <Image src='/images/cube.png' fill alt='' />
      </div>

      <div className='step-button'>
        <NextButton type='link' href='/quiz' />
      </div>
    </main>
  );
}
