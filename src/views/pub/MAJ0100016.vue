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
              src="/assets/images/img-mbn-home04-1.svg"
              alt=""
              width="32"
              height="32"
              class="mr-2"
            />
            건강날씨
          </h2>
          <v-card
            variant="flat"
            color="#F8F8F8"
            class="section-page px-6 py-4 brt-0 mt-4 d-flex align-center"
          >
            <img src="/assets/images/icon-map.svg" alt="" class="mr-1" />
            위치정보
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
                  :color="getText(list.tagState)"
                >
                  {{ list.text2 }}
                </v-chip>
                <v-chip
                  label
                  size="small"
                  :color="getText(list.tagState)"
                  class="chip-default chip-color ml-2"
                >
                  {{ list.tagText }}
                </v-chip>
              </p>
            </div>
            <figure :data-icon-weather="list.iconName"></figure>
          </v-card>
          <!-- //list -->
          <p class="mt-2 text-right fs-13 text-grey">
            출처 기상청 한국환경공단 에어코리아
          </p>
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
          text: '오늘같이 눈 오는 날에는 미끄럼 주의! 타박상 입으면 큰일이에요',
          text2: '날씨',
          tagText: '눈',
          tagState: '매우나쁨',
          iconName: '눈'
        },
        {
          text: '오늘같이 눈 오는 날에는 미끄럼 주의! 타박상 입으면 큰일이에요',
          text2: '일 최고기온',
          tagText: '35도 이상',
          tagState: '나쁨',
          iconName: '최고기온'
        },
        {
          text: '한파입니다! 꼭 외출해야 한다면 복, 목도리, 모자, 장갑 등을 착용해봐요',
          text2: '아침최저기온',
          tagText: '영하 12도 이하',
          tagState: '매우나쁨',
          iconName: '최저기온'
        },
        {
          text: '습도가 적당한 날이네요! 식사 후 가벼운 산책 어떠세요? 기분이 좋아질 거예요',
          text2: '실내 습도',
          tagText: '적당 30~80%',
          tagState: '좋음',
          iconName: '습도'
        },
        {
          text: '건조한 오늘, 꺼진 불도 조심! 화재를 조심해 주세요',
          text2: '실내 습도',
          tagText: '건조 0~30%',
          tagState: '매우나쁨',
          iconName: '맑음'
        },
        {
          text: '습한 하루예요 . 음식이 상하거나 변질되기 쉬우니, 음식 섭취 시 유의하세요',
          text2: '실내 습도',
          tagText: '습함 80% 이상',
          tagState: '매우나쁨',
          iconName: '흐림'
        },
        {
          text: '미세먼지가 없으니, 맑은 하늘을 만끽해 봐요. 구름모양도 확인하고요!',
          text2: '미세먼지',
          tagText: '좋음 0~30µm',
          tagState: '좋음',
          iconName: '구름'
        },
        {
          text: '미세먼지가 보통 수준이니, 기저질환이 없다면 식사 후, 가벼운 산책 어때요?',
          text2: '미세먼지',
          tagText: '보통 31~80µm',
          tagState: '주의',
          iconName: '비'
        },
        {
          text: '미세먼지가 나쁨 수준이니, 외출하실 때 보건용 마스크를 잊지 말고 챙기세요!',
          text2: '미세먼지',
          tagText: '나쁨 81~150µm',
          tagState: '나쁨',
          iconName: '소나기'
        },
        {
          text: '미세먼지가 매우 나쁘니, 홈트레이닝으로 피로를 풀어보는건 어떨까요?',
          text2: '미세먼지',
          tagText: '매우 나쁨 151µm 이상',
          tagState: '매우나쁨',
          iconName: '미세먼지'
        }
      ])
      function getText(props) {
        switch (props) {
          case '좋음':
            return 'green'
          case '주의':
            return 'yellow-darken-1'
          case '나쁨':
            return 'orange'
          case '매우나쁨':
            return 'error'
        }
      }
      const dialog = ref(false)
      return { lists, getText, dialog }
    }
  }
</script>
