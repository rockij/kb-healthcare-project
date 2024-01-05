<template>
  <div class="contents">
    <!-- 연결된 기기 -->
    <v-list lines="one" class="list-round-box">
      <v-list-subheader>{{ currentConnection.name }}</v-list-subheader>
      <v-sheet class="mx-auto round-box-container">
        <v-list-item
          class="list-round-box-items"
          tag="button"
          role="button"
          v-for="connectItems in currentConnection.items"
          :key="connectItems"
        >
          <template #prepend>
            <v-avatar class="bdr-8">
              <v-img :src="connectItems.path"></v-img>
            </v-avatar>
          </template>
          <template v-slot:title>{{ connectItems.title }}</template>
          <template v-slot:subtitle>{{ connectItems.subtitle }}</template>
          <template v-slot:append>
            <v-btn :ripple="false" variant="text" class="text-btn" tag="span">{{
              connectItems.connect == true ? '연결됨' : ''
            }}</v-btn>
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

    <!-- 신용정보 -->
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
          class="list-round-box-items"
          :to="key.link"
        >
          <template #prepend>
            <v-avatar class="bdr-8">
              <v-img :src="key.path"></v-img>
            </v-avatar>
          </template>
          <template v-slot:title>{{ key.title }}</template>
          <template v-slot:subtitle>{{ key.subtitle }}</template>
          <template v-slot:append>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-list-item>
      </v-sheet>
    </v-list>
    <!-- //신용정보 -->

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
          <template #prepend>
            <v-avatar class="bdr-8">
              <v-img :src="key.path"></v-img>
            </v-avatar>
          </template>
          <template v-slot:title>{{ key.title }}</template>
          <template v-slot:subtitle>{{ key.subtitle }}</template>
          <template v-slot:append>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-list-item>
      </v-sheet>
    </v-list>
    <!-- //상세페이지 이동 -->
  </div>
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import { ref } from 'vue'

  export default {
    components: { Nodata },
    setup() {
      const dialog = ref(false)
      const dialogSearchList = ref(false)
      const data = ref(true) //null: 로딩, true:목록, false:기기없음

      const currentConnection = ref({
        name: '피트니스',
        items: [
          {
            title: '삼성 헬스',
            subtitle: 'Samsung',
            path: '/assets/images/icon-samsung-health.png',
            connect: true
          },
          {
            title: '피트니스',
            subtitle: 'google',
            path: '/assets/images/icon-fitness.png',
            connect: false
          },
          {
            title: '애플건강',
            subtitle: 'apple',
            path: '/assets/images/icon-apple.png',
            connect: false
          }
        ]
      }) //연결된 기기 리스트

      const connectionList = ref([
        {
          name: '신용정보',
          contents: [
            {
              title: 'NICE 신용점수',
              subtitle: 'NICE평가정보㈜',
              path: '/assets/images/icon-nice.png',
              link: '#none'
            }
          ]
        }
      ]) //신용정보

      const connectionLinkList = ref([
        {
          name: '건강검진결과',
          contents: [
            {
              title: '일반건강검진',
              subtitle: '㈜GC케어',
              path: '/assets/images/icon-gc.png',
              link: '#none'
            },
            {
              title: '일반건강검진',
              subtitle: '㈜GC케어',
              path: '/assets/images/icon-gc.png',
              link: '#none'
            },
            {
              title: '종합건강검진',
              subtitle: 'GC녹십자아이메드',
              path: '/assets/images/icon-gc-greencross.png',
              link: '#none'
            }
          ]
        }
      ]) //건강검진결과 리스트

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
        data,
        modalOpen
      }
    }
  }
</script>

<style lang="scss" scoped></style>
