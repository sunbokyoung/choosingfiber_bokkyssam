/* =====================================================
   게임 데이터 구역
   ===================================================== */

const gameData = {
  plant: {
    title: "병재의 가을 잠옷 사건🍂",
    characterName: "병재",
    characterEmoji: "👦",
    image: "유병재.jpg",

    story:
      "슬슬 날씨가 추워지네. 가을맞이 긴팔 긴바지 잠옷 꺼내 입어야겠다." +
      "<br>" +
      "어.. 어디갔지? 아 카리나가 나 질투하더니 몰래 가져갔나보네 ㅠㅠ 새로 사야겠다" +
      "<br>" +
      "어떤 잠옷 구매하지? 근데 나는 가을에도 땀이 많고, 방구도 많이 뀌어서 빨래를 많이 하는 편이라 튼튼한 잠옷이면 좋겠어. 아 참 그리고 나는 예민보이라서 부드러운 잠옷이 좋아." +
      "<br>" +
      "어떤 섬유의 잠옷이 좋을까? 꼬미야 좀 골라줘! 🐛",

    questions: [
      {
        question:
          "🐛: 땀이 많고 방구를 많이 뀌는 병재를 위해 섬유의 어떤 성질을 고려해야 할까?",
        options: ["통기성", "흡습성", "보온성", "축융성"],
        answer: "흡습성",
        hint: "힌트: 섬유의 위생과 관련된 성질은 무엇인가요?",
        correctMessage:
          "정답이에요! 섬유의 위생을 위해서는 흡습성이 제일 중요하죠!",
        points: 10
      },
      {
        question: "🐛: 그렇다면 흡습성이 좋은 섬유를 모두 골라보세요 !!",
        options: ["모섬유", "마섬유", "면섬유", "레이온섬유"],
        answer: ["모섬유", "마섬유", "면섬유"],
        hint: "천연섬유와 인조섬유 중에 흡습성이 좋은 섬유는 무엇일까요?",
        correctMessage:
          "정답이에요! 천연섬유인 모섬유, 마섬유, 면섬유는 흡습성이 좋아 위생적이에요 :>",
        points: 10
      },
      {
        question:
          "🐛: 병재는 땀이 많고 방구를 많이 뀌기 때문에 빨래를 많이 한다고 해요. 물세탁을 많이 해도 튼튼한 섬유는 어떤 섬유일까요? (모두 골라보세요)",
        options: ["모섬유", "마섬유", "면섬유"],
        answer: ["마섬유", "면섬유"],
        hint: "물세탁이 가능한 섬유는 무엇일까요?",
        correctMessage:
          "정답이에요! 식물성 섬유인 면섬유와 마섬유는 물세탁에 강해요.",
        points: 10
      },
      {
        question:
          "🐛: 흠 이제 병재의 모든 조건을 고려한 것 같은데 ..아 맞다! 병재는 예민보이라서 부드러운 잠옷을 원한다고 했었지? 면섬유와 마섬유 중에 촉감이 부드러운 섬유는 무엇인가요?",
        options: ["마섬유", "면섬유"],
        answer: "면섬유",
        hint: "촉감이 부드러워서 침구류에도 쓰이는 섬유는 무엇인가요?",
        correctMessage:
          "정답이에요! 면은 촉감이 부드러워서 속옷, 잠옷, 수건 등에 많이 쓰이죠.",
        points: 10,
        successImage: "치이카와유병재.jpg",
        successImageAlt: "면 잠옷을 입어 기분이 좋은 병재씨"
      }
    ]
  },

  animal: {
    title: "피치공주의 블라우스 실종 사건",
    characterName: "피치공주",
    characterEmoji: "👸🏻",
    image: "샤넬.jpg",

    story:
      "아 엘사 여왕님 결혼식에 초대받아서 엄청난 하객룩을 준비했는데 어디갔지 ..?" +
      "<br>" +
      "초ㅑ르르 빛나는 532,000,000,000,000원짜리 남색 블라우스였는데 .. " +
      "<br>" +
      "구김이 잘 생긴다 그래서 옷걸이에 걸어놨는데 .. 아 아니네~ 나중에 알고보니까 구김 안 생긴다 그래서 다시 빼놨지?" +
      "<br>" +
      "그러고 세탁하려다가 물에 젖으면 손상된다는 이야기를 듣고 물세탁 안 하고 옆에 빼둔 것 같은데 흐음 .." +
      "<br>" +
      "이런 .. 없는데 .. 마리오가 훔쳐갔나봐 ㅠ ! 어쩐지 어제 수상하게 행동하더라니 .. 꼬미야🐛 당장 마리오를 잡아서 옷을 되찾아줘 !!",

    questions: [
      {
        question:
          "🐛: 마리오 집에 옷이 엄청 많을텐데 어떻게 찾지? 공주님 블라우스 특징 좀 정리해야겠다! 어디보자, 피치공주님의 블라우스가 초ㅑ르르 빛난다고 했으니까, 광택감이 있는 섬유는 어떤 섬유였지? (모두 고르기)",
        options: [
          "아세테이트 섬유",
          "레이온 섬유",
          "견 섬유",
          "나일론 섬유",
          "폴리우레탄"
        ],
        answer: ["아세테이트 섬유", "레이온 섬유", "견 섬유"],
        hint: "동물성 섬유와, 재생섬유는 광택감이 좋아요!",
        correctMessage:
          "정답이에요! 아세테이트, 견, 레이온 모두 광택이 좋은 섬유입니다.",
        points: 10
      },
      {
        question:
          "🐛: 좋았어 광택감 있는 섬유의 옷 찾았고 .. 다음은 물에 젖으면 약해져서 물세탁을 안 하려고 빼두었다고 했지?? 아 광택 있으면서 물세탁 안 되는 섬유 뭐가 있더라 ?? (모두 고르기)",
        options: [
          "아세테이트 섬유",
          "레이온 섬유",
          "모 섬유",
          "견 섬유"
        ],
        answer: ["아세테이트 섬유", "레이온 섬유", "견 섬유"],
        hint: "동물성 섬유랑 재생섬유는 물에 젖으면 어떻게 될까요?",
        correctMessage:
          "정답이에요! 아세테이트, 레이온, 견은 광택이 있으면서 물세탁이 어렵습니다. 모는 광택이 없어요 ㅠ",
        points: 20
      },
      {
        question:
          "🐛: 뭐야 이번에도 아세테이트, 레이온, 견 섬유 .. 결과가 똑같잖아 ?! 아 맞다 구김! 옷에 구김이 잘 생긴다 그랬어. 구김은 섬유의 어떤 특성이랑 연관있는 걸까?",
        options: ["통기성", "축융성", "탄성", "드레이프성"],
        answer: "탄성",
        hint: "구김은 섬유의 조직들이 자신의 자리로 돌아가지 않아서 생기게 됩니다.",
        correctMessage:
          "정답이에요! 탄성이 좋으면 섬유 조직이 원래 조직자리로 돌아가서 구김이 잘 생기지 않습니다.",
        points: 10
      },
      {
        question:
          "🐛: 이젠 구별할 수 있겠군 움하하. 구김이 잘 안 생기는 섬유는 이 섬유였어 !! 어쩐지 가격이 532조 어쩌구 더라니 .. 비싼 이유가 있었네 .. 부자공주님이셨어 🤑 어라 방금 가격 계산하다가 섬유 이름 까먹었네 ㅠㅠ 비싸고, 물세탁 안 되고, 광택 좋고, 구김 잘 안 생기는 섬유는 ..?",
        options: ["아세테이트 섬유", "레이온 섬유", "견 섬유"],
        answer: ["견 섬유"],
        hint: "레이온, 아세테이트, 견 섬유 중에 동물성 섬유는 구김이 잘 생기지 않아요",
        correctMessage:
          "정답이에요! 동물성 섬유인 견 섬유는 구김이 잘 생기지 않고 누에고치의 복잡한 과정을 통해 얻기 때문에 비싸답니다.",
        points: 10
      },
      {
        question:
          "🐛: 휴 드디어 마리오 집에 도착했다. 아 비밀번호 있어서 못 들어가잖아 !!(대노) 비밀번호 힌트가 있네? 어디 보자 '나의 사랑하는 버섯 친구의 이름 ..?",
        image: "kinopio.jpg",
        imageAlt: "비밀번호 힌트와 관련된 키노피오 사진",
        options: ["키노피오", "키노피코", "키노피자"],
        answer: "키노피오",
        hint: "보너스퀴즈이니 힌트는 없습니닷 하핫",
        correctMessage:
          "정답이에요! 키노피오였어요! 마리오 집에 들어가서 피치 공주님의 옷을 찾았습니다. 고생했어요 탐정님~❤️",
        points: 30,
        successImage: "약올리는 키노피오.jpg",
        successImageAlt: "약올리는 키노피오"
      }
    ]
  },

  regenerated: {
    title: "그린박사 실험실의 비밀🧪",
    characterName: "코난",
    characterEmoji: "🕵🏻‍♂️",
    image: "regeneratehint.jpg",

    story:
      "앗 여기가 어디지? 세모야? 뭉치야? 장미야? 아무도 없잖아? 그린..박사 실험실..? 나.. 납치된건가.." +
      "<br>" +
      "훗(눈을 번쩍이며) 하지만 내이름은 탐정 코난이지! 납치사건 정도야 후훗 어디보자 탈출구가 저기있군. 최첨단 인식 장치로 잠가져 있잖아?" +
      "<br>" +
      "오늘의 섬유를 스캔하시오..? 힌트를 읽어봐야겠다. 천연섬유가 아니지만 천연원료를 이용하고, 열에 약하고, 촉감이 좋다..? 어떤 섬유인거지? 아무래도 도움을 받아야겠군 ㅠ" +
      "<br><br>" +
      "(어린이 탐정단 무전기를 만지며) 브라운 박사님? 꼬미야? 내말 들려? ...",

    questions: [
      {
        question:
          "🐛: (지지직..) 어랏 코난님? 제가 도와드릴게요! 우선 천연섬유가 아니지만 천연원료를 이용한다는 의미는 아무래도 인조섬유를 말하는것 같은데.. 인조섬유 중에 천연원료를 이용하는 섬유가 뭐였지?",
        options: ["합성섬유", "재생섬유"],
        answer: "재생섬유",
        hint: "힌트: 석유가 아닌 면린터나 목재펄프로 이루어진 섬유는?",
        correctMessage:
          "정답이에요! 재생섬유는 면린터나 목재펄프로 만들어집니다!",
        points: 10
      },
      {
        type: "shortAnswer",
        question:
          "🐛: 맞아 레이온이 짧은 면인 면린터랑 목재 펄프로 만든다고 했었지 !! 그럼 첫번째 힌트는 충족됐고~ 아 근데 촉감이 좋은 재생섬유 ..? 어떤 것들이 있었더라 .. 두가지 였던것 같은뎀 흐음 ~<br>(두 섬유의 이름을 쉼표(,)로 구분해 입력해 보세요. ex: 사과, 배)",
        answer: ["레이온", "아세테이트"],
        hint: "섬유 단면이 반클리프 모양과 닮은 섬유 ?!",
        correctMessage:
          "정답이에요! 재생섬유에는 레이온과 아세테이트가 있었어요!",
        points: 20
      },
      {
        question:
          "🐛: 오케이 레이온과 아세테이트를 찾았고 ~ 두번째 힌트 봐볼까? 열에 약하고 촉감이 좋다..? 레이온과 아세테이트 중에 열에 약하고 촉감이 좋은 섬유는 어떤거지? 둘 다의 공통된 특징이었나? 헷갈려 힝 ㅠ",
        options: ["레이온", "아세테이트"],
        answer: ["레이온", "아세테이트"],
        hint: "재생섬유의 공통된 특징을 떠올려보세요",
        correctMessage:
          "정답이에요! 레이온 아세테이트 모두 열에 약하고 촉감이 좋습니다",
        points: 10
      },
      {
        type: "shortAnswer",
        question: "🕵🏻‍♂️: 단면이 네잎클로버이면서 견섬유 대용인 섬유 뭔데 ????",
        image: "regeneratehint2.jpg",
        imageAlt: "비밀번호 힌트와 관련된 추가힌트 사진",
        answer: ["아세테이트"],
        hint: "견섬유와 아세테이트의 단면을 떠올려봅시다!",
        correctMessage:
          "정답이에요! 광택이 좋은 아세테이트는 견섬유 대용으로 쓰이죠!",
        points: 20
      },
      {
        type: "shortAnswer",
        question:
          "🐛: 아세테이트가 약한 성질은 정전기와 연관이 있는 성질이에요. 이 성질이 강하면 정전기가 잘 안 생기거든요. 이 성질은 바로 ~",
        answer: ["흡습성"],
        hint: "건조하면 정전기가 잘 생기죠!",
        correctMessage:
          "정답이에요! 아세테이트는 흡습성이 떨어져서 정전기가 많이 생겨요",
        points: 20
      },
      {
        type: "shortAnswer",
        question:
          "🐛: 아세테이트는 광택도 좋지만 이 성질이 좋아서 블라우스로도 많이 쓰여요~ 옷감이 모양 있게 샤샥 늘어져 내리는 특성을 의미하는 단어는 바로?",
        image: "드레이프성.jpg",
        imageAlt: "드레이프성 관련 힌트 사진",
        answer: ["드레이프성"],
        hint: "부드러운 실크 섬유가 스윽 내려져오는 느낌~",
        correctMessage: "정답이에요! 바로 드레이프성입니다",
        points: 20
      },
      {
        question:
          "🐛: 흡습성과 드레이프성 모두 찾았어요! 어서 비밀번호를 누르고 탈출해요 코난님! 비밀번호가 '흡드'인지 '드흡'인지 모르겠어. 어떤 거지?",
          image: "비밀의분비밀번호.jpg",
        imageAlt: "비밀번호 힌트와 관련된 추가힌트 사진",
        options: ["흡드", "드흡"],
        answer: ["드흡"],
        hint: "보너스 점수이기 때문에 힌트는 없닷",
        correctMessage: "정답이에요! 운이 좋군요?🍀",
        points: 30,
        successImage: "frogDr.jpg",
        successImageAlt: "실험실에서 탈출에 성공한 코난"
      }
    ]
  },

  synthetic: {
    title: "뽀뽀로와 뿡뿡이의 초심찾기 사건",
    characterName: "뽀뽀로, 뿡뿡이",
    characterEmoji: "🐧🍊",
    image: "늙은뽀로로와뿡뿡이.jpg",

    story:
      "🐧: 내 나이 24.. 더 이상 노는 게 제일 좋지 않을 나이 .. 하지만 아이들은 여전히 나를 보며 노는 것을 제일 좋아하는 쉬었음청년펭귄으로 알고있지 .." +
      "<br>" +
      "🍊: 내 나이 27 .. 더 이상 방귀가 힘차게 나오지 않는 나이 .. 나이가 들면서 주름이 생겨서 시술했을 뿐인데 요새 아이들은 나를 성형한 감으로 알고있지 .. " +
      "<br>" +
      "🐧,🍊: ..? 혹시 너도 ..? 요새 힘드니..?" +
      "<br>" +
      "🐧: 나는 요새 나이 들어서 털도 빠지고 있어 너무너무 추워. 포비한테 곰털 좀 빌려달라고 부탁했다가 인스타 차단 당했어 ㅠㅠ. 이번달 당장 돈도 없는데 이 추위를 어떻게 버티지..?" +
      "<br>" +
      "🍊: 나는 요새 나이 드니까 배가 너무 나와서 고민이야. 이러다가 감이 아니라 배처럼 변하겠어 .. 옷도 점점 작아지고 잘 늘어나는 옷 없나 휴." +
      "<br>" +
      "🐧,🍊: 고민 해결해줄 동물 어디 없나 ~ ",

    questions: [
      {
        type: "shortAnswer",
        question:
          "🐛: 우왓 선배님들 안녕하세요! 저는 2026 신규 어린이프로 캐릭터 기대 유망주 봙꼬미라고 합니다! 만나봬서 영광입니다! 평소에 엄청 존경했어요 ㅠ😭 제가 도와드릴게요!<br>🐛: 우선 뽀로로 선배님! 털이 빠져서 슬프시군요.. 혹시 탈모..? 아앗 죄송합니다 ㅎㅎ; 음 아무래도 추위를 견디기 위해서는 보온성이 좋은 섬유의 옷을 입으면 좋을것 같아요!<br>🐛: 보온성이 좋은 섬유는 ~ !!<br>(섬유의 정!확!한! 명칭을 쉼표(,)로 구분해 입력해 보세요. 천연섬유의 경우 '섬유'를 꼭 붙여서 입력해주세요! ex: 면섬유, 레이온)",
        answer: ["모섬유", "견섬유", "아크릴"],
        hint: "천연섬유와 합성섬유를 모두 고려하며 보온성이 좋은 섬유를 찾아봅시다.",
        correctMessage:
          "정답이에요! 우리가 배운 10개의 섬유 중에서 모섬유, 견섬유, 아크릴 섬유는 보온성이 좋은 섬유에 해당됩니다!",
        points: 30
      },
      {
        question:
          "🐧: (안경을 들어올리며) 봙꼬미씨? 만나서 반갑군요. 크흠 가능하다면 후배님께서 이 문제를 해결할 때 저의 취향도 고려해주면 고맙겠어요.<br>🐛: 당연하죠 선배님 !!! 어떤 취향인가요..?<br>🐧: 나는 광택이 있는 옷이 싫어요 흥.<br>🐛: 앗 넵 그러시구나 ^^ 그럼 그 중에서 광택이 있는 섬유를 빼고 골라볼게요 .. 어디보자 광택있는 섬유를 빼고 고르면 ..? ",
        options: ["모섬유", "견섬유", "아크릴"],
        answer: ["모섬유", "아크릴"],
        hint: "힌트: 광택이 있는 섬유는 무엇일까요?",
        correctMessage:
          "정답이에요! 견 섬유는 광택이 좋은 천연섬유 입니다.",
        points: 10
      },
      {
        question:
          "🐧: 오호라 ~ 그러면 모섬유와 아크릴을 입으면 따듯하겠군 ..! 고마워요 봙꼬미 후배님 ~ 자 여기 저의 전재산인 꽁치 두마리를 보답으로 드릴게요 하하하하<br>🐛: (으웩꽁치으웩) 아앗 .. 감사해요 선배님 .. 근데 선배님 꽁치 두마리가 전재산이신가요 ?! 큰일이네요 😢😢😢<br>🐧: 무엇이 문제죠 후배님?<br>🐛: 앗 그게 저 섬유로 만들어진 옷이 너무 비싸서 .. 꽁치 두개로는 어림도 없어요 꽁치 10292989283792743098개는 필요해요 ㅠㅠ<br>🐧: ... 뭐요 ...? 하지만 다음주 월급까지 미리 받는다고 해도 꽁치 10292989283792743098개는 무리요 ..! 꽁치 12개면 몰라 ..<br>🐛: 아웅 ~ 선배님 ~ 12개면 가능해요 가능 !! 저는 모섬유랑 아크릴이 둘 다 가볍고 보온성이 좋은데 만드는 과정 때문에 하나는 비싸고, 하나는 가격이 저렴하거든요 ~ 꽁치 열두개면 그나마 저렴한 섬유로 만들어진 옷은 구매할 수 있어요!<br>🐧: 가격이 섬유에 따라 달라지는 거요 ..? 값싼 섬유는 무엇인교 후배님 !",
        options: ["모섬유", "아크릴"],
        answer: "아크릴",
        hint: "힌트: 똑같이 보온성이 좋고 가볍지만 만드는 과정이 복잡해서 비싼 섬유는 무엇일까요? ㅇㅇㅇ의 눈물을 기억하죠?",
        correctMessage:
          "정답이에요! 모섬유는 만드는 과정이 복잡하여 아크릴에 비해 비싸답니다.",
        points: 20
      },
      {
        question:
          "🍊: 저기 .. 여기 나도 있뿡 ..<br>🐛: 앗 뿡뿡이 선배님 !! 당연히 알고 있습니다 !! (힘들다;;;;;;;;;;;;)<br>🍊: 엣헴 나는 점점 배가 나와서 그런지 더 이상 옷이 잘 맞지 않뿡 흑흑<br>🐛: 흠 그렇다면 잘 늘어나는 섬유가 필요하시겠네요? 그럼 아무래도 합성섬유를 고려해야겠어요 !!<br>🍊: 팝썽서뮤? 그것이 무엇이뿡 ?!<br>🐛: 아핫 팝썽서뮤 깔깔깔 ;;;;;; 역시 선배님의 개그는 ^^ 합성섬유는 천연섬유와 다른 인조섬유 종류로 탄성 및 탄력성이 좋은 섬유가 많아요!<br>🍊: 오호 그렇다면 팝썽서뮤 중에서 탄성, 탄력성이 좋은 섬유는 무엇이뿡?",
        options: ["폴리에스터", "나일론", "아크릴", "폴리우레탄"],
        answer: ["폴리에스터", "나일론", "아크릴", "폴리우레탄"],
        hint: "힌트: 합성섬유의 공통 특징을 한번 떠올려 봅시다~",
        correctMessage:
          "정답이에요! 모든 합성섬유는 탄성이 좋아요~",
        points: 20
      },
      {
        question:
          "🍊: 오 모든 합성섬유가 탄성이 좋군요~ 그렇다면 제 취향을 더 말해드리뿡 흐흠. 저는 다양하고 화려한 색이 좋아뿡. 또 햇빛 아래에 오래 있기 때문에 직사광선에 약한 옷은 싫뿡!<br>🐛: (되게 까다롭네;;) 아 네 그럼 이제.. <br>🍊: 아 또 있소! 나는 털이 많아서 따듯한 옷은 싫뿡 !!!!!!!!!!!!!!!!!!!!!!!!! 내 몸매를 보정할 수 있는 잘 늘어나는 옷을 주시뿡뿡뿡<br>🐛: 우와 네 .. 색이 다양하고, 직사광선이 약한 섬유 빼고, 따듯한 섬유 빼고, 보정이 가능한 섬유라 ...<br>🐛: 아 생각났다! 스케이트 옷 같은 소재가 좋겠다 !!<br>🍊: 그 섬유는 무엇이뿡? (두근두근)",
        options: ["폴리에스터", "나일론", "아크릴", "폴리우레탄"],
        answer: "폴리우레탄",
        hint: "힌트: 합성섬유의 공통 특징을 한번 떠올려 봅시다~",
        correctMessage:
          "정답이에요! 모든 합성섬유는 탄성이 좋아요~",
        points: 20,
        successImage: "뽀로로뿡뿡이완료.jpg",
        successImageAlt: "문제를 모두 해결한 뽀로로와 뿡뿡이"
      }
    ]
  }
};

