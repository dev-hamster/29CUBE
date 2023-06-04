
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
      {contents : {imgUrl: "/images/step5/img1.jpg", imgId: "img1"}, type : 1}
      , {contents : {imgUrl: "/images/step5/img2.jpg", imgId: "img2"}, type : 2}
      , {contents : {imgUrl: "/images/step5/img3.jpg", imgId: "img3"}, type : 3}
      , {contents : {imgUrl: "/images/step5/img4.jpg", imgId: "img4"}, type : 4}
      , {contents : {imgUrl: "/images/step5/img5.jpg", imgId: "img5"}, type : 5}
      , {contents : {imgUrl: "/images/step5/img6.jpg", imgId: "img6"}, type : 6}
    ]
}
else
{
  data = 
    [
      {contents : {imgUrl: "/images/step5/img1.jpg", imgId: "img1"}, type : 1}
      , {contents : {imgUrl: "/images/step5/img2.jpg", imgId: "img2"}, type : 2}
      , {contents : {imgUrl: "/images/step5/img3.jpg", imgId: "img3"}, type : 3}
      , {contents : {imgUrl: "/images/step5/img4.jpg", imgId: "img4"}, type : 4}
      , {contents : {imgUrl: "/images/step5/img5.jpg", imgId: "img5"}, type : 5}
      , {contents : {imgUrl: "/images/step5/img6.jpg", imgId: "img6"}, type : 6}
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
