<template>
  <div class="contents">
    <div class="report-title mb-4">
      <!-- picker -->
      <v-btn variant="text" class="fs-24 pa-0">
        <span class="pr-2">2023.08.03</span>
        <img src="@/assets/images/icon-arrow-down.svg" alt="" />
      </v-btn>
      <v-chip label size="small" class="chip-default"
        ><span class="text-dot">미연결</span></v-chip
      >
    </div>
    <vCalendar
      class="calendar-sticky"
      ref="calendar"
      @update:view="moveToevent(new Date(2023, 8, 20))"
      :attributes="attributes"
      :masks="masks"
      borderless
      trim-weeks
      expanded
    >
    </vCalendar>
    <div class="section-bg">
      <v-card variant="flat" rounded="xl" class="py-6 px-4">
        <div class="tit-03 pb-8">현재 심박은 86bpm이에요</div>
        <img src="@/assets/images/graph-bar.png" alt="" />
      </v-card>
    </div>

    <!-- 심박기록 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text" @click="$router.push('MAJ0203392')">
          심박기록
        </v-btn>
      </h2>
      <div class="text-info-grey">최근 3개 기록만 표시됩니다</div>

      <!-- 기록 component -->
      <CardReport
        :btn="true"
        v-for="report in reports"
        :key="report.id"
        @handleClick="handleClick"
      >
        <template #date>{{ report.date }}</template>
        <!-- card 내용 -->
        <template #content>
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            {{ getText(report.state) }}
          </v-chip>
          <v-chip label size="small" class="chip-default ml-2"> 플랫폼 </v-chip>
          <dl class="dl">
            <dt>심박수</dt>
            <dd>
              <span class="font-weight-bold text-primary"
                >{{ report.record }}bpm</span
              >
            </dd>
          </dl>
        </template>
      </CardReport>
    </div>

    <!-- 성별 연령별 비교 -->
    <div class="section-page py-8">
      <h2 class="tit-03 tit-link pb-5">성별 연령별 비교</h2>
      <div style="background-color: #d9d9d9; opacity: 0.5; height: 270px">
        개발적용 예정
      </div>
      <v-card variant="flat" rounded="xl" class="box-info d-flex pa-4 mt-4">
        <v-avatar size="32" color="white" rounded="lg" class="mr-2" />
        <div>
          <div class="fs-18 text-primary">평균</div>
          <div class="fs-14 lh-0 text-grey-darken-3">
            김국민님이 최근에 측정하신 평균 안정심박수를 같은 성별 및 연령과
            비교했을때 평균이시네요
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
  import CardReport from '@/components/CardReport.vue'
  import { ref } from 'vue'

  export default {
    components: { CardReport },
    setup() {
      const masks = ref({
        title: 'YYYY.MM'
      })
      const attributes = ref([
        {
          dot: { style: { backgroundColor: '#907776' } },
          dates: [new Date(2023, 8, 20)]
        },
        {
          dot: { style: { backgroundColor: '#E02A61' } },
          dates: [new Date(2023, 8, 20)]
        },
        {
          dot: { style: { backgroundColor: '#B171F7' } },
          dates: [new Date(2023, 8, 20)]
        }
      ])
      const moveToevent = (evt) => {
        calendar.value.move(evt)
      }
      const reports = ref([
        {
          id: 0,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'primary',
          record: '82'
        },
        {
          id: 0,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'error',
          record: '82-105'
        },
        {
          id: 0,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'success',
          record: '60-82'
        }
      ])
      function getText(props) {
        switch (props) {
          case 'primary':
            return '증가'
          case 'success':
            return '안정'
          case 'error':
            return '부족'
        }
      }
      function handleClick() {
        console.log('emit')
      }
      return {
        masks,
        attributes,
        reports,
        getText,
        moveToevent,
        handleClick
      }
    }
  }
</script>