/* =====================================================
   게임 작동 코드
   ===================================================== */

let totalScore = 0;
let currentCategory = "";
let currentQuestionIndex = 0;
let isAnswered = false;
let lastQuestionCleared = false;
let selectedOptions = [];

/* HTML 요소 가져오기 */
const startScreen = document.getElementById("startScreen");
const categoryScreen = document.getElementById("categoryScreen");
const caseScreen = document.getElementById("caseScreen");

const passwordInput = document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");
const passwordMessage = document.getElementById("passwordMessage");

const scoreElement = document.getElementById("score");
const finalScoreMessage = document.getElementById("finalScoreMessage");
const finalResultBox = document.getElementById("finalResultBox");

const caseTitle = document.getElementById("caseTitle");
const storyCard = document.getElementById("storyCard");
const progressText = document.getElementById("progressText");
const questionText = document.getElementById("questionText");
const questionImageBox = document.getElementById("questionImageBox");
const optionsBox = document.getElementById("optionsBox");
const checkButton = document.getElementById("checkButton");
const feedbackBox = document.getElementById("feedbackBox");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

const successScreen = document.getElementById("successScreen");
const successTitle = document.getElementById("successTitle");
const successImage = document.getElementById("successImage");
const successMessage = document.getElementById("successMessage");
const successBackButton = document.getElementById("successBackButton");

