<template>
  <div class="contents">
    <!-- 연결된 기기 -->
    <v-list lines="one" class="list-round-box">
      <v-sheet class="mx-auto round-box-container">
        <v-list-item
          :prepend-avatar="currentConnection.path"
          class="list-round-box-items"
        >
          <template v-slot:title>{{ currentConnection.title }}</template>
          <template v-slot:subtitle>{{ currentConnection.subtitle }}</template>
        </v-list-item>
      </v-sheet>
    </v-list>
    <!-- //연결된 기기 -->
    <v-sheet class="pt-8">
      <div class="device-title-wrap">
        <img src="/assets/images/icon-title-device-01.svg" alt="" />
        <h3 class="fs-20 font-weight-bold">혈당 측정기 연결방법</h3>
      </div>
      <v-list class="list-number">
        <v-list-item
          v-for="(item, i) in listNumber"
          :key="item"
          class="list-number-item"
        >
          <v-card class="elevation-0" rounded="0">
            <v-img
              v-if="item.path"
              height="200"
              :src="`/assets/images/${item.path}`"
            >
            </v-img>
            <v-card-text class="d-flex pl-0 pt-3 pb-0 align-start lh-2">
              <v-avatar size="24" color="#3B4A65" class="text-white">{{
                i + 1
              }}</v-avatar>
              <div class="pl-2 device-desc-wrap">
                <div v-html="item.text" class="text-basic"></div>
                <div
                  v-if="item.desc"
                  v-html="item.desc"
                  class="pt-2 text-basic"
                ></div>
              </div>
            </v-card-text>
          </v-card>
        </v-list-item>
      </v-list>
    </v-sheet>

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-summit">연결하기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const currentConnection = ref({
        title: 'Standard Mentor BT',
        subtitle: 'SD BIOSENSOR',
        path: '/assets/images/img-small-device-02-x3.png'
      }) //연결된 기기 리스트

      const listNumber = ref([
        {
          path: 'img-device-bluetooth-x3.png',
          text: '스마트폰에서 핸드폰 상단 바의 <span style="color: #3F86F1; font-weight: 600;">블루투스 버튼</span>을 활성화시키세요.'
        },
        {
          path: 'img-device2-01-x3.png',
          text: '기기의 왼쪽 화살표 버튼을 눌러 저장된 최근 측정 결과값을 화면에 띄운 후 <span style="color: #3F86F1; font-weight: 600;">전원버튼</span>을 3초간 누르면 화면에 <span style="color: #3F86F1; font-weight: 600;">‘bt’마크</span>가 표시되며 블루투스 기능이 작동됩니다.'
        },
        {
          path: 'img-device2-02-x3.png',
          text: '스마트폰 앱에서 감지된 혈당측정기의 <span style="color: #3F86F1; font-weight: 600;">모델명을 선택</span>하세요. 연결이 이루어지면 데이터 전송화면이 나타난 후 자동으로 데이터가 전송됩니다.'
        },
        {
          text: '이후 앱 사용화면에서 <span style="color: #3F86F1; font-weight: 600;">블루투스를 활성화</span> 시키면 자동으로 이전 연결 모델을 감지합니다.'
        },
        {
          path: 'img-device2-03-x3.png',
          text: '스마트폰과 혈당측정기의 최초 페어링 이후에는 앱이 스마트폰에 켜져있고, 혈당측정이 끝난 후 혈당검사지를 제거하면 측정된 <span style="color: #3F86F1; font-weight: 600;"> 결과값이 자동으로 전송</span> 됩니다.'
        }
      ])
      return { currentConnection, listNumber }
    }
  }
</script>
