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
            <img src="/assets/images/icon-insite01.svg" alt="" />
            <p class="subTit-01 ml-2">건강날씨</p>
          </div>
          <div class="bside-area type-2 mt-4">
            <v-btn variant="text" class="btn-map">위치정보</v-btn>
          </div>
          <div class="weather-list mt-4">
            <div
              class="box-rounded item pa-4"
              v-for="(item, i) in weathers"
              :key="i"
            >
              <div class="mb-4">{{ item.text }}</div>
              <div class="d-flex align-center">
                <span class="tit text-primary">{{ item.status.title }}</span>
                <v-chip
                  label
                  size="small"
                  color="primary"
                  class="chip-default chip-color"
                >
                  {{ item.status.text }}
                </v-chip>
              </div>
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
          text: '맑은 날씨 덕에 화창하고 밝게 하루를 시작할 수있어요!',
          status: {
            title: '날씨',
            text: '맑음'
          }
        },
        {
          text: '오늘같은날 외출을 할 경우에는 주기적으로 따뜻한 곳에서 휴식을 취해주세요',
          status: {
            title: '아침최저기온',
            text: '영하 12도 이하'
          }
        },
        {
          text: '맑은 날씨 덕에 화창하고 밝게 하루를 시작할 수있어요!',
          status: {
            title: '실내 습도',
            text: '건조'
          }
        },
        {
          text: '미세먼지가 좋음 수준인 오늘, 30분이라도 운동하기! 한정가장 걸어도 좋고 식사후 산책도 좋아요',
          status: {
            title: '미세먼지',
            text: '좋음'
          }
        }
      ])
      return {
        weathers,
        dialog
      }
    }
  }
</script>
