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
        path: '/assets/images/img-small-device-03-x3.png'
      }) //연결된 기기 리스트

      const listNumber = ref([
        {
          path: 'img-device3-01-x3.png',
          text: '화면이 <span style="color: #3F86F1; font-weight: 600;">꺼져있는 상태</span>를 확인하세요.'
        },
        {
          path: 'img-device-bluetooth-x3.png',
          text: '<span style="color: #3F86F1; font-weight: 600;">블루투스 버튼</span>을 3초간 길게 눌러주세요.'
        },
        {
          path: 'img-device3-02-x3.png',
          text: '전원이 켜지고 커프가 잘 연결되었을 경우 위 <span style="color: #3F86F1; font-weight: 600;">마크가 표시</span>됩니다.'
        }
      ])
      return { currentConnection, listNumber }
    }
  }
</script>
