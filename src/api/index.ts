import { baseURL } from '@/app/utils/constant';

const fetchSteps = async () => {
  const res = await fetch(`${baseURL}/api/steps/data`, {
    headers: {
      'Cache-Control': 'max-age=31536000',
    },
  });
 
  return await res.json();
};

const fetchResult = async ({
  type,
  gender,
}: {
  type: string;
  gender: string;
}) => {
  const res = await fetch(
    `${baseURL}/api/result/data?type=${type}&gender=${gender}`,
    {
      headers: {
        'Cache-Control': 'max-age=31536000',
      },
    }
  );
  return await res.json();
};

export { fetchSteps, fetchResult };
