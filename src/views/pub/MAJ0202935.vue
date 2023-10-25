<template>
  <div class="contents">
    <!-- 월경 기간 입력 -->
    <v-text-field
      class="input-basic textfield-default font-weight-bold"
      label="월경 기간"
      required
      persistent-placeholder
      variant="outlined"
      suffix="일"
      placeholder="월경 기간"
    >
    </v-text-field>
    <!-- 월경 주기 입력 -->
    <v-text-field
      class="input-basic textfield-default font-weight-bold mt-4"
      label="월경 주기"
      required
      persistent-placeholder
      variant="outlined"
      suffix="일"
      placeholder="월경 주기"
    >
    </v-text-field>

    <div class="section-page mt-8">
      <div class="tit-01 pb-1">월경 시작 알림</div>
      <div class="text-info-grey mb-4">
        예정일이 다가오면 알려드릴게요. 언제부터 알려드릴까요?
      </div>
      <div class="tabs-simple2 gap">
        <v-btn
          variant="text"
          class="fs-16"
          v-for="btn in btns"
          :key="btn.value"
          :aria-selected="selBtn === btn.value"
          @click="selBtn = btn.value"
          >{{ btn.text }}</v-btn
        >
      </div>
    </div>

    <div class="section-page">
      <div class="switch-area">
        <div>
          <div class="tit-01 pb-0">사랑일 숨김</div>
          <div class="text-info-grey">
            캘린더에 보여지는 사랑일 아이콘을<br />
            숨길 수 있어요
          </div>
        </div>
        <v-switch
          class="switch-default"
          v-model="switchOff"
          color="#FFD338"
          hide-details
        ></v-switch>
      </div>
    </div>

    <div class="section-page pt-13">
      <v-btn block variant="text" height="24" class="btn-link">
        건강 플랫폼 연결관리
      </v-btn>
    </div>

    <!-- 버튼 -->
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          @click.stop="snackbar = true"
          >확인</v-btn
        >
      </div>
    </div>
    <!-- toast 팝업 -->
    <v-snackbar v-model="snackbar"> 정상적으로 변경되었습니다 </v-snackbar>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    setup() {
      const switchOff = ref('on')
      const snackbar = ref(false)
      const result = ref(false)
      const selBtn = ref()
      const btns = reactive([
        {
          value: 1,
          text: '1일 전'
        },
        {
          value: 2,
          text: '3일 전'
        },
        {
          value: 3,
          text: '7일전'
        },
        {
          value: 4,
          text: '알림없음'
        }
      ])
      return {
        switchOff,
        snackbar,
        result,
        selBtn,
        btns
      }
    }
  }
</script>
