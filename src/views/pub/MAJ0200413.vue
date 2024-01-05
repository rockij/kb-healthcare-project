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
        <v-toolbar-title class="modal-title">건강설문결과</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <ul class="list-faq type-2">
            <li v-for="(item, i) in list" :key="i">
              <div class="d-flex align-center">
                <v-avatar size="32" color="#3B4A65" class="text-white">
                  {{ i + 1 }}
                </v-avatar>
                <span class="text-grey ml-2">{{ item.text }}</span>
              </div>
              <div class="text-black pl-10 mt-2">
                <strong>{{ item.answer }}</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <v-card-actions>
        <v-btn height="56" class="bdr-8 btn-yellow" block>설문 다시하기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import router from '@/router'
  import { ref } from 'vue'
  export default {
    setup() {
      const dialog = ref(true)
      const list = ref([
        {
          text: '키와 몸무게가 맞는지 확인해주세요.',
          answer: '160cm / 50kg'
        },
        {
          text: '평소 건강상태, 건강검진 결과로 판단 했을 때 필요한 건강관리를 선택해주세요',
          answer: '고지혈증(이상지지혈증)'
        },
        {
          text: '최근 혈압 수치를 알고 계시면 입력해 주세요',
          answer: '160mmHg'
        },
        {
          text: '최근 혈당 수치를 알고 계시면 입력해 주세요',
          answer: '160mmHg'
        },
        {
          text: '현재 나의 시력을 입력해 주세요',
          answer: '왼쪽 1.0 / 오른쪽 1.2'
        },
        {
          text: '아래 질환 중 과거 또는 현재에 앓고계신 질환이 있나요?',
          answer: '고혈압, 당뇨, 고지혈증, 간질환, 신장질환'
        },
        {
          text: '과거 또는 현재 복용하고 계신 약이 있나요?',
          answer: '고혈압, 당뇨'
        },
        {
          text: '가족 중 앓고 계신 질병이 있나요?',
          answer: '고혈압'
        },
        {
          text: '지난 1년간 술을 얼마나 드셨나요?',
          answer: '일년 3~4회'
        },
        {
          text: '술을 마신다면 보통 얼마나 드십니까?',
          answer: '소주 반병 (맥주 3컵) 이하'
        },
        {
          text: '현재 담배를 얼마나 피우십니까?',
          answer: '매일 0.5~1갑 미만'
        }
      ])
      return {
        list,
        dialog
      }
    }
  }
</script>
