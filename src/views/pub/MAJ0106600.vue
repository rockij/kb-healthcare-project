<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">내가 바라보는 사랑의 색깔은?</p>
      <p class="fs-18 font-weight-bold pt-7">
        Episode.01 서브 타이틀 테스트 몇 글자 까지 들어갈지 확인 필요
      </p>
    </div>
    <div
      class="d-flex align-center justify-center mt-7"
      style="height: 200px; background: #eee"
    >
      이미지
    </div>
    <div class="border-top mt-8">
      <dl class="info-item">
        <dt class="info-title">가격</dt>
        <dd class="info-desc">{{ obj.price }}</dd>
      </dl>
      <dl class="info-item">
        <dt class="info-title">검사시간</dt>
        <dd class="info-desc">{{ obj.time }}</dd>
      </dl>
      <dl class="info-item">
        <dt class="info-title">문항수</dt>
        <dd class="info-desc">{{ obj.count }}</dd>
      </dl>
    </div>
    <template v-for="item in list" :key="item.title">
      <div class="tit-03 pb-0 mt-8">{{ item.title }}</div>
      <div class="mt-1">
        {{ item.text }}
      </div>
    </template>
    <v-card variant="flat" color="#F8F8F8" class="mt-8 pa-4">
      <v-card-title class="pa-0 fs-14 lh-0">유의사항</v-card-title>
      <v-card-text class="pa-0">
        <ul class="list-circle mt-4">
          <li v-for="(item, i) in list2" :key="i">{{ item }}</li>
        </ul>
      </v-card-text>
    </v-card>
    <!-- bottom btn -->
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="btn-summit">검사하기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const obj = ref({
        price: '무료',
        time: '20~30분',
        count: '10개 영역 영역별 40개'
      })
      const list = ref([
        {
          title: '심리검사 설명',
          text: '아이들이 가지고 있는 가장 핵심적인 5가지 기질요인에 대한 해석과 이에 따른 교육 및 양육방식을 제공해주는 검사'
        },
        {
          title: '검사 실시자',
          text: '6개월 이상의 영유아 ~ 초등학생 자녀를 둔 부모가 검사'
        }
      ])
      const list2 = ref([
        '프로그램 환불은 결제 후 7일 이내 상담 예약 및 심리 검사 실시 내역이 없다면 다음날 자동 결제 취소돼요',
        '대면/비대면 상담은 1회차 상담 시작 24시간 전까지 결제 취소 가능해요.',
        '심리검사+상담 패키지는 심리검사 시작 전까지 결제 취소 가능해요.',
        '심리검사는 심리검사 시작 전까지 결제 후 7일 이내 결제 취소 가능해요.'
      ])
      return {
        obj,
        list,
        list2
      }
    }
  }
</script>
