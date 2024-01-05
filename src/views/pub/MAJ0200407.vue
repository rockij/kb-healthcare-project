<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">오건강님의<br />신체정보를 알려주세요</p>
      <p class="desc pt-4">
        키, 몸무게 입력만으로 수분, 체성분, 혈당, 혈압의 건강관리를 시작할 수
        있으며 <strong>마이페이지 > 나의 정보 > 내정보관리</strong>에서 수정할
        수 있습니다
      </p>
    </div>
    <div class="textfield-area body-calendar pt-4 d-flex">
      <v-text-field
        class="input-basic textfield-default suffix"
        label="키"
        required
        persistent-placeholder
        variant="outlined"
        placeholder="키 입력"
        v-model="inputHigh"
        type="number"
        clearable
      >
        <template v-slot:append-inner>cm</template>
      </v-text-field>

      <v-text-field
        class="input-basic textfield-default suffix"
        label="몸무게"
        required
        persistent-placeholder
        variant="outlined"
        placeholder="몸무게 입력"
        v-model="inputWeight"
        type="number"
        clearable
      >
        <template v-slot:append-inner>kg</template>
      </v-text-field>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          :disabled="textValue == 0"
          >저장하기</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const inputHigh = ref()
      const inputWeight = ref()
      return {
        inputHigh,
        inputWeight
      }
    }
  }
</script>
