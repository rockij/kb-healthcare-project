<template>
  <div class="contents">
    <div class="section-page py-8 bg-2 section-bg">
      <ReportResult
        :bnShow="'self'"
        :videBox="false"
        class="pb-4 calorie-report"
      >
        <!-- <strong class="title">지금 바로 진료</strong> -->
        운동관련 휴레이 메시지 노출 예정
      </ReportResult>
      <v-card variant="flat" rounded="xl" class="calorie-card type-2">
        <v-card-title class="pa-0 d-flex">
          <strong class="fs-20 ml-1 calorie-title"
            >오늘의 체성분을 <br />
            확인해보세요</strong
          >
          <v-btn
            variant="text"
            :ripple="false"
            class="pl-0 pr-0"
            density="compact"
            @click="modal = true"
          >
            <img src="@/assets/images/icon-moreinfo.svg" alt="" />
          </v-btn>
        </v-card-title>
        <img
          src="@/assets/images/img-graph-star.png"
          alt=""
          class="pt-8 graph-bar2"
        />
        <div class="calendar-info type-3">
          <div class="state" v-for="(state, i) in states" :key="i">
            <v-avatar :color="state.color" size="8" />
            <div class="text">{{ state.text }}</div>
          </div>
        </div>
        <div class="btn-double d-flex pt-6">
          <v-btn variant="text" height="46" class="btn-cancel light-yellow"
            >기기 측정</v-btn
          >
          <v-btn
            variant="text"
            height="46"
            class="btn-summit"
            @click="modal2 = true"
            >직접 입력</v-btn
          >
        </div>
      </v-card>
      <div class="body-list">
        <div class="list-title pt-4">3일 전 내 몸과의 비교</div>
        <div class="d-flex top-list pt-1">
          <v-card variant="flat" rounded="xl" class="calorie-card type-3">
            <div class="top-data">
              <span class="data-title">체중</span>
              <div class="calendar-info type-2">
                <div class="state">
                  <v-avatar size="8" color="#EB5147" class="mr-1" />
                  <div class="text" style="color: #eb5147">표준초과</div>
                </div>
              </div>
            </div>
            <div class="data-cont">100kg</div>
          </v-card>
          <v-card variant="flat" rounded="xl" class="calorie-card type-3">
            <div class="top-data">
              <span class="data-title">허리둘레</span>
              <div class="calendar-info type-2">
                <div class="state">
                  <img
                    src="@/assets/images/icon-double.svg"
                    alt=""
                    style="width: 16px; height: 16px"
                  />
                </div>
              </div>
            </div>
            <div class="data-cont">99cm</div>
          </v-card>
        </div>

        <v-expansion-panels class="pt-4">
          <v-expansion-panel title=" 7개 항목 더보기" class="body-panels">
            <template #text
              ><v-card variant="flat" rounded="xl" class="calorie-card type-3">
                <div class="top-data">
                  <span class="data-title">BMI</span>
                  <div class="calendar-info type-2">
                    <div class="state">
                      <v-avatar size="8" color="#EB5147" class="mr-1" />
                      <div class="text" style="color: #eb5147">표준초과</div>
                    </div>
                  </div>
                </div>
                <div class="data-cont">100cm</div>
              </v-card>
              <v-card variant="flat" rounded="xl" class="calorie-card type-3">
                <div class="top-data">
                  <span class="data-title"
                    >기초 <br />
                    대사량</span
                  >
                  <div class="calendar-info type-2">
                    <div class="state">
                      <img
                        src="@/assets/images/icon-double.svg"
                        alt=""
                        style="width: 16px; height: 16px"
                      />
                    </div>
                  </div>
                </div>
                <div class="data-cont">2,400kcal</div>
              </v-card>
              <v-card variant="flat" rounded="xl" class="calorie-card type-3">
                <div class="top-data">
                  <span class="data-title">체지방량</span>
                  <div class="calendar-info type-2">
                    <div class="state">
                      <v-avatar size="8" color="#EB5147" class="mr-1" />
                      <div class="text" style="color: #eb5147">표준초과</div>
                    </div>
                  </div>
                </div>
                <div class="data-cont">20.5kg</div>
              </v-card>
              <v-card variant="flat" rounded="xl" class="calorie-card type-3">
                <div class="top-data">
                  <span class="data-title">골격근량</span>
                  <div class="calendar-info type-2">
                    <div class="state">
                      <v-avatar size="8" color="#00C378" class="mr-1" />
                      <div class="text" style="color: #00c378">표준</div>
                    </div>
                  </div>
                </div>
                <div class="data-cont">40.5kg</div>
              </v-card>
              <v-card variant="flat" rounded="xl" class="calorie-card type-3">
                <div class="top-data">
                  <span class="data-title"
                    >내장지방 <br />
                    지수</span
                  >
                  <div class="calendar-info type-2">
                    <div class="state">
                      <v-avatar size="8" color="#00C378" class="mr-1" />
                      <div class="text" style="color: #00c378">표준</div>
                    </div>
                  </div>
                </div>
                <div class="data-cont">10 Level</div>
              </v-card>
              <v-card variant="flat" rounded="xl" class="calorie-card type-3">
                <div class="top-data">
                  <span class="data-title">근육량</span>
                  <div class="calendar-info type-2">
                    <div class="state">
                      <v-avatar size="8" color="#EB5147" class="mr-1" />
                      <div class="text" style="color: #eb5147">표준초과</div>
                    </div>
                  </div>
                </div>
                <div class="data-cont">40kg</div>
              </v-card>
              <v-card variant="flat" rounded="xl" class="calorie-card type-3">
                <div class="top-data">
                  <span class="data-title">체수분</span>
                  <div class="calendar-info type-2">
                    <div class="state">
                      <v-avatar size="8" color="#EB5147" class="mr-1" />
                      <div class="text" style="color: #eb5147">표준초과</div>
                    </div>
                  </div>
                </div>
                <div class="data-cont">30L</div>
              </v-card>
            </template></v-expansion-panel
          >
        </v-expansion-panels>
      </div>
    </div>

    <!-- 심박기록 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">체성분 기록</v-btn>
      </h2>
      <div class="text-info-grey">최근 3개 기록만 표시됩니다</div>

      <!-- 기록 component -->
      <CardReport
        :btn="true"
        v-for="report in reports"
        :key="report.id"
        @handleClick="handleClick"
        class="body-report"
      >
        <template #date>{{ report.date }}</template>
        <!-- card 내용 -->
        <template #content>
          <v-chip
            label
            size="small"
            class="chip-default chip-color"
            :color="getColor(report.state)"
          >
            {{ report.state }}
          </v-chip>
          <v-chip label size="small" class="chip-default ml-2"> 기기 </v-chip>
          <dl class="dl">
            <dt>몸무게</dt>
            <dd>
              <strong>{{ report.record }}kg</strong>
            </dd>
          </dl>
          <dl class="dl">
            <dt>BMI</dt>
            <dd>
              <strong :style="{ color: getColor(report.state) }"
                >{{ report.record }}BMI</strong
              >
            </dd>
          </dl>
          <v-btn
            variant="text"
            class="btn-gray mt-2"
            height="32"
            @click="modal3 = true"
            >상세보기</v-btn
          >
        </template>
      </CardReport>
    </div>

    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">체성분 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">기간별 인사이트를 보여드려요</p>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab :ripple="false" class="fs-20">체중</v-tab>
        <v-tab :ripple="false" class="fs-20">허리둘레</v-tab>
        <v-tab :ripple="false" class="fs-20">BMI</v-tab>
        <v-tab :ripple="false" class="fs-20">체지방량</v-tab>
      </v-tabs>
      <img src="@/assets/images/img-graph-bar2.png" alt="" class="graph-bar2" />
    </div>
  </div>

  <!-- 체성분 그래프 상세 팝업 -->
  <MAJ0203121 v-model="modal" @close="modal = false" />
  <!-- 체성분 직접입력 팝업 -->
  <MAJ0203220 v-model="modal2" @close="modal2 = false" />
  <!-- 체성분 상세보기 팝업 -->
  <MAJ0203230 v-model="modal3" @close="modal3 = false" />
