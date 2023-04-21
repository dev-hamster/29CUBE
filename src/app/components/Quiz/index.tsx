import style from './Quiz.module.css';

export default function Quiz({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.quiz}>
      <p>{children}</p>
    </div>
  );
}
