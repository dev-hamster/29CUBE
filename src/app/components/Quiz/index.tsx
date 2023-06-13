import style from './Quiz.module.css';
import { NextButton } from '@/app/components/Button';
import Form from '@/app/components/Form';
import usePageRouter from '@/app/hooks/usePageRouter';

export default function Quiz({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.quiz}>
      <p>{children}</p>
    </div>
  );
}

function QuizLayout({
  Quiz: QuizChidren,
  Form: FormChildren,
  step,
  isActivate = false,
  isValid,
  onSubmit,
}: {
  Quiz: React.ReactNode;
  Form: React.ReactNode;
  step?: number;
  isActivate?: boolean;
  isValid: boolean;
  onSubmit?: () => void;
}) {
  const { handleNext, step: curStep } = usePageRouter();
  const show = isActivate || curStep + 1 === step;
  const isLastPage = step === 7;

  return (
    <div className={`${style.layout} ${show && style.show}`}>
      <Quiz>{QuizChidren}</Quiz>
      <Form>{FormChildren}</Form>
      <div
        className={style.nextStep}
        style={{ display: isValid ? '' : 'none' }}
      >
        <NextButton
          type='submit'
          isActive={isValid}
          handleClick={() => {
            if (!isLastPage) handleNext();
            if (onSubmit) onSubmit();
          }}
        />
      </div>
    </div>
  );
}

export { QuizLayout };
