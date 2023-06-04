import Image from 'next/image';
import { QuizLayout } from '@/app/components/Quiz';
import style from './Color.module.scss';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState } from '@/app/store';
import usePoint from '@/app/hooks/usePoint';
import { Item } from '@/app/utils/type';
import { ContentProps } from './Content.type';

export default function Texture({ point, selections, step }: ContentProps) {
  const nickname = useRecoilValue(nicknameState);

  const { handlePointChange } = usePoint();

  const [item, setItem] = useState<Item>();
  const [isValid, setIsValid] = useState(false);

  const validate = (value: Item) => {
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
    validate(item as Item);
  }, [item]);

  return (
    <QuizLayout
      Quiz={
        <>
          {nickname}을 텍스쳐로 <br />
          표현한다면 어떤 모습일까요?
        </>
      }
      Form={
        <>
          <label htmlFor=''>한 개의 텍스쳐를 골라주세요.</label>
          <div className={style.container}>
            {/* {textures.map(({ value, url }) => {
        let className = '';
        const checkedValue = item?.type.toString();

        if (!checkedValue) {
          className = '';
        } else {
          className = value === checkedValue ? '' : style.notchecked;
        }
        return (
          <div key={value} className={style.color}>
            <input
              type='radio'
              id={value}
              name='color'
              value={value}
              onChange={(e) => {
                const { value: type } = e.target;
                const point = 10;
                setItem({ type: parseInt(type), point });
              }}
            />
            <label htmlFor={value} className={className}>
              <Image src={url} width={136} height={136} alt='' />
            </label>
          </div>
        );
      })} */}
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
                    id={'texture' + type}
                    name='texture'
                    value={point}
                    data-type={type}
                    onChange={(e) => {
                      const { value: point } = e.target;
                      const type = parseInt(e.target.dataset.type as string);
                      setItem({ type, point: parseInt(point) });
                    }}
                  />
                  <label htmlFor={'texture' + type} className={className}>
                    <Image src={`/images/texture${type}.png`} fill alt='' />
                  </label>
                </div>
              );
            })}
          </div>
        </>
      }
      step={step}
      onSubmit={handleSubmit}
      isValid={isValid}
    />
  );
}
