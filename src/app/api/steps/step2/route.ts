
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
      {contents : ["에너제틱", "열정적인", "유쾌한"], type : 1}, 
      {contents : ["이성적인", "실용적인", "스마트한"], type : 2}, 
      {contents : ["여유로운", "편안한", "느긋한"], type : 3}, 
      {contents : ["예술적인", "자유로운", "유니크한"], type : 4}, 
      {contents : ["감성적인", "담백한", "우아한"], type : 5}, 
      {contents : ["주목받는", "사교적인", "럭셔리한"], type : 6}, 
    ]
  }else
  {
    data = 
    [
      {contents : ["에너제틱", "열정적인", "유쾌한"], type : 1}, 
      {contents : ["이성적인", "실용적인", "스마트한"], type : 2}, 
      {contents : ["여유로운", "편안한", "느긋한"], type : 3}, 
      {contents : ["예술적인", "자유로운", "유니크한"], type : 4}, 
      {contents : ["감성적인", "담백한", "우아한"], type : 5}, 
      {contents : ["주목받는", "사교적인", "럭셔리한"], type : 6}, 
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
