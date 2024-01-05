<template>
  <div class="contents">
    <div class="challenge-section-spot">
      <div class="img-area">
        <img src="/assets/images/img-spot-challenge8.png" alt="" />
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
          <p class="subTit-01">KB오케어 평일<br />평균만큼 많이 걷기</p>
          <!-- 
            과식형 chip-overeating-type
            야식형 chip-nightsnack-type
            잦은음주형 chip-drinking-type
            고객맞춤형 chip-customized-type
          -->
          <!-- <v-chip label class="chip-default chip-drinking-type">
            <span class="text-dot">잦은음주형</span>
          </v-chip> -->
        </div>
        <span class="tags">
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            #오케어 평일 평균만큼 걷기
          </v-chip>
        </span>
        <p class="challenge-info-text">
          <img
            src="/assets/images/icon-challenge-calendar.svg"
            alt=""
            class="mr-2"
          />
          매일<span class="bar"></span>하루 · 2주 · 4주간 진행
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
      <div class="challenge-section-content no-division">
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

        <div class="walking-area">
          <div class="walking-area-info">
            <strong class="walking-area-title"
              ><span class="count">8,000</span>걸음 걷기</strong
            >
          </div>
          <div class="notice-walking">
            <strong class="notice-walking-title">
              <img
                src="/assets/images/icon_caption_normal.svg"
                alt=""
                class=""
              />
              지난 걸음이 확인되지 않습니다.
            </strong>
            <p class="notice-walking-text">
              먼저 ‘오케어 이용자 평균 걸음수'에 도전해 보세요!
            </p>
          </div>
        </div>

        <div class="example-img-area walking-area">
          <strong class="example-title">KB 오케어 평균을 넘어보세요!</strong>
          <p class="example-text example-text-walking">
            시작일을 기준으로 KB 오케어 <br />
            평일 평균 걸음수가 챌린지로 설정돼요. <br />
            매일 활동량을 늘리며 건강을 챙겨보세요.
          </p>
        </div>
      </div>
    </div>

    <div id="rule" class="rule">
      <!-- [D]스크롤 이동될 때 focus-move -->
      <div ref="ruleRef" class=""></div>
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

          <div class="tab-content-area">
            <!-- [D] 탭 활성화 on 클래스 -->
            <div class="challenge-tab-content one-day on">
              <div class="img-box">
                <img
                  src="/assets/images/img-walking-challenge-success1.png"
                  alt="챌린지 성공 하루 이미지"
                />
              </div>
            </div>
            <div class="challenge-tab-content week" style="display:none">
              <div class="img-box">
                <img
                  src="/assets/images/img-walking-challenge-success2.png"
                  alt="챌린지 성공 2주/4주 이미지"
                />
              </div>
            </div>
          </div>
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
        <ol class="walking-auth-list">
          <li class="list-item">
            <span class="list-item-number">1</span>
            <p class="list-item-text">
              <img
                src="/assets/images/icon-auth-start.svg"
                alt="시작하기 아이콘 이미지"
              />
              시작하기 버튼을 눌러요.
            </p>
          </li>
          <li class="list-item">
            <span class="list-item-number">2</span>
            <p class="list-item-text">
              <img
                src="/assets/images/icon-auth-steps.svg"
                alt="챌린지 걸음수 이미지"
              />
              챌린지 걸음수 만큼 걸어요.
            </p>
          </li>
          <li class="list-item">
            <span class="list-item-number">3</span>
            <p class="list-item-text">
              <img
                src="/assets/images/icon-authcomplete.svg"
                alt="챌린지 인증 완료 이미지"
              />
              자동으로 인증 완료!
            </p>
          </li>
        </ol>
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
      const tabItems = ref([{ title: '하루' }, { title: '2주/4주' }])
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
