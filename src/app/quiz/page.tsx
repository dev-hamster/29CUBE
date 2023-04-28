'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/app/components/Button';
import Process from '@/app/components/Process';
import Age from '@/app/components/Content/Age';
import Name from '@/app/components/Content/Name';
import Gender from '@/app/components/Content/Gender';
import Keywords from '@/app/components/Content/Keywords';
import Place from '@/app/components/Content/Place';
import Color from '@/app/components/Content/Color';
import Stuff from '@/app/components/Content/Stuff';
import Style from '@/app/components/Content/Style';
import Texture from '@/app/components/Content/Texture';
import './layout.css';

export default function QuizLayout() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [keysIdx, setKeyIdx] = useState(0);
  const { keys } = quizContents[step];
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');

  const Contents = {
    Name: <Name handleChange={() => {}} />,
    Age: <Age />,
    Gender: <Gender />,
    Keywords: <Keywords />,
    Place: <Place />,
    Color: <Color />,
    Texture: <Texture />,
    Stuff: <Stuff />,
    Style: <Style />,
  };

  const handleClick = () => {
    if (keysIdx == keys.length - 1) {
      if (step == quizContents.length - 1) {
        router.push('/result');
        return;
      }
      setStep((prev) => prev + 1);
      setKeyIdx(0);
      return;
    }
    setKeyIdx((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step == 0) {
      setKeyIdx((prev) => prev - 1);
      return;
    }
    if (step - 1 == 0) {
      setStep((prev) => prev - 1);
      setKeyIdx(quizContents[0].keys.length - 1);
      return;
    }
    setStep((prev) => prev - 1);
    setKeyIdx(0);
  };

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
      {Contents[keys[keysIdx] as keyof typeof Contents]}
      <div className='next-step'>
        <Button handleClick={handleClick} isActive>
          다음
        </Button>
      </div>
    </main>
  );
}

const quizContents = [
  {
    keys: ['Name', 'Age', 'Gender'],
  },
  {
    keys: ['Keywords'],
  },
  { keys: ['Place'] },
  { keys: ['Color'] },
  { keys: ['Texture'] },
  { keys: ['Stuff'] },
  { keys: ['Style'] },
];
