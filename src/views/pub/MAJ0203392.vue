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
        <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
      </v-btn>
    </div>

    <div class="d-flex fs-14 mt-4">
      <span>총 {{ reports.length }}건</span>
      <span class="ml-auto">2023.07.29 ~ 2023.08.03</span>
    </div>
    <!-- //검색기간 -->

    <CardReport
      :btn="true"
      v-for="report in reports"
      :key="report.id"
      @handleClick="modal2 = true"
    >
      <template #date>{{ report.date }}</template>
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

    <DialogSetting
      :lists="modal2List"
      v-model="modal2"
      @close="modal2 = false"
      @modifyClick="modifyFunc"
      @deleteClick="delFunc"
    />

    <MAJ0202858
      v-model="modal"
      @update="changeCategory"
      @close="modal = false"
    />
    <!-- //음주량 -->
  </div>
</template>
<script>
  import DialogSetting from '@/components/DialogSetting.vue' // 설정
  import CardReport from '@/components/CardReport.vue'
  import MAJ0202858 from './MAJ0202858.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: {
      DialogSetting,
      CardReport,
      MAJ0202858
    },
    setup() {
      const modal = ref(false)
      const category = ref('일주일')
      function changeCategory(val) {
        modal.value = false
        return (category.value = val)
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
            return '증가'
          case 'success':
            return '안정'
          case 'error':
            return '부족'
        }
      }

      return {
        modal,
        modal2,
        modal2Title,
        modal2List,
        category,
        reports,
        changeCategory,
        getText,
        modifyFunc,
        delFunc
      }
    }
  }
</script>
