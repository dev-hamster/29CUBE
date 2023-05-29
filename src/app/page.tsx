'use client';

import Image from 'next/image';
import Button from '@/app/components/Button';
import './page.scss';
import usePoint from '@/app/hooks/usePoint';
import { use, useEffect } from 'react';
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
          <span className='brand-29cm'>29CM</span> 취향 테스트
        </p>
        <div className='test-title-logo'>
          <Image src='/images/title.svg' fill alt='' />
        </div>
      </div>
      <div className='gift'>
        <Image src='/images/cube.png' fill alt='' />
      </div>
      <div className='intro-desc'>
        <p>
          취향 테스트로 친구에게 <br /> 잘 어울리는 선물을 맞춰보세요.
        </p>
      </div>
      <div className='step-button'>
        <Button type='link' href='/quiz'>
          테스트 시작하기
        </Button>
      </div>
    </main>
  );
}
