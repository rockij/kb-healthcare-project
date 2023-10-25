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
    <div class="section-page bg py-8">
      <ReportResult :bnShow="'now'" :videBox="false" class="mb-4">
        휴레이 메시지는 아직 확정되지 않았다
      </ReportResult>

      <v-card variant="flat" rounded="xl" class="pa-4">
        <v-card-title class="pa-0">
          <p class="d-flex align-center">
            <span class="blood-pressure-shrink"
              ><i class="icon"></i>수축기</span
            >
            <span class="ml-2">132-140mmHg</span>
          </p>
          <p class="d-flex align-center">
            <span class="blood-pressure-relaxation"
              ><i class="icon"></i>이완기</span
            >
            <span class="ml-2">30-32mmHg</span>
          </p>
        </v-card-title>

        <!-- chart -->
        <div class="pt-8">
          <v-sheet>
            <v-tabs v-model="tab" hide-slider class="tabs-round navy">
              <v-tab value="bloodPressure" class="btn-tab" :ripple="false"
                >혈압</v-tab
              >
              <v-tab value="pulse" class="btn-tab" :ripple="false">맥박</v-tab>
            </v-tabs>
            <v-sheet>
              <v-window v-model="tab">
                <v-window-item value="bloodPressure">
                  <v-sheet class="container-chart"
                    ><img src="/src/assets/images/graph.svg" alt=""
                  /></v-sheet>
                </v-window-item>

                <v-window-item value="pulse"
                  ><v-sheet class="container-chart"
                    >맥박</v-sheet
                  ></v-window-item
                >
              </v-window>
            </v-sheet>
          </v-sheet>
          <div class="btn-area2">
            <v-btn
              variant="flat"
              height="46px"
              class="bdr-8 fs-16 font-weight-bold"
              color="#FCEBA6"
              block
              >직접 입력</v-btn
            >
            <v-btn
              variant="text"
              height="46px"
              class="bdr-8 fs-16 font-weight-bold skip"
              block
              >기기 측정</v-btn
            >
          </div>
        </div>
      </v-card>
    </div>

    <!-- 혈압기록 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">혈압 기록</v-btn>
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
            :color="report.state"
            class="chip-default chip-color"
          >
            {{ getText(report.state) }}
          </v-chip>
          <v-chip
            label
            size="small"
            v-if="report.device != ''"
            class="chip-default ml-2"
            >{{ report.device }}</v-chip
          >
          <dl class="dl dl-table">
            <dt>맥박</dt>
            <dd class="font-weight-bold">
              <span>{{ report.recordPulse }}</span
              >bpm
            </dd>
            <dt>혈압</dt>
            <dd class="font-weight-bold" :class="report.state">
              <span>{{ report.recordBloodPressure }}</span
              >mmHg
            </dd>
            <dt v-if="report.hasMemo">메모</dt>
            <dd v-if="report.hasMemo">{{ report.hasMemo }}</dd>
          </dl>
        </template>
      </CardReport>
    </div>

    <!-- 혈압 분석 -->
    <div class="section-page pt-8 pb-0">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">혈압 분석</v-btn>
      </h2>
      <div class="text-info-grey">기간별 인사이트를 보여드려요</div>
      <v-sheet class="pt-4">
        <v-tabs v-model="Analysis" class="tabs-sliding">
          <v-tab value="one" :ripple="false" class="btn-tab">혈압</v-tab>
          <v-tab value="two" :ripple="false" class="btn-tab">맥박</v-tab>
        </v-tabs>
        <v-sheet>
          <v-window v-model="Analysis">
            <v-window-item value="one"
              ><v-sheet class="container-chart reverse custom-padding">
                <div class="d-flex fs-14 graph-date">2023.08.14~2023.08.24</div>
                <p class="fs-16 font-weight-bold pb-4">평균 20,500걸음</p>
                <div class="chart">
                  <img
                    src="@/assets/images/img-graph-bar2.png"
                    alt=""
                    class="graph-bar2"
                  />
                </div>
              </v-sheet>
            </v-window-item>

            <v-window-item value="two"
              ><v-sheet class="container-chart reverse"
                >맥박</v-sheet
              ></v-window-item
            >
          </v-window>
        </v-sheet>
      </v-sheet>
      <div class="banner-area">
        <v-card variant="flat" rounded="xl" class="box-info">
          <template v-slot:title
            ><span class="fs-16 lh-0 text-grey-darken-3 font-weight-bold"
              >올바른 가정혈압 측정의 중요성</span
            ></template
          >
          <template v-slot:append>
            <v-avatar
              size="48"
              rounded="lg"
              image="/src/assets/images/ico-blood-pressure.svg"
            />
          </template>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import { ref } from 'vue'

  export default {
    components: { CardReport, ReportResult },
    setup() {
      const tab = ref(null)
      const Analysis = ref(null)
      const reports = ref([
        {
          id: 0,
          date: '오전 10시 35분',
          device: '기기',
          state: 'success',
          recordBloodPressure: '100',
          recordPulse: '120/80',
          hasMemo: '사용자가 입력한 메모가 노출됩니다'
        },
        {
          id: 1,
          date: '오전 6시 35분',
          device: '플랫폼',
          state: 'error',
          recordBloodPressure: '100',
          recordPulse: '132/32'
        },
        {
          id: 2,
          date: '오전 6시 35분',
          device: '',
          state: 'error',
          recordBloodPressure: '100',
          recordPulse: '132/32'
        }
      ])
      function getText(props) {
        switch (props) {
          case 'primary':
            return '증가'
          case 'success':
            return '안정'
          case 'error':
            return '위험(고혈압 2단계)'
        }
      }

      function handleClick() {
        console.log('emit')
      }
      return {
        reports,
        getText,
        Analysis,
        handleClick,
        tab
      }
    }
  }
</script>
