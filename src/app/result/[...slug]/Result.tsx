import { fetchResult } from '@/api';
import Image from 'next/image';

const Result = async ({
  nickname,
  type,
  gender,
}: {
  nickname: string;
  type: string;
  gender: string;
}) => {
  const data = await fetchResult({ type, gender });

  //   console.log(data);

  const CUBE_URL = `/images/result/${type}/cube.png`;
  const CUBE_EXTENSTION_URL = (order: number) =>
    `/images/result/${type}/${gender}/${order}.png`;
  const BRAND_URL = (order: number) =>
    `/images/result/${type}/${gender}/brand${order}.png`;

  return <>hi</>;

  return (
    <>
      <div className='title'>
        <p>{nickname}님의 큐브는</p>
        <h1>{data.survey_result_user_type_kr}</h1>
      </div>
      {/*
      <div className='cube'>
        <Image src={CUBE_URL} width={228} height={218} alt='' />
      </div>
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
          </div>
          <div className='figure'>
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
          </div>
          <div className='figure'>
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
      </div> */}
    </>
  );
};

export default Result;