/* 화면 전환 */
function showScreen(screen) {
  startScreen.classList.remove("active");
  categoryScreen.classList.remove("active");
  caseScreen.classList.remove("active");
  successScreen.classList.remove("show");

  screen.classList.add("active");
}

/* 점수 업데이트 */
function updateScore(points) {
  totalScore += points;
  scoreElement.textContent = totalScore;
}

/* 비밀번호 확인 */
function enterGame() {
  const password = passwordInput.value.trim().toLowerCase();

  if (password === "fiber") {
    passwordMessage.textContent = "";
    showScreen(categoryScreen);
  } else {
    passwordMessage.textContent =
      "비밀번호가 맞지 않아요. 힌트를 다시 생각해 보세요!";

    passwordInput.focus();
  }
}

passwordButton.addEventListener("click", enterGame);

passwordInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    enterGame();
  }
});

/* 카테고리 선택 */
document.querySelectorAll(".category-card").forEach(function (card) {
  card.addEventListener("click", function () {
    openCategory(card.dataset.category);
  });
});

/* 사건 열기 */
function openCategory(categoryName) {
  const card = document.querySelector(
    `.category-card[data-category="${categoryName}"]`
  );

  if (card.classList.contains("cleared")) {
    alert("이미 해결한 사건이에요! 사건 수첩을 확인해 주세요.");
    return;
  }

  currentCategory = categoryName;
  currentQuestionIndex = 0;
  isAnswered = false;
  lastQuestionCleared = false;
  selectedOptions = [];

  const category = gameData[currentCategory];

  if (!category || category.questions.length === 0) {
    alert("이 사건의 문제가 아직 준비되지 않았어요.");
    return;
  }

  showScreen(caseScreen);
  renderStory();
  renderQuestion();
}

