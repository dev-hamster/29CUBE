import Button from '@/app/components/Button';
import Form from '@/app/components/Form';
import Quiz, { QuizLayout } from '@/app/components/Quiz';
import style from './Place.module.scss';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState } from '@/app/store';
import usePageRouter from '@/app/hooks/usePageRouter';
import { useEffect, useState } from 'react';
import usePoint from '@/app/hooks/usePoint';
import { Item } from '@/app/utils/type';
import useStepData from '@/app/hooks/useStepData';

export default function Stuff() {
  const nickname = useRecoilValue(nicknameState);
  const { getStepData } = useStepData();
  const { selections, point } = getStepData(6);

  const { handleNext, step } = usePageRouter();
  const { handlePointChange } = usePoint();

  const [item, setItem] = useState<Item>();
  const [isActive, setIsActive] = useState(false);

  const validate = (value: any) => {
    if (value) {
      setIsActive(true);
      return;
    }
    setIsActive(false);
  };

  const handleSubmit = () => {
    handlePointChange(item as Item);
    handleNext();
  };

  useEffect(() => {
    validate(item);
  }, [item]);

  return (
    <QuizLayout isActive={step === 5}>
      <Quiz>
        {nickname}을 대표할 수 있는 물건, <br />
        어떤 게 있을까요?
      </Quiz>
      <Form>
        <label htmlFor=''>연상되는 물건을 골라주세요.</label>
        <div className={style.container}>
          {selections.map(({ contents, type }) => (
            <div className={style.wrapper} key={type}>
              <input
                type='radio'
                id={'stuff' + type}
                name='stuff'
                value={point}
                data-type={type}
                onChange={(e) => {
                  const type = parseInt(e.target.dataset.type as string);
                  const point = parseInt(e.target.value);
                  setItem({ type, point });
                }}
              />
              <label htmlFor={'stuff' + type}>{contents}</label>
            </div>
          ))}
        </div>
      </Form>
      <div className='next-step'>
        <Button
          type='submit'
          handleClick={() => {
            handleSubmit();
          }}
          isActive={isActive}
        >
          다음
        </Button>
      </div>
    </QuizLayout>
  );
}
