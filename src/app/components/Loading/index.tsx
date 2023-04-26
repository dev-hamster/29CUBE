import Image from 'next/image';
import style from './Loading.module.scss';

export default function Loading() {
  return (
    <div className={style.container}>
      <div className={style.spinner}>
        <div className={style.rotation}>
          <Image src='/images/spinner.svg' fill alt='' />
        </div>
      </div>
      <div className={style.text}>
        <p>잠시만요,</p>
        <p>큐브를 맞추고 있어요!</p>
      </div>
      <div className='tmp'>
        {/* <Image src='/images/color1.png' alt='' /> */}
      </div>
    </div>
  );
}
