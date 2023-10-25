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
        <v-toolbar-title class="modal-title">비교군 추가</v-toolbar-title>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <p class="text-info-grey fs-18 mb-4">
            더 다양한 비교군을 추가해 보세요
          </p>
          <v-checkbox
            v-for="item in checkTemplet"
            :key="item.id"
            class="checked-agree"
            style="--v-input-control-height: 54px"
          >
            <template v-slot:label
              ><span class="fs-18">{{ item.text }}</span></template
            >
          </v-checkbox>
          <div class="btn-bottom">
            <div class="btn-area d-flex">
              <v-btn
                variant="text"
                height="48"
                class="bdr-8 btn-summit"
                @click="$emit('close')"
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
  import { ref } from 'vue'
  export default {
    props: ['modal2'],
    emits: ['close'],
    setup(props) {
      const dialog = ref(props.modal2)
      const checkTemplet = ref([
        {
          id: 1,
          text: '동일 건강목표'
        },
        {
          id: 2,
          text: '비슷한 BMI'
        }
      ])
      return { dialog, checkTemplet }
    }
  }
</script>
