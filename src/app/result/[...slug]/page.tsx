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
  const res = await fetch(
    `${baseURL}/result/data?type=${type}&gender=${gender}`,
    {
      headers: {
        'Cache-Control': 'max-age=31536000',
      },
    }
  );
  return await res.json();
};

export default function Page({ params }: { params: { slug: string[] } }) {
  const [nickname, type, gender] = [...params.slug];
  const data = use(fetchData({ type, gender }));

  const cubeImage = data.cube_image;

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
                  <Image
                    src={`/images/result/type${type}/${gender}/cube_expansion_image1.jpg`}
                    fill
                    alt=''
                  />
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
                  <Image
                    src={`/images/result/type${type}/${gender}/cube_expansion_image2.jpg`}
                    fill
                    alt=''
                  />
                </a>
              </div>
              <div className='image right border-left'>
                <a
                  href={data.cube_expansion[2].cube_expansion_image_address}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <span className='idx'>03</span>
                  <Image
                    src={`/images/result/type${type}/${gender}/cube_expansion_image3.jpg`}
                    fill
                    alt=''
                  />
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
                  <Image
                    src={`/images/result/type${type}/${gender}/cube_expansion_image4.jpg`}
                    fill
                    alt=''
                  />
                </a>
              </div>
              <div className='image border-top border-left'>
                <a
                  href={data.cube_expansion[4].cube_expansion_image_address}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <span className='idx'>05</span>
                  <Image
                    src={`/images/result/type${type}/${gender}/cube_expansion_image5.jpg`}
                    fill
                    alt=''
                  />
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
                  <Image
                    src={`/images/result/type${type}/${gender}/cube_expansion_image6.jpg`}
                    fill
                    alt=''
                  />
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
                  <Image src={related_brand_image} alt='' fill />
                </a>
              </div>
            )
          )}
        </div>
        <p className='desc'>{data.related_brand.related_brand_description}</p>
      </div>
      <div className='footer'>
        <div className='share'>
          <Button isActive>큐브 공유하기</Button>
        </div>
        <Link href='/'>다시 해보기</Link>
      </div>
    </main>
  );
}
