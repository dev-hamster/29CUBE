function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function step2(gender: any) {
  if (gender == null) {
    if (Math.random() > 0.5) {
      gender = 'female';
    } else {
      gender = 'male';
    }
  }

  var data;
  if (gender == 'male') {
    data = [
      { contents: ['에너제틱', '열정적인', '유쾌한'], type: 1 },
      { contents: ['이성적인', '실용적인', '스마트한'], type: 2 },
      { contents: ['여유로운', '편안한', '느긋한'], type: 3 },
      { contents: ['예술적인', '자유로운', '유니크한'], type: 4 },
      { contents: ['감성적인', '담백한', '우아한'], type: 5 },
      { contents: ['주목받는', '사교적인', '럭셔리한'], type: 6 },
    ];
  } else {
    data = [
      { contents: ['에너제틱', '열정적인', '유쾌한'], type: 1 },
      { contents: ['이성적인', '실용적인', '스마트한'], type: 2 },
      { contents: ['여유로운', '편안한', '느긋한'], type: 3 },
      { contents: ['예술적인', '자유로운', '유니크한'], type: 4 },
      { contents: ['감성적인', '담백한', '우아한'], type: 5 },
      { contents: ['주목받는', '사교적인', '럭셔리한'], type: 6 },
    ];
  }
  data = shuffleArray(data);
  return data;
}

