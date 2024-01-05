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
          class="list-number-item type-2"
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
        title: 'HEM-7142T2',
        subtitle: 'Omron',
        path: '/assets/images/img-small-device-05.png'
      }) //연결된 기기 리스트

      const listNumber = ref([
        {
          path: 'img-device5-01.png',
          text: '혈압계의 건전지 분리 후 <span style="color: #3F86F1; font-weight: 600;">START/STOP 버튼</span>을 3회 누릅니다.',
          desc: '혈압계에 다시 건전지를 넣어주세요. <br>(P표시가 보이면 정상연결)'
        },
        {
          path: 'img-device5-02.png',
          text: '<span style="color: #3F86F1; font-weight: 600;">P표시</span>가 보이고 깜빡이고 있습니다.'
        },
        {
          path: 'img-device5-03.png',
          text: '아래 다음 버튼 선택 후 연결 가능한 혈압계가 검색되면 혈압계 뒷면에 표시되는 PIN 넘버 6자리 숫자를 확인합니다.',
          desc: '블루투스 연결 요청 화면에서 <span style="color: #3F86F1; font-weight: 600;">PIN 넘버 6자리를 등록</span>하면 블루투스 연결이 성공합니다.'
        }
      ])
      return {
        currentConnection,
        listNumber
      }
    }
  }
</script>
