import Quiz from '@/app/components/Quiz';
import Form from '@/app/components/Form';
import Button from '@/app/components/Button';
import usePageRouter from '@/app/hooks/usePageRouter';
import { useSetRecoilState } from 'recoil';
import { nickname } from '@/app/store';
import { useState } from 'react';
import { QuizLayout } from '@/app/components/Quiz';

const MAX = 20;

export default function Name() {
  const setNickname = useSetRecoilState(nickname);
  const { handleNext, step, keysIdx } = usePageRouter();
  const [isActive, setIsActive] = useState(false);

  const validate = (value: string) => {
    if (value.length > 0 && value.length < MAX + 1) {
      setIsActive(true);
      return;
    }
    setIsActive(false);
  };

  return (
    <QuizLayout isActive={step === 0 && keysIdx === 0}>
      <Quiz>
        그럼 시작해볼게요. <br /> 상대방을 뭐라고 부르며 좋을까요?
      </Quiz>
      <Form>
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
        <div className='next-step fixed'>
          <Button type='submit' handleClick={handleNext} isActive={isActive}>
            다음
          </Button>
        </div>
      </Form>
    </QuizLayout>
  );
}
