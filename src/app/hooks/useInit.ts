import usePageRouter from '@/app/hooks/usePageRouter';
import usePoint from '@/app/hooks/usePoint';
import { useEffect } from 'react';

const useInit = () => {
  const { initPoint } = usePoint();
  const { initRouter } = usePageRouter();

  useEffect(() => {
    initPoint();
    initRouter();
  }, []);
};

export default useInit;