/* 사건 이야기 출력 */
function renderStory() {
  const category = gameData[currentCategory];

  caseTitle.textContent = category.title;

  storyCard.innerHTML = `
    <div class="character">
      <div class="character-face">${category.characterEmoji || ""}</div>
      <div class="character-name">${category.characterName || ""}</div>
    </div>

    ${
      category.image
        ? `
          <img
            class="story-image"
            src="${category.image}"
            alt="${category.characterName || "캐릭터"} 사진"
          >
        `
        : ""
    }

    <p class="story-text">${category.story || ""}</p>
  `;

  const storyImage = storyCard.querySelector(".story-image");

  if (storyImage) {
    storyImage.addEventListener("error", function () {
      storyImage.remove();

      const errorMessage = document.createElement("p");
      errorMessage.className = "image-error";
      errorMessage.textContent =
        "소개 사진을 찾지 못했어요: " + category.image;

      storyCard.insertBefore(
        errorMessage,
        storyCard.querySelector(".story-text")
      );
    });
  }
}

/* 문제 화면 출력 */
function renderQuestion() {
  const category = gameData[currentCategory];
  const question = category.questions[currentQuestionIndex];

  document.querySelector(".question-card").style.display = "block";
  successScreen.classList.remove("show");

  isAnswered = false;
  selectedOptions = [];

  const isShortAnswer = question.type === "shortAnswer";
  const isMultipleChoice =
    Array.isArray(question.answer) && !isShortAnswer;

  progressText.textContent =
    "문제 " +
    (currentQuestionIndex + 1) +
    " / " +
    category.questions.length;

  questionText.innerHTML = question.question;

  questionImageBox.innerHTML = "";
  questionImageBox.classList.remove("show");

  if (question.image) {
    const image = document.createElement("img");

    image.src = question.image;
    image.alt = question.imageAlt || "문제 참고 사진";
    image.className = "question-image";

    image.addEventListener("error", function () {
      questionImageBox.innerHTML =
        "<p class='image-error'>사진을 찾지 못했어요: " +
        question.image +
        "</p>";
    });

    questionImageBox.appendChild(image);
    questionImageBox.classList.add("show");
  }

  optionsBox.innerHTML = "";
  feedbackBox.className = "feedback";
  feedbackBox.textContent = "";

  nextButton.classList.remove("show");
  checkButton.classList.remove("show");

  if (isShortAnswer) {
    optionsBox.innerHTML = `
      <div class="short-answer-area">
        <input
          type="text"
          id="shortAnswerInput"
          placeholder="정답을 입력하세요. 여러 개면 쉼표(,)로 구분하세요."
          autocomplete="off"
        >
        <button type="button" id="submitAnswerBtn" class="option-button">
          정답 확인
        </button>
      </div>
    `;

    const shortAnswerInput =
      document.getElementById("shortAnswerInput");

    const submitAnswerBtn =
      document.getElementById("submitAnswerBtn");

    submitAnswerBtn.addEventListener("click", checkShortAnswer);

    shortAnswerInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        checkShortAnswer();
      }
    });

    shortAnswerInput.focus();
    return;
  }

  if (isMultipleChoice) {
    checkButton.classList.add("show");
  }

  question.options.forEach(function (option) {
    const button = document.createElement("button");

    button.className = "option-button";
    button.textContent = option;

    button.addEventListener("click", function () {
      if (isMultipleChoice) {
        toggleOption(option, button);
      } else {
        checkAnswer(option);
      }
    });

    optionsBox.appendChild(button);
  });
}

