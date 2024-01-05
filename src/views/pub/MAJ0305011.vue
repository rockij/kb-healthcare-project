<template>
  <div class="contents">
    <div class="title-area">
      <h2 class="subTit-01">
        의료진에게 묻기에서 사용하실 닉네임을 입력해 주세요
      </h2>
    </div>
    <div class="textfield-area">
      <v-text-field
        class="input-basic textfield-default"
        v-model="nickname"
        label="닉네임"
        required
        clearable
        persistent-placeholder
        variant="outlined"
        placeholder="한글/영문/숫자 (2글자~10글자)"
      >
      </v-text-field>
    </div>
    <div class="smDesc d-flex pt-2 pb-0 gap-4">
      <v-icon class="icon-caption" />
      <span class="text">
        의료진에게 묻기 서비스를 이용하기 위해 닉네임 설정이 필요합니다
      </span>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="btn-summit">확인</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const nickname = ref()
      return { nickname }
    }
  }
</script>
