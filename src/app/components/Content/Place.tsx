import Button from '@/app/components/Button';
import Form from '@/app/components/Form';
import Quiz from '@/app/components/Quiz';
import style from './Place.module.scss';
import { useRecoilValue } from 'recoil';
import { nickname as nicknameState } from '@/app/store';
import usePageRouter from '@/app/hooks/usePageRouter';
import { useEffect, useState } from 'react';
import usePoint from '@/app/hooks/usePoint';
import { Item } from '@/app/utils/type';

const tmp = {
  selections: [
    { contents: '차분한 모노톤으로 깔끔하게 디자인된 카페', type: 5 },
    { contents: '유리창 가득 오션 뷰가 펼쳐진 럭셔리 풀빌라', type: 2 },
    { contents: '스마트 기기 체험 존이 있는 테크 쇼핑몰', type: 6 },
    { contents: '초록 식물 사이로 햇살이 비치는 우드톤의 실내', type: 3 },
    { contents: '문화적인 경험을 다채롭게 즐길 수 있는 갤러리', type: 4 },
    { contents: '탁 트인 자연의 풍경을 즐길 수 있는 캠핑장', type: 1 },
  ],
  point: 1,
};

export default function Place() {
  const nickname = useRecoilValue(nicknameState);
  const { selections, point } = tmp;

  const { handleNext } = usePageRouter();
  const { handlePointChange } = usePoint();

  const [item, setItem] = useState<Item>();
  const [isActive, setIsActive] = useState(false);

  const validate = (value: any) => {
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
    validate(item);
  }, [item]);

  return (
    <div>
      <Quiz>
        {nickname}님과 즐거운 시간을 <br />
        보낼 수 있는 곳은 어딜까요?
      </Quiz>
      <Form>
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
