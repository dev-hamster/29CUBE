import Quiz, { QuizLayout } from '@/app/components/Quiz';
import Form from '@/app/components/Form';
import { useSetRecoilState } from 'recoil';
import { gender } from '@/app/store';
import Button from '@/app/components/Button';
import usePageRouter from '@/app/hooks/usePageRouter';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState } from '@/app/store';

export default function Gender() {
  const nickname = useRecoilValue(nicknameState);
  const setGender = useSetRecoilState(gender);
  const { handleNext, step, keysIdx } = usePageRouter();
  const [isActive, setIsActive] = useState(false);

  const handleChange = (value: string) => {
    validate(value);
    setGender(value);
  };

  const validate = (value: string) => {
    if (value) {
      setIsActive(true);
      return;
    }
    setIsActive(false);
  };

  return (
    <QuizLayout isActive={step === 0 && keysIdx === 2}>
      <Quiz>
        {nickname}님의 <br /> 성별을 알려주세요.
      </Quiz>
      <Form>
        <div className='gender-container'>
          <input
            type='radio'
            id='male'
            name='gender'
            value='male'
            onChange={(e) => handleChange(e.target.value)}
          />
          <label htmlFor='male'>남성</label>
          <input
            type='radio'
            id='female'
            name='gender'
            value='female'
            onChange={(e) => handleChange(e.target.value)}
          />
          <label htmlFor='female'>여성</label>
          <input
            type='radio'
            id='unknown'
            name='gender'
            value='unknown'
            onChange={() => {
              let gender = '';
              if (Math.random() > 0.5) {
                gender = 'female';
              } else {
                gender = 'male';
              }
              handleChange(gender);
            }}
          />
          <label htmlFor='unknown'>선택 안함</label>
        </div>
      </Form>
      <div className='next-step fixed'>
        <Button type='submit' handleClick={handleNext} isActive={isActive}>
          다음
        </Button>
      </div>
    </QuizLayout>
  );
}
