<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn variant="text" density="compact" class="fs-16 px-0">
        {{ category }}
        <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
      </v-btn>
    </div>

    <div class="result-count">
      <span>총 {{ reports.length }}건</span>
      <span class="ml-auto">2023.07.29 ~ 2023.08.03</span>
    </div>

    <!-- 기록 component -->
    <CardReport
      :btn="true"
      v-for="(report, index) in reports"
      :key="index"
      @handleClick="modal2 = true"
    >
      <template #date>{{ report.date }}</template>
      <!-- card 내용 -->
      <template #content>
        <span class="record-card-name">
          <i class="icon-sports small" :class="exerciseName[index]"></i
          ><span class="text">{{ report.state }}</span>
        </span>
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
          v-if="report.picture"
          virtual
        >
          <span class="swiper-counter" v-if="report.picture.length - 1 != 0"
            >+{{ report.picture.length - 1 }}</span
          >
          <swiper-slide
            v-for="(slides, index) in report.picture"
            :key="index"
            :virtualIndex="index"
          >
            <v-img
              aspect-ratio="16/9"
              min-height="1"
              cover
              :src="`/assets/images/` + slides"
            ></v-img>
          </swiper-slide>
        </swiper>

        <dl class="dl dl-table">
          <dt>총 운동시간</dt>
          <dd class="font-weight-bold">
            <span>{{ report.recordTime }}</span>
          </dd>
          <dt v-if="report.moving">
            {{
              exerciseName[index] == 'jumpRope' ? '총 점프수' : '총 이동거리'
            }}
          </dt>
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
  import { ref, reactive, onMounted } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import { Pagination } from 'swiper/modules'
  import { Virtual } from 'swiper/modules'
  import DialogSetting from '@/components/DialogSetting.vue'
  import CardReport from '@/components/CardReport.vue'
  export default {
    components: {
      CardReport,
      DialogSetting,
      Swiper,
      SwiperSlide
    },
    setup() {
      const tab = ref(null)
      const Analysis = ref(null)
      const exerciseName = ref([])
      const category = ref('1주일')
      const option = reactive([
        { value: 1, text: '1주일' },
        { value: 2, text: '1개월' },
        { value: 3, text: '3개월' }
      ])

      const reports = ref([
        {
          id: 0,
          date: '오전 6:35',
          device: '플랫폼',
          state: '야구',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal'
        },
        {
          id: 1,
          date: '오전 6:35',
          device: '플랫폼',
          state: '자전거',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal',
          moving: '1.81km'
        },
        {
          id: 2,
          date: '오전 6:35',
          device: '플랫폼',
          state: '탁구',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal',
          moving: '1.81km',
          hasMemo: '사용자가 입력한 메모가 노출됩니다',
          picture: ['exercise.png', 'exercise.png', 'exercise.png']
        },
        {
          id: 3,
          date: '오전 6:35',
          device: '플랫폼',
          state: '골프',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal',
          moving: '1.81km',
          hasMemo: '사용자가 입력한 메모가 노출됩니다',
          picture: ['exercise.png', 'exercise.png', 'exercise.png']
        },
        {
          id: 4,
          date: '오전 6:35',
          device: '기기',
          state: '줄넘기',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal',
          moving: '300점프'
        }
      ])

      const exerciseNameIcon = () => {
        reports.value.forEach((number, index) => {
          switch (reports.value[index].state) {
            case '야구':
              exerciseName.value.push('baseball')
              break
            case '자전거':
              exerciseName.value.push('bicycle')
              break
            case '탁구':
              exerciseName.value.push('ping-pong')
              break
            case '골프':
              exerciseName.value.push('golf')
              break
            case '근력운동':
              exerciseName.value.push('muscular')
              break
            case '달리기':
              exerciseName.value.push('running')
              break
            case '하이킹':
              exerciseName.value.push('hiking')
              break
            case '농구':
              exerciseName.value.push('basketball')
              break
            case '당구':
              exerciseName.value.push('billiards')
              break
            case '등산':
              exerciseName.value.push('climb')
              break
            case '런닝머신(걷기)':
              exerciseName.value.push('runningMachine')
              break
            case '런닝머신(달리기)':
              exerciseName.value.push('runningMachine')
              break
            case '배드민턴':
              exerciseName.value.push('badminton')
              break
            case '복싱':
              exerciseName.value.push('boxing')
              break
            case '볼링':
              exerciseName.value.push('bowling')
              break
            case '수영':
              exerciseName.value.push('swim')
              break
            case '스쿼시':
              exerciseName.value.push('squash')
              break
            case '스피닝':
              exerciseName.value.push('spinning')
              break
            case '에어로빅':
              exerciseName.value.push('aerobic')
              break
            case '요가':
              exerciseName.value.push('yoga')
              break
            case '족구':
              exerciseName.value.push('footVolleyball')
              break
            case '줄넘기':
              exerciseName.value.push('jumpRope')
              break
            case '축구':
              exerciseName.value.push('footVolleyball')
              break
            case '테니스':
              exerciseName.value.push('tennis')
              break
            case '필라테스':
              exerciseName.value.push('yoga')
              break
            case '주짓수':
              exerciseName.value.push('jiuJitsu')
              break
            case '태권도':
              exerciseName.value.push('taekwondo')
              break
            case '유도':
              exerciseName.value.push('judo')
              break
            case '배구':
              exerciseName.value.push('volleyball')
              break
            case '클라이밍':
              exerciseName.value.push('climbing')
              break
          }
        })
      }

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

      onMounted(() => {
        exerciseNameIcon()
      })

      return {
        tab,
        Analysis,
        category,
        option,
        reports,
        modal2,
        modal2Title,
        modal2List,
        delFunc,
        handleClick,
        exerciseName,
        exerciseNameIcon,
        modules: [Pagination, Virtual]
      }
    }
  }
</script>
