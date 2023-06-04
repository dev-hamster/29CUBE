

export async function GET(request: Request) {

  const urlParams = new URLSearchParams(request.url?.split('?')[1]);
  var gender = urlParams.get('gender');
  const type = urlParams.get('type');
  


  const userTypeKr = 
  ["열정적인 도전자","미니멀리스트","느긋한 평화주의자","컬처 파인더","소셜라이저","하이테크 얼리버드"]
  const userTypeEn = 
  ["Avid Adventurers","Minimalist","Slow Life Seeker","Culture Finder","Social Butterflies","High Tech Earlybird"]

  const type_description = [
    "모험과 새로운 경험을 좋아하는 이들은 기능성이 뛰어난 아웃도어 의류나 액티브웨어를 즐겨입어요. 활동적인 이미지를 연상시키는 레드, 오렌지, 그린 등 밝고 활기찬 색상을 선호합니다. 자연 속에서 활동을 즐기는 만큼, 신축성과 내구성을 갖춘 소재가 좋겠네요!"
  , "빈틈 없는 완벽주의자인 이들은 불필요한 장식이나 가구는 최소한으로 하며 화이트, 베이지, 그레이 등 중립적인 뉴트럴 톤의 아이템을 선호합니다. 부드럽고 가벼운 소재인 면, 린넨, 텐셀(Tencel), 실크가 잘어울려요. 유광보다는 깔끔한 무광 소재를 추천합니다."
  , "건강한 친환경 라이프스타일을 추구하는 이들은 자연광이 잘 드는 밝은 공간과 어울려요. 원목 가구와 녹색 식물이 어우러진 공간을 선호합니다. 린넨, 코튼, 원목 등의 자연적이고 유기적인 소재나 베이지, 화이트, 브라운, 녹색 등 따뜻한 컬러의 아이템이 좋겠네요!"
  , "문화적 경험에 관심이 많은 이들은 음악, 전시회, 공연 등 예술 문화를 즐깁니다. 정형화되지 않는 자신만의 개성을 좋아해요. 포근한 색상보다는 대비가 강한 강렬한 컬러로 독특하고 자유로운 분위기를 추구합니다. 텍스처가 풍부하고 디테일이 있는 빈티지 아이템이 좋겠네요!"
  , "사람들과 교류하며 소셜 미디어에서 활발하게 활동하는 이들은 핫 플레이스를 찾아다니는 트렌드 세터입니다. 대리석, 화이트 벽 등 럭셔리하고 세련된 공간을 선호하며 고명도, 고채도의 화려한 색상을 즐겨입어요. 반짝이거나 귀여운 디테일이 포인트인 아이템을 추천합니다. "
  , "새롭게 출시된 테크 제품을 남들보다 먼저 알고 싶어하며 합리적인 소비를 추구하는 이들은 모던한 분위기를 선호해요. 광택/반사성이 있는 테크 관련 아이템이나 쉽게 코디할 수 있는 스탠다드 스타일을 추천합니다. 실용적이고 편리한 아이템이 좋겠네요!"
]
  
const cube_expansion_female = [
  [
    {
      cube_expansion_image_name: "01코닥",
      cube_expansion_image_description: "일회용카메라 펀세이버",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/188210"
    },
    {
      cube_expansion_image_name: "02 엄브로",
      cube_expansion_image_description: "컬러블록 스탠넥 아노락 스위트콘",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1890310"
    },
    {
      cube_expansion_image_name: "03 로우로우",
      cube_expansion_image_description: "스트링 백팩 750 ep.2 Deep Green",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1769666"
    },
    {
      cube_expansion_image_name: "04 무아스",
      cube_expansion_image_description: "LED 캠핑 랜턴 무선 스피커 무드등 조명램프",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1430989"
    },
    {
      cube_expansion_image_name: "05 로우로우",
      cube_expansion_image_description: "신기루 카고 쇼츠 Sage Green",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1589134"
    },
    {
      cube_expansion_image_name: "06 킨",
      cube_expansion_image_description: "뉴포트 H2 샌들 Triple Black",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1142205"
    }
  ],
  [
    {
      cube_expansion_image_name: "01 링서울",
      cube_expansion_image_description: "20mm eco leather belt",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1149035"
    },
    {
      cube_expansion_image_name: "02 킨더살몬",
      cube_expansion_image_description: "FW19 Twist Volume Sleeve Blouse Dark-navy",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/420361"
    },
    {
      cube_expansion_image_name: "03 낫띵리튼",
      cube_expansion_image_description: "Classic mini golf bag (Black)",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1002153"
    },
    {
      cube_expansion_image_name: "04 지비에이치",
      cube_expansion_image_description: "HOME DAILY SCHEDULER KIT",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1352113"
    },
    {
      cube_expansion_image_name: "05 르",
      cube_expansion_image_description: "bllack denim wide tucked pants",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1691482"
    },
    {
      cube_expansion_image_name: "06 로서울",
      cube_expansion_image_description: "Puzzle Sandals Ivory",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1437795"
    }
  ],
  [
    {
      cube_expansion_image_name: "01 슬리피슬립",
      cube_expansion_image_description: "SUMMER BEACH BUCKET HAT",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1985647"
    },
    {
      cube_expansion_image_name: "02 레터",
      cube_expansion_image_description: "Muscat half knit",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1951271"
    },
    {
      cube_expansion_image_name: "03 무부",
      cube_expansion_image_description: "Fog Layered Sling Bag (3Colors)",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1053823"
    },
    {
      cube_expansion_image_name: "04 슬로우파마씨",
      cube_expansion_image_description: "식물표본 200ml_Ruscus",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1044892"
    },
    {
      cube_expansion_image_name: "05 선샤이너",
      cube_expansion_image_description: "DRAWSTRING PLEATS PANTS BLACK",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1531386?source=brand"
    },
    {
      cube_expansion_image_name: "06 루나샌들",
      cube_expansion_image_description: "오쏘 윙 에디션 (DESERT CANYON)",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1093351"
    }
  ],
  [
    {
      cube_expansion_image_name: "01 노우트",
      cube_expansion_image_description: "Hand Stitch Detail Beanie / Lemon",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1803931"
    },
    {
      cube_expansion_image_name: "02 핑크파인애플",
      cube_expansion_image_description: "WARMER SET SWEATER",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1790892"
    },
    {
      cube_expansion_image_name: "03 민민",
      cube_expansion_image_description: "Love Rabbit Eco Bag Magenta",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1881283?source=brand"
    },
    {
      cube_expansion_image_name: "04 머지",
      cube_expansion_image_description: "LED 캠핑 랜턴 무선 스피커 무드등 조명램프",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1200966"
    },
    {
      cube_expansion_image_name: "05 이스트쿤스트",
      cube_expansion_image_description: "트랜스폼 스커트 그레이",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1903392"
    },
    {
      cube_expansion_image_name: "06 세릭",
      cube_expansion_image_description: "SPRINKLE SQUARE LOW PLATFORM BOOTS / NAVY",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1804876"
    }
  ],
  [
    {
      cube_expansion_image_name: "01 원브릴리언트",
      cube_expansion_image_description: "Chico-OB221-Black",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1151243"
    },
    {
      cube_expansion_image_name: "02 어반드레스",
      cube_expansion_image_description: "Beauty shouldert-shirt SORA",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1405963"
    },
    {
      cube_expansion_image_name: "03 발렌시아가",
      cube_expansion_image_description: "네이비 카바스백 엑스트라 스몰-네추럴/블랙",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1845440"
    },
    {
      cube_expansion_image_name: "04 랩스밤",
      cube_expansion_image_description: "퍼플오로라 입욕제 선물세트 230g*2",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1411645"
    },
    {
      cube_expansion_image_name: "05 메종 드 이네스",
      cube_expansion_image_description: "RIBBON TIE SKIRT_BLACK",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1625415"
    },
    {
      cube_expansion_image_name: "06 마크모크",
      cube_expansion_image_description: "Span 3Color 스판부츠 5cm",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/848473"
    }
  ],
  [
    {
      cube_expansion_image_name: "01 노브젝트",
      cube_expansion_image_description: "logo pattern pink",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1935975"
    },
    {
      cube_expansion_image_name: "02 곤니치와봉쥬르",
      cube_expansion_image_description: "Cb NERD Checked Shirts",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1941737"
    },
    {
      cube_expansion_image_name: "03 스위치",
      cube_expansion_image_description: "CITY BOYS MARKET BAG 002",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1499253"
    },
    {
      cube_expansion_image_name: "04 오디오테크니카",
      cube_expansion_image_description: "AT-LP60XBT WW 자동벨트 블루투스턴테이블",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/977519"
    },
    {
      cube_expansion_image_name: "05 슬릭앤이지",
      cube_expansion_image_description: "윈터 로키팬츠 웨이브 블랙",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1827322"
    },
    {
      cube_expansion_image_name: "06 일오공칠",
      cube_expansion_image_description: "유니섹스 컬러 트라우져 삭스",
      cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1824452"
    }
  ]

 ]
const cube_expansion_male = [
[
  {
    cube_expansion_image_name: "01 라이프 아카이브",
    cube_expansion_image_description: "LIFE LOGO SINGLE USE CAMERA GIFT PACAGE ",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/413749"
  },
  {
    cube_expansion_image_name: "02 엄브로",
    cube_expansion_image_description: "UK 헤리티지 우븐 피스테 스위트콘",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1940556"
  },
  {
    cube_expansion_image_name: "03 그레고리",
    cube_expansion_image_description: "테일러너 힙색 - CHARCOAL",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1100708"
  },
  {
    cube_expansion_image_name: "04 유코",
    cube_expansion_image_description: "오리지널 캔들 랜턴 키트 V2 RED",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1417617"
  },
  {
    cube_expansion_image_name: "05 로우로우",
    cube_expansion_image_description: "신기루 카고 쇼츠 Sage Green",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1589134"
  },
  {
    cube_expansion_image_name: "06 스노우피크 어패럴",
    cube_expansion_image_description: "크런치 D2_BK",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1503139"
  },
],
[
  {
    cube_expansion_image_name: "01 토마스모어",
    cube_expansion_image_description: "AC9105 벨트 블랙 ",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1372233"
  },
  {
    cube_expansion_image_name: "02 블랭크룸",
    cube_expansion_image_description: "SUPIMA BAKER SHIRT_CAVE GREEN",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1683708"
  },
  {
    cube_expansion_image_name: "03 렉슨",
    cube_expansion_image_description: "스파이 서류가방 - LN1716N",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/364351"
  },
  {
    cube_expansion_image_name: "04 유코",
    cube_expansion_image_description: "HOME STAINLESS STEEL TUMBLER",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/811990"
  },
  {
    cube_expansion_image_name: "05 어나더오피스",
    cube_expansion_image_description: "23SS Ample Wide Pants (Black)",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1538664"
  },
  {
    cube_expansion_image_name: "06 조셉트",
    cube_expansion_image_description: "23SS Ample Wide Pants (Black)",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1770329"
  },
],
[
  {
    cube_expansion_image_name: "01 슬리피슬립",
    cube_expansion_image_description: "SS LOGO TROOPER HAT 3COLOR",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/865171"
  },
  {
    cube_expansion_image_name: "02 스테디 에브리웨어",
    cube_expansion_image_description: "Relaxed Basque Shirts",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1756850"
  },
  {
    cube_expansion_image_name: "03 큐클리프",
    cube_expansion_image_description: "커넥티드 스마트폰 포켓백 (카키)",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1336358"
  },
  {
    cube_expansion_image_name: "04 아시안 하이웨이",
    cube_expansion_image_description: "플랜드 세트 [괴마옥]",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1658490"
  },
  {
    cube_expansion_image_name: "05 포터리",
    cube_expansion_image_description: "Two Pleated Wide Chino Pants (Light Beige)",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1884144"
  },
  {
    cube_expansion_image_name: "06 라슬로",
    cube_expansion_image_description: "StandardUnit Alpha - Grey",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/754260"
  },
],
[
  {
    cube_expansion_image_name: "01 로어즈",
    cube_expansion_image_description: "Dance Cap - Black ",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1258583"
  },
  {
    cube_expansion_image_name: "02 스위치123",
    cube_expansion_image_description: "LOGO SWITCH HOODIE AQUA BLUE",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/850899"
  },
  {
    cube_expansion_image_name: "03 로어즈",
    cube_expansion_image_description: "Harness Sling Bag - Teal",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1070893"
  },
  {
    cube_expansion_image_name: "04 로어모어",
    cube_expansion_image_description: "팔로산토 스머지 스틱 50g",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1124260"
  },
  {
    cube_expansion_image_name: "05 토니호크",
    cube_expansion_image_description: "패치워크 트랙 팬츠 체크",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1902624"
  },
  {
    cube_expansion_image_name: "06 캐치볼",
    cube_expansion_image_description: "ORIGINAL PLUS PICNIC _ BLACK",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1023390"
  },
],
[
  {
    cube_expansion_image_name: "01 리끌로우",
    cube_expansion_image_description: "BB557 GREEN 선글라스 ",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1490798"
  },
  {
    cube_expansion_image_name: "02 도프제이슨",
    cube_expansion_image_description: "오버핏 비건레더 싱글 자켓",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1285876"
  },
  {
    cube_expansion_image_name: "03 크래쉬배기지",
    cube_expansion_image_description: "MINI ICON DEEP BLUE 크로스",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1674008"
  },
  {
    cube_expansion_image_name: "04 알레시",
    cube_expansion_image_description: "안나G 와인오프너 딥 블루 / AM01 DAZ",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1397750"
  },
  {
    cube_expansion_image_name: "05 파브레가",
    cube_expansion_image_description: "Air Parachute Semi Wide Pants (Beige)",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1892123"
  },
  {
    cube_expansion_image_name: "06 라퍼지스토어",
    cube_expansion_image_description: "코도반 클래식 플레인 슈즈_Black",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1209150"
  },
],
[
  {
    cube_expansion_image_name: "01 소니",
    cube_expansion_image_description: "노이즈 캔슬링 헤드폰 WH-1000XM4",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/779526"
  },
  {
    cube_expansion_image_name: "02 홀리선",
    cube_expansion_image_description: "Typewriter Shirt Soft Lavender",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1951233"
  },
  {
    cube_expansion_image_name: "03 스위치",
    cube_expansion_image_description: "CITY BOYS LAPTOP CASE 13 -Black",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/526090"
  },
  {
    cube_expansion_image_name: "04 오디오테크니카",
    cube_expansion_image_description: "AT-LP60X 자동 벨트 드라이브 턴테이블",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/510683"
  },
  {
    cube_expansion_image_name: "05 슬릭앤이지",
    cube_expansion_image_description: "로키팬츠 네이비",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1153029?source=item_detail&source_type=category_best"
  },
  {
    cube_expansion_image_name: "06 일오공칠",
    cube_expansion_image_description: "유니섹스 컬러 트라우져 삭스",
    cube_expansion_image_address: "https://product.29cm.co.kr/catalog/1824452"
  },
],

]

const related_brand_female = [
  {
    brands: 
    [
      {
      related_brand_image: "/images/result/type1/female/related_brand_image1.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/215"
      },
      {
      related_brand_image: "/images/result/type1/female/related_brand_image2.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/19979"
      },
      {
      related_brand_image: "/images/result/type1/female/related_brand_image3.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/7545"
      }
    ],
    related_brand_description: "자유롭고 건강한 삶을 사는 이들의 스타일과 애티튜드를 반영한 브랜드입니다. 다양한 액티브 활동부터 편안한 일상까지 모두 아우르는 제품을 제공합니다."
  },
  {
    brands: 
    [
      {
      related_brand_image: "/images/result/type2/female/related_brand_image1.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/11849"
      },
      {
      related_brand_image: "/images/result/type2/female/related_brand_image2.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/9677"
      },
      {
      related_brand_image: "/images/result/type2/female/related_brand_image3.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/2187"
      }
    ],
    related_brand_description: "기본에 충실한 정제된 디자인과 그 안에 숨어있는 소소한 디테일로 멋을 더하는 브랜드입니다. 세월이 흘러도 변하지 않는 가치와 세련된 분위기를 즐길 수 있습니다. "
  },
  {
    brands: 
    [
      {
      related_brand_image: "/images/result/type3/female/related_brand_image1.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/4916"
      },
      {
      related_brand_image: "/images/result/type3/female/related_brand_image2.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/17943"
      },
      {
      related_brand_image: "/images/result/type3/female/related_brand_image3.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/16060"
      }
    ],
    related_brand_description: "지속적인 가치를 추구하는 Slow Fashion Mood를 만들어나가는 브랜드입니다. 편안하고 자연스러운 디자인으로 손이 자주 가는 제품을 지향합니다. "
  },
  {
    brands: 
    [
      {
      related_brand_image: "/images/result/type4/female/related_brand_image1.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/9578"
      },
      {
      related_brand_image: "/images/result/type4/female/related_brand_image2.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/15898"
      },
      {
      related_brand_image: "/images/result/type4/female/related_brand_image3.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/16554"
      }
    ],
    related_brand_description: "자유롭고 대담하여, 각자의 개성과 정체성을 표현할 수 있는 옷을 제안하는 브랜드입니다. 쿨하고 위트있는 감성으로 풍부한 컬러와 번뜩이는 아이디어를 선보입니다. "
  },
  {
    brands: 
    [
      {
      related_brand_image: "/images/result/type5/female/related_brand_image1.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/5737"
      },
      {
      related_brand_image: "/images/result/type5/female/related_brand_image2.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/3294"
      },
      {
      related_brand_image: "/images/result/type5/female/related_brand_image3.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/7564"
      }
    ],
    related_brand_description: "현 시대를 살아가고 있는 세대들의 찬란함을 트렌디한 감각으로 표현하는 브랜드입니다. 좋은 가치를 많은 사람들과 공유하고 경험하며 우리만의 문화로 만들어나가고자 합니다. "
  },
  {
    brands: 
    [
      {
      related_brand_image: "/images/result/type6/female/related_brand_image1.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/2203"
      },
      {
      related_brand_image: "/images/result/type6/female/related_brand_image2.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/1371"
      },
      {
      related_brand_image: "/images/result/type6/female/related_brand_image3.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/1895"
      }
    ],
    related_brand_description: "특정 스타일에 구애받지 않고 기본에서 벗어나지 않은 편리한 제품을 제안하는 브랜드입니다. 다양한 라이프 스타일의 사람들의 요구와 문화를 적극적으로 반영하고자 합니다."
  }

]

const related_brand_male = [
  {
    brands: 
    [
      {
      related_brand_image: "/images/result/type1/male/related_brand_image1.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/215"
      },
      {
      related_brand_image: "/images/result/type1/male/related_brand_image2.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/17063"
      },
      {
      related_brand_image: "/images/result/type1/male/related_brand_image3.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/15081"
      }
    ],
    related_brand_description: "자유롭고 건강한 삶을 사는 이들의 스타일과 애티튜드를 반영한 브랜드입니다. 다양한 액티브 활동부터 편안한 일상까지 모두 아우르는 제품을 제공합니다."
  },
  {
    brands: 
    [
      {
      related_brand_image: "/images/result/type2/male/related_brand_image1.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/2111"
      },
      {
      related_brand_image: "/images/result/type2/male/related_brand_image2.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/1483"
      },
      {
      related_brand_image: "/images/result/type2/male/related_brand_image3.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/1708"
      }
    ],
    related_brand_description: "기본에 충실한 정제된 디자인과 그 안에 숨어있는 소소한 디테일로 멋을 더하는 브랜드입니다. 세월이 흘러도 변하지 않는 가치와 세련된 분위기를 즐길 수 있습니다. "
  },
  {
    brands: 
    [
      {
      related_brand_image: "/images/result/type3/male/related_brand_image1.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/17669"
      },
      {
      related_brand_image: "/images/result/type3/male/related_brand_image2.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/3453"
      },
      {
      related_brand_image: "/images/result/type3/male/related_brand_image3.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/1521"
      }
    ],
    related_brand_description: "지속적인 가치를 추구하는 Slow Fashion Mood를 만들어나가는 브랜드입니다. 편안하고 자연스러운 디자인으로 손이 자주 가는 제품을 지향합니다. "
  },
  {
    brands: 
    [
      {
      related_brand_image: "/images/result/type4/male/related_brand_image1.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/10761"
      },
      {
      related_brand_image: "/images/result/type4/male/related_brand_image2.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/10670"
      },
      {
      related_brand_image: "/images/result/type4/male/related_brand_image3.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/20519"
      }
    ],
    related_brand_description: "자유롭고 대담하여, 각자의 개성과 정체성을 표현할 수 있는 옷을 제안하는 브랜드입니다.  쿨하고 위트있는 감성으로 풍부한 컬러와 번뜩이는 아이디어를 선보입니다. "
  },
  {
    brands: 
    [
      {
      related_brand_image: "/images/result/type5/male/related_brand_image1.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/16255"
      },
      {
      related_brand_image: "/images/result/type5/male/related_brand_image2.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/15447"
      },
      {
      related_brand_image: "/images/result/type5/male/related_brand_image3.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/16910"
      }
    ],
    related_brand_description: "현 시대를 살아가고 있는 세대들의 찬란함을 트렌디한 감각으로 표현하는 브랜드입니다. 좋은 가치를 많은 사람들과 공유하고 경험하며 우리만의 문화로 만들어나가고자 합니다. "
  },
  {
    brands: 
    [
      {
      related_brand_image: "/images/result/type6/male/related_brand_image1.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/2218"
      },
      {
      related_brand_image: "/images/result/type6/male/related_brand_image2.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/4538"
      },
      {
      related_brand_image: "/images/result/type6/male/related_brand_image3.jpg",
      related_brand_address: "https://shop.29cm.co.kr/brand/1895"
      }
    ],
    related_brand_description: "특정 스타일에 구애받지 않고 기본에서 벗어나지 않은 편리한 제품을 제안하는 브랜드입니다. 다양한 라이프 스타일의 사람들의 요구와 문화를 적극적으로 반영하고자 합니다."
  }

]

const cube = [
  "/images/result/type1/cube_image",
  "/images/result/type2/cube_image",
  "/images/result/type3/cube_image",
  "/images/result/type4/cube_image",
  "/images/result/type5/cube_image",
  "/images/result/type6/cube_image"
]

const background = [
  "/images/result/type1/background_image",
  "/images/result/type2/background_image",
  "/images/result/type3/background_image",
  "/images/result/type4/background_image",
  "/images/result/type5/background_image",
  "/images/result/type6/background_image"
]


  const typeIdx = Number(type) - 1

  var responseBody = {};

  if(gender == "female")
  {
    responseBody = { 
        survey_result_user_type_kr: userTypeKr[typeIdx],
        survey_result_user_type_en: userTypeEn[typeIdx],
        survey_result_user_type_description: type_description[typeIdx],
        cube_expansion: cube_expansion_female[typeIdx],
        related_brand: related_brand_female[typeIdx],
        cube_image: cube[typeIdx],
        background_image: background[typeIdx]
    };
  }else
  {
    responseBody = { 
        survey_result_user_type_kr: userTypeKr[typeIdx],
        survey_result_user_type_en: userTypeEn[typeIdx],
        survey_result_user_type_description: type_description[typeIdx],
        cube_expansion: cube_expansion_male[typeIdx],
        related_brand: related_brand_male[typeIdx],
        cube_image: cube[typeIdx],
        background_image: background[typeIdx]
    };
  }


  const responseInit = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return new Response(JSON.stringify(responseBody), responseInit);
}
