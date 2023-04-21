import Image from 'next/image';
import Button from '@/app/components/Button';
import Process from '@/app/components/Process';
import './layout.css';

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const step = '1 STEP';

  return (
    <main>
      <header>
        <div className='process-container'>
          <Process />
        </div>
        <div className='quiz-nav'>
          <span className='go-back'>
            <Image src='/images/left-arrow.svg' width={8} height={15} alt='' />
          </span>
          <p className='name'>{step}</p>
        </div>
      </header>
      {children}
      <div className='next-step'>
        <Button>다음</Button>
      </div>
    </main>
  );
}
