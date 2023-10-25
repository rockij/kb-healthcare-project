<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">
        월경주기 예측을 위해<br />
        이래 정보를 알려주세요
      </p>
      <p class="desc pt-4 mb-7">
        월경주기를 모르신다면 28일로 설정해보세요<br />나중에 변경할 수 있어요
      </p>
    </div>
    <!-- 월경주기 입력 -->
    <v-text-field
      class="input-basic textfield-default font-weight-bold"
      label="월경주기"
      required
      persistent-placeholder
      variant="outlined"
      suffix="일"
      placeholder="주기"
    >
    </v-text-field>
    <div class="text-info-grey mt-2">
      월경주기는 월경 첫째날부터 다음 월경 전날까지의 기간이에요
    </div>
    <!-- 마지막 월경일 입력 -->
    <div class="calendar-input mt-5">
      <v-label>마지막 월경일</v-label>
      <v-text-field
        required
        persistent-placeholder
        variant="plain"
        density="compact"
        hide-details
        append-inner-icon="mdi-calendar"
        @click="result = true"
        placeholder="시작"
      />
      <div class="text text-center">~</div>
      <v-text-field
        required
        persistent-placeholder
        variant="plain"
        density="compact"
        hide-details
        append-inner-icon="mdi-calendar"
        @click="result = true"
        placeholder="종료일"
      />
    </div>
    <!-- 입력 후 버튼 나옴 -->
    <div class="font-weight-bold mt-4">월경알림</div>
    <div class="text-info-grey mt-2" v-if="!result">
      마지막 월경기간을 알려주세요. 현재월경중이라면 이전 기간을 알려주세요
    </div>
    <v-fade-transition>
      <div v-if="result">
        <div class="text-info-grey mt-2">
          예정일이 다가오면 알려드릴게요. 언제부터 알려드릴까요?
        </div>
        <div class="tabs-simple2 gap pt-4">
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
    </v-fade-transition>
    <!-- 버튼 -->
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          :disabled="!selBtn"
          >다음</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    setup() {
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
        result,
        selBtn,
        btns
      }
    }
  }
</script>
