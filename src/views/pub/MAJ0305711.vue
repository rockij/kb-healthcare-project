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
    <h2 class="tit-03 tit-link">
      <v-btn variant="text" block @click="goPath('/')">
        내 주변 응급실 확인하기
      </v-btn>
    </h2>
    <p class="desc">가장 가까운 응급실을 안내해드립니다</p>
    <div class="list-article mt-6">
      <ul>
        <li v-for="item in connectList" :key="item.id">
          <div class="btn-box">
            <div class="v-btn__content">
              <h3 class="title fs-18">{{ item.title }}</h3>
              <a :href="`tel:${item.tel}`" class="tel">{{ item.tel }}</a>
              <p class="title2">{{ item.address }}</p>
            </div>
            <v-btn
              variant="text"
              class="btn-link-arr"
              icon="icon-arrow-right"
              height="44"
              @click="goPath('/')"
            ></v-btn>
          </div>
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
  import router from '@/router'
  import ReportResult from '@/components/BanerReport.vue'
  export default {
    components: { ReportResult },
    data() {
      return {
        connectList: [
          {
            id: 1,
            title: '연세 밝은 세상 안과',
            address: '서울특별시 강남구 테헤란로 401 0층 0호',
            tel: '02-3410-2114'
          },
          {
            id: 2,
            title: '굿아이 안과',
            address: '서울특별시 강남구 테헤란로 401 0층 0호',
            tel: '02-3410-2114'
          }
        ]
      }
    },
    setup() {
      function goPath(val) {
        router.push(val)
      }
      return { goPath }
    }
  }
</script>