</template>

<script>
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import { ref, reactive } from 'vue'
  import MAJ0203121 from './MAJ0203121.vue'
  import MAJ0203220 from './MAJ0203220.vue'
  import MAJ0203230 from './MAJ0203230.vue'
  export default {
    components: {
      ReportResult,
      CardReport,
      MAJ0203121,
      MAJ0203220,
      MAJ0203230
    },

    setup() {
      const modal = ref(false)
      const modal2 = ref(false)
      const modal3 = ref(false)

      const isActive = ref(false)
      const reports = ref([
        {
          id: 0,
          date: '오전 6:00',
          device: '기기',
          state: '고도비만',
          record: '82'
        },
        {
          id: 0,
          date: '오전 6:00',
          device: '기기',
          state: '비만',
          record: '105'
        },
        {
          id: 0,
          date: '오전 6:00',
          device: '기기',
          state: '정상',
          record: '60'
        }
      ])

      function getColor(props) {
        switch (props) {
          case '고도비만':
            return '#eb5147'
          case '저체중':
            return '#eb5147'
          case '비만':
            return '#ff862f'
          case '비만전단계':
            return '#ff862f'
          case '정상':
            return '#00c378'
        }
      }
      const states = reactive([
        {
          color: '#FFD600',
          text: '표준 구간'
        },
        {
          color: '#3F86F1',
          text: '내 상태'
        }
      ])
      function handleClick() {
        console.log('emit')
      }
      return {
        modal,
        modal2,
        modal3,
        states,
        isActive,
        reports,
        handleClick,
        getColor
      }
    }
  }
</script>
