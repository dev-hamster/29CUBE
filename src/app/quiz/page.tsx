'use client';

import { useRecoilValue } from 'recoil';
import {
  step as stepState,
  keysIdx as keysIdxState,
  nickname as nicknameState,
  gender as genderState,
} from '@/app/store';
import Image from 'next/image';
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
import quizContents from '@/app/utils/quizContents';
import usePageRouter from '@/app/hooks/usePageRouter';

export default function QuizLayout() {
  const step = useRecoilValue(stepState);
  const keysIdx = useRecoilValue(keysIdxState);

  const { keys } = quizContents[step];
  const { handleBack } = usePageRouter();

  const Contents = {
    Name: <Name />,
    Age: <Age />,
    Gender: <Gender />,
    Keywords: <Keywords />,
    Place: <Place />,
    Color: <Color />,
    Texture: <Texture />,
    Stuff: <Stuff />,
    Style: <Style />,
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
    </main>
  );
}
