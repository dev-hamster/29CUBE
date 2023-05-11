import Image from 'next/image';
import Button from '@/app/components/Button';
import Form from '@/app/components/Form';
import Quiz from '@/app/components/Quiz';
import style from './Style.module.scss';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { gender as genderState, nickname as nicknameState } from '@/app/store';
import { Item } from '@/app/utils/type';
import { useRouter } from 'next/navigation';
import usePoint from '@/app/hooks/usePoint';
import Loading from '@/app/components/Loading';

const tmp = {
  selections: [
    {
      contents: { imgUrl: '/images/style1.png', imgId: 'img2' },
      type: 2,
    },
    {
      contents: { imgUrl: '/images/style2.png', imgId: 'img4' },
      type: 4,
    },
    {
      contents: { imgUrl: '/images/style3.png', imgId: 'img6' },
      type: 6,
    },
    {
      contents: { imgUrl: '/images/style4.png', imgId: 'img1' },
      type: 1,
    },
    {
      contents: { imgUrl: '/images/style5.png', imgId: 'img3' },
      type: 3,
    },
    {
      contents: { imgUrl: '/images/style6.png', imgId: 'img5' },
      type: 5,
    },
  ],
  point: 2,
};

const MAX_ITEM = 3;

// TODO
export default function Style() {
  const router = useRouter();
  const nickname = useRecoilValue(nicknameState);
  const gender = useRecoilValue(genderState);
  const { handlePointChange, getResultType } = usePoint();

  const { selections, point } = tmp;
  const [items, setItems] = useState<Item[]>([]);
  const [isActive, setIsActive] = useState(false);

  const validate = (value: any[]) => {
    if (value.length === MAX_ITEM) {
      setIsActive(true);
      return;
    }
    setIsActive(false);
  };

  const handleSubmit = () => {
    handlePointChange(items);
    router.push(`/result/${nickname}/${getResultType()}/${gender}`);
  };

  useEffect(() => {
    validate(items);
  }, [items]);

  return (
    <div>
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
                  id={type + ''}
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
                <label htmlFor={type + ''} className={className}>
                  <Image src={url} width={136} height={136} alt='' />
                </label>
              </div>
            );
          })}
        </div>
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
      </Form>
    </div>
  );
}
