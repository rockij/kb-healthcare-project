<template>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">1주 체험 안내</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <strong class="title-02">혈관건강 전문 챌린지(잦은 음주형)</strong>
          <div class="text-info-grey2 my-3">
            전문가 추천 챌린지를 짧은 기간, 쉽게 부담 없이 시작해 보세요!<br />
            1주 체험 완료 후에는 동일한 챌린지를 6주, 12주로 연장하여 진행할 수 있어요! (7일 이내 연장 시)
          </div>
          <div class="table-flex">
            <ul class="table improvement-table">
              <li v-for="list in experienceList" :key="list.id" class="tbody">
                <span class="ws-104 th">{{ list.title }}</span>
                <span class="list-text">{{ list.text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn height="48px" class="bdr-16 btn-yellow" block>시작하기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)

      const selBtn = ref()
      const btns = reactive([
        {
          value: 1,
          text: '1일 전'
        },
        {
          value: 2,
          text: '3일 전'
        },
        {
          value: 3,
          text: '7일전'
        },
        {
          value: 4,
          text: '알림없음'
        }
      ])
      const experienceList = reactive([
        {
          title: '6주 챌린지',
          text: '수행 난이도가 조금씩 높아지며 전문적이고 다양한 Todo로 구성된 챌린지!'
        },
        {
          title: '12주 챌린지',
          text: '건강에 변화가 나타나기 시작하는 고도화된 완성형 챌린지!'
        }
      ])

      return {
        dialog,
        selBtn,
        btns,
        experienceList
      }
    }
  }
</script>