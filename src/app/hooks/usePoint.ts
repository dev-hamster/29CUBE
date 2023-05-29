import { useRecoilState } from 'recoil';
import { pointHistory } from '@/app/store';
import { Item } from '@/app/utils/type';

export default function usePoint() {
  const [history, sethistory] = useRecoilState(pointHistory);

  const initPoint = () => {
    sethistory([]);
  };

  const handlePushHistory = (items: Item[]) => {
    const copy = [...history];
    copy.push(items);
    sethistory(copy);
  };

  const handlePopHistory = () => {
    const copy = [...history];
    copy.pop();
    sethistory(copy);
  };

  const handlePointChange = (items_: Item | Item[]) => {
    const items = Array.isArray(items_) ? items_ : [items_];
    handlePushHistory(items);
  };

  const getResultType = () => {
    let type = 0;
    let maxPoint = 0;

    history.forEach((arr) => {
      arr.forEach((item) => {
        if (item.point > maxPoint) {
          maxPoint = item.point;
          type = item.type;
        }
      });
    });

    return type;
  };

  return {
    handlePointChange,
    handlePopHistory,
    initPoint,
    getResultType,
  };
}
