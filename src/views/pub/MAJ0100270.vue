<template>
  <div class="contents">
    <div class="login-section">
      <div class="login-title">로그인 수단</div>
      <ul class="setting-list">
        <li class="setting-item setting-switch">
          <span class="setting-menu">자동 로그인 사용</span>
          <v-switch
            class="switch-default"
            v-model="switchModel1"
            color="#FFD338"
            value="on"
            hide-details
          ></v-switch>
        </li>
        <li class="setting-item">
          <a href="javascript:;" class="setting-link grid-link"
            ><span>로그인 대표</span>
            <span class="setting-state">간편비밀번호</span>
            <v-icon>mdi-chevron-right</v-icon>
          </a>
        </li>
      </ul>
    </div>
    <div class="login-section pt-8">
      <div class="login-title">SNS 로그인</div>
      <ul class="setting-list">
        <li class="setting-item" v-for="item in snsList" :key="item.id">
          <a href="javascript:;" class="setting-link">{{ item.text }}</a>
          <v-btn v-if="item.btn" variant="text" class="setting-btn">{{
            item.btn
          }}</v-btn>
        </li>
      </ul>
    </div>
    <div class="login-section pt-8">
      <div class="login-title">간편 로그인</div>
      <ul class="setting-list">
        <li class="setting-item">
          <a href="javascript:;" class="setting-link d-flex"
            ><span>간편비밀번호 변경</span><v-icon>mdi-chevron-right</v-icon></a
          >
        </li>
        <li class="setting-item setting-switch">
          <span class="setting-menu">패턴 사용</span>
          <v-switch
            class="switch-default switch-text"
            v-model="switchModel2"
            color="#FFD338"
            true-value="on"
            false-value="off"
            hide-details
          ></v-switch>
        </li>
        <li class="setting-item setting-switch">
          <span class="setting-menu">생체인증 사용</span>
          <v-switch
            class="switch-default switch-text"
            v-model="switchModel3"
            color="#FFD338"
            true-value="on"
            false-value="off"
            hide-details
          ></v-switch>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    setup() {
      const switchModel1 = ref('')
      const switchModel2 = ref('')
      const switchModel3 = ref('')
      const snsList = reactive([
        {
          id: 0,
          text: '카카오톡 연결',
          btn: '연결하기'
        },
        {
          id: 1,
          text: '애플 ID 연결',
          btn: '연결하기'
        }
      ])
      return {
        switchModel1,
        switchModel2,
        switchModel3,
        snsList
      }
    }
  }
</script>
