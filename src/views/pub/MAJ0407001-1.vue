<template>
  <div class="contents">
    <div class="challenge-section-spot">
      <div class="img-area">
        <img src="/assets/images/img-spot-challenge1.png" alt="" />
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
        <div class="chip-title-area">
          <p class="subTit-01">AI 추천 챌린지</p>
          <!-- 
            과식형 chip-overeating-type
            야식형 chip-nightsnack-type
            잦은음주형 chip-drinking-type
            고객맞춤형 chip-customized-type
            간식중독형 snack-addiction-type
          -->
          <v-chip label class="chip-default chip-customized-type">
            <span class="text-dot">고객맞춤형</span>
          </v-chip>
        </div>
        <span class="tags">
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            #혈당관리
          </v-chip>
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            #혈압관리
          </v-chip>
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            #혈관건강관리
          </v-chip>
        </span>
        <p class="challenge-info-text">
          <img
            src="/assets/images/icon-challenge-calendar.svg"
            alt=""
            class="mr-2"
          />
          매일<span class="bar"></span>1주 · 6주 · 12주간 진행
        </p>
      </div>

      <div class="reward-area">
        <img
          src="/assets/images/icon-challenge-success.svg"
          alt=""
          class="mr-4"
        />
        <p class="reward-area-text">
          성공 시 최대 <strong class="point-blue">0,000P</strong> 지급
        </p>
      </div>
    </div>

    <div id="intro" class="intro">
      <!-- [D]스크롤 이동될 때 focus-move -->
      <div ref="introRef" class=""></div>
      <div class="challenge-section-content">
        <!-- stickyArea -->
        <div
          class="sticky-area"
          ref="stickyArea"
          :style="{ height: navHeight }"
        >
          <div ref="sticky">
            <!-- contents -->
            <v-tabs align-tabs="start" class="tab-line">
              <!-- 탭 버튼 클릭 시 intro/rule/review 영역으로 포커스 이동 -->
              <!-- [D]탭 활성화 scroll-selected 클래스 -->
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
            임상간호사, 임상영양사, 운동처방사가 <br />
            건강습관개선, 질환예방 및 관리를 위해 <br />
            제작한 가이드라인을 따르는 챌린지입니다.
          </p>
          <img
            src="/assets/images/icon-expert-badge.svg"
            alt="전문가 인증 뱃지 아이콘 이미지"
            class=""
          />
        </div>

        <div class="example-img-area">
          <strong class="example-title"
            >임상으로 검증된 전문가 챌린지 효과</strong
          >
          <div class="img-box">
            <img
              src="/assets/images/img-example1.png"
              alt="당뇨병 개선 사례 이미지"
            />
          </div>
          <div class="img-box">
            <img
              src="/assets/images/img-example2.png"
              alt="고혈압 개선 사례 이미지"
            />
          </div>
          <div class="img-box">
            <img
              src="/assets/images/img-example3.png"
              alt="이상지질혈증 개선 사례 이미지"
            />
          </div>
        </div>

        <div class="expert-challenge-area">
          <h2 class="title-01">전문가 챌린지에서만 받을 수 있어요</h2>
          <ul class="expert-challenge-list">
            <li class="list-item">
              <img
                src="/assets/images/icon-expert-challenge1.svg"
                alt=""
                class="mr-4"
              />
              <span>
                임상진료지침에 기반하여 <strong>인공지능 AI</strong>가<br />
                챌린지 수행에 대한 <strong>분석 메시지</strong>
              </span>
            </li>
            <li class="list-item">
              <img
                src="/assets/images/icon-expert-challenge2.svg"
                alt=""
                class="mr-4"
              />
              <span>
                전문가 자문과 전문학회 임상진료지침을<br />
                기반으로 한 <strong>질환별, 주제별 특화된 건강정보</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="rule" class="rule">
      <!-- [D]스크롤 이동될 때 focus-move -->
      <div ref="ruleRef" class=""></div>
      <div class="challenge-section-content">
        <h2 class="title-01">챌린지 성공 기준</h2>
        <div class="img-box challenge-success">
          <img
            src="/assets/images/img-challenge-success.png"
            alt="챌린지 성공 기준 이미지"
          />
        </div>
      </div>

      <div class="challenge-section-content">
        <h2 class="title-01">챌린지 리워드</h2>
        <v-table density="compact" class="reward-table">
          <colgroup>
            <col style="width: 31.8%" />
            <col style="width: 36.4%" />
            <col style="width: 31.8%" />
          </colgroup>
          <thead>
            <tr>
              <th>기간</th>
              <th>달성율</th>
              <th>포인트</th>
            </tr>
          </thead>
          <tbody v-for="list in rewardList" :key="list.id">
            <tr>
              <th rowspan="3" v-html="list.name"></th>
              <td v-html="list.text"></td>
              <td v-html="list.text2"></td>
            </tr>
            <tr>
              <td v-html="list.text3"></td>
              <td v-html="list.text4"></td>
            </tr>
            <tr>
              <td v-html="list.text5"></td>
              <td v-html="list.text6"></td>
            </tr>
          </tbody>
        </v-table>
      </div>

      <div class="challenge-section-content">
        <h2 class="title-01">쉽고 간편한 인증 방식</h2>
        <div class="auth-type-notice">
          <p class="section-content-text">
            전문가가 직접 설계한 Todo를
            <strong class="point-blue">하루 3개씩 간편한 인증 방식</strong>으로
            제공해요!
          </p>
        </div>
        <div class="list-thumb auth-method-list">
          <ul>
            <li>
              <v-btn variant="text" :href="'javsscript:;'">
                <div class="img-box">
                  <img src="/assets/images/img-auth-method1.png" alt="" />
                </div>
                <p class="text">사진 한 장이면<br />충분해요!</p>
              </v-btn>
            </li>
            <li>
              <v-btn variant="text" :href="'javsscript:;'">
                <div class="img-box">
                  <img src="/assets/images/img-auth-method2.png" alt="" />
                </div>
                <p class="text">건강 퀴즈를 풀이해 주세요!</p>
              </v-btn>
            </li>
            <li>
              <v-btn variant="text" :href="'javsscript:;'">
                <div class="img-box">
                  <img src="/assets/images/img-auth-method3.png" alt="" />
                </div>
                <p class="text">수행 여부 답변하면<br />인증 완료!</p>
              </v-btn>
            </li>
            <li>
              <v-btn variant="text" :href="'javsscript:;'">
                <div class="img-box">
                  <img src="/assets/images/img-auth-method4.png" alt="" />
                </div>
                <p class="text">건강 정보 입력도<br />쉽고 빠르게!</p>
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
          
          <div class="tab-content-area">
            <!-- [D] 탭 활성화 on 클래스 -->
            <div class="challenge-tab-content on">
              <div class="inner">
                <div class="img-box">
                  <img
                    src="/assets/images/img-challenge-period1.png"
                    alt="1주 체험 이미지"
                  />
                </div>
                <ul class="expert-challenge-list">
                  <li class="list-item">
                    <img
                      src="/assets/images/icon-experience1.svg"
                      alt=""
                      class="mr-4"
                    />
                    <span>
                      건강 관리를 위한 <strong>기초 지식을 습득</strong>하고
                      <strong>Todo를 체험</strong>해 보는 단계
                    </span>
                  </li>
                  <li class="list-item">
                    <img
                      src="/assets/images/icon-experience2.svg"
                      alt=""
                      class="mr-4"
                    />
                    <span>
                      6주 / 12주까지 지속적으로 수행하며
                      <strong>습관을 형성하기 위한 워밍업</strong> 기간!
                    </span>
                  </li>
                  <li class="list-item">
                    <img
                      src="/assets/images/icon-experience3.svg"
                      alt=""
                      class="mr-4"
                    />
                    <span>
                      1주 체험 완료 후
                      <strong>6주 또는 12주로 기간을 연장</strong>하여 챌린지를
                      이어서 할 수 있어요.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="challenge-tab-content" style="display:none">
              <div class="inner">
                <div class="img-box">
                  <img
                    src="/assets/images/img-challenge-period2.png"
                    alt="6주 도전 이미지"
                  />
                </div>
                <ul class="expert-challenge-list">
                  <li class="list-item">
                    <img
                      src="/assets/images/icon-experience4.svg"
                      alt=""
                      class="mr-4"
                    />
                    <span>
                      건강 기록 빈도와
                      <strong>수행 난이도가 조금씩 향상</strong>하는 단계
                    </span>
                  </li>
                  <li class="list-item">
                    <img
                      src="/assets/images/icon-experience5.svg"
                      alt=""
                      class="mr-4"
                    />
                    <span>
                      추천 운동의 빈도와 강도도 점차 높아지며
                      <strong>건강 관리 방법</strong>을 알아갈 수 있는 기간!
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="challenge-tab-content" style="display:none">
              <div class="inner">
                <div class="img-box">
                  <img
                    src="/assets/images/img-challenge-period3.png"
                    alt="12주 완주 이미지"
                  />
                </div>
                <ul class="expert-challenge-list">
                  <li class="list-item">
                    <img
                      src="/assets/images/icon-experience6.svg"
                      alt=""
                      class="mr-4"
                    />
                    <span>
                      수행난이도가 높은 Todo의 빈도가 늘어나고, 꾸준히 진행한
                      <strong>Todo가 건강습관으로 형성</strong>되는 단계
                    </span>
                  </li>
                  <li class="list-item">
                    <img
                      src="/assets/images/icon-experience7.svg"
                      alt=""
                      class="mr-4"
                    />
                    <span>
                      <strong>건강에 변화</strong>가 나타나기 시작하는 기간
                    </span>
                  </li>
                  <li class="list-item">
                    <img
                      src="/assets/images/icon-experience8.svg"
                      alt=""
                      class="mr-4"
                    />
                    <span>
                      3개월 이상 꾸준히 진행하면,
                      <strong>건강습관을 1년 이상 유지할 수 있는 확률</strong>이
                      매우 높아져요!
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="review" class="review">
      <!-- [D]스크롤 이동될 때 focus-move -->
      <div ref="reviewRef" class=""></div>
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
                  <span style="width: 60%"></span>
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
        <v-btn variant="text" height="56px" class="btn-summit"
          >내 수행 현황 보기</v-btn
        >
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
          text: '전문적인 <strong class="point-blue">만성질환</strong> 관리를 할 수 있어요!'
        },
        {
          id: 2,
          number: '2',
          text: '<strong class="point-blue">AI전문가</strong>가 고객님의 건강상태와 문제행동, 운동수준을 분석하여 매일 다른 최적의 Todo를 제안해 드려요!'
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
      const rewardList = ref([
        {
          id: 1,
          name: '<strong>1주</strong>',
          text: '<strong>100%</strong>',
          text2: '<strong>200</strong>',
          text3: '80%',
          text4: '80',
          text5: '60%',
          text6: '60'
        },
        {
          id: 2,
          name: '<strong>6주</strong>',
          text: '<strong>100%</strong>',
          text2: '<strong>400</strong>',
          text3: '80%',
          text4: '16',
          text5: '60%',
          text6: '120'
        },
        {
          id: 3,
          name: '<strong>12주</strong>',
          text: '<strong>100%</strong>',
          text2: '<strong>600</strong>',
          text3: '80%',
          text4: '240',
          text5: '60%',
          text6: '180'
        }
      ])
      return {
        navHeight,
        sticky,
        stickyArea,
        expertList,
        reviewList,
        tabInit,
        tabItems,
        rewardList
      }
    }
  }
</script>
