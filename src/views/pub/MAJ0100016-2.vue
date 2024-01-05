<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">건강 인사이트</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="title-area d-flex align-center">
            <img src="/assets/images/icon-insite02.svg" alt="" />
            <p class="subTit-01 ml-2">질환주의보</p>
          </div>
          <div class="bside-area type-2 mt-4">
            <v-btn variant="text" class="btn-map">인천광역시 미추홀구</v-btn>
          </div>
          <div class="weather-list type-2 mt-4">
            <div
              v-for="(item, i) in weathers"
              :key="i"
              class="box-rounded item pa-4"
              :class="item.statusSt"
            >
              <div>
                <div class="mb-4">{{ item.text }}</div>
                <div class="d-flex align-center">
                  <span class="tit" :class="`text-${getColor(item.statusCd)}`">
                    {{ item.status.title }}
                  </span>
                  <v-chip
                    label
                    size="small"
                    class="chip-default chip-color"
                    :color="getColor(item.statusCd)"
                  >
                    {{ item.status.text }}
                  </v-chip>
                </div>
              </div>
              <template v-if="item.statusCd === 400">
                <img src="/assets/images/icon-weather04.svg" alt="아주높음" />
              </template>
              <template v-if="item.statusCd === 300">
                <img src="/assets/images/icon-weather03.svg" alt="높음" />
              </template>
              <template v-if="item.statusCd === 200">
                <img src="/assets/images/icon-weather02.svg" alt="주의" />
              </template>
              <template v-if="item.statusCd === 100">
                <img src="/assets/images/icon-weather01.svg" alt="낮음" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const dialog = ref(true)
      const weathers = ref([
        {
          text: '외출시 따뜻하게 입으셔야해요',
          statusCd: 400,
          status: {
            title: '감기가능지수',
            text: '매우높음'
          }
        },
        {
          text: '심한 기침이 발생시에는 바로 의료기관을 방문하셔야 해요',
          statusCd: 400,
          status: {
            title: '천식지수',
            text: '매우높음'
          }
        },
        {
          text: '고열, 빠른 호흡으로 두통, 어지러움 증상 발생시 즉시 의료기관을 방문하세요',
          statusCd: 400,
          status: {
            title: '온열질환지수',
            text: '매우높음'
          }
        },
        {
          text: '몸에 가벼운 이상현상이 나타나면 지속적으로 본인의 상태를 관찰하세요',
          statusCd: 300,
          status: {
            title: '심혈관질환지수',
            text: '높음'
          }
        },
        {
          text: '눈병 예방을 위해 손을 자주 씻고, 손으로 눈 주위를 만지지 마세요',
          statusCd: 200,
          status: {
            title: '눈병지수 ',
            text: '주의'
          }
        },
        {
          text: '식중독 발생 가능성은 낮으나 지속적 관심이 필요해요',
          statusCd: 100,
          status: {
            title: '식중독지수',
            text: '낮음'
          }
        },
        {
          text: '피부를 위해 과도한 비누사용, 습도가 낮은 환경 노출에 유의하세요',
          statusCd: 100,
          status: {
            title: '피부염지수',
            text: '낮음'
          }
        }
      ])
      function getColor(status) {
        switch (status) {
          case 100:
            return 'green'
          case 200:
            return 'yellow'
          case 300:
            return 'orange'
          case 400:
            return 'error'
        }
      }
      return {
        dialog,
        weathers,
        getColor
      }
    }
  }
</script>
