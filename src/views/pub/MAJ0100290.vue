<template>
  <div class="contents">
    <div class="login-section">
      <div class="login-title">오케어</div>
      <ul class="setting-list">
        <li class="setting-item" v-for="item in agreement" :key="item.id">
          <a
            href="javascript:;"
            class="grid-link agree-link2"
            :class="{ noAgree: item.agree === undefined }"
            ><span>{{ item.text }}</span>
            <span class="setting-state" v-if="item.agree !== undefined">
              <span v-if="item.agree === true">동의함</span>
              <span v-else class="text-grey">동의안함</span>
            </span>
            <v-icon>mdi-chevron-right</v-icon>
          </a>
        </li>
      </ul>
    </div>
    <div class="login-section pt-8">
      <div class="login-title">서비스</div>
      <ul class="setting-list">
        <li class="setting-item" v-for="item in agreement2" :key="item.id">
          <a href="javascript:;" class="grid-link agree-link"
            ><span>{{ item.text }}</span>

            <v-icon>mdi-chevron-right</v-icon>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      const agreement = reactive([
        {
          id: 0,
          text: '오케어 서비스 이용 약관'
        },
        {
          id: 1,
          text: '개인정보 처리방침'
        },
        {
          id: 2,
          text: '오케어 유료서비스 이용 약관'
        },
        {
          id: 3,
          text: '위치정보 서비스 이용 약관'
        },
        {
          id: 4,
          text: '개인정보 유효기간',
          agree: true
        },
        {
          id: 5,
          text: '민감정보 수집 및 이용 선택 동의',
          agree: false
        }
      ])
      const agreement2 = reactive([
        {
          id: 0,
          text: '스포애니'
        }
      ])

      return {
        agreement,
        agreement2
      }
    }
  }
</script>
