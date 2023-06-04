import usePageRouter from '@/app/hooks/usePageRouter';
import { useSetRecoilState } from 'recoil';
import { nickname } from '@/app/store';
import { useState } from 'react';
import { QuizLayout } from '@/app/components/Quiz';

const MAX = 20;

export default function Name() {
  const setNickname = useSetRecoilState(nickname);
  const { step, keysIdx } = usePageRouter();
  const [isValid, setisValid] = useState(false);

  const validate = (value: string) => {
    if (value.length > 0 && value.length < MAX + 1) {
      setisValid(true);
      return;
    }
    setisValid(false);
  };

  return (
    <QuizLayout
      Quiz={
        <>
          그럼 시작해볼게요. <br /> 상대방을 뭐라고 부르며 좋을까요?
        </>
      }
      Form={
        <>
          <label htmlFor='name'>뭐든 좋아요. 애칭이 좋겠네요!</label>
          <input
            autoFocus
            id='name'
            type='text'
            maxLength={MAX}
            onChange={(e) => {
              const { value } = e.target;
              validate(value);
              setNickname(value);
            }}
          />
        </>
      }
      isActivate={step === 0 && keysIdx === 0}
      isValid={isValid}
    />
  );
}
