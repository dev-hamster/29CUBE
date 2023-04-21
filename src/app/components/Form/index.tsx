import './Form.css';

export default function QuizForm({ children }: { children: React.ReactNode }) {
  return (
    <form className='form' action=''>
      {children}
    </form>
  );
}
