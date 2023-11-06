<template>
  <div class="contents">
    <div v-for="item in medicard" :key="item">
      <v-card variant="flat" class="medicine-card mb-4">
        <div class="card-top">
          <img
            class="medicard-img"
            :src="`/src/assets/images/${item.img}`"
            alt=""
          />
          <div class="py-1">
            <div class="medicard-badge">{{ item.badge }}</div>
            <div class="medicard-title pt-1">
              {{ item.title }}
            </div>
          </div>
        </div>
        <div class="card-mid pt-4 pb-2">{{ item.weeks }}</div>
        <div class="card-bottom" v-for="item in item.alarm" :key="item">
          <div class="medicard-date">{{ item.date }}</div>
          <div class="medicard-num">{{ item.num }}정</div>
        </div>
        <div class="btn-area2 pt-4">
          <v-btn
            variant="flat"
            height="46px"
            class="bdr-8 fs-16 font-weight-bold medicard-btn"
            color="#F3F7FF"
            block
            @click="modal = true"
            >삭제</v-btn
          >
          <v-btn
            variant="text"
            height="46px"
            class="bdr-8 fs-16 font-weight-bold skip medicard-btn"
            :class="{ pause: item.alarmPause }"
            block
            >{{ item.alarmPause ? '알림중단' : '알림받기' }}</v-btn
          >
        </div>
      </v-card>
    </div>
  </div>

  <MAJ0203425 v-model="modal" @close="modal = false" />
</template>

<script>
  import router from '@/router'
  import MAJ0203425 from './MAJ0203425.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: {
      MAJ0203425
    },
    setup() {
      const alarmPause = ref(false)
      const modal = ref(false)
      const medicard = reactive([
        {
          img: 'icon-medicard1.svg',
          title: '경방이진탕정경방이진탕정경방이진탕정경방',
          badge: '의약품',
          weeks: '매일',
          alarmPause: true,

          alarm: [
            {
              date: '오전 07시 00분',
              num: '1'
            },
            {
              date: '오후 03시 30분',
              num: '1'
            }
          ]
        },
        {
          img: 'icon-medicard2.svg',
          title: '알로에겔',
          badge: '영양제',
          weeks: '월 / 화 / 수 / 목 / 금',
          alarm: [
            {
              date: '오전 08시 00분',
              num: '1'
            }
          ]
        }
      ])

      return {
        modal,
        medicard,
        alarmPause
      }
    }
  }
</script>
