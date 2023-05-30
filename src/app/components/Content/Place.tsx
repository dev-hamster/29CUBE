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
import { ContentProps } from './Content.type';

export default function Place({ point, selections }: ContentProps) {
  const nickname = useRecoilValue(nicknameState);

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
    <QuizLayout isActive={step === 2}>
      <Quiz>
        {nickname}님과 즐거운 시간을 <br />
        보낼 수 있는 곳은 어딜까요?
      </Quiz>
      <Form>
        <label htmlFor=''>함께하고 싶은 장소를 선택해 주세요.</label>
        <div className={style.container}>
          {selections.map(({ contents, type }) => (
            <div className={style.wrapper} key={type}>
              <input
                type='radio'
                id={type + ''}
                name='place'
                value={point}
                data-type={type}
                onChange={(e) => {
                  const type = parseInt(e.target.dataset.type as string);
                  const point = parseInt(e.target.value);
                  setItem({ type, point });
                }}
              />
              <label htmlFor={type + ''}>{contents}</label>
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
