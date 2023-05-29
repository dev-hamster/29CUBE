import { formId } from '@/app/constants';
import './Form.css';

export default function QuizForm({ children }: { children: React.ReactNode }) {
  return (
    <form className='form' id={formId} onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  );
}
