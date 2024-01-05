<template>
  <div class="contents">
    <!-- 연결된 기기 -->
    <v-list lines="one" class="list-round-box">
      <v-list-subheader>{{ currentConnection.name }}</v-list-subheader>
      <v-sheet class="mx-auto round-box-container">
        <v-list-item
          :prepend-avatar="currentConnection.path"
          class="list-round-box-items"
          tag="button"
          role="button"
        >
          <template v-slot:title>{{ currentConnection.title }}</template>
          <template v-slot:subtitle>{{ currentConnection.subtitle }}</template>
          <template v-slot:append>
            <v-btn :ripple="false" variant="text" class="text-btn" tag="span"
              >연결됨</v-btn
            >
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-list-item>
      </v-sheet>
    </v-list>
    <!-- //연결된 기기 -->

    <v-divider
      class="border-opacity-100 section-divider"
      :thickness="8"
      color="#eee"
    ></v-divider>

    <!-- 스마트워치 -->
    <v-list
      lines="one"
      class="list-round-box"
      v-for="item in connectionList"
      :key="item"
    >
      <v-list-subheader>{{ item.name }}</v-list-subheader>
      <v-sheet class="mx-auto round-box-container">
        <v-list-item
          v-for="key in item.contents"
          :key="key"
          :prepend-avatar="key.path"
          class="list-round-box-items"
          tag="button"
          @click="modalOpen(key.authority)"
        >
          <template v-slot:title>{{ key.title }}</template>
          <template v-slot:subtitle>{{ key.subtitle }}</template>
          <template v-slot:append>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-list-item>
      </v-sheet>
    </v-list>
    <!-- //스마트워치 -->

    <!-- 상세페이지 이동 -->
    <v-list
      lines="one"
      class="list-round-box"
      v-for="item in connectionLinkList"
      :key="item"
    >
      <v-list-subheader>{{ item.name }}</v-list-subheader>
      <v-sheet class="mx-auto round-box-container">
        <v-list-item
          v-for="key in item.contents"
          :key="key"
          :prepend-avatar="key.path"
          class="list-round-box-items"
          :to="key.link"
        >
          <template v-slot:title>{{ key.title }}</template>
          <template v-slot:subtitle>{{ key.subtitle }}</template>
          <template v-slot:append>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-list-item>
      </v-sheet>
    </v-list>
    <!-- //상세페이지 이동 -->

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-summit"
          >주변 기기 찾기</v-btn
        >
      </div>
    </div>
  </div>
  <!-- 접근권한 안내 -->
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    class="modal-fullscreen"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title>접근권한 안내</v-toolbar-title>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="modal-body">
        <div class="modal-body-container">
          <div class="title-area pt-7">
            <p class="subTit-01">
              기기연결을 위해<br />권한의 허용이 필요합니다
            </p>
          </div>

          <v-list class="icon-list">
            <v-list-item
              v-for="item in iconList"
              :key="item"
              lines="2"
              class="icon-list-item"
            >
              <template v-slot:prepend>
                <v-avatar :image="item.path" rounded="0"></v-avatar>
              </template>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ item.contents }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>

          <v-sheet class="text-container bdr-8" color="#F8F8F8">
            <ul class="list-circle">
              <li v-for="item in listReference" :key="item">{{ item.text }}</li>
            </ul>
          </v-sheet>
        </div>
      </div>
      <v-card-actions>
        <v-btn height="56px" class="bdr-8 btn-yellow" block>확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- //접근권한 안내 -->

  <!-- 검색 기기 목록 -->
  <v-dialog
    v-model="dialogSearchList"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">기기 검색 목록</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          dark
          @click="dialogSearchList = false"
          class="btn-modal-close"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <v-sheet class="modal-text-container">
            <p v-if="data == null">
              기기를 검색 중입니다 사용하시는 기기의 전원을 켜고 잠시만
              기다려주세요
            </p>
            <p v-else-if="data == true">
              기기가 검색되었습니다 원하는 기기를 선택해 주세요
            </p>

            <div class="no-data" v-else>
              <div class="icon regular icon-info device"></div>
              <div class="text">
                <div>
                  <strong>검색된 기기가 없습니다</strong> <br />기기의 전원이
                  켜져 있는지 확인주세요
                </div>
              </div>
            </div>
          </v-sheet>
          <v-sheet>
            <v-sheet v-if="data == null" class="pb-10"
              ><Vue3Lottie animationLink="/assets/images/DeviceConnection.json"
            /></v-sheet>
            <v-list class="list-select-button pb-10" v-else-if="data == true">
              <v-list-item
                variant="text"
                tag="button"
                class="list-select-button-item"
                v-for="item in connectionSearchList"
                :key="item"
              >
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <template v-slot:append>
                  <v-btn
                    :ripple="false"
                    variant="tonal"
                    color="primary"
                    class="flex-wrap btn-input-submit"
                    height="32"
                    tag="span"
                    >연결하기</v-btn
                  >
                </template>
              </v-list-item>
            </v-list>
          </v-sheet>
        </div>
      </div>

      <v-card-actions v-if="data == false">
        <v-btn height="48px" class="bdr-8 btn-yellow" block
          >다시 검색하기</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- //검색 기기 목록 -->
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import { ref } from 'vue'

  export default {
    components: { Nodata },
    setup() {
      const dialog = ref(false)
      const dialogSearchList = ref(false)
      const data = ref(null) //null: 로딩, true:목록, false:기기없음

      const currentConnection = ref({
        name: '연결된 기기',
        title: 'Galaxy Watch Active',
        subtitle: 'Samsung',
        path: '/assets/images/dummy-watch.png'
      }) //연결된 기기 리스트

      const connectionList = ref([
        {
          name: '스마트워치',
          contents: [
            {
              title: 'Galaxy Watch4',
              subtitle: 'Samsung',
              path: '/assets/images/dummy-watch.png',
              authority: true
            },
            {
              title: 'Apple Watch SE',
              subtitle: 'apple',
              path: '/assets/images/dummy-watch.png',
              authority: false
            }
          ]
        }
      ]) //스마트 워치 리스트

      const connectionLinkList = ref([
        {
          name: '혈당',
          contents: [
            {
              title: 'CareSens N Premier BLE',
              subtitle: 'i-SENS',
              path: '/assets/images/dummy-watch.png',
              link: '#none'
            }
          ]
        },
        {
          name: '혈압',
          contents: [
            {
              title: 'HEM-7142T2',
              subtitle: 'Omron',
              path: '/assets/images/dummy-watch.png',
              link: '#none'
            }
          ]
        },
        {
          name: '체중',
          contents: [
            {
              title: 'SOLFIT Scale',
              subtitle: 'SOLFIT',
              path: '/assets/images/dummy-watch.png',
              link: '#none'
            }
          ]
        }
      ]) //상세 페이지 리스트

      const connectionSearchList = ref([
        { name: 'CareSens N Premier BLE' },
        { name: 'CareSens N Premier' }
      ]) //검색 기기 목록
      const iconList = ref([
        {
          title: '블루투스',
          contents:
            '앱 주변 블루투스 기기로 송신하거나 이에 대한 정보를 수집하기위해 사용',
          path: '/assets/images/icon-bluetooth.svg'
        },
        {
          title: '위치',
          contents: '기기 탐색을 위해 사용',
          path: '/assets/images/icon-location.svg'
        }
      ])

      const listReference = ref([
        {
          text: '접근 권한은 해당 기능을 사용할 때 허용이 필요하며, 비허용시에도 해당 기능 외 서비스 이용이 가능합니다'
        },
        {
          text: '접근 권한 변경은 [휴대폰 설정 > 어플리케이션 관리 > 오케어 > 권한]에서 각 권한별 변경이 가능합니다'
        }
      ])

      const modalOpen = (e) => {
        if (e) {
          dialog.value = true
        } else {
          dialogSearchList.value = true
        }
      }
      return {
        currentConnection,
        connectionList,
        dialog,
        dialogSearchList,
        connectionLinkList,
        connectionSearchList,
        iconList,
        listReference,
        data,
        modalOpen
      }
    }
  }
</script>

<style lang="scss" scoped></style>
