<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn variant="text" density="compact" class="fs-16 px-0">
        {{ category }}
        <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
      </v-btn>
    </div>

    <div class="d-flex mt-4 data-section-bg">
      <span>총 25건</span>
      <span class="ml-auto">2023.07.29 ~ 2023.08.03</span>
    </div>

    <CardReport
      :btn="true"
      v-for="report in reports3"
      :key="report.id"
      @handleClick="modal2 = true"
      class="type-emoji"
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

    <DialogSetting
      :lists="modal2List"
      v-model="modal2"
      @close="modal2 = false"
      @modifyClick="modifyFunc"
      @deleteClick="delFunc"
    />
    <!-- //설정 -->
  </div>
</template>
<script>
  import RecordSmoking from '@/views/pub/MAJ0202963.vue' // 단위
  import DialogSetting from '@/components/DialogSetting.vue' // 설정
  import RecordDrinking from '@/views/pub/MAJ0202986.vue' // 음주기록
  import CardReport from '@/components/CardReport.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: {
      CardReport,
      DialogSetting,
      RecordSmoking,
      RecordDrinking
    },
    setup() {
      const category = ref('1주일')
      const option = reactive([
        { value: 1, text: '1주일' },
        { value: 2, text: '1개월' },
        { value: 3, text: '3개월' }
      ])

      const reports3 = ref([
        {
          id: 1,
          date: '23.08.19 오전 6:35',
          state: 'error',
          title: '메모',
          text: '메모가 노출됩니다',
          statetext: '화남'
        },
        {
          id: 2,
          date: '23.08.19 오전 6:35',
          state: 'yellow',
          title: '메모',
          text: '메모가 노출됩니다',
          statetext: '신이남'
        },
        {
          id: 3,
          date: '23.08.19 오전 6:35',
          state: 'success',
          title: '메모',
          text: '메모가 노출됩니다 메모가 노출됩니다 메모가 노출됩니다',
          statetext: '슬픔'
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
        alert('삭제')
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
        modal2,
        modal2Title,
        modal2List,
        category,
        option,
        reports3,
        getText,
        modifyFunc,
        delFunc
      }
    }
  }
</script>
