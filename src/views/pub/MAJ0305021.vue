<template>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">조회기간 설정</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="category-title">기간선택</div>
          <div class="tabs-simple2 pt-1">
            <v-btn
              variant="text"
              class="fs-16"
              v-for="btn in btns1"
              :key="btn.value"
              :aria-selected="selBtns1 === btn.value"
              @click="selBtns1 = btn.value"
              :ripple="false"
              >{{ btn.text }}</v-btn
            >
          </div>

          <div class="category-title pt-8">대상</div>
          <div class="tabs-simple2 pt-1">
            <v-btn
              variant="text"
              class="fs-16"
              v-for="btn in btns2"
              :key="btn.value"
              :aria-selected="selBtns2 === btn.value"
              @click="selBtns2 = btn.value"
              >{{ btn.text }}</v-btn
            >
          </div>

          <div class="category-title pt-8">증상부위 선택</div>
          <div class="tabs-simple2 pt-1">
            <v-btn
              variant="text"
              class="fs-16"
              v-for="btn in btns3"
              :key="btn.value"
              :aria-selected="selBtns3 === btn"
              @click="selBtns3 = btn"
              >{{ btn.text }}</v-btn
            >
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn
          height="48"
          class="bdr-8 btn-yellow"
          block
          @click="dialog = false"
          :disabled="!selBtns3"
          >확인</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  import { ref, reactive } from 'vue'
  export default {
    emits: ['close'],
    setup() {
      const dialog = ref(false)
      const btns1 = reactive([
        {
          value: 1,
          text: '3개월'
        },
        {
          value: 2,
          text: '6개월'
        },
        {
          value: 3,
          text: '12개월'
        },
        {
          value: 4,
          text: '전체'
        }
      ])

      const btns2 = reactive([
        {
          value: 1,
          text: '본인'
        },
        {
          value: 2,
          text: '성인여자'
        },
        {
          value: 3,
          text: '성인남자'
        },
        {
          value: 4,
          text: '자녀'
        }
      ])

      const btns3 = reactive([
        {
          value: 1,
          text: '전체'
        },
        {
          value: 2,
          text: '머리 위 (뇌)'
        },
        {
          value: 3,
          text: '귀'
        },
        {
          value: 4,
          text: '눈'
        },
        {
          value: 5,
          text: '목안'
        },
        {
          value: 6,
          text: '코'
        },
        {
          value: 7,
          text: '목,경추'
        },
        {
          value: 8,
          text: '입'
        },
        {
          value: 9,
          text: '어깨'
        },
        {
          value: 10,
          text: '폐,심장'
        },
        {
          value: 11,
          text: '위'
        },
        {
          value: 12,
          text: '하복부'
        },
        {
          value: 13,
          text: '비뇨 전립선'
        },
        {
          value: 14,
          text: '팔꿈치'
        },
        {
          value: 15,
          text: '손목,손'
        },
        {
          value: 16,
          text: '손가락'
        },
        {
          value: 17,
          text: '요추'
        },
        {
          value: 18,
          text: '항문'
        },
        {
          value: 19,
          text: '엉덩이'
        },
        {
          value: 20,
          text: '설사'
        },
        {
          value: 21,
          text: '변비'
        },
        {
          value: 22,
          text: '다리'
        },
        {
          value: 23,
          text: '무릎'
        },
        {
          value: 24,
          text: '발목,발'
        },
        {
          value: 25,
          text: '발바닥'
        },
        {
          value: 26,
          text: '피부문제, 가려움'
        }
      ])

      const selBtns1 = ref(1)
      const selBtns2 = ref(1)
      const selBtns3 = ref()
      return {
        dialog,
        btns1,
        btns2,
        btns3,
        selBtns1,
        selBtns2,
        selBtns3
      }
    }
  }
</script>
