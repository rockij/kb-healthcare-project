<template>
  <div class="contents">
    <div class="title-area">
      <h1 class="subTit-01">오건강님의 눈에 대한 증상분석 결과</h1>
    </div>
    <ReportResult :bnShow="'good'" class="pb-8 mt-7">
      <strong class="title">지금 바로 진료</strong>
      특히, 항혈전제를 복용 중이시라면 응급실 또는 가까운 병원에서 빠른 진료를
      보세요
    </ReportResult>
    <h2 class="tit-02 tit-link">
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
            <span class="text">{{ item.subject }}</span>
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
  export default {
    components: { ReportResult },
    data() {
      return {
        connectList: [
          {
            id: 1,
            title: '연세 밝은 세상 안과',
            title2: '서울특별시 강남구 테헤란로 401 0층 0호',
            road: '205m',
            time: '09:00~1900',
            subject: '안과, 기타 진료과목명1'
          },
          {
            id: 2,
            title: '굿아이 안과',
            title2: '서울특별시 강남구 테헤란로 401 0층 0호',
            road: '205m',
            time: '09:00~1900',
            subject: '안과, 기타 진료과목명2'
          },
          {
            id: 3,
            title: '연세 밝은 세상 안과연세 밝은 세상 안과',
            title2:
              '서울특별시 강남구 테헤란로 401 0층 0호서울특별시 강남구 테헤란로 401 0층 0호',
            road: '205m',
            time: '09:00~1900',
            subject:
              '안과, 기타 진료과목명, 안과, 기타 진료과목명, 안과, 기타 진료과목명'
          }
        ]
      }
    },
    setup() {
      return {}
    }
  }
</script>