/* 복수 선택 보기 선택/해제 */
function toggleOption(option, button) {
  if (isAnswered) {
    return;
  }

  if (selectedOptions.includes(option)) {
    selectedOptions = selectedOptions.filter(function (selected) {
      return selected !== option;
    });

    button.classList.remove("selected");
  } else {
    selectedOptions.push(option);
    button.classList.add("selected");
  }
}

/* 복수 선택 문제: 정답 확인 */
checkButton.addEventListener("click", function () {
  if (isAnswered) {
    return;
  }

  if (selectedOptions.length === 0) {
    feedbackBox.textContent =
      "답이라고 생각하는 섬유를 하나 이상 선택해 주세요.";
    feedbackBox.className = "feedback wrong show";
    return;
  }

  checkMultipleAnswer();
});

/* 현재 문제가 마지막 문제인지 확인 */
function isCurrentQuestionLast() {
  return (
    currentQuestionIndex ===
    gameData[currentCategory].questions.length - 1
  );
}

/* 마지막 문제 정답 여부 저장 */
function saveLastQuestionResult(isCorrect) {
  if (isCurrentQuestionLast()) {
    lastQuestionCleared = isCorrect;
  }
}


/* 복수 선택 문제 채점 */
function checkMultipleAnswer() {
  const question =
    gameData[currentCategory].questions[currentQuestionIndex];

  const correctAnswers = question.answer;

  const isSameLength =
    selectedOptions.length === correctAnswers.length;

  const areAllCorrect = selectedOptions.every(function (option) {
    return correctAnswers.includes(option);
  });

  const isCorrect = isSameLength && areAllCorrect;

  saveLastQuestionResult(isCorrect);
  isAnswered = true;

  const allOptionButtons =
    document.querySelectorAll(".option-button");

  allOptionButtons.forEach(function (button) {
    button.disabled = true;

    if (correctAnswers.includes(button.textContent)) {
      button.style.backgroundColor = "#dff5d7";
      button.style.borderColor = "#4d9b4c";
    }

    if (
      !correctAnswers.includes(button.textContent) &&
      selectedOptions.includes(button.textContent)
    ) {
      button.style.backgroundColor = "#ffe2da";
      button.style.borderColor = "#d35b4e";
    }
  });

  checkButton.classList.remove("show");

  if (isCorrect) {
    updateScore(question.points);

    feedbackBox.textContent =
      question.correctMessage +
      " (+" +
      question.points +
      "점)";

    feedbackBox.className = "feedback correct show";
  } else {
    feedbackBox.textContent =
      "아쉬워요! " +
      question.hint +
      " 정답은 '" +
      correctAnswers.join(", ") +
      "'입니다.";

    feedbackBox.className = "feedback wrong show";
  }

  nextButton.classList.add("show");
}

