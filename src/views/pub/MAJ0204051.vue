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
        <p class="subTit-01">지난주보다 많이 걷기</p>
        <span class="tags">
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            #오케어 평균만큼 걷기
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

        <div class="walking-area">
          <div class="walking-area-info">
            <span class="walking-area-text">최근 7일 걸음수</span>
            <strong class="walking-area-title"><span class="count">8000</span>만큼 걸어보기</strong>
          </div>
          <div class="notice-walking">
            <strong class="notice-walking-title">지난 걸음이 확인되지 않습니다.</strong>
            <p class="notice-walking-text">
              먼저 ‘오케어 이용자 평균 걸음수'에 도전해 보세요!
            </p>
          </div>
        </div>

        <div class="example-img-area">
          <strong class="example-title">챌린지 소개 미정</strong>
          <p class="example-text">
            미정
          </p>
        </div>
      </div>
    </div>

    <div ref="rule">
      <div class="challenge-section-content">
        <h2 class="title-01">챌린지 성공 기준</h2>
          <div class="tab-line challenge-tab walking-challenge">
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
                  <img src="@/assets/images/img-walking-challenge-success.png" alt="챌린지 성공 기준 이미지"/>
                </div>
              </v-window-item>
              <v-window-item>
                <div class="img-box">
                  <img src="@/assets/images/img-walking-challenge-success.png" alt="챌린지 성공 기준 이미지"/>
                </div>
              </v-window-item>
            </v-window>
          </div>
      </div>

      <div class="challenge-section-content">
        <h2 class="title-01">챌린지 리워드</h2>
        <p class="section-content-text">표 삽입 예정, 디자인 X</p>
      </div>

      <div class="challenge-section-content">
        <h2 class="title-01">쉽고 간편한 인증 방식</h2>
        <ol class="walking-auth-list">
          <li class="list-item">
            <span class="list-item-number">1</span>
            <p class="list-item-text">
              <img src="@/assets/images/icon-auth-start.svg" alt="시작하기 아이콘 이미지" />
              시작하기 버튼을 눌러요.
            </p>
          </li>
          <li class="list-item">
            <span class="list-item-number">2</span>
            <p class="list-item-text">
              <img src="@/assets/images/icon-auth-steps.svg" alt="챌린지 걸음수 이미지" />
              챌린지 걸음수 만큼 걸어요.
            </p>
          </li>
          <li class="list-item">
            <span class="list-item-number">3</span>
            <p class="list-item-text">
              <img src="@/assets/images/icon-authcomplete.svg" alt="챌린지 인증 완료 이미지" />
              자동으로 인증 완료!
            </p>
          </li>
        </ol>
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
        { title: '하루' },
        { title: '2주/4주' }
      ])
      const tabInit = ref(0)
      const expertList = ref([
        {
          id: 1,
          number: '1',
          text: '전문가와 함께, 체계적인 <strong class="point-blue">체중관리</strong>를 할 수 있어요!'
        },
        {
          id: 2,
          number: '2',
          text: '유지어터를 위한 <strong class="point-blue">요요방지</strong>건강 습관을 만들어요!'
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