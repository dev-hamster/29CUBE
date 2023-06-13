import { QuizLayout } from '@/app/components/Quiz';
import { useSetRecoilState } from 'recoil';
import { gender } from '@/app/store';
import usePageRouter from '@/app/hooks/usePageRouter';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState } from '@/app/store';

export default function Gender() {
  const nickname = useRecoilValue(nicknameState);
  const setGender = useSetRecoilState(gender);
  const { step, keysIdx } = usePageRouter();
  const [isValid, setisValid] = useState(false);

  const handleChange = (value: string) => {
    validate(value);
    setGender(value);
  };

  const validate = (value: string) => {
    if (value) {
      setisValid(true);
      return;
    }
    setisValid(false);
  };

  return (
    <QuizLayout
      Quiz={
        <>
          {nickname}님의 <br /> 성별을 알려주세요.
        </>
      }
      Form={
        <>
          <label htmlFor=''>성별을 선택해 주세요!</label>
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
        </>
      }
      isActivate={step === 0 && keysIdx === 2}
      isValid={isValid}
    />
  );
}
