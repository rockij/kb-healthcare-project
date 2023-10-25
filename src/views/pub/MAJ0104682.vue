<template>
  <div class="contents">
    <div class="category-area pt-0">
      <ul class="list">
        <li class="item" v-for="item in agreement" :key="item.value">
          <v-btn variant="text" block>
            {{ item.text }}
          </v-btn>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const agreement = ref([
        {
          text: 'KB헬스케어 서비스 이용약관 필수동의'
        },
        {
          text: 'KB헬스케어 서비스 관련 수집·이용'
        },
        {
          text: '개인(신용)정보의 제3자 제공 동의'
        },
        {
          text: 'KB헬스케어 서비스 관련 제공'
        },
        {
          text: '온라인 서비스 이용약관 필수동의'
        },
        {
          text: '서비스 이용약관동의'
        },
        {
          text: '개인정보 필수적 수집/이용 동의서'
        },
        {
          text: '개인정보 필수적 제공 동의서'
        },
        {
          text: '개인(신용)정보의 위탁 동의'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      return {
        agreement,
        goPath
      }
    }
  }
</script>