/* 단일 선택 문제 채점 */
function checkAnswer(selectedOption) {
  if (isAnswered) {
    return;
  }

  const question =
    gameData[currentCategory].questions[currentQuestionIndex];

  const correctAnswers = Array.isArray(question.answer)
    ? question.answer
    : [question.answer];

  const isCorrect = correctAnswers.includes(selectedOption);

  saveLastQuestionResult(isCorrect);
  isAnswered = true;

  const allOptionButtons =
    document.querySelectorAll(".option-button");

  allOptionButtons.forEach(function (button) {
    button.disabled = true;

    if (correctAnswers.includes(button.textContent)) {
      button.style.backgroundColor = "#dff5d7";
      button.style.borderColor = "#4d9b4c";
    }

    if (!isCorrect && button.textContent === selectedOption) {
      button.style.backgroundColor = "#ffe2da";
      button.style.borderColor = "#d35b4e";
    }
  });

  if (isCorrect) {
    updateScore(question.points);

    feedbackBox.textContent =
      question.correctMessage +
      " (+" +
      question.points +
      "점)";

    feedbackBox.className = "feedback correct show";
  } else {
    feedbackBox.textContent =
      "아쉬워요! " +
      question.hint +
      " 정답은 '" +
      correctAnswers.join(", ") +
      "'입니다.";

    feedbackBox.className = "feedback wrong show";
  }

  nextButton.classList.add("show");
}

