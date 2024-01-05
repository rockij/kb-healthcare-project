<template>
  <!--contents-->
  <div class="contents">
    <v-dialog
      activator
      v-model="dialog"
      fullscreen
      :scrim="true"
      transition="dialog-bottom-transition"
      class="modal-bottom modal-body-check"
    >
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props"> Open Dialog </v-btn>
      </template>

      <v-card>
        <v-toolbar dark color="white" height="auto">
          <v-toolbar-title class="modal-title"
            >체성분 그래프 안내</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false" class="btn-modal-close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="modal-body">
          <div class="flex-shrink-0 modal-body-container">
            <div style="width: 100%; height: 200px; background-color: #eee">
              그래프예시
            </div>
            <ul class="pt-4 body-text d-flex list-circle">
              <li class="item">
                그래프는 체성분 항목의 평균 또는 정상 범위 대비 내 상태를 한
                눈에 볼 수 있도록 표현한 차트입니다
              </li>
              <li class="item">
                그래프내에서 이 외의 정보를 일체 포함하고 있지 않습니다. 특히
                항목간 상대비교나 절대적 값은 포함되어있지 않습니다
              </li>
              <li class="item">
                따라서 항목간의 우위나 열의에 대한 비교정보는 포함하지 않고
                있으므로 유의하여 주십시오.
              </li>
              <li class="item">
                상세한 항목별 수치는 아래의 실제 데이터를 참고해 주세요.
              </li>
            </ul>
          </div>
        </div>

        <!-- <v-card-actions>
          <v-btn
            height="48px"
            class="bdr-8 btn-yellow"
            block
            @click="dialog = false"
            >확인</v-btn
          >
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </div>
  <!--//contents-->
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const dialog = ref(false)
      return {
        dialog
      }
    }
  }
</script>
