'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/Button';
import './page.scss';
import Loading from '../components/Loading';

export default function Page() {
  const [isLoding, setIsLoaindg] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaindg(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className='result'>
      {isLoding && <Loading />}
      {!isLoding && (
        <>
          <div className='save'>
            <button className='btn'>
              <Image src='/images/save.svg' fill alt='' />
            </button>
          </div>
          <div className='title'>
            <p>응삼이님의 큐브는</p>
            <h1>열정적인 도전자</h1>
          </div>
          <div className='tmp'>임시영역</div>
          <div className='en_title'>
            <div className='box'>AVID Adventures</div>
          </div>
          <div className='desc'>
            <div className='box'>
              모험과 새로운 경험을 좋아하는 이들은 기능성이 뛰어난 아웃도어
              의류나 액티브웨어를 즐겨입어요. 활동적인 이미지를 연상시키는 레드,
              오렌지, 그린 등 밝고 활기찬 색상을 선호합니다. 자연 속에서 활동을
              즐기는 만큼, 신축성과 내구성을 갖춘 소재가 좋겠네요!
            </div>
          </div>
          <div className='figure-container'>
            <p>큐브 전개도</p>
            <div className='box'>
              <div className='figure'>{/* 전개도 */}</div>
              <div className='brand-block'>
                <div className='brands'>
                  <div className='brand'></div>
                  <div className='brand'></div>
                  <div className='brand'></div>
                </div>
                <p>
                  브랜드 설명이 두줄 쯤 되겠지 아님 세줄 브랜드 설명이 두줄 쯤
                  되겠지 아님 세줄 브랜드 설명이 두줄 쯤 되겠지
                </p>
              </div>
            </div>
          </div>
          <div className='footer'>
            <div className='share'>
              <Button isActive>큐브 공유하기</Button>
            </div>
            <Link href='/'>다시 해보기</Link>
          </div>
        </>
      )}
    </main>
  );
}
