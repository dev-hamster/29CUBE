import Image from 'next/image';
import Button from '@/app/components/Button';
import Form from '@/app/components/Form';
import Quiz, { QuizLayout } from '@/app/components/Quiz';
import style from './Color.module.scss';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState } from '@/app/store';
import usePageRouter from '@/app/hooks/usePageRouter';
import usePoint from '@/app/hooks/usePoint';
import { Item } from '@/app/utils/type';
import { ContentProps } from './Content.type';

export default function Color({ point, selections }: ContentProps) {
  const nickname = useRecoilValue(nicknameState);

  const { handleNext, step } = usePageRouter();
  const { handlePointChange } = usePoint();

  const [item, setItem] = useState<Item>();
  const [isActive, setIsActive] = useState(false);

  const validate = (value: Item) => {
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
    validate(item as Item);
  }, [item]);

  return (
    <QuizLayout isActive={step === 3}>
      <Quiz>
        {nickname}님 하면 이런 컬러, <br /> 이 중에 있나요?
      </Quiz>
      <Form>
        <label htmlFor=''>자연스럽게 떠오르는 컬러가 좋겠어요.</label>
        <div className={style.container}>
          {selections.map(({ contents: { imgUrl: url }, type }) => {
            let className = '';
            const checkedValue = item?.type.toString();

            if (!checkedValue) {
              className = '';
            } else {
              className =
                type.toString() === checkedValue ? '' : style.notchecked;
            }
            return (
              <div key={type} className={style.color}>
                <input
                  type='radio'
                  id={'color' + type}
                  name='color'
                  value={point}
                  data-type={type}
                  onChange={(e) => {
                    const { value: point } = e.target;
                    const type = parseInt(e.target.dataset.type as string);
                    setItem({ type, point: parseInt(point) });
                  }}
                />
                <label htmlFor={'color' + type} className={className}>
                  <Image
                    src={`/images/color${type}.png`}
                    width={136}
                    height={136}
                    alt=''
                  />
                </label>
              </div>
            );
          })}
        </div>
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
      </Form>
    </QuizLayout>
  );
}
