
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function GET(request: Request) {

  const urlParams = new URLSearchParams(request.url?.split('?')[1]);
  var gender = urlParams.get('gender');



  if(gender == null)
  {
    if (Math.random() > 0.5) {
      gender = 'female';
    }else
    {
      gender = 'male';
    }
  }

  var data
  if(gender == "male")
  {
    data = 
    [
      {contents : "탁 트인 자연의 풍경을 즐길 수 있는 캠핑장", type : 1}, 
      {contents : "유리창 가득 오션 뷰가 펼쳐진 럭셔리 풀빌라", type : 2}, 
      {contents : "초록 식물 사이로 햇살이 비치는 우드톤의 실내", type : 3}, 
      {contents : "문화적인 경험을 다채롭게 즐길 수 있는 갤러리", type : 4}, 
      {contents : "차분한 모노톤으로 깔끔하게 디자인된 카페", type : 5}, 
      {contents : "스마트 기기 체험 존이 있는 테크 쇼핑몰", type : 6}, 
    ]
  }
  else
  {
    data = 
    [
      {contents : "탁 트인 자연의 풍경을 즐길 수 있는 캠핑장", type : 1}, 
      {contents : "유리창 가득 오션 뷰가 펼쳐진 럭셔리 풀빌라", type : 2}, 
      {contents : "초록 식물 사이로 햇살이 비치는 우드톤의 실내", type : 3}, 
      {contents : "문화적인 경험을 다채롭게 즐길 수 있는 갤러리", type : 4}, 
      {contents : "차분한 모노톤으로 깔끔하게 디자인된 카페", type : 5}, 
      {contents : "스마트 기기 체험 존이 있는 테크 쇼핑몰", type : 6}, 
    ]
  }

data = shuffleArray(data) 

  const responseBody = { "selections": data, "point": 1 };
  const responseInit = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return new Response(JSON.stringify(responseBody), responseInit);
}
