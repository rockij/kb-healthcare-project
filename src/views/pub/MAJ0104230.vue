<template>
  <div class="contents">
    <div class="tab-line"> <!-- 20231205 - 수정 -->
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

    <div class="data-area mt-7" v-if="eventList.length > 0">
      <div class="list-area type-4">
        <ul class="list">
          <li
            class="event"
            :class="{ end: item.endEvt === true }"
            v-for="item in eventList"
            :key="item.id"
          >
            <div class="evt-thmub">
              <img :src="`/assets/images/${item.imgUrl}`" alt="" />
            </div>
            <span v-if="item.endEvt" class="badge waiting">이벤트 종료</span>
            <p class="evt-tit">{{ item.title }}</p>
            <div class="evt-date">{{ item.period }}</div>
          </li>
        </ul>
      </div>
    </div>

    <div v-else>
      <nodata>진행중인 이벤트가 없습니다</nodata>
    </div>
  </div>
</template>

<script>
  import { reactive, ref } from 'vue'
  import Nodata from '@/components/nodata/Nodata.vue'
  export default {
    components: { Nodata },
    setup() {
      const tab = ref()
      const stateBtn = reactive([
        {
          value: 0,
          text: '이벤트'
        },
        {
          value: 1,
          text: '당첨자발표'
        }
      ])
      const eventList = reactive([
        {
          imgUrl: 'event-dummy1.png',
          title:
            '현대그린푸드 그라이팅 케어식단 서비스 오픈 기념 Pay-Back 프로모션',
          period: '2023.07.29 ~ 2023.08.03',
          endEvt: false
        },
        {
          imgUrl: 'event-dummy2.png',
          title: '이벤트명 이벤트명 이벤트명 이벤트명',
          period: '2023.08.29 ~ 2023.09.03',
          endEvt: false
        },
        {
          imgUrl: 'event-dummy1.png',
          title:
            '현대그린푸드 그라이팅 케어식단 서비스 오픈 기념 Pay-Back 프로모션',
          period: '2023.07.29 ~ 2023.08.03',
          endEvt: true
        }
      ])

      return {
        tab,
        eventList,
        stateBtn
      }
    }
  }
</script>

<style lang="scss" scoped></style>