function step3(gender: any) {
  if (gender == null) {
    if (Math.random() > 0.5) {
      gender = 'female';
    } else {
      gender = 'male';
    }
  }

  var data;
  if (gender == 'male') {
    data = [
      { contents: '탁 트인 자연의 풍경을 즐길 수 있는 캠핑장', type: 1 },
      { contents: '유리창 가득 오션 뷰가 펼쳐진 럭셔리 풀빌라', type: 2 },
      { contents: '초록 식물 사이로 햇살이 비치는 우드톤의 실내', type: 3 },
      { contents: '문화적인 경험을 다채롭게 즐길 수 있는 갤러리', type: 4 },
      { contents: '차분한 모노톤으로 깔끔하게 디자인된 카페', type: 5 },
      { contents: '스마트 기기 체험 존이 있는 테크 쇼핑몰', type: 6 },
    ];
  } else {
    data = [
      { contents: '탁 트인 자연의 풍경을 즐길 수 있는 캠핑장', type: 1 },
      { contents: '유리창 가득 오션 뷰가 펼쳐진 럭셔리 풀빌라', type: 2 },
      { contents: '초록 식물 사이로 햇살이 비치는 우드톤의 실내', type: 3 },
      { contents: '문화적인 경험을 다채롭게 즐길 수 있는 갤러리', type: 4 },
      { contents: '차분한 모노톤으로 깔끔하게 디자인된 카페', type: 5 },
      { contents: '스마트 기기 체험 존이 있는 테크 쇼핑몰', type: 6 },
    ];
  }

  data = shuffleArray(data);
  return data;
}
function step4(gender: any) {
  if (gender == null) {
    if (Math.random() > 0.5) {
      gender = 'female';
    } else {
      gender = 'male';
    }
  }

  var data;
  if (gender == 'male') {
    data = [
      {
        contents: { imgUrl: '/images/step4/img1.jpg', imgId: 'img1' },
        type: 1,
      },
      {
        contents: { imgUrl: '/images/step4/img2.jpg', imgId: 'img2' },
        type: 2,
      },
      {
        contents: { imgUrl: '/images/step4/img3.jpg', imgId: 'img3' },
        type: 3,
      },
      {
        contents: { imgUrl: '/images/step4/img4.jpg', imgId: 'img4' },
        type: 4,
      },
      {
        contents: { imgUrl: '/images/step4/img5.jpg', imgId: 'img5' },
        type: 5,
      },
      {
        contents: { imgUrl: '/images/step4/img6.jpg', imgId: 'img6' },
        type: 6,
      },
    ];
  } else {
    data = [
      {
        contents: { imgUrl: '/images/step4/img1.jpg', imgId: 'img1' },
        type: 1,
      },
      {
        contents: { imgUrl: '/images/step4/img2.jpg', imgId: 'img2' },
        type: 2,
      },
      {
        contents: { imgUrl: '/images/step4/img3.jpg', imgId: 'img3' },
        type: 3,
      },
      {
        contents: { imgUrl: '/images/step4/img4.jpg', imgId: 'img4' },
        type: 4,
      },
      {
        contents: { imgUrl: '/images/step4/img5.jpg', imgId: 'img5' },
        type: 5,
      },
      {
        contents: { imgUrl: '/images/step4/img6.jpg', imgId: 'img6' },
        type: 6,
      },
    ];
  }

  data = shuffleArray(data);
  return data;
}
function step5(gender: any) {
  if (gender == null) {
    if (Math.random() > 0.5) {
      gender = 'female';
    } else {
      gender = 'male';
    }
  }

  var data;
  if (gender == 'male') {
    data = [
      {
        contents: { imgUrl: '/images/step5/img1.jpg', imgId: 'img1' },
        type: 1,
      },
      {
        contents: { imgUrl: '/images/step5/img2.jpg', imgId: 'img2' },
        type: 2,
      },
      {
        contents: { imgUrl: '/images/step5/img3.jpg', imgId: 'img3' },
        type: 3,
      },
      {
        contents: { imgUrl: '/images/step5/img4.jpg', imgId: 'img4' },
        type: 4,
      },
      {
        contents: { imgUrl: '/images/step5/img5.jpg', imgId: 'img5' },
        type: 5,
      },
      {
        contents: { imgUrl: '/images/step5/img6.jpg', imgId: 'img6' },
        type: 6,
      },
    ];
  } else {
    data = [
      {
        contents: { imgUrl: '/images/step5/img1.jpg', imgId: 'img1' },
        type: 1,
      },
      {
        contents: { imgUrl: '/images/step5/img2.jpg', imgId: 'img2' },
        type: 2,
      },
      {
        contents: { imgUrl: '/images/step5/img3.jpg', imgId: 'img3' },
        type: 3,
      },
      {
        contents: { imgUrl: '/images/step5/img4.jpg', imgId: 'img4' },
        type: 4,
      },
      {
        contents: { imgUrl: '/images/step5/img5.jpg', imgId: 'img5' },
        type: 5,
      },
      {
        contents: { imgUrl: '/images/step5/img6.jpg', imgId: 'img6' },
        type: 6,
      },
    ];
  }

  data = shuffleArray(data);
  return data;
}
function step6(gender: any) {
  if (gender == null) {
    if (Math.random() > 0.5) {
      gender = 'female';
    } else {
      gender = 'male';
    }
  }

  var data;
  if (gender == 'male') {
    data = [
      { contents: '가파른 산도 거뜬한 등산화', type: 1 },
      { contents: '뉴욕 패션위크가 떠오르는 선글라스', type: 2 },
      { contents: '따뜻하고 포근한 감성을 가진 수면양말', type: 3 },
      { contents: '온전히 자신의 세계에 집중할 수 있는 헤드셋', type: 4 },
      { contents: '용도별 깔끔하게 정리된 서랍장', type: 5 },
      { contents: '간편하고 편리한 일체형 배터리 팩', type: 6 },
    ];
  } else {
    data = [
      { contents: '가파른 산도 거뜬한 등산화', type: 1 },
      { contents: '뉴욕 패션위크가 떠오르는 선글라스', type: 2 },
      { contents: '따뜻하고 포근한 감성을 가진 수면양말', type: 3 },
      { contents: '온전히 자신의 세계에 집중할 수 있는 헤드셋', type: 4 },
      { contents: '용도별 깔끔하게 정리된 서랍장', type: 5 },
      { contents: '간편하고 편리한 일체형 배터리 팩', type: 6 },
    ];
  }
  data = shuffleArray(data);
  return data;
}
function step7(gender: any) {
  if (gender == null) {
    if (Math.random() > 0.5) {
      gender = 'female';
    } else {
      gender = 'male';
    }
  }

  var data;
  if (gender == 'male') {
    data = [
      {
        contents: { imgUrl: '/images/step7/img1.jpg', imgId: 'img1' },
        type: 1,
      },
      {
        contents: { imgUrl: '/images/step7/img2.jpg', imgId: 'img2' },
        type: 2,
      },
      {
        contents: { imgUrl: '/images/step7/img3.jpg', imgId: 'img3' },
        type: 3,
      },
      {
        contents: { imgUrl: '/images/step7/img4.jpg', imgId: 'img4' },
        type: 4,
      },
      {
        contents: { imgUrl: '/images/step7/img5.jpg', imgId: 'img5' },
        type: 5,
      },
      {
        contents: { imgUrl: '/images/step7/img6.jpg', imgId: 'img6' },
        type: 6,
      },
    ];
  } else {
    data = [
      {
        contents: { imgUrl: '/images/step7/img1.jpg', imgId: 'img1' },
        type: 1,
      },
      {
        contents: { imgUrl: '/images/step7/img2.jpg', imgId: 'img2' },
        type: 2,
      },
      {
        contents: { imgUrl: '/images/step7/img3.jpg', imgId: 'img3' },
        type: 3,
      },
      {
        contents: { imgUrl: '/images/step7/img4.jpg', imgId: 'img4' },
        type: 4,
      },
      {
        contents: { imgUrl: '/images/step7/img5.jpg', imgId: 'img5' },
        type: 5,
      },
      {
        contents: { imgUrl: '/images/step7/img6.jpg', imgId: 'img6' },
        type: 6,
      },
    ];
  }

  data = shuffleArray(data);
  return data;
}

export async function GET(request: Request) {
  const urlParams = new URLSearchParams(request.url?.split('?')[1]);
  var gender = urlParams.get('gender');

  gender = 'female'; // 스텝 2 ~ 6은 성별 구분 없음.

  const responseBody = {
    step2: { selections: step2(gender), point: 1 },
    step3: { selections: step3(gender), point: 1 },
    step4: { selections: step4(gender), point: 2 },
    step5: { selections: step5(gender), point: 3 },
    step6: { selections: step6(gender), point: 3 },
    step7: { selections: step7(gender), point: 10 },
  };
  const responseInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return new Response(JSON.stringify(responseBody), responseInit);
}
