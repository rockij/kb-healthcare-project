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
          <v-toolbar-title class="modal-title">안내</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false" class="btn-modal-close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="modal-body">
          <div class="flex-shrink-0 modal-body-container">
            <div class="table-flex lifelog-table1">
              <ul class="table">
                <li class="thead">
                  <span class="ws-110">구분</span>
                  <span>정상수치</span>
                  <span>조절목표</span>
                </li>
                <li v-for="list in tableList2" :key="list.id" class="tbody">
                  <span class="ws-110 th"
                    ><span v-html="list.title"></span
                  ></span>
                  <span v-html="list.text"></span>
                  <span v-html="list.text2"></span>
                </li>
              </ul>
              <p class="table-caution">대한당뇨병학회 홈페이지 기준입니다</p>
            </div>
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

      const tableList2 = ref([
        {
          id: 1,
          title: '공복혈당',
          text: '70~100<br/>mg/dL',
          text2: '80~130<br/>mg/dL'
        },
        {
          id: 2,
          title: '식후 2시간 혈당',
          text: '70~100<br/>mg/dL',
          text2: '80~130<br/>mg/dL'
        },
        {
          id: 3,
          title: '당화혈색소',
          text: '70~100<br/>mg/dL',
          text2: '80~130<br/>mg/dL'
        }
      ])

      return { dialog, tableList2 }
    }
  }
</script>
