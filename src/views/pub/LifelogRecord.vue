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
    <!-- //필터선택 -->

    <div class="d-flex fs-14 mt-4">
      <span>총 25건</span>
      <span class="ml-auto">2023.07.29 ~ 2023.08.03</span>
    </div>
    <!-- //검색기간 -->

    <CardReport v-for="report in reports" :key="report.id">
      <template #date>{{ report.date }}</template>
      <template #content>
        <v-chip label size="small" class="chip-default">
          {{ report.tag }}
        </v-chip>
        <dl v-if="report.title" class="dl">
          <dt class="fs-14">{{ report.title }}</dt>
          <dd class="point font-weight-bold">{{ report.steps }} 걸음</dd>
        </dl>
        <dl v-if="report.title2" class="dl">
          <dt class="fs-14">{{ report.title2 }}</dt>
          <dd class="font-weight-bold">{{ report.record }} 걸음</dd>
        </dl>
      </template>
    </CardReport>
    <!-- //걸음 -->

    <CardReport
      :btn="true"
      v-for="report in reports2"
      :key="report.id"
      @handleClick="modal2 = true"
    >
      <template #date>{{ report.date }}</template>
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
    <!-- //수면 -->

    <CardReport
      :btn="true"
      v-for="report in reports3"
      :key="report.id"
      @handleClick="modal2 = true"
    >
      <template #date>{{ report.date }}</template>
      <template #content>
        <v-chip
          label
          size="small"
          :color="report.state"
          class="chip-default chip-color"
        >
          {{ getText(report.state) }}
        </v-chip>
        <v-chip label size="small" class="chip-default ml-2">직접입력</v-chip>
        <dl class="dl">
          <dt class="fs-14">{{ report.title }}</dt>
          <dd>
            {{ report.text }}
            <div class="font-weight-bold d-flex align-center mt-2">
              {{ report.statetext }}
              <i class="icon-state" :data-emoji="report.statetext"></i>
            </div>
          </dd>
        </dl>
      </template>
    </CardReport>
    <!-- //기분 -->

    <CardReport
      :btn="true"
      v-for="report in reports4"
      :key="report.id"
      @handleClick="modal4 = true"
    >
      <template #date>{{ report.date }}</template>
      <template #content>
        <dl v-if="report.title" class="dl">
          <dt class="fs-14">{{ report.title }}</dt>
          <dd v-html="report.count" class="font-weight-bold"></dd>
        </dl>
        <dl v-if="report.title2" class="dl">
          <dt class="fs-14">{{ report.title2 }}</dt>
          <dd v-html="report.ml" class="font-weight-bold"></dd>
        </dl>
      </template>
    </CardReport>
    <!-- //흡연 -->

    <CardReport
      :btn="true"
      v-for="report in reports5"
      :key="report.id"
      @handleClick="modal5 = true"
    >
      <template #date>{{ report.date }}</template>
      <template #content>
        <dl v-if="report.title" class="dl">
          <dt class="fs-14">{{ report.title }}</dt>
          <dd v-html="report.count" class="font-weight-bold"></dd>
        </dl>
        <dl v-if="report.title2" class="dl">
          <dt class="fs-14">{{ report.title2 }}</dt>
          <dd v-html="report.ml" class="font-weight-bold text-blue"></dd>
        </dl>
      </template>
    </CardReport>
    <!-- //음주 -->

    <DialogSetting
      :lists="modal2List"
      v-model="modal2"
      @close="modal2 = false"
      @modifyClick="modifyFunc"
      @deleteClick="delFunc"
    />
    <!-- //설정 -->

    <DialogSetting
      :lists="modal2List"
      v-model="modal4"
      @close="modal4 = false"
      @modifyClick="smokeModifyFunc"
      @deleteClick="delFunc"
    />
    <!-- //설정(흡연) -->

    <RecordSmoking
      v-model="modal3"
      @close="modal3 = false"
      @update="modal3 = false"
    />
    <!-- //흡연갯수 -->

    <DialogSetting
      :lists="modal2List"
      v-model="modal5"
      @close="modal5 = false"
      @modifyClick="drinkModifyFunc"
      @deleteClick="delFunc"
    />
    <!-- //설정(흡연) -->

    <RecordDrinking
      v-model="modal6"
      @close="modal6 = false"
      @update="modal6 = false"
    />
    <!-- //음주량 -->
  </div>