/* 단답형 문제 채점 */
function checkShortAnswer() {
  if (isAnswered) {
    return;
  }

  const question =
    gameData[currentCategory].questions[currentQuestionIndex];

  const input = document.getElementById("shortAnswerInput");

  const userAnswers = input.value
    .split(",")
    .map(function (answer) {
      return answer.trim().replace(/\s/g, "").toLowerCase();
    })
    .filter(function (answer) {
      return answer !== "";
    });

  if (userAnswers.length === 0) {
    feedbackBox.textContent = "정답을 입력해 주세요.";
    feedbackBox.className = "feedback wrong show";
    input.focus();
    return;
  }

  const correctAnswers = Array.isArray(question.answer)
    ? question.answer
    : [question.answer];

  const normalizedCorrectAnswers = correctAnswers.map(function (answer) {
    return answer.trim().replace(/\s/g, "").toLowerCase();
  });

  const isCorrect =
    userAnswers.length === normalizedCorrectAnswers.length &&
    userAnswers.every(function (answer) {
      return normalizedCorrectAnswers.includes(answer);
    });

  saveLastQuestionResult(isCorrect);
  isAnswered = true;

  input.disabled = true;
  document.getElementById("submitAnswerBtn").disabled = true;

  if (isCorrect) {
    input.style.borderColor = "#4d9b4c";

    updateScore(question.points);

    feedbackBox.textContent =
      question.correctMessage +
      " (+" +
      question.points +
      "점)";

    feedbackBox.className = "feedback correct show";
  } else {
    input.style.borderColor = "#d35b4e";

    feedbackBox.textContent =
      "아쉬워요! " +
      question.hint +
      " 정답은 '" +
      correctAnswers.join(", ") +
      "'입니다.";

    feedbackBox.className = "feedback wrong show";
  }

  nextButton.classList.add("show");
}

