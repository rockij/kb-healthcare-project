<template>
  <div class="contents">
    <div class="login-section">
      <div class="login-title">필수 동의 내용</div>
      <ul class="setting-list">
        <li class="setting-item" v-for="item in agreement" :key="item.id">
          <a href="javascript:;" class="grid-link agree-link"
            ><span>{{ item.text }}</span>
            <v-icon>mdi-chevron-right</v-icon>
          </a>
        </li>
      </ul>
    </div>
    <div class="login-section pt-8">
      <div class="login-title">선택 동의 내용</div>
      <ul class="setting-list">
        <li class="setting-item" v-for="item in agreement2" :key="item.id">
          <a href="javascript:;" class="grid-link agree-link2"
            ><span>{{ item.text }}</span>
            <span class="setting-state" v-if="item.agree === true">동의함</span>
            <span class="setting-state text-grey" v-else>동의안함</span>
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
          text: '서비스 이용 약관'
        },
        {
          id: 1,
          text: '제3자 정보 이용 동의'
        }
      ])
      const agreement2 = reactive([
        {
          id: 0,
          text: '제3자 정보 이용 동의(KB국민은행)',
          agree: false
        },
        {
          id: 1,
          text: '제3자 정보 이용 동의(KB국민은행)',
          agree: true
        }
      ])

      return {
        agreement,
        agreement2
      }
    }
  }
</script>
