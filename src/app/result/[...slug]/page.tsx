'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import html2canvas from 'html2canvas';
import Button from '@/app/components/Button';
import './page.scss';
import { fetchResult } from '@/api';

const screenshotId = 'screenshot';
const ballonClassName = 'ballon_title';

const onSaveAs = ({
  uri,
  filename,
  handleAfterSave,
}: {
  uri: string;
  filename: string;
  handleAfterSave?: () => void;
}) => {
  let link = document.createElement('a');
  document.body.appendChild(link);
  link.href = uri;
  link.download = filename;
  link.click();
  document.body.removeChild(link);

  if (handleAfterSave) {
    handleAfterSave();
  }
};

const onCapture = ({
  filename,
  handleAfterSave,
}: {
  filename: string;
  handleAfterSave: () => void;
}) => {
  html2canvas(document.getElementById(screenshotId) as HTMLElement).then(
    (canvas) => {
      onSaveAs({
        uri: canvas.toDataURL('image/png'),
        filename,
        handleAfterSave,
      });
    }
  );
};

const ToastBar = ({
  show = false,
  children,
}: {
  show: boolean;
  children: ReactNode;
}) => <div className={`toast ${show ? 'show' : ''}`}>{children}</div>;

export default function Page({ params }: { params: { slug: string[] } }) {
  const [nickname, type, gender] = [
    decodeURI(params.slug[0]),
    params.slug[1],
    params.slug[2],
  ];

  const [data, setData] = useState<any>();
  useEffect(() => {
    async function fetchResultAPI() {
      const data = await fetchResult({ type, gender });
      setData(data);
    }
    fetchResultAPI();
  }, [gender, type]);

  const [isCopied, setisCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isBallon, setIsBallon] = useState(true);

  const CUBE_URL = `/images/result/${type}/cube.4x.png`;
  const BG_URL = `/images/result/${type}/bg.png`;
  const CUBE_EXTENSTION_URL = (order: number) =>
    `/images/result/${type}/${gender}/${order}.png`;
  const BRAND_URL = (order: number) =>
    `/images/result/${type}/${gender}/brand${order}.png`;

  const handleShare = () => {
    window.navigator.clipboard
      .writeText(location.href)
      .then(() => setisCopied((prev) => !prev));
  };

  const handleSave = () => {
    if (isCopied) return;

    onCapture({
      filename: `${data.survey_result_user_type_en} ${nickname}`,
      handleAfterSave: () => setIsSaved(true),
    });
  };

  useEffect(() => {
    if (!isCopied) return;

    const timer = setTimeout(() => {
      setisCopied((prev) => !prev);
    }, 3000);

    return () => {
      clearTimeout(timer);
      setisCopied(false);
    };
  }, [isCopied]);

  useEffect(() => {
    if (!isSaved) return;

    const timer = setTimeout(() => {
      setIsSaved(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isSaved]);

  if (!data) return <></>;

  return (
    <main
      className='result'
      id={screenshotId}
      style={{
        background: `no-repeat center url(${BG_URL})`,
        height: '100%',
      }}
      onClick={(e) => {
        const { target } = e;
        const el = target as Element;

        if (el.classList.contains(ballonClassName)) {
          setIsBallon((prev) => !prev);
        } else {
          setIsBallon(false);
        }
      }}
    >
      <div className='save'>
        <button className='btn' onClick={handleSave}>
          <Image src='/images/save.svg' width={20} height={20} alt='' />
        </button>
      </div>

      <>
        <div className='title'>
          <p>{nickname}님의 큐브는</p>
          <h1>{data.survey_result_user_type_kr}</h1>
        </div>
        <div className='cube'>
          <Image src={CUBE_URL} fill alt='' />
        </div>
        <div className='en_title'>
          <div className='box'>{data.survey_result_user_type_en}</div>
        </div>
        <div className='desc'>
          <div className='box'>{data.survey_result_user_type_description}</div>
        </div>
        <div className='figure-container'>
          <p className={ballonClassName}>
            큐브 전개도
            <div
              className='ballon'
              style={{ visibility: isBallon ? 'visible' : 'hidden' }}
            >
              전개도를 눌러 상세페이지로 이동해 보세요.
            </div>
          </p>
          <div className='box'>
            <div className='figure'>
              <div className='block'>
                <div className='text left'>
                  <a
                    href={data.cube_expansion[0].cube_expansion_image_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <p className='brand'>
                      {data.cube_expansion[0].cube_expansion_image_name}
                    </p>
                    <p
                      className='product'
                      ref={(el) => {
                        if (el)
                          el.innerHTML =
                            data.cube_expansion[0].cube_expansion_image_description;
                      }}
                    ></p>
                  </a>
                </div>
                <div className='image'>
                  <a
                    href={data.cube_expansion[0].cube_expansion_image_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <span className='idx'>01</span>
                    <Image src={CUBE_EXTENSTION_URL(1)} fill alt='' />
                  </a>
                </div>
                <div className='text right'>
                  <a
                    href={data.cube_expansion[2].cube_expansion_image_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <p className='brand'>
                      {data.cube_expansion[2].cube_expansion_image_name}
                    </p>
                    <p
                      className='product'
                      ref={(el) => {
                        if (el)
                          el.innerHTML =
                            data.cube_expansion[2].cube_expansion_image_description;
                      }}
                    ></p>
                  </a>
                </div>
              </div>
            </div>
            <div className='figure'>
              <div className='block'>
                <div className='text left'>
                  <a
                    href={data.cube_expansion[1].cube_expansion_image_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <p className='brand'>
                      {data.cube_expansion[1].cube_expansion_image_name}
                    </p>
                  </a>
                  <p
                    className='product'
                    ref={(el) => {
                      if (el)
                        el.innerHTML =
                          data.cube_expansion[1].cube_expansion_image_description;
                    }}
                  ></p>
                </div>
                <div className='image border-top'>
                  <a
                    href={data.cube_expansion[1].cube_expansion_image_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <span className='idx'>02</span>
                    <Image src={CUBE_EXTENSTION_URL(2)} fill alt='' />
                  </a>
                </div>
                <div className='image right border-left'>
                  <a
                    href={data.cube_expansion[2].cube_expansion_image_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <span className='idx'>03</span>
                    <Image src={CUBE_EXTENSTION_URL(3)} fill alt='' />
                  </a>
                </div>
              </div>
            </div>
            <div className='figure'>
              <div className='block'>
                <div className='image left'>
                  <a
                    href={data.cube_expansion[3].cube_expansion_image_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <span className='idx'>04</span>
                    <Image src={CUBE_EXTENSTION_URL(4)} fill alt='' />
                  </a>
                </div>
                <div className='image border-top border-left'>
                  <a
                    href={data.cube_expansion[4].cube_expansion_image_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <span className='idx'>05</span>
                    <Image src={CUBE_EXTENSTION_URL(5)} fill alt='' />
                  </a>
                </div>
                <div className='text right'>
                  <a
                    href={data.cube_expansion[4].cube_expansion_image_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <p className='brand'>
                      {data.cube_expansion[4].cube_expansion_image_name}
                    </p>

                    <p
                      className='product'
                      ref={(el) => {
                        if (el)
                          el.innerHTML =
                            data.cube_expansion[4].cube_expansion_image_description;
                      }}
                    ></p>
                  </a>
                </div>
              </div>
            </div>
            <div className='figure'>
              <div className='block'>
                <div className='text left'>
                  <a
                    href={data.cube_expansion[3].cube_expansion_image_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <p className='brand'>
                      {data.cube_expansion[3].cube_expansion_image_name}
                    </p>

                    <p
                      className='product'
                      ref={(el) => {
                        if (el)
                          el.innerHTML =
                            data.cube_expansion[3].cube_expansion_image_description;
                      }}
                    ></p>
                  </a>
                </div>
                <div className='image border-top'>
                  <a
                    href={data.cube_expansion[5].cube_expansion_image_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <span className='idx'>06</span>
                    <Image src={CUBE_EXTENSTION_URL(6)} fill alt='' />
                  </a>
                </div>
                <div className='text right'>
                  <a
                    href={data.cube_expansion[5].cube_expansion_image_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <p className='brand'>
                      {data.cube_expansion[5].cube_expansion_image_name}
                    </p>

                    <p
                      className='product'
                      ref={(el) => {
                        if (el)
                          el.innerHTML =
                            data.cube_expansion[5].cube_expansion_image_description;
                      }}
                    ></p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='brand-block'>
          <p>관련 브랜드</p>
          <div className='brands'>
            {data.related_brand.brands.map(
              (
                { related_brand_image, related_brand_address }: any,
                idx: number
              ) => (
                <div key={idx} className='brand'>
                  <a
                    href={related_brand_address}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <Image src={BRAND_URL(idx + 1)} alt='' fill />
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </>

      <div className='footer'>
        <div className='share'>
          <Button isActive type='button' handleClick={handleShare}>
            큐브 공유하기
          </Button>
        </div>
        <Link href='/'>다시 해보기</Link>
        <div className='grad'></div>
      </div>
      <ToastBar show={isCopied}>링크를 저장했습니다.</ToastBar>
      <ToastBar show={isSaved}>
        <span style={{ marginRight: '16px' }}>
          <Image width={12} height={12} alt='' src='/images/check_black.svg' />
        </span>
        이미지 저장 완료
      </ToastBar>
    </main>
  );
}
