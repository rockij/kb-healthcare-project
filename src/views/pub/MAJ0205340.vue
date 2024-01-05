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
      <!-- 아이콘 추가 -->
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
            <v-img height="200" :src="`/assets/images/${item.path}`"> </v-img>
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
        title: 'CareSens N Premier BLE',
        subtitle: 'i-SENS',
        path: '/assets/images/img-small-device-01-x3.png'
      }) //연결된 기기 리스트

      const listNumber = ref([
        {
          path: 'img-device-01-x3.png',
          text: '혈당계의 <span style="color: #3F86F1; font-weight: 600;">S버튼</span>을 3초간 눌러 설정 모드를 실행합니다.'
        },
        {
          path: 'img-device-02-x3.png',
          text: '◀ 또는 ▶ 버튼을 눌러 <span style="color: #3F86F1; font-weight: 600;">하단에 YES로 변경 후 S버튼</span>을 누릅니다.'
        },
        {
          path: 'img-device-03.png',
          text: '◀ 또는 ▶ 버튼을 눌러 하단 문구를 <span style="color: #3F86F1; font-weight: 600;">Palr로 변경 후 S버튼</span>을 누릅니다.'
        },
        {
          path: 'img-device-04.png',
          text: '아래 다음 버튼 선택 후 연결가능한 혈강계가 검색되면 혈당계에서 표시되는 <span style="color: #3F86F1; font-weight: 600;">Pin넘버 6자리 숫자</span>를 확인합니다.'
        },
        {
          path: 'img-device-05.png',
          text: '블루투스 연결 요청화면에서 <span style="color: #3F86F1; font-weight: 600;">Pin넘버 6자리를 등록</span>하고 화면에 <span style="color: #3F86F1; font-weight: 600;">BT SUCCESS 문구</span>가 뜨면 연결이 완료됩니다.'
        }
      ])
      return { currentConnection, listNumber }
    }
  }
</script>
