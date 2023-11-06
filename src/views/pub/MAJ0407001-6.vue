<template>
  <div class="contents">
    <div class="challenge-section-spot">
      <div class="img-area">
        <img src="/src/assets/images/img-spot-challenge1.png" alt=""/>
        <v-chip
          label
          size="small"
          color="primary"
          class="chip-default chip-color"
        >
          참여중
        </v-chip>
      </div>

      <div class="title-area">
        <p class="subTit-01">근력향상 전문 챌린지</p>
        <span class="tags">
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            #체중관리
          </v-chip>
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            #근육탄탄
          </v-chip>
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            #코어향상
          </v-chip>
        </span>
        <p class="challenge-info-text">
          <img src="@/assets/images/icon-challenge-calendar.svg" alt="" class="mr-2" />
          매일<span class="bar"></span>1주 · 6주 · 12주간 진행
        </p>
      </div>

      <div class="reward-area">
        <img src="@/assets/images/icon-challenge-success.svg" alt="" class="mr-4" />
        <p class="reward-area-text">
          성공 시 최대 <strong class="point-blue">0,000P</strong> 지급
        </p>
      </div>
    </div>

    <div ref="intro">
      <div class="challenge-section-content no-division">
        <!-- stickyArea -->
        <div class="sticky-area" ref="stickyArea" :style="{ height: navHeight }">
          <div ref="sticky">
            <!-- contents -->
            <v-tabs align-tabs="start" class="tab-line ">
              <!-- 탭 버튼 클릭 시 intro/rule/review 영역으로 포커스 이동 -->
              <v-tab :ripple="false" class="fs-20">소개</v-tab>
              <v-tab :ripple="false" class="fs-20">규칙</v-tab>
              <v-tab :ripple="false" class="fs-20">리뷰</v-tab>
            </v-tabs>
            <!-- //contents -->
          </div>
        </div>
        <!-- //stickyArea -->

        <div class="list-circle challenge-intro-list">
          <ul>
            <li v-for="list in expertList" :key="list.id">
              <p class="list-text" v-html="list.text"></p>
            </li>
          </ul>
        </div>

        <div class="challenge-info-area">
          <p class="info-text">
            임상간호사, 임상영양사, 운동처방사가 
            건강습관개선, 질환예방 및 관리를 위해 
            제작한 가이드라인을 따르는 챌린지입니다.
          </p>
          <img src="@/assets/images/icon-challenge-success.svg" alt="" class="" />
        </div>

        <div class="example-img-area">
          <strong class="example-title">근육탄탄, 코어향상!</strong>
          <p class="example-text">
            운동 전문가가 근력 향상에 효과적인 운동을 추천하고,<br /> 
            공략부위, 강도, 빈도를 고려하여 매일 해야할<br /> 
            Todo를 알려드려요. 
          </p>
          <p class="example-text">
            체지방은 줄이고, 근력향상에 도움이 되는<br /> 
            생활습관 관리가 가능한 챌린지!
          </p>
        </div>
      </div>
    </div>

    <div ref="rule">
      <div class="challenge-section-content">
        <h2 class="title-01">챌린지 성공 기준</h2>
        <div class="img-box challenge-success">
          <img src="@/assets/images/img-challenge-success.png" alt="챌린지 성공 기준 이미지"/>
        </div>
      </div>

      <div class="challenge-section-content">
        <h2 class="title-01">챌린지 리워드</h2>
        <p class="section-content-text">표 삽입 예정, 디자인 X</p>
      </div>

      <div class="challenge-section-content">
        <h2 class="title-01">쉽고 간편한 인증 방식</h2>
        <p class="section-content-text">전문가가 직접 설계한 Todo를 하루 3개씩 간편한 인증 방식으로 제공해요!</p>
        <div class="list-thumb auth-method-list">
          <ul>
            <li>
              <v-btn variant="text" :href="'javsscript:;'">
                <img src="/src/assets/images/img-auth-method1.png" alt="" />
                <p class="text">사진 한 장이면<br>충분해요!</p>
              </v-btn>
            </li>
            <li>
              <v-btn variant="text" :href="'javsscript:;'">
                <img src="/src/assets/images/img-auth-method2.png" alt="" />
                <p class="text">건강 퀴즈를 풀이해 주세요!</p>
              </v-btn>
            </li>
            <li>
              <v-btn variant="text" :href="'javsscript:;'">
                <img src="/src/assets/images/img-auth-method3.png" alt="" />
                <p class="text">수행 여부 답변하면<br>인증 완료!</p>
              </v-btn>
            </li>
            <li>
              <v-btn variant="text" :href="'javsscript:;'">
                <img src="/src/assets/images/img-auth-method4.png" alt="" />
                <p class="text">건강 정보 입력도<br>쉽고 빠르게!</p>
              </v-btn>
            </li>
          </ul>
        </div>
      </div>

      <div class="challenge-section-content">
        <h2 class="title-01">전문가 챌린지 기간</h2>
          <div class="tab-line challenge-tab">
            <v-tabs v-model="tabInit" align-tabs="start">
              <v-tab
                v-for="(item, i) in tabItems"
                :key="item"
                :value="i"
                :ripple="false"
              >
                {{ item.title }}
              </v-tab>
            </v-tabs>
            <v-window v-model="tabInit" class="challenge-tab-content">
              <v-window-item>
                <div class="img-box">
                  <img src="/src/assets/images/img-challenge-period1.png" alt="1주 체험 이미지" />
                </div>
                <ul class="expert-challenge-list">
                  <li class="list-item">
                    <img src="@/assets/images/icon-experience1.svg" alt="" class="mr-4" />
                    <span>
                      건강 관리를 위한 <strong>기초 지식을 습득</strong>하고
                      <strong>Todo를 체험</strong>해 보는 단계
                    </span>
                  </li>
                  <li class="list-item">
                    <img src="@/assets/images/icon-experience2.svg" alt="" class="mr-4" />
                    <span>
                      6주 / 12주까지 지속적으로 수행하며 <strong>습관을 형성하기 위한 워밍업</strong> 기간!
                    </span>
                  </li>
                  <li class="list-item">
                    <img src="@/assets/images/icon-experience3.svg" alt="" class="mr-4" />
                    <span>
                      1주 체험 완료 후 <strong>6주 또는 12주로 기간을 연장</strong>하여 챌린지를 이어서 할 수 있어요.
                    </span>
                  </li>
                </ul>
              </v-window-item>
              <v-window-item>
                <div class="img-box">
                  <img src="/src/assets/images/img-challenge-period2.png" alt="6주 도전 이미지" />
                </div>
                <ul class="expert-challenge-list">
                  <li class="list-item">
                    <img src="@/assets/images/icon-experience4.svg" alt="" class="mr-4" />
                    <span>
                      건강 기록 빈도와 <strong>수행 난이도가 
                      조금씩 향상</strong>하는 단계
                    </span>
                  </li>
                  <li class="list-item">
                    <img src="@/assets/images/icon-experience5.svg" alt="" class="mr-4" />
                    <span>
                      추천 운동의 빈도와 강도도 점차 높아지며 
                      <strong>건강 관리 방법</strong>을 알아갈 수 있는 기간!
                    </span>
                  </li>
                </ul>
              </v-window-item>
              <v-window-item>
                <div class="img-box">
                  <img src="/src/assets/images/img-challenge-period3.png" alt="12주 완주 이미지" />
                </div>
                <ul class="expert-challenge-list">
                  <li class="list-item">
                    <img src="@/assets/images/icon-experience6.svg" alt="" class="mr-4" />
                    <span>
                      수행난이도가 높은 Todo의 빈도가 늘어나고, 꾸준히 진행한
                      <strong>Todo가 건강습관으로 형성</strong>되는 단계
                    </span>
                  </li>
                  <li class="list-item">
                    <img src="@/assets/images/icon-experience7.svg" alt="" class="mr-4" />
                    <span>
                      <strong>건강에 변화</strong>가 나타나기 시작하는 기간
                    </span>
                  </li>
                  <li class="list-item">
                    <img src="@/assets/images/icon-experience8.svg" alt="" class="mr-4" />
                    <span>
                      3개월 이상 꾸준히 진행하면, <strong>건강습관을 
                      1년 이상 유지할 수 있는 확률</strong>이 매우 높아져요!
                    </span>
                  </li>
                </ul>
              </v-window-item>
            </v-window>
          </div>
      </div>
    </div>

    <div ref="review">
      <div class="challenge-section-content review-content">
        <h2 class="title-01 tit-link">
          <v-btn block variant="text">리뷰 <span>(1,234)</span></v-btn>
        </h2>
  
        <ul class="list-faq review-list">
          <li v-for="list in reviewList" :key="list.id" class="item">
            <a href="javascript:;">
              <div class="text-tit">
                <span class="name">{{ list.name }}</span>
                <span class="review-point">
                  <!-- 별점 span 태그의 %로 채움 --> 
                  <span style="width:60%"></span>
                </span>
              </div>
              <p class="review-txt">
                <span class="badge waiting">6주</span>
                <span class="list-text">{{ list.text }}</span>
              </p>
              <div class="info-group">
                <span class="type">{{ list.date }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-summit">내 수행 현황 보기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue'
  export default {
    setup(props) {
      //sticky
      const sticky = ref(null)
      const stickyArea = ref(null)
      const navHeight = ref(null)
      onMounted(() => {
        const stickyHeight = (navHeight.value =
          sticky.value.offsetHeight + 'px')
        const stickyObserver = new IntersectionObserver(
          ([e]) => {
            if (!e.isIntersecting) sticky.value.classList.add('isFixed')
            else sticky.value.classList.remove('isFixed')
          },
          {
            root: null,
            threshold: [1]
          }
        )
        stickyObserver.observe(stickyArea.value)
      })
      const tabItems = ref([
        { title: '1주 체험' },
        { title: '6주 도전' },
        { title: '12주 완주' }
      ])
      const tabInit = ref(0)
      const expertList = ref([
        {
          id: 1,
          number: '1',
          text: '전문가와 함께, 체계적인 <strong class="point-blue">근력향상</strong>을 할 수 있어요!'
        },
        {
          id: 2,
          number: '2',
          text: '적절한 운동과 건강 식단으로 <strong class="point-blue">근육탄탄</strong>피지컬 완성!'
        },
        {
          id: 3,
          number: '3',
          text: '근력 강화의 핵심, <strong class="point-blue">코어향상</strong>을 돕는 운동을 알려드려요!'
        }
      ])
      const reviewList = ref([
        {
          id: 1,
          name: '오건강',
          text: '하기까지는 힘들었는 하고 나니 너무 좋네요.',
          date: '09.30 오전 6:35'
        },
        {
          id: 2,
          name: '김건강',
          text: '하기까지는 힘들었는 하고 나니 너무 좋네요 하기까지는 힘들었는 하고 나니 너무 좋네요.',
          date: '09.30 오전 6:35'
        },
        {
          id: 3,
          name: '홍*동',
          text: '하기까지는 힘들었는 하고 나니 너무 좋네요 하기까지는 힘들었는 하고 나니 너무 좋네요.',
          date: '09.30 오전 6:35'
        }
      ])
      return { 
      navHeight,
      sticky,
      stickyArea,
      expertList,
      reviewList,
      tabInit,
      tabItems
      }
    }
  }
</script>