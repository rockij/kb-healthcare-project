<template>
  <div class="contents">
    <LifeCalendar :classOption="'life-calendar'" />
    <div class="section-page bg pa-4">
      <BanerReport :bnShow="'good'" :videBox="false" class="mb-4">
        휴레이 메시지는 아직 확정되지 않았다
      </BanerReport>
      <v-card variant="flat" rounded="xl" class="pt-4 pr-6 pb-4 pl-6">
        <v-card-title class="pa-0">
          <strong class="fs-20">오늘 수면 시간은<br />6시간 50분 이에요</strong>
        </v-card-title>
        <div class="mt-8" style="height: 180px; background-color: #999">
          chart
        </div>
        <div class="d-flex fs-14 pr-3 pl-3 mt-6">
          <span class="flex-1-1-100 d-flex flex-column align-center"
            >잠든 시간<strong class="fs-16">오후 12:01</strong></span
          >
          <v-divider
            class="border-opacity-100 align-self-center"
            :thickness="1"
            color="#666"
            style="height: 24px"
            vertical
          />
          <span class="flex-1-1-100 d-flex flex-column align-center"
            >일어난 시간<strong class="fs-16">오전 05:50</strong></span
          >
        </div>
        <div class="btn-area2 mt-8">
          <v-btn
            variant="flat"
            height="48px"
            class="bdr-8 fs-16 font-weight-bold"
            color="#FCEBA6"
            block
            >직접 입력</v-btn
          >
          <v-btn
            variant="text"
            height="48px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            >잠자기</v-btn
          >
        </div>
      </v-card>
      <!-- //차트 -->
    </div>

    <div class="py-8">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">수면 기록</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 3개 기록만 표시됩니다</p>
      <CardReport
        :btn="true"
        v-for="report in reports"
        :key="report.id"
        @handleClick="modal = true"
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
          <v-chip label size="small" class="chip-default ml-2"> 플랫폼 </v-chip>
          <dl v-if="report.title" class="dl">
            <dt class="fs-14">{{ report.title }}</dt>
            <dd class="font-weight-bold">{{ report.time }}</dd>
          </dl>
          <dl v-if="report.title2" class="dl">
            <dt class="fs-14">{{ report.title2 }}</dt>
            <dd :class="report.state" class="font-weight-bold">
              {{ report.record }}점
            </dd>
          </dl>
        </template>
      </CardReport>
    </div>
    <!-- //수면기록 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">수면 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 1주일의 수면 분석입니다</p>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab :ripple="false" class="fs-20">1주일</v-tab>
        <v-tab :ripple="false" class="fs-20">1개월</v-tab>
        <v-tab :ripple="false" class="fs-20">6개월</v-tab>
      </v-tabs>
      <div class="text-info-grey2 mt-7">
        2023.08.14~2023.08.24
        <p class="fs-16 mt-1 font-weight-bold">일일 평균 6시간 30분</p>
      </div>
      <div class="mt-5">
        <img
          src="@/assets/images/img-graph-bar2.png"
          style="width: 100%"
          alt=""
        />
      </div>
    </div>
    <!-- //수면분석 -->

    <div class="section-page">
      <h2 class="tit-03">챌린지</h2>
      <p class="text-info-grey fs-16">챌린지 관련 서브 텍스트 노출</p>
    </div>
    <!-- //챌린지 -->

    <div class="section-page">
      <h2 class="tit-03">추천영역</h2>
      <p class="text-info-grey fs-16">추천영역 관련 서브 텍스트 노출</p>
    </div>
    <!-- //추천영역 -->

    <DialogSetting
      :lists="modalList"
      v-model="modal"
      @close="modal = false"
      @modifyClick="modifyFunc"
      @deleteClick="delFunc"
    />
  </div>
</template>
<script>
  import LifeCalendar from '@/views/pub/LifeCalendar.vue'
  import BanerReport from '@/components/BanerReport.vue'
  import CardReport from '@/components/CardReport.vue'
  import DialogSetting from '@/components/DialogSetting.vue' // 설정
  import { ref } from 'vue'
  export default {
    components: {
      LifeCalendar,
      BanerReport,
      CardReport,
      DialogSetting
    },
    setup() {
      const reports = ref([
        {
          id: 1,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'primary',
          title: '수면시간',
          time: '7시간 1분',
          title2: '수면점수',
          record: '82'
        },
        {
          id: 2,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'success',
          title: '수면시간',
          time: '7시간 1분',
          title2: '수면점수',
          record: '82-105'
        },
        {
          id: 3,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'error',
          title: '수면시간',
          time: '7시간 1분',
          title2: '수면점수',
          record: '20'
        }
      ])
      function getText(props) {
        switch (props) {
          case 'primary':
            return '과다'
          case 'success':
            return '적정'
          case 'error':
            return '부족'
        }
      }

      const modal = ref(false)
      const modalTitle = ref('설정')
      const modalList = ref([
        {
          value: 0,
          text: '수정'
        },
        {
          value: 1,
          text: '삭제'
        }
      ])

      const modifyFunc = () => {
        modal.value = false
        alert('MAJ0202912 이동')
      }
      const delFunc = () => {
        alert('삭제')
      }

      return {
        reports,
        getText,
        modal,
        modalTitle,
        modalList,
        modifyFunc,
        delFunc
      }
    }
  }
</script>
