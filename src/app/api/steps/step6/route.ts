
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
      {contents : "가파른 산도 거뜬한 등산화", type : 1}, 
      {contents : "뉴욕 패션위크가 떠오르는 선글라스", type : 2}, 
      {contents : "따뜻하고 포근한 감성을 가진 수면양말", type : 3}, 
      {contents : "온전히 자신의 세계에 집중할 수 있는 헤드셋", type : 4}, 
      {contents : "용도별 깔끔하게 정리된 서랍장", type : 5}, 
      {contents : "간편하고 편리한 일체형 배터리 팩", type : 6}, 
    ]
  }else
  {
    data = 
    [
      {contents : "가파른 산도 거뜬한 등산화", type : 1}, 
      {contents : "뉴욕 패션위크가 떠오르는 선글라스", type : 2}, 
      {contents : "따뜻하고 포근한 감성을 가진 수면양말", type : 3}, 
      {contents : "온전히 자신의 세계에 집중할 수 있는 헤드셋", type : 4}, 
      {contents : "용도별 깔끔하게 정리된 서랍장", type : 5}, 
      {contents : "간편하고 편리한 일체형 배터리 팩", type : 6}, 
    ]
  }
data = shuffleArray(data) 

  const responseBody = { "selections": data, "point": 3 };
  const responseInit = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return new Response(JSON.stringify(responseBody), responseInit);
}
