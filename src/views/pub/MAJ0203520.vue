<template>
  <div class="contents">
    <div class="section-page bg-sky pa-4">
      <div class="mymedi-title">나의 약</div>
      <v-btn
        variant="text"
        v-for="list in nalcoholList"
        :key="list.id"
        class="list-iconlst2 mt-2 mymedi-btn"
      >
        <img src="@/assets/images/icon-my-medicine.svg" alt="" />
        <div class="mymedi-list">
          <p class="mymedi-text">{{ list.text }}</p>
          <p class="mymedi-category">{{ list.category }}</p>
        </div>
      </v-btn>
    </div>

    <ul class="info-list pt-6">
      <li v-for="(item, index) in businessInfo" :key="index" class="info-item">
        <span class="info-title">{{ item.title }}</span>
        <span class="info-desc">{{ item.desc }} <br />{{ item.desc2 }}</span>
      </li>
    </ul>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="btn-cancel">삭제</v-btn>
        <v-btn variant="text" height="56" class="btn-summit">수정</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    setup() {
      const modal = ref(false)
      const nalcoholList = ref([
        {
          id: 1,
          text: '겔비스톤현탁액 20ml/포'
        },
        {
          id: 2,
          text: '겔비스톤현탁액 20ml/포',
          category: '[02320] 소화성궤양용제'
        }
      ])
      const businessInfo = reactive([
        {
          title: '약 별명',
          desc: '활력 부스터'
        },
        {
          title: '먹는 기간',
          desc: '2023.08.24 ~ 2023.08.31',
          desc2: '총 7일동안 복용'
        },
        {
          title: '먹는 주기',
          desc: '매일'
        },
        {
          title: '먹는 횟수',
          desc: '하루에 2번'
        },
        {
          title: '먹는 시간과 양',
          desc: '오전 9시 / 1정 씩',
          desc2: '오후 1시 / 1정 씩'
        }
      ])

      return {
        modal,
        nalcoholList,
        businessInfo
      }
    }
  }
</script>
