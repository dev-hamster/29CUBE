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

    const point_ = [0, 0, 0, 0, 0, 0];
    history.map((items) =>
      items.map(({ type, point }) => (point_[type] += point))
    );

    for (let i = 0; i < point_.length; i += 1) {
      if (maxPoint > point_[i]) {
        type = i;
      }
    }

    return type + 1;
  };

  return {
    handlePointChange,
    handlePopHistory,
    initPoint,
    getResultType,
  };
}
