'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/Button';
import './page.scss';
import { baseURL } from '@/app/utils/constant';

const fetchData = async ({
  type,
  gender,
}: {
  type: string;
  gender: string;
}) => {
  const res = await fetch(`${baseURL}/api/result/data?`, {
    headers: {
      'Cache-Control': 'max-age=31536000',
    },
  });
  return await res.json();
};

const ToastBar = ({ children }: { children: string }) => {
  return <div className='toast'>{children}</div>;
};

export default function Page({ params }: { params: { slug: string[] } }) {
  const [nickname, type, gender] = [...params.slug];
  // const data = use(fetchData({ type, gender }));

  //const cubeImage = data.cube_image;
  const CUBE_EXTENSTION_URL = (order: number) =>
    `/images/result/${type}/${gender}/${order}.png`;
  const BRAND_URL = (order: number) =>
    `/images/result/${type}/${gender}/brand${order}.png`;

  const handleShare = () => {
    alert('aaas');
  };

  return (
    <main className='result'>
      <div className='save'>
        <button className='btn'>
          <Image src='/images/save.svg' fill alt='' />
        </button>
      </div>
      <div className='title'>
        <p>{nickname}님의 큐브는</p>
        <h1>{data.survey_result_user_type_kr}</h1>
      </div>
      <div className='tmp'>임시영역</div>
      <div className='en_title'>
        <div className='box'>{data.survey_result_user_type_en}</div>
      </div>
      <div className='desc'>
        <div className='box'>{data.survey_result_user_type_description}</div>
      </div>
      <div className='figure-container'>
        <p>큐브 전개도</p>
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
                  <p className='product'>
                    {data.cube_expansion[0].cube_expansion_image_description}
                  </p>
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
                  href={data.cube_expansion[1].cube_expansion_image_address}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <p className='brand'>
                    {data.cube_expansion[1].cube_expansion_image_name}
                  </p>
                  <p className='product'>
                    {data.cube_expansion[1].cube_expansion_image_description}
                  </p>
                </a>
              </div>
            </div>
            <div className='block'>
              <div className='text left'>
                <a
                  href={data.cube_expansion[2].cube_expansion_image_address}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <p className='brand'>
                    {data.cube_expansion[2].cube_expansion_image_name}
                  </p>
                </a>
                <p className='product'>
                  {data.cube_expansion[2].cube_expansion_image_description}
                </p>
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
                  href={data.cube_expansion[3].cube_expansion_image_address}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <p className='brand'>
                    {data.cube_expansion[3].cube_expansion_image_name}
                  </p>

                  <p className='product'>
                    {data.cube_expansion[3].cube_expansion_image_description}
                  </p>
                </a>
              </div>
            </div>
            <div className='block'>
              <div className='text left'>
                <a
                  href={data.cube_expansion[4].cube_expansion_image_address}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <p className='brand'>
                    {data.cube_expansion[4].cube_expansion_image_name}
                  </p>

                  <p className='product'>
                    {data.cube_expansion[4].cube_expansion_image_description}
                  </p>
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

                  <p className='product'>
                    {data.cube_expansion[5].cube_expansion_image_description}
                  </p>
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
        <p className='desc'>{data.related_brand.related_brand_description}</p>
      </div>
      <div className='footer'>
        <div className='share'>
          <Button isActive type='button' handleClick={handleShare}>
            큐브 공유하기
          </Button>
        </div>
        <Link href='/'>다시 해보기</Link>
        <div className='grad'></div>
      </div>
      <ToastBar>이미지 저장 완료</ToastBar>
    </main>
  );
}

const data = {
  survey_result_user_type_kr: '느긋한 평화주의자',
  survey_result_user_type_en: 'Slow Life Seeker',
  survey_result_user_type_description:
    '건강한 친환경 라이프스타일을 추구하는 이들은 자연광이 잘 드는 밝은 공간과 어울려요. 원목 가구와 녹색 식물이 어우러진 공간을 선호합니다. 린넨, 코튼, 원목 등의 자연적이고 유기적인 소재나 베이지, 화이트, 브라운, 녹색 등 따뜻한 컬러의 아이템이 좋겠네요!',
  cube_expansion: [
    {
      cube_expansion_image_name: '01 슬리피슬립',
      cube_expansion_image_description: 'SUMMER BEACH BUCKET HAT',
      cube_expansion_image_address:
        'https://product.29cm.co.kr/catalog/1985647',
    },
    {
      cube_expansion_image_name: '02 레터',
      cube_expansion_image_description: 'Muscat half knit',
      cube_expansion_image_address:
        'https://product.29cm.co.kr/catalog/1951271',
    },
    {
      cube_expansion_image_name: '03 무부',
      cube_expansion_image_description: 'Fog Layered Sling Bag (3Colors)',
      cube_expansion_image_address:
        'https://product.29cm.co.kr/catalog/1053823',
    },
    {
      cube_expansion_image_name: '04 슬로우파마씨',
      cube_expansion_image_description: '식물표본 200ml_Ruscus',
      cube_expansion_image_address:
        'https://product.29cm.co.kr/catalog/1044892',
    },
    {
      cube_expansion_image_name: '05 선샤이너',
      cube_expansion_image_description: 'DRAWSTRING PLEATS PANTS BLACK',
      cube_expansion_image_address:
        'https://product.29cm.co.kr/catalog/1531386?source=brand',
    },
    {
      cube_expansion_image_name: '06 루나샌들',
      cube_expansion_image_description: '오쏘 윙 에디션 (DESERT CANYON)',
      cube_expansion_image_address:
        'https://product.29cm.co.kr/catalog/1093351',
    },
  ],
  related_brand: {
    brands: [
      {
        related_brand_image:
          '/images/result/type3/female/related_brand_image1.jpg',
        related_brand_address: 'https://shop.29cm.co.kr/brand/4916',
      },
      {
        related_brand_image:
          '/images/result/type3/female/related_brand_image2.jpg',
        related_brand_address: 'https://shop.29cm.co.kr/brand/17943',
      },
      {
        related_brand_image:
          '/images/result/type3/female/related_brand_image3.jpg',
        related_brand_address: 'https://shop.29cm.co.kr/brand/16060',
      },
    ],
    related_brand_description:
      '지속적인 가치를 추구하는 Slow Fashion Mood를 만들어나가는 브랜드입니다. 편안하고 자연스러운 디자인으로 손이 자주 가는 제품을 지향합니다. ',
  },
  cube_image: '/images/result/type3/cube_image',
};
