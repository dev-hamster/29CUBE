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
import useStepData from '@/app/hooks/useStepData';

const colors = {
  selections: [
    {
      contents: { imgUrl: '/images/step4/img2.jpg', imgId: 'img2' },
      type: 2,
    },
    {
      contents: { imgUrl: '/images/step4/img4.jpg', imgId: 'img4' },
      type: 4,
    },
    {
      contents: { imgUrl: '/images/step4/img6.jpg', imgId: 'img6' },
      type: 6,
    },
    {
      contents: { imgUrl: '/images/step4/img1.jpg', imgId: 'img1' },
      type: 1,
    },
    {
      contents: { imgUrl: '/images/step4/img3.jpg', imgId: 'img3' },
      type: 3,
    },
    {
      contents: { imgUrl: '/images/step4/img5.jpg', imgId: 'img5' },
      type: 5,
    },
  ],
  point: 2,
};

const textures = [
  { value: '1', url: '/images/texture1.png' },
  { value: '2', url: '/images/texture2.png' },
  { value: '3', url: '/images/texture3.png' },
  { value: '4', url: '/images/texture4.png' },
  { value: '5', url: '/images/texture5.png' },
  { value: '6', url: '/images/texture6.png' },
];

export default function Texture() {
  const nickname = useRecoilValue(nicknameState);
  const { getStepData } = useStepData();
  const { selections, point } = getStepData(5);

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
    <QuizLayout isActive={step === 4}>
      <Quiz>
        {nickname}을 텍스쳐로 <br />
        표현한다면 어떤 모습일까요?
      </Quiz>
      <Form>
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
                  <Image
                    src={`/images/texture${type}.png`}
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
