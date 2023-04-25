import style from './Process.module.css';

export default function Process({ step }: { step: number }) {
  const processArr = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={style.process}>
      {processArr.map((step_) => (
        <div
          key={step_}
          className={`${style.gauge} ${step_ === step ? style.active : ''}`}
        />
      ))}
    </div>
  );
}
