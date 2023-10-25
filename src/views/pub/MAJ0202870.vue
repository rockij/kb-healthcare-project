<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn
        variant="text"
        density="compact"
        class="fs-16 px-0"
        @click="modal = true"
      >
        {{ category }}
        <img src="@/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
      </v-btn>
    </div>
    <DialogSelectList
      :lists="option"
      title="조회기간 설정"
      v-model="modal"
      @close="modal = false"
      @update="changeCategory"
    />

    <div class="d-flex fs-14 mt-4">
      <span>총 25건</span>
      <span class="ml-auto">2023.07.29 ~ 2023.08.03</span>
    </div>

    <!-- 기록 component -->
    <CardReport
      :btn="true"
      v-for="report in reports"
      :key="report.id"
      @handleClick="modal2 = true"
    >
      <template #date>{{ report.date }}</template>
      <!-- card 내용 -->
      <template #content>
        <v-chip
          label
          size="small"
          color="#3F86F1"
          class="chip-default chip-color"
        >
          {{ report.state }}
        </v-chip>
        <v-chip
          label
          size="small"
          v-if="report.device != ''"
          class="chip-default ml-2"
          >{{ report.device }}</v-chip
        >
        <swiper
          class="card-swiper"
          :pagination="true"
          :modules="modules"
          :class="`swiper-` + report.id"
          v-if="report.picture"
        >
          <span class="swiper-counter" v-if="report.picture.length - 1 != 0"
            >+{{ report.picture.length - 1 }}</span
          >
          <swiper-slide v-for="slides in report.picture" :key="slides">
            <v-img
              aspect-ratio="16/9"
              cover
              :src="`/src/assets/images/` + slides"
            ></v-img>
          </swiper-slide>
        </swiper>

        <dl class="dl dl-table">
          <dt>총 운동시간</dt>
          <dd class="font-weight-bold">
            <span>{{ report.recordTime }}</span>
          </dd>
          <dt v-if="report.moving">총 운동거리</dt>
          <dd v-if="report.moving" class="font-weight-bold">
            <span>{{ report.moving }}</span>
          </dd>
          <dt>총 칼로리</dt>
          <dd class="font-weight-bold">
            <span class="color-blue">{{ report.recordCalorie }}</span>
          </dd>
          <dt v-if="report.hasMemo">메모</dt>
          <dd v-if="report.hasMemo">{{ report.hasMemo }}</dd>
        </dl>
      </template>
    </CardReport>

    <DialogSetting
      v-model="modal2"
      :btnModify="true"
      @close="modal2 = false"
      @deleteClick="delFunc"
    />
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import { Pagination } from 'swiper/modules'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import DialogSetting from '@/components/DialogSetting.vue'
  import CardReport from '@/components/CardReport.vue'
  export default {
    components: {
      DialogSelectList,
      CardReport,
      DialogSetting,
      Swiper,
      SwiperSlide
    },
    setup() {
      const tab = ref(null)
      const Analysis = ref(null)

      const modal = ref(false)
      const category = ref('일주일')
      const option = reactive([
        { value: 1, text: '일주일' },
        { value: 2, text: '1개월' },
        { value: 3, text: '3개월' }
      ])
      function changeCategory(val) {
        modal.value = false
        return (category.value = val.text)
      }
      const reports = ref([
        {
          id: 0,
          date: '오전 6시 35분',
          device: '',
          state: '걷기',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal'
        },
        {
          id: 1,
          date: '오전 6시 35분',
          device: '',
          state: '달리기',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal',
          moving: '1.81km'
        },
        {
          id: 2,
          date: '오전 10시 35분',
          device: '',
          state: '근력운동',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal',
          moving: '1.81km',
          hasMemo: '사용자가 입력한 메모가 노출됩니다',
          picture: ['exercise.png', 'exercise.png', 'exercise.png']
        },
        {
          id: 3,
          date: '오전 10시 35분',
          device: '',
          state: '근력운동',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal',
          moving: '1.81km',
          hasMemo: '사용자가 입력한 메모가 노출됩니다',
          picture: ['exercise.png', 'exercise.png', 'exercise.png']
        }
      ])

      function handleClick() {
        console.log('emit')
      }
      const modal2 = ref(false)
      const modal2Title = ref('설정')
      const modal2List = ref([
        {
          value: 0,
          text: '수정'
        },
        {
          value: 1,
          text: '삭제'
        }
      ])
      const delFunc = () => {
        alert('삭제')
      }

      return {
        tab,
        Analysis,
        modal,
        category,
        option,
        reports,
        modal2,
        modal2Title,
        modal2List,
        changeCategory,
        delFunc,
        handleClick,
        modules: [Pagination]
      }
    }
  }
</script>
