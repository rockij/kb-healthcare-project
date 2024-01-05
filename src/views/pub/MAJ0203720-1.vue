<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">근무지 선택</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="title-area pt-7">
            <p class="subTit-01">
              <span class="text-blue">포도맛고양이님</span>의 구내식당메뉴를
              조회하기 위해 근무지를 선택해 주세요
            </p>
          </div>
          <!-- 검색 btn -->
          <v-btn
            block
            variant="outlined"
            rounded="xl"
            color="#FFB11B"
            height="60"
            :ripple="false"
            class="btn-search mt-8"
          >
            <span class="text">
              궁금하신 내용을 입력해 주세요
              <img src="/assets/images/icon-search.svg" alt="검색" />
            </span>
          </v-btn>

          <div class="total mt-6">총 {{ answerList.length }}건</div>

          <v-radio-group hide-details class="radio-answer-group mt-2">
            <v-radio
              v-for="item in answerList"
              :key="item.id"
              :label="`answerRdo-${item.id}`"
              :value="item.id"
              class="radio-basic x-small mt-4"
            >
              <template v-slot:label>{{ item.label }}</template>
            </v-radio>
          </v-radio-group>
        </div>
      </div>
      <div class="btn-bottom">
        <div class="btn-area d-flex">
          <v-btn variant="text" height="56" class="btn-summit">완료</v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)
      const text = ref('')
      const answerList = ref([
        {
          id: 1,
          label: 'KB 국민은행 본사'
        },
        {
          id: 2,
          label: 'KB 손해보험 본사'
        },
        {
          id: 3,
          label: 'KB 여수점'
        },
        {
          id: 4,
          label: 'KB 저축은행 도곡점'
        },
        {
          id: 5,
          label: 'KB 캐피탈'
        }
      ])

      return {
        dialog,
        text,
        answerList
      }
    }
  }
</script>
