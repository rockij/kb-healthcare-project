<template>
  <div class="contents">
    <div class="btn-area sorting-area d-flex type-4">
      <v-tabs align-tabs="start" v-model="tab">
        <v-tab
          v-for="btn in stateBtn"
          :key="btn.value"
          :value="btn.value"
          :ripple="false"
        >
          {{ btn.text }}
        </v-tab>
      </v-tabs>
    </div>

    <div class="data-area mt-7" v-if="winnerList.length > 0">
      <div class="list-area type-4">
        <ul class="list">
          <li
            class="event winner"
            v-for="item in winnerList"
            :key="item.id"
          >
            <p class="evt-tit">{{ item.title }}</p>
            <div class="evt-date">{{ item.date }}</div>
          </li>
        </ul>
      </div>
    </div>

    <div v-else>
      <nodata>당첨자발표가 없습니다</nodata>
    </div>
  </div>
</template>

<script>
  import { reactive, ref } from 'vue'
  import Nodata from '@/components/nodata/Nodata.vue'
  export default {
    components: { Nodata },
    setup() {
      //const isData = true;
      const tab = ref('1')
      const stateBtn = reactive([
        {
          value: 0,
          text: '이벤트'
        },
        {
          value: 1,
          text: '당첨자발표'
        },
      ])
      const winnerList = reactive([
        {
          title: '[7월] 월간오케어 당첨안내',
          date: '2023.08.18'
        },
        {
          title: '[9월] 당첨자 발표 이벤트 게시판 최대 두줄처리됨 두줄처리 두줄까지 노출 당첨자 발표 이벤트 게시판 최대 두줄처리됨 두줄처리 두줄까지 노출',
          date: '2023.08.18'
        },
        {
          title: '이벤트 당첨',
          date: '2023.08.18'
        }
      ])

      return {
        tab,
        winnerList,
        stateBtn
      }
    }
  }
</script>

<style lang="scss" scoped></style>
