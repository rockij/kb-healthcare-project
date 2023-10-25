<template>
  <div class="contents">
    <div class="title-area pb-8">
      <p class="subTit-01">스포애니</p>
    </div>
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
    <div class="section-page login-page"></div>
    <div class="agree-cancel sorting-area">
      <div class="cancel-title">동의 철회</div>
      <div class="cancel-desc">
        동의 철회 시 본 서비스와 관련된 모든 정보가 삭제되며, 복구 할 수
        없습니다.
      </div>
      <v-btn
        class="btn-sorting v-btn--selected mt-3 fs-15 font-weight-regular btn-cancel"
        variant="outlined"
        density="compact"
        block
        height="40"
        >동의 철회하기</v-btn
      >
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
