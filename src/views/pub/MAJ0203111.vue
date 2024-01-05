<template>
  <div class="contents">
    <v-btn @click="dialog = true">목표 혈당 보기</v-btn>

    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="true"
      transition="dialog-bottom-transition"
      class="modal-bottom"
    >
      <v-card>
        <v-toolbar dark color="white" height="auto">
          <v-toolbar-title class="modal-title">목표 혈당</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            icon
            dark
            @click="dialog = false"
            class="btn-modal-close"
            title="팝업닫기"
          >
            <v-icon />
          </v-btn>
        </v-toolbar>
        <div class="modal-body">
          <div class="flex-shrink-0 modal-body-container">
            <p class="text-grey">
              목 펴 혈당의 최소/최대를 설정하면 혈당 리포트의 안정 범위로 확인
              가능합니다.<br />
              의료진의 의견을 반영해 설정해 주세요.
            </p>
            <div class="d-grid g-tcol-2 gap-7 mt-8">
              <v-text-field
                v-for="(input, i) in inputList"
                :key="i"
                type="tel"
                class="textfield-default"
                :class="input.class"
                :label="input.label"
                persistent-placeholder
                variant="outlined"
                :placeholder="input.placeholder"
              >
                <strong class="fs-18 text-grey4">mg/dL</strong>
              </v-text-field>
            </div>
            <div class="btn-bottom">
              <div class="btn-area d-flex">
                <v-btn
                  variant="flat"
                  height="48"
                  class="btn-summit"
                  @click="dialog = false"
                  >저장하기</v-btn
                >
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const dialog = ref(true)
      const inputList = ref([
        {
          label: '공복/식전',
          placeholder: '최소'
        },
        {
          label: '공복/식전',
          placeholder: '최대'
        },
        {
          label: '식후 2시간',
          placeholder: '최소',
          class: 'mt-4'
        },
        {
          label: '식후 2시간',
          placeholder: '최대',
          class: 'mt-4'
        }
      ])
      return { dialog, inputList }
    }
  }
</script>