/* 다음 문제 버튼 */
nextButton.addEventListener("click", function () {
  const category = gameData[currentCategory];
  const question = category.questions[currentQuestionIndex];

  const isLastQuestion =
    currentQuestionIndex === category.questions.length - 1;

  /* 마지막 문제가 아니면 다음 문제로 이동 */
  if (!isLastQuestion) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  /* 마지막 문제를 맞힌 경우 */
  if (lastQuestionCleared) {
    if (question.successImage) {
      showSuccessPhoto(question);
    } else {
      finishCategory();
    }

    return;
  }

  /* 마지막 문제를 틀려도 챕터 마감 */
  finishCategory(
    "마지막 문제는 아쉬웠지만, 정답을 확인했으니 사건을 마감했어요!\n" +
    "꼬미가 사건 수첩에 '사건해결' 도장을 찍었어요."
  );
});



/* 성공 사진 화면 표시 */
function showSuccessPhoto(question) {
  successTitle.textContent =
    gameData[currentCategory].title + " 해결 완료!";

  successMessage.textContent =
    "사건을 해결했어요! 사진을 확인한 뒤 사건 수첩으로 돌아가세요.";

  successImage.src = question.successImage;
  successImage.alt =
    question.successImageAlt || "사건 해결 성공 사진";

  successImage.onerror = function () {
    successMessage.textContent =
      "사건은 해결했지만 성공 사진을 찾지 못했어요. 이미지 경로와 파일명을 확인해 주세요.";
  };

  document.querySelector(".question-card").style.display = "none";
  successScreen.classList.add("show");

  progressText.textContent = "";
  questionText.innerHTML = "";
  questionImageBox.innerHTML = "";
  questionImageBox.classList.remove("show");
  optionsBox.innerHTML = "";
  feedbackBox.textContent = "";
  feedbackBox.className = "feedback";
  nextButton.classList.remove("show");
  checkButton.classList.remove("show");
}

/* 사건 완료 및 수첩 복귀 */
function finishCategory(message) {
  const card = document.querySelector(
    `.category-card[data-category="${currentCategory}"]`
  );

  card.classList.add("cleared");

  showScreen(categoryScreen);

  if (message) {
    alert(message);
  }

  checkAllCategoriesCleared();
}

/* 모든 사건 완료 여부 및 최종 결과 표시 */
function checkAllCategoriesCleared() {
  const allCards = document.querySelectorAll(".category-card");
  const clearedCards = document.querySelectorAll(
    ".category-card.cleared"
  );

  const allCleared =
    allCards.length > 0 &&
    allCards.length === clearedCards.length;

  if (allCleared) {
    finalScoreMessage.textContent =
      "모든 사건 해결 완료!\n" +
      "꼬미가 탐정님께 하트를 보냈어요.\n" +
      "최종 점수는 " +
      totalScore +
      "점입니다!";

    finalResultBox.classList.add("show");
  } else {
    finalScoreMessage.textContent = "";
    finalResultBox.classList.remove("show");
  }
}

/* 일반 뒤로가기 */
backButton.addEventListener("click", function () {
  showScreen(categoryScreen);
});

/* 성공 화면에서 사건 수첩으로 */
successBackButton.addEventListener("click", function () {
  finishCategory();
});
