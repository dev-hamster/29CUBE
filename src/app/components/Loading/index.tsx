import Image from 'next/image';
import Lottie from 'lottie-react';
import style from './Loading.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { gender as genderState, nickname as nicknameState } from '@/app/store';
import usePoint from '@/app/hooks/usePoint';
import animationData from './loading.json';

export default function Loading() {
  const router = useRouter();
  const nickname = useRecoilValue(nicknameState);
  const gender = useRecoilValue(genderState);
  const { getResultType } = usePoint();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`/result/${nickname}/${getResultType()}/${gender}`);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
      <Lottie className={style.loading} animationData={animationData} />
    </div>
  );
}
