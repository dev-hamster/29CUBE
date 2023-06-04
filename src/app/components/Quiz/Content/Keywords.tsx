import { QuizLayout } from '@/app/components/Quiz';
import style from './Keywords.module.scss';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState } from '@/app/store';
import { Item } from '@/app/utils/type';
import usePoint from '@/app/hooks/usePoint';
import { ContentProps } from './Content.type';

const MAX_ITEM = 3;

export default function Keywords({ point, selections, step }: ContentProps) {
  const nickname = useRecoilValue(nicknameState);
  const { handlePointChange } = usePoint();

  const [items, setItems] = useState<Item[]>([]);
  const [isValid, setisValid] = useState(false);

  const validate = (value: any[]) => {
    if (value.length === MAX_ITEM) {
      setisValid(true);
      return;
    }
    setisValid(false);
  };

  const handleSubmit = () => {
    handlePointChange(items);
  };

  useEffect(() => {
    validate(items);
  }, [items]);

  return (
    <QuizLayout
      Quiz={
        <>
          {nickname}님은 <br />
          어떤 사람이에요?
        </>
      }
      Form={
        <>
          <label htmlFor=''>3가지 키워드를 선택해 주세요!</label>
          <div className={style.container}>
            {selections.map(({ contents, type }) => (
              <div className={style.group} key={type}>
                {contents.map((text: string, i: number) => {
                  const key = `${type}${i}`;
                  const isChecked = !!items.find(
                    ({ type: t }) => t + '' === key
                  );
                  let className =
                    items.length === MAX_ITEM && !isChecked
                      ? style.disable
                      : '';
                  return (
                    <div className={style.wrapper} key={key}>
                      <input
                        id={key}
                        type='checkbox'
                        value={point}
                        data-type={key}
                        checked={isChecked}
                        onChange={(e) => {
                          const { value: point, checked } = e.target;
                          const type = parseInt(
                            e.target.dataset.type as string
                          );

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
                      <label htmlFor={key} className={className}>
                        {text}
                      </label>
                    </div>
                  );
                })}
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
