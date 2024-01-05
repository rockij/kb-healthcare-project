<template>
  <div class="contents">
    <v-card elevation="0" color="#FFD633" class="card-yellow mb-4">
      <v-card-item>
        <v-card-title class="d-flex"
          ><span class="fs-20 font-weight-bold">홍길동님</span>
          <v-spacer></v-spacer>
          <v-btn variant="text" class="btn-setting" to="#none">
            <template v-slot:prepend>
              <v-icon icon="mdi-cog-outline"></v-icon>
            </template>
            내정보관리
          </v-btn>
        </v-card-title>
      </v-card-item>
      <v-divider class="border-opacity-100 my-4" color="#E2BC21"></v-divider>
      <v-btn variant="text" to="#none" class="link-defalut d-flex" width="100%">
        <template v-slot:prepend>
          <v-icon class="ico-rewards"></v-icon>
        </template>
        <span>리워드 포인트</span>

        <template v-slot:append>
          <span>100,000<span>P</span></span>
        </template>
      </v-btn>
    </v-card>
    <v-btn variant="flat" class="list-iconlst2 mb-8 bg-lightyellow">
      <i class="icon-save-rewards"></i>
      <p>리워드 이렇게 모으고 있어요</p>
    </v-btn>

    <div class="section-block" v-for="item in settingLists" :key="item">
      <div class="login-title">{{ item.title }}</div>
      <ul class="settings">
        <li v-for="keys in item.contents" :key="keys" class="settings-item">
          <v-btn
            variant="text"
            :to="keys.path"
            class="settings-link d-flex px-0"
            height="auto"
          >
            <span class="left-area">
              <span class="fs-16">{{ keys.text }}</span>
              <span class="settings-version cnt fs-16" v-if="keys.version">
                {{ keys.version }}
              </span>
            </span>
            <template v-slot:append>
              <v-icon class="fs-24">mdi-chevron-right</v-icon>
            </template>
          </v-btn>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const settingLists = ref([
        {
          title: '나의 챌린지',
          contents: [{ text: '나의 챌린지', version: '2', path: '#none' }]
        },
        {
          title: '나의 메디컬 서비스',
          contents: [
            { text: '의료진 문의 내역', version: '2', path: '#none' },
            { text: '증상리포트', path: '#none' }
          ]
        },
        {
          title: '활동내역',
          contents: [{ text: '활동 리포트', path: '#none' }]
        },
        {
          title: '건강정보연동',
          contents: [
            { text: '기기 연결', path: '#none' },
            { text: '서비스 연결', path: '#none' },
            { text: '건강검진결과 연결', path: '#none' }
          ]
        }
      ])
      return { settingLists }
    }
  }
</script>
