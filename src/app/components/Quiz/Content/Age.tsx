import { QuizLayout } from '@/app/components/Quiz';
import usePageRouter from '@/app/hooks/usePageRouter';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState } from '@/app/store';

export default function Age() {
  const nickname = useRecoilValue(nicknameState);
  const { step, keysIdx } = usePageRouter();
  const [isValid, setisValid] = useState(false);

  const validate = (value: number) => {
    if (value > 0) {
      setisValid(true);
      return;
    }
    setisValid(false);
  };

  return (
    <QuizLayout
      Quiz={
        <>
          {nickname}님은 <br /> 몇 세인가요?
        </>
      }
      Form={
        <>
          <label htmlFor='age'>만 나이를 선택해 주세요!</label>
          <input
            id='age'
            type='text'
            pattern='[0-9]*'
            onChange={(e) => validate(parseInt(e.target.value))}
          />
        </>
      }
      isActivate={step === 0 && keysIdx === 1}
      isValid={isValid}
    />
  );
}
