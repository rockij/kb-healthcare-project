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
      <h3 class="fs-18 font-weight-bold">혈당 측정기 연결방법</h3>
      <v-list class="list-number">
        <v-list-item
          v-for="(item, i) in listNumber"
          :key="item"
          class="list-number-item"
        >
          <v-card class="elevation-0" rounded="0">
            <v-img
              height="200"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            >
            </v-img>
            <v-card-text class="list-number-text">
              <span class="number">{{ i + 1 }}.</span>
              <div>
                {{ item.text }}
              </div>
            </v-card-text>
          </v-card>
        </v-list-item>
      </v-list>
    </v-sheet>
    <div class="d-flex justify-center pt-3">
      <v-btn
        variant="tonal"
        color="primary"
        type="submit"
        class="flex-wrap btn-input-submit"
        height="32"
        width="94"
        >영상으로 보기</v-btn
      >
    </div>

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
        title: 'Galaxy Watch Active',
        subtitle: 'Samsung',
        path: '/src/assets/images/dummy-watch.png'
      }) //연결된 기기 리스트

      const listNumber = ref([
        {
          path: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          text: '접근 권한은 해당 기능을 사용할 때 허용이 필요하며, 비허용시에도 해당 기능 외 서비스 이용이 가능합니다'
        },
        {
          path: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          text: '◀ 또는 ▶ 버튼을 눌러 하단에 YES로 변경 후 S버튼을 누릅니다'
        },
        {
          path: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          text: '◀ 또는 ▶ 버튼을 눌러 하단 문구를 Palr로 변경 후 S버튼을 누릅니다.'
        },
        {
          path: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          text: '아래 다음 버튼 선택 후 연결가능한 혈강계가 검색되면 혈당계에서 표시되는 Pin넘버 6자리 숫자를 확인합니다'
        },
        {
          path: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          text: '블루투스 연결 요청화면에서 Pin넘버 6자리를 등록하고 화면에 BT SUCCESS 문구가 뜨면 연결이 완료됩니다'
        }
      ])
      return { currentConnection, listNumber }
    }
  }
</script>

<style lang="scss" scoped></style>
