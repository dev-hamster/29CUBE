import { useRecoilState, useSetRecoilState } from 'recoil';
import { point as pointState } from '@/app/store';
import { Item } from '@/app/utils/type';

export default function usePoint() {
  const [point, setPoint] = useRecoilState(pointState);

  const handlePointChange = ({ type, point }: Item) => {
    setPoint((prev) => {
      const copy = [...prev];
      copy[type - 1] = point;
      return copy;
    });
  };

  return { point, setPoint, handlePointChange };
}
