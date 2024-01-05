<template>
  <div class="contents">
    <div class="title-area">
      <h1 class="subTit-01">오건강님의 눈에 대한 증상분석 결과</h1>
    </div>
    <ReportResult :bnShow="'verybad'" :videBox="true" class="pb-8 mt-7">
      <strong class="title">지금 바로 진료</strong>
      오늘이 지나가기 전에 가까운 병원에 가세요
    </ReportResult>
    <div class="section-page">
      <h2 class="tit-03">의심되는 질환</h2>
      <p class="desc">증상분석 결과 의심되는 질환을 알려드립니다</p>
      <div class="list-number mt-7">
        <ol>
          <li v-for="item in diseaseList" :key="item.id">{{ item.text }}</li>
        </ol>
        <p class="caution mt-5">
          해당 의심질환은 의학적 진단이 아니므로 정확한 진단을 위해서는 병원을
          방문하여 진료를 받으세요
        </p>
      </div>
    </div>
    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn variant="text" :href="'javsscript:;'">
          증상관련 진료과 안과
        </v-btn>
      </h2>
      <p class="desc">진료를 위해 가장 가까운 병원을 소개해 드립니다</p>
      <div class="list-article mt-6">
        <ul>
          <li v-for="item in connectList" :key="item.id">
            <v-btn variant="text" class="btn-box" :href="'javsscript:;'">
              <h3 class="title arrow">{{ item.title }}</h3>
              <span class="title2">{{ item.title2 }}</span>
              <span class="datalst">
                <span class="road">{{ item.road }}</span>
                <span>{{ item.time }}</span>
              </span>
              <span class="tags mt-4" v-html="item.subject"></span>
            </v-btn>
          </li>
        </ul>
      </div>
      <div class="text-center mt-4">
        <v-btn
          variant="text"
          rounded="lg"
          height="32"
          class="btn-grey pr-3 pl-3 fs-13"
          >내 주변 안과 찾기</v-btn
        >
      </div>
      <div class="mt-8">
        <Baner :linkUrl="'/'" :caseName="'medical'">
          <strong class="title">의료진에게 묻기</strong>
          <span class="text"
            >좀 더 자세한 증상 문의를 하고 싶다면 의료진에게 물어보세요</span
          >
        </Baner>
      </div>
    </div>
    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn variant="text" :href="'javsscript:;'"
          >증상에 도움되는 건강 뉴스</v-btn
        >
      </h2>
      <p class="desc">눈 건강을 위한 건강정보입니다</p>
      <div class="list-thumb mt-4">
        <ul>
          <li v-for="item in healthNewsList" :key="item.id">
            <v-btn variant="text" :href="'javsscript:;'">
              <img :src="`/assets/images/${item.img}`" alt="" />
              <p class="text">{{ item.text }}</p>
            </v-btn>
          </li>
        </ul>
      </div>
    </div>
    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn variant="text" :href="'javsscript:;'"
          >셀프 케어를 위한 건강 동영상</v-btn
        >
      </h2>
      <p class="desc">눈 건강을 위한 동영상입니다</p>
      <div class="list-thumb2 media-slide mt-4">
        <ul>
          <li v-for="item in selfcareList" :key="item.id">
            <v-btn variant="text" class="play" :href="'javsscript:;'">
              <span class="img"
                ><img :src="`/assets/images/${item.img}`" alt=""
              /></span>
              <p class="text">{{ item.text }}</p>
            </v-btn>
          </li>
        </ul>
      </div>
    </div>
    <div class="section-page">
      <h2 class="tit-02 tit-link">
        <v-btn variant="text" :href="'javsscript:;'"
          >눈 건강관리 제품이 필요하세요?</v-btn
        >
      </h2>
      <p class="desc">30대 재구매율이 높은 상품을 추천해 드립니다</p>
      <ListProducts class="mt-4" />
    </div>
    <div class="section-page list-iconbtn">
      <ul>
        <li v-for="item in gobalLink" :key="item.id">
          <v-btn variant="text" :href="'javsscript:;'">
            <figure :class="`icon-${item.icon}`" />
            <span class="text"
              >{{ item.text }} <strong>{{ item.title }}</strong></span
            >
          </v-btn>
        </li>
      </ul>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-summit"
          >다른 증상 검색하기</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
  import ReportResult from '@/components/BanerReport.vue'
  import Baner from '@/components/BanerIcon.vue'
  import ListProducts from '@/components/ListProducts.vue'
  export default {
    components: { ReportResult, Baner, ListProducts },
    data() {
      return {
        diseaseList: [
          {
            id: 1,
            text: '중심성 군날개'
          },
          {
            id: 2,
            text: '말초군 날개'
          },
          {
            id: 3,
            text: '결막기타장애'
          }
        ],
        connectList: [
          {
            id: 1,
            title: '연세 밝은 세상 안과',
            title2: '서울특별시 강남구 테헤란로 401 0층 0호',
            road: '205m',
            time: '09:00~1900',
            subject: '<span>안과</span><span>기타 진료과목명1</span>'
          },
          {
            id: 2,
            title: '굿아이 안과',
            title2: '서울특별시 강남구 테헤란로 401 0층 0호',
            road: '205m',
            time: '09:00~1900',
            subject: '<span>안과</span><span>기타 진료과목명2</span>'
          },
          {
            id: 3,
            title: '연세 밝은 세상 안과연세 밝은 세상 안과',
            title2:
              '서울특별시 강남구 테헤란로 401 0층 0호서울특별시 강남구 테헤란로 401 0층 0호',
            road: '205m',
            time: '09:00~1900',
            subject:
              '<span>안과</span><span>기타 진료과목명</span><span>안과</span><span>기타 진료과목명</span><span>안과</span><span>기타 진료과목명</span>'
          }
        ],
        healthNewsList: [
          {
            id: 1,
            text: '눈 건강 가이드 연령별 매일 실천하면 지킬 수 있어요.눈 건강 가이드 연령별 매일 실천하면 지킬 수 있어요.',
            img: 'dummy-thumb.jpg'
          },
          {
            id: 2,
            text: '눈 건강 가이드 연령별',
            img: 'dummy-thumb2.jpg'
          }
        ],
        selfcareList: [
          {
            id: 1,
            text: '실명까지 올수 있다?! 여름철 눈관리 중요한 이유!',
            img: 'dummy-thumb.jpg'
          },
          {
            id: 2,
            text: '실명까지 올수 있다?! 여름철 눈관리 중요한 이유!',
            img: 'dummy-thumb2.jpg'
          },
          {
            id: 3,
            text: '실명까지 올수 있다?! 여름철 눈관리 중요한 이유!',
            img: 'dummy-thumb.jpg'
          }
        ],
        gobalLink: [
          {
            id: 1,
            text: '건강검진을 통해서 종합적인 관리를 할 수 있어요!',
            title: '건강검진 결과보기',
            icon: 'note'
          },
          {
            id: 1,
            text: '건강관리를 위해 작은 목표를 시작해 보아요!',
            title: '챌린지 시작하기',
            icon: 'time'
          }
        ]
      }
    }
  }
</script>
