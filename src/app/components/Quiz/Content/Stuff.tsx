import { QuizLayout } from '@/app/components/Quiz';
import style from './Place.module.scss';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState } from '@/app/store';
import { useEffect, useState } from 'react';
import usePoint from '@/app/hooks/usePoint';
import { Item } from '@/app/utils/type';
import { ContentProps } from './Content.type';

export default function Stuff({ point, selections, step }: ContentProps) {
  const nickname = useRecoilValue(nicknameState);

  const { handlePointChange } = usePoint();

  const [item, setItem] = useState<Item>();
  const [isValid, setIsValid] = useState(false);

  const validate = (value: any) => {
    if (value) {
      setIsValid(true);
      return;
    }
    setIsValid(false);
  };

  const handleSubmit = () => {
    handlePointChange(item as Item);
  };

  useEffect(() => {
    validate(item);
  }, [item]);

  return (
    <QuizLayout
      Quiz={
        <>
          {nickname}을 대표할 수 있는 물건, <br />
          어떤 게 있을까요?
        </>
      }
      Form={
        <>
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
        </>
      }
      onSubmit={handleSubmit}
      isValid={isValid}
      step={step}
    />
  );
}
