<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    persistent
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">연장하기</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        >
          <v-icon />
        </v-btn>
      </v-toolbar>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <p class="fs-18 font-weight-semibold lh-3">
            이미 진행하셨던 챌린지네요!<br />
            이어서 진행하시겠어요?
          </p>
          <div class="d-flex flex-column gap-10 mt-4">
            <v-btn
              v-for="(list, i) in checkList"
              :key="i"
              variant="outlined"
              rounded="xl"
              block
              class="list-card-check"
              height="auto"
              :aria-selected="selBtn === i"
              @click="selBtn = i"
            >
              <span v-if="list.category" class="badge ing mb-3">{{
                list.category
              }}</span>
              <strong class="stit">{{ list.name }}</strong>
              <span class="text-grey2 lh-1 mt-2" v-html="list.date"></span>
            </v-btn>
          </div>
          <div class="text-center mt-6 mb-2">
            <v-btn
              variant="flat"
              rounded="lg"
              height="32"
              color="#F2F4F6"
              class="text-primary px-3"
            >
              챌린지 상세보기</v-btn
            >
          </div>
          <div class="btn-bottom">
            <div class="btn-area d-flex">
              <v-btn
                variant="text"
                height="56"
                class="btn-summit"
                :disabled="disabledCheck"
                >확인</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import { ref, computed } from 'vue'
  export default {
    emits: ['close'],
    setup() {
      const selBtn = ref(null)
      const dialog = ref(false)
      const checkList = ref([
        {
          value: 1,
          name: '6주 챌린지로 연장하기',
          date: '수행 난이도가 조금씩 높아지며<br/><strong>전문적이고 다양한 Todo를 실천할 수 있어요</strong>'
        },
        {
          value: 2,
          category: '추천',
          name: '12주 챌린지로 연장하기',
          date: '건강 습관을 형성하고, 건강 변화가 나타나는<br/><strong>고도화된 완성형 챌린지를 경험해 보세요</strong>'
        }
      ])
      const disabledCheck = computed(() => {
        return selBtn.value === null ? true : false
      })
      return { selBtn, dialog, checkList, disabledCheck }
    }
  }
</script>
