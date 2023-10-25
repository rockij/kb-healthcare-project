<template>
  <!--contents-->
  <div class="contents">
    <v-dialog
      activator
      v-model="dialog"
      fullscreen
      :scrim="true"
      transition="dialog-bottom-transition"
      class="modal-bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props"> Open Dialog </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="white" height="auto">
          <v-toolbar-title class="modal-title">당화혈색소</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false" class="btn-modal-close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="modal-body mb-7">
          <div class="flex-shrink-0 modal-body-container">
            <div class="table-flex lifelog-table2">
              <div class="table-desc">
                약 3개월간의 평균 혈당을 반영하는 수치를 말합니다. 평균혈당이
                높을수록 당화혈색소 수치도 높아지기 때문에 주기적인 검진으로
                모니터링 및 관리가 필요합니다
              </div>
              <ul class="table mt-5">
                <li class="thead">
                  <span class="ws-163">당화혈색소 (%)</span>
                  <span>조절목표</span>
                </li>
                <li v-for="list in tableList" :key="list.id" class="tbody">
                  <span class="ws-163">{{ list.title }}</span>
                  <span>{{ list.text }}</span>
                </li>
              </ul>
              <p class="table-caution">
                대한당뇨병학회의 2021 당뇨병 진료지침•당뇨병 진단 빛 분류를
                참고하였습니다
              </p>
            </div>
          </div>
        </div>

        <v-card-actions>
          <v-btn
            height="48px"
            class="bdr-8 btn-yellow"
            block
            @click="dialog = false"
            >확인</v-btn
          >
        </v-card-actions>
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

      const tableList = ref([
        {
          id: 1,
          title: '5.7미만',
          text: '정상혈당'
        },
        {
          id: 2,
          title: '5.7이상 6.5미만',
          text: '당뇨병 전 단계'
        },
        {
          id: 3,
          title: '6.5이상',
          text: '당뇨병 진단'
        }
      ])

      return { dialog, tableList }
    }
  }
</script>
