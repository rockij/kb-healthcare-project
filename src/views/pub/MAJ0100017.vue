<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">건강 인사이트</v-toolbar-title>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container pt-7">
          <h2 class="ff-second font-weight-bold fs-26 d-flex align-center">
            <img
              src="/assets/images/img-mbn-home05-1.svg"
              alt=""
              width="32"
              height="32"
              class="mr-2"
            />
            질환주의보
          </h2>
          <v-card
            variant="flat"
            color="#F8F8F8"
            class="section-page px-6 py-4 brt-0 mt-4 d-flex align-center"
          >
            <img src="/assets/images/icon-map.svg" alt="" class="mr-1" />
            인천광역시 미추홀구
          </v-card>
          <!-- //위치정보 -->
          <v-card
            v-for="(list, i) in lists"
            :key="i"
            variant="outlined"
            color="#eee"
            class="pa-4 mt-4 card-report5"
            rounded="xl"
          >
            <div class="text-black textbox">
              {{ list.text }}
              <p class="mt-4">
                <v-chip
                  variant="text"
                  class="px-0 fs-13"
                  :color="getText(list.tagText)"
                >
                  {{ list.text2 }}
                </v-chip>
                <v-chip
                  label
                  size="small"
                  :color="getText(list.tagText)"
                  class="chip-default chip-color ml-2"
                >
                  {{ list.tagText }}
                </v-chip>
              </p>
            </div>
            <figure :data-icon-weather="list.iconName"></figure>
          </v-card>
          <!-- //list -->
          <p class="mt-2 text-right fs-13 text-grey">출처 건강보험공단</p>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import { ref } from 'vue'
  export default {
    emits: ['close'],
    setup() {
      const lists = ref([
        {
          text: '외출시 따뜻하게 입으셔야해요',
          text2: '감기가능지수',
          tagText: '매우높음',
          iconName: '감기가능지수'
        },
        {
          text: '심한 기침이 발생시에는 바로 의료기관을 방문하셔야 해요',
          text2: '천식지수',
          tagText: '매우높음',
          iconName: '천식지수'
        },
        {
          text: '고열, 빠른 호흡으로 두통, 어지러움 증상 발생시 즉시 의료기관을 방문하세요',
          text2: '온열질환지수',
          tagText: '매우높음',
          iconName: '온열질환지수'
        },
        {
          text: '몸에 가벼운 이상현상이 나타나면 지속적으로 본인의 상태를 관찰하세요',
          text2: '심혈관질환지수',
          tagText: '높음',
          iconName: '심혈관질환지수'
        },
        {
          text: '눈병 예방을 위해 손을 자주 씻고, 손으로 눈 주위를 만지지 마세요',
          text2: '눈병지수 ',
          tagText: '낮음',
          iconName: '눈병지수'
        },
        {
          text: '식중독 발생 가능성은 낮으나 지속적 관심이 필요해요',
          text2: '식중독지수',
          tagText: '낮음',
          iconName: '식중독지수'
        },
        {
          text: '식중독 발생 가능성은 낮으나 지속적 관심이 필요해요',
          text2: '피부염지수',
          tagText: '주의',
          iconName: '피부염지수'
        }
      ])
      function getText(props) {
        switch (props) {
          case '낮음':
            return 'green'
          case '주의':
            return 'yellow-darken-1'
          case '높음':
            return 'orange'
          case '매우높음':
            return 'error'
        }
      }
      const dialog = ref(false)
      return { lists, getText, dialog }
    }
  }
</script>
