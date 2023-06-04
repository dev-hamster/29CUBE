import { QuizLayout } from '@/app/components/Quiz';
import style from './Place.module.scss';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState } from '@/app/store';
import { useEffect, useState } from 'react';
import usePoint from '@/app/hooks/usePoint';
import { Item } from '@/app/utils/type';
import { ContentProps } from './Content.type';

export default function Place({ point, selections, step }: ContentProps) {
  const nickname = useRecoilValue(nicknameState);

  const { handlePointChange } = usePoint();

  const [item, setItem] = useState<Item>();
  const [isValid, setisValid] = useState(false);

  const validate = (value: any) => {
    if (value) {
      setisValid(true);
      return;
    }
    setisValid(false);
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
          {nickname}님과 즐거운 시간을 <br />
          보낼 수 있는 곳은 어딜까요?
        </>
      }
      Form={
        <>
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
        </>
      }
      step={step}
      isValid={isValid}
      onSubmit={handleSubmit}
    />
  );
}
