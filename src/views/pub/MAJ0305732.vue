<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">상세필터</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <h2 class="tit-01">병원정보</h2>
          <div role="tablit" class="tabs-simple2">
            <v-btn
              variant="text"
              role="tab"
              :aria-selected="hosInfoBtn === btn.value ? 'true' : 'false'"
              v-for="btn in hosInfo"
              :key="btn.value"
              class="check"
              @click="hosInfoSelected(btn.value)"
              >{{ btn.text }}</v-btn
            >
          </div>
          <h2 class="tit-01 mt-7">진료 시간</h2>
          <div role="tablit" class="tabs-simple2">
            <v-btn
              variant="text"
              role="tab"
              :aria-selected="hosTimeBtn === btn.value ? 'true' : 'false'"
              v-for="btn in hosTime"
              :key="btn.value"
              class="check"
              @click="hosTimeSelected(btn.value)"
              >{{ btn.text }}</v-btn
            >
          </div>
          <h2 class="tit-01 mt-7">거리 설정</h2>
          <div role="tablit" class="tabs-simple2">
            <v-btn
              variant="text"
              role="tab"
              :aria-selected="streetSetBtn === btn.value ? 'true' : 'false'"
              v-for="btn in streetSet"
              :key="btn.value"
              @click="streetSetSelected(btn.value)"
              >{{ btn.text }}</v-btn
            >
          </div>
        </div>
      </div>
      <div class="btn-area2">
        <v-btn
          variant="text"
          height="48px"
          class="bdr-8 fs-16 font-weight-bold cancel"
          block
          >초기화</v-btn
        >
        <v-btn
          variant="text"
          height="48px"
          class="bdr-8 fs-16 font-weight-bold skip"
          block
          >필터적용</v-btn
        >
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import { ref } from 'vue'
  export default {
    props: ['modal'],
    emits: ['close'],
    data() {
      return {
        hosInfo: [
          {
            text: '주차장'
          },
          {
            value: 1,
            text: '전문의'
          },
          {
            value: 2,
            text: '여의사'
          }
        ],
        hosTime: [
          {
            text: '야간진료'
          },
          {
            value: 1,
            text: '주말진료'
          }
        ],
        streetSet: [
          {
            text: '500m'
          },
          {
            value: 1,
            text: '1km'
          },
          {
            value: 2,
            text: '15km'
          }
        ]
      }
    },
    setup(props) {
      const hosInfoBtn = ref()
      function hosInfoSelected(val) {
        hosInfoBtn.value = val
      }
      const hosTimeBtn = ref()
      function hosTimeSelected(val) {
        hosTimeBtn.value = val
      }
      const streetSetBtn = ref()
      function streetSetSelected(val) {
        streetSetBtn.value = val
      }
      const dialog = ref(props.modal)
      return {
        hosInfoBtn,
        hosInfoSelected,
        hosTimeBtn,
        hosTimeSelected,
        streetSetBtn,
        streetSetSelected,

        dialog
      }
    }
  }
</script>
