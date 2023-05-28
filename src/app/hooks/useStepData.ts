import { useRecoilState, useRecoilValue } from 'recoil';
import { steps as quizSteps, step as stepState } from '@/app/store';

const useStepData = () => {
  const [steps, setSteps] = useRecoilState(quizSteps);

  const handleSetSteps = (data: any) => setSteps(data);
  const getStepData = (order: number) => {
    return steps[`step${order}`];
  };

  return { getStepData, handleSetSteps };
};

export default useStepData;
