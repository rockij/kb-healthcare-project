<template>
  <div class="contents">
    <ul class="info-list">
      <li v-for="(item, index) in businessInfo" :key="index" class="info-item">
        <span class="info-title">{{ item.title }}</span>
        <span class="info-desc">{{ item.desc }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      const businessInfo = reactive([
        {
          title: '법인명',
          desc: '㈜케이비헬스케어'
        },
        {
          title: '대표자명',
          desc: '최낙천'
        },
        {
          title: '통신판매업 신고번호',
          desc: '2021-서울강남-066776호'
        },
        {
          title: '사업자등록번호',
          desc: '356-86-02394'
        },
        {
          title: '대표 전화번호',
          desc: '1544-3677'
        },
        {
          title: '사업장 소재지',
          desc: '(06212) 서울특별시 강남구 테헤란로 334, 15층 (교정공제회 역삼빌딩)'
        }
      ])
      return { businessInfo }
    }
  }
</script>
