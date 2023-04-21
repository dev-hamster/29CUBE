import style from './Process.module.css';

export default function Process() {
  return (
    <div className={style.process}>
      <div className={`${style.gauge} ${style.active}`} />
      <div className={style.gauge} />
      <div className={style.gauge} />
      <div className={style.gauge} />
      <div className={style.gauge} />
      <div className={style.gauge} />
      <div className={style.gauge} />
    </div>
  );
}
