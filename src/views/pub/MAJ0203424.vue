<template>
  <div class="contents">
    <template v-if="medicard.length > 0">
      <div v-for="item in medicard" :key="item">
        <v-card variant="flat" class="medicine-card mb-4">
          <div class="card-top">
            <div class="img-wrap">
              <img
                class="medicard-img"
                :src="`/assets/images/${item.img}`"
                alt=""
              />
            </div>
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
              @click="item.alarmPause ? (modal = true) : null"
              >{{ item.alarmPause ? '알림중단' : '알림받기' }}</v-btn
            >
          </div>
        </v-card>
      </div>
    </template>

    <Nodata
      v-else
      :icon="true"
      :iconSize="'big'"
      :optionClass="'mymediList-nodata'"
      :icon-type="'mymediList'"
    >
      <div class="text-info-grey fs-16">아직 등록하신 내역이 없어요</div>
    </Nodata>
  </div>

  <MAJ0203425 v-model="modal" @close="modal = false" />
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import router from '@/router'
  import MAJ0203425 from './MAJ0203425.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: {
      MAJ0203425,
      Nodata
    },
    setup() {
      const alarmPause = ref(false)
      const modal = ref(false)
      const medicard = reactive([
        {
          img: 'bigimage.jpg',
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
      function goPath(val) {
        router.push(val)
      }
      return {
        modal,
        medicard,
        alarmPause,
        goPath
      }
    }
  }
</script>
