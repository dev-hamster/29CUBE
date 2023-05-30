import Image from 'next/image';
import Button from '@/app/components/Button';
import Form from '@/app/components/Form';
import Quiz, { QuizLayout } from '@/app/components/Quiz';
import style from './Style.module.scss';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState, gender as genderState } from '@/app/store';
import { Item } from '@/app/utils/type';
import usePoint from '@/app/hooks/usePoint';
import Loading from '@/app/components/Loading';
import usePageRouter from '@/app/hooks/usePageRouter';
import { ContentProps } from './Content.type';

const MAX_ITEM = 3;

export default function Style({ point, selections }: ContentProps) {
  const nickname = useRecoilValue(nicknameState);
  const gender = useRecoilValue(genderState);
  const { handlePointChange } = usePoint();
  const { step } = usePageRouter();

  const [items, setItems] = useState<Item[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validate = (value: any[]) => {
    if (value.length === MAX_ITEM) {
      setIsActive(true);
      return;
    }
    setIsActive(false);
  };

  const handleSubmit = () => {
    handlePointChange(items);
    setIsLoading(true);
  };

  useEffect(() => {
    validate(items);
  }, [items]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <QuizLayout isActive={step === 6}>
      <Quiz>
        당신이 생각하는 <br />
        {nickname}만의 스타일이 있나요?
      </Quiz>
      <Form>
        <label htmlFor=''>그 모습과 가장 가까운 무드를 골라주세요.</label>
        <div className={style.container}>
          {selections.map(({ contents: { imgUrl: url }, type }) => {
            const isChecked = !!items.find(({ type: t }) => t === type);
            let className =
              items.length === MAX_ITEM && !isChecked ? style.disable : '';

            return (
              <div key={type} className={style.color}>
                <input
                  type='checkbox'
                  id={'style' + type}
                  name='style'
                  value={point}
                  checked={isChecked}
                  data-type={type}
                  onChange={(e) => {
                    const { value: point, checked } = e.target;
                    const type = parseInt(e.target.dataset.type as string);

                    if (items.length == MAX_ITEM) {
                      const copy = !checked
                        ? items.filter(({ type: t }) => t !== type)
                        : items.slice(0, MAX_ITEM - 1);
                      setItems([...copy]);
                    }

                    if (checked) {
                      setItems((prev) => [
                        ...prev,
                        { type, point: parseInt(point) },
                      ]);
                    } else {
                      setItems((prev) =>
                        prev.filter(({ type: t }) => t !== type)
                      );
                    }
                  }}
                />
                <label htmlFor={'style' + type} className={className}>
                  <Image
                    src={`/images/${gender}-style${type}.png`}
                    width={136}
                    height={136}
                    alt=''
                  />
                </label>
              </div>
            );
          })}
        </div>
      </Form>
      <div className='next-step'>
        <Button
          type='button'
          handleClick={() => {
            handleSubmit();
          }}
          isActive={isActive}
        >
          큐브 결과 보기
        </Button>
      </div>
    </QuizLayout>
  );
}
