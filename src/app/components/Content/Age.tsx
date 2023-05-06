import Quiz from '@/app/components/Quiz';
import Form from '@/app/components/Form';
import usePageRouter from '@/app/hooks/usePageRouter';
import Button from '@/app/components/Button';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState } from '@/app/store';

export default function Age() {
  const nickname = useRecoilValue(nicknameState);
  const { handleNext } = usePageRouter();
  const [isActive, setIsActive] = useState(false);

  const validate = (value: number) => {
    if (value > 0) {
      setIsActive(true);
      return;
    }
    setIsActive(false);
  };

  return (
    <div>
      <Quiz>
        {nickname}님은 <br /> 몇 세인가요?
      </Quiz>
      <Form>
        <label htmlFor='age'>만 나이를 선택해 주세요!</label>
        <input
          id='age'
          type='text'
          pattern='[0-9]*'
          onChange={(e) => validate(parseInt(e.target.value))}
        />
        {/* <select name='age' id='age'>
          <option value=''>--Please choose an option--</option>
          <option value='1'>0</option>
          <option value='2'>1</option>
        </select> */}
        <div className='next-step'>
          <Button type='submit' handleClick={handleNext} isActive={isActive}>
            다음
          </Button>
        </div>
      </Form>
    </div>
  );
}
