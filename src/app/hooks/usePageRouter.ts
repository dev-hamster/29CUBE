'use client';
import { useRecoilState } from 'recoil';
import { keysIdx as keysIdxState, step as stepState } from '@/app/store';
import { useRouter } from 'next/navigation';
import quizContents from '@/app/utils/quizContents';

const usePageRouter = () => {
  const router = useRouter();
  const [keysIdx, setKeysIdx] = useRecoilState(keysIdxState);
  const [step, setStep] = useRecoilState(stepState);
  const { keys } = quizContents[step];

  const handleNext = () => {
    if (keysIdx == keys.length - 1) {
      console.log(step);
      if (step == quizContents.length - 1) {
        router.push('/result');
        return;
      }
      setStep(step + 1);
      setKeysIdx(0);
      return;
    }
    setKeysIdx((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step == 0) {
      setKeysIdx((prev) => prev - 1);
      return;
    }
    if (step - 1 == 0) {
      setStep((prev) => prev - 1);
      setKeysIdx(quizContents[0].keys.length - 1);
      return;
    }
    setStep((prev) => prev - 1);
    setKeysIdx(0);
  };

  return { handleNext, handleBack };
};

export default usePageRouter;
