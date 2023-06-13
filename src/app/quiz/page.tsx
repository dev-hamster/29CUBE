'use client';

import { useRecoilValue } from 'recoil';
import { step as stepState, keysIdx as keysIdxState } from '@/app/store';
import Image from 'next/image';
import Process from '@/app/components/Process';
import {
  Age,
  Name,
  Gender,
  Keywords,
  Place,
  Color,
  Stuff,
  Style,
  Texture,
} from '@/app/components/Quiz/Content';
import './layout.css';
import usePageRouter from '@/app/hooks/usePageRouter';
import useStepData from '@/app/hooks/useStepData';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function QuizLayout() {
  const step = useRecoilValue(stepState);
  const keysIdx = useRecoilValue(keysIdxState);
  const { steps, getStepData } = useStepData();

  const router = useRouter();

  useEffect(() => {
    if (Object.keys(steps).length !== 6) {
      router.push('/');
    }
  }, [router, steps]);

  const { handleBack } = usePageRouter();

  return (
    <main>
      <header>
        <div className='process-container'>
          <Process step={step + 1} />
        </div>
        <div className='quiz-nav'>
          {/* 첫 페이지는 뒤로가기 버튼 노출 X */}
          {!(step === 0 && keysIdx === 0) && (
            <span className='go-back' onClick={handleBack}>
              <Image
                src='/images/left-arrow.svg'
                width={8}
                height={15}
                alt=''
              />
            </span>
          )}
          <p className='name'>{step + 1} STEP</p>
        </div>
      </header>
      <Name />
      <Age />
      <Gender />
      {getStepData(2) && <Keywords {...getStepData(2)} step={2} />}
      {getStepData(3) && <Place {...getStepData(3)} step={3} />}
      {getStepData(4) && <Color {...getStepData(4)} step={4} />}
      {getStepData(5) && <Texture {...getStepData(5)} step={5} />}
      {getStepData(6) && <Stuff {...getStepData(6)} step={6} />}
      {getStepData(7) && <Style {...getStepData(7)} step={7} />}
      {/*
       */}
    </main>
  );
}
