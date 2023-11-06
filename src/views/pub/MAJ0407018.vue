<template>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom modal-bottom-performance"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">건강 행동별 챌린지 수행률</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="text-info-grey2">
            전문가 챌린지는 6가지 건강행동으로 분류되어 있습니다. 
            해당 그래프는 6가지 건강행동별 챌린지 수행률을 종합적으로 제공합니다. <br /><br />
            내가 잘하고 있는 건강행동과 부족한 것을 확인하고 챌린지 수행에 참고하시기 바랍니다.
          </div>
          <div class="table-flex">
            <ul class="table improvement-table">
              <li v-for="list in performanceList" :key="list.id" class="tbody">
                <span class="ws-104 th">{{ list.title }}</span>
                <span class="list-text">{{ list.text }}</span>
              </li>
            </ul>
          </div>
          <p class="completion-text">개인의 흡연/음주/복약 여부에 따라 그래프 종류는 달라질 수 있습니다.</p>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)

      const performanceList = reactive([
        {
          title: '영양',
          text: '식사, 물(수분)'
        },
        {
          title: '신체활동',
          text: '걷기, 운동(유/무산소)'
        },
        {
          title: '흡연',
          text: '일반, 권련형, 액상형'
        },
        {
          title: '음주',
          text: '음주'
        },
        {
          title: '복약',
          text: '복약'
        },
        {
          title: '활력징후',
          text: '혈압, 혈당, 체중, 수면, 기분'
        }
      ])

      return {
        dialog,
        performanceList
      }
    }
  }
</script>