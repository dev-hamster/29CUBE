import Button from '@/app/components/Button';
import Form from '@/app/components/Form';
import Quiz from '@/app/components/Quiz';
import style from './Keywords.module.scss';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState } from '@/app/store';
import usePageRouter from '@/app/hooks/usePageRouter';
import { Item } from '@/app/utils/type';
import usePoint from '@/app/hooks/usePoint';

const MAX_ITEM = 3;
const selectionItem = {
  selections: [
    { contents: ['예술적인', '자유로운', '유니크한'], type: 4 },
    { contents: ['여유로운', '편안한', '느긋한'], type: 3 },
    { contents: ['에너제틱', '열정적인', '유쾌한'], type: 1 },
    { contents: ['이성적인', '실용적인', '스마트한'], type: 2 },
    { contents: ['감성적인', '담백한', '우아한'], type: 5 },
    { contents: ['주목받는', '사교적인', '럭셔리한'], type: 6 },
  ],
  point: 1,
};

// TODO 아이템 간격 css
// TODO 세개 이상 선택시 버퍼 과리

export default function Keywords() {
  const nickname = useRecoilValue(nicknameState);
  const { handlePointChange } = usePoint();

  const { handleNext } = usePageRouter();

  const [items, setItems] = useState<Item[]>([]);
  const [isActive, setIsActive] = useState(false);

  const { selections, point } = selectionItem;

  const validate = (value: any[]) => {
    if (value.length === MAX_ITEM) {
      setIsActive(true);
      return;
    }
    setIsActive(false);
  };

  const handleSubmit = () => {
    handlePointChange(items);
    handleNext();
  };

  useEffect(() => {
    validate(items);
  }, [items]);

  return (
    <div>
      <Quiz>
        {nickname}님은 <br />
        어떤 사람이에요?
      </Quiz>
      <Form>
        <label htmlFor=''>3가지 키워드를 선택해 주세요!</label>
        <div className={style.container}>
          {selections.map(({ contents, type }) => (
            <div className={style.group} key={type}>
              {contents.map((text, i) => (
                <div className={style.wrapper} key={`${type}${i}`}>
                  <input
                    id={`${type}${i}`}
                    type='checkbox'
                    value={point}
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
                  <label htmlFor={`${type}${i}`}>{text}</label>
                </div>
              ))}
            </div>
          ))}
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
    </div>
  );
}
