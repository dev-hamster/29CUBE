import Image from 'next/image';
import { QuizLayout } from '@/app/components/Quiz';
import style from './Color.module.scss';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState, gender as genderState } from '@/app/store';
import { Item } from '@/app/utils/type';
import usePoint from '@/app/hooks/usePoint';
import Loading from '@/app/components/Loading';
import { ContentProps } from './Content.type';

export default function Style({ point, selections, step }: ContentProps) {
  const nickname = useRecoilValue(nicknameState);
  const gender = useRecoilValue(genderState);
  const { handlePointChange } = usePoint();

  const [item, setItem] = useState<Item>();
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validate = (value: Item) => {
    if (value) {
      setIsValid(true);
      return;
    }
    setIsValid(false);
  };

  const handleSubmit = () => {
    handlePointChange(item as Item);
    setIsLoading(true);
  };

  useEffect(() => {
    validate(item as Item);
  }, [item]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <QuizLayout
      Quiz={
        <>
          당신이 생각하는 <br />
          {nickname}만의 스타일이 있나요?
        </>
      }
      Form={
        <>
          <label htmlFor=''>그 모습과 가장 가까운 무드를 골라주세요.</label>
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
                    id={'style' + type}
                    name='style'
                    value={point}
                    data-type={type}
                    onChange={(e) => {
                      const { value: point } = e.target;
                      const type = parseInt(e.target.dataset.type as string);
                      setItem({ type, point: parseInt(point) });
                    }}
                  />
                  <label htmlFor={'style' + type} className={className}>
                    <Image
                      src={`/images/${gender}-style${type}.png`}
                      fill
                      alt=''
                    />
                  </label>
                </div>
              );
            })}
          </div>
        </>
      }
      step={step}
      isValid={isValid}
      onSubmit={handleSubmit}
    />
  );
}