</template>
<script>
  import DialogSelectList from '@/components/DialogSelectList.vue' // 조회기간
  import RecordSmoking from '@/views/pub/MAJ0202963.vue' // 단위
  import DialogSetting from '@/components/DialogSetting.vue' // 설정
  import RecordDrinking from '@/views/pub/MAJ0202986.vue' // 음주기록
  import CardReport from '@/components/CardReport.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: {
      DialogSelectList,
      CardReport,
      DialogSetting,
      RecordSmoking,
      RecordDrinking
    },
    setup() {
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
          id: 1,
          date: '오전 6:00',
          tag: '플랫폼',
          title: '걸음수',
          steps: '15,000',
          title2: '칼로리',
          record: '2,000'
        }
      ])

      const reports2 = ref([
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

      const reports3 = ref([
        {
          id: 1,
          date: '오전 6시 35분',
          state: 'error',
          title: '메모',
          text: '사용자가 입력한 메모가 노출됩니다',
          statetext: '화남'
        },
        {
          id: 2,
          date: '오전 6시 35분',
          state: 'yellow',
          title: '메모',
          text: '사용자가 입력한 메모가 노출됩니다',
          statetext: '신이남'
        },
        {
          id: 3,
          date: '오전 6시 35분',
          state: 'success',
          title: '메모',
          text: '사용자가 입력한 메모가 노출됩니다 사용자가 입력한 메모가 노출됩니다',
          statetext: '슬픔'
        }
      ])

      const reports4 = ref([
        {
          id: 1,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '종류/수량',
          count: '권련형 전자 담배/<span class="text-blue">15개비</span>',
          title2: '종류/수량',
          ml: '액상형 전자 담배/<span class="text-blue">15ml</span>'
        },
        {
          id: 2,
          date: '2023.03. 23 ~ 2023.03. 24',
          title2: '종류/수량',
          ml: '액상형 전자 담배/<span class="text-blue">15ml</span>'
        },
        {
          id: 3,
          date: '2023.03. 23 ~ 2023.03. 24',
          title2: '금연시간',
          ml: '<span class="text-blue">10:20:30:00</span>'
        }
      ])

      const reports5 = ref([
        {
          id: 1,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '주종',
          count: '맥주, 소주, 청주, 막걸리, 와인, 양주, 샴페인, 고량주 기타',
          title2: '음주섭취량',
          ml: '360g'
        },
        {
          id: 2,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '금주시간',
          count: '<span class="text-blue">00:06:12:30</span>'
        }
      ])

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
      const modifyFunc = () => {
        modal2.value = false
        alert('수정')
      }
      const delFunc = () => {
        modal2.value = false
        modal4.value = false
        alert('삭제')
      }

      const modal3 = ref(false)
      const modal4 = ref(false)
      const smokeModifyFunc = () => {
        modal4.value = false
        modal3.value = true
      }

      const modal5 = ref(false)
      const modal6 = ref(false)
      const drinkModifyFunc = () => {
        modal5.value = false
        modal6.value = true
      }

      function getText(props) {
        switch (props) {
          case 'primary':
            return '과다'
          case 'success':
            return '적정'
          case 'error':
            return '부족'
          case 'yellow':
            return '보통'
        }
      }

      return {
        modal,
        modal2,
        modal2Title,
        modal2List,
        modal3,
        modal4,
        modal5,
        modal6,
        smokeModifyFunc,
        drinkModifyFunc,
        category,
        option,
        changeCategory,
        reports,
        reports2,
        reports3,
        reports4,
        reports5,
        getText,
        modifyFunc,
        delFunc
      }
    }
  }
</script>
