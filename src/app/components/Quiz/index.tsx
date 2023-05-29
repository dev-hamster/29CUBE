import style from './Quiz.module.css';

export default function Quiz({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.quiz}>
      <p>{children}</p>
    </div>
  );
}

function QuizLayout({
  children,
  isActive = false,
}: {
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <div className={`${style.layout} ${isActive && style.show}`}>
      {children}
    </div>
  );
}

export { QuizLayout };
