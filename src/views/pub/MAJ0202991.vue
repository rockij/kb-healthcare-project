<template>
  <div class="contents">
    <div class="sorting-data sorting-news">
      <div class="news-btn">
        <v-btn
          variant="text"
          density="compact"
          class="fs-16 px-0"
          @click="modal = true"
        >
          <div class="text-category">{{ date }}</div>
          <div class="ml-1">{{ category }}</div>
          <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
        </v-btn>
      </div>
    </div>
    <MAJ0202992 v-model="modal" @update="addText" @close="modal = false" />

    <div class="d-flex mt-4 data-section-bg">
      <span>총 25건</span>
      <span class="ml-auto">23.07.29 ~ 23.08.19</span>
    </div>

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
          :color="getColor(report.stateCd)"
          class="chip-default chip-color"
        >
          {{ report.state }}
        </v-chip>
        <v-chip
          label
          size="small"
          class="chip-default ml-2"
          v-if="report.device"
        >
          {{ report.device }}
        </v-chip>
        <dl v-if="report.title" class="dl">
          <dt class="fs-14">{{ report.title }}</dt>
          <dd class="font-weight-bold">{{ report.time }}bpm</dd>
        </dl>
        <dl v-if="report.title2" class="dl">
          <dt class="fs-14">{{ report.title2 }}</dt>
          <dd
            :class="report.state"
            class="font-weight-bold"
            :style="{ color: getColor(report.stateCd) }"
          >
            {{ report.record }}mmHg
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
  </div>
</template>
<script>
  import MAJ0202992 from './MAJ0202992.vue'
  import DialogSetting from '@/components/DialogSetting.vue'
  import CardReport from '@/components/CardReport.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: {
      MAJ0202992,
      CardReport,
      DialogSetting
    },
    setup() {
      const modal = ref(false)
      const text1 = ref()
      const text2 = ref()
      const date = ref('1주일')
      const category = ref('전체')
      const option = reactive([
        { value: 1, text: '1주일' },
        { value: 2, text: '1개월' },
        { value: 3, text: '3개월' }
      ])
      function changeCategory(val) {
        modal.value = false
        return (category.value = val.text)
      }

      const reports2 = ref([
        {
          id: 1,
          date: '23.08.19 오전 6:35',
          device: '기기',
          stateCd: '3',
          state: '고혈압전단계',
          title: '맥박',
          time: '100',
          title2: '혈압',
          record: '120/80'
        },
        {
          id: 2,
          date: '23.08.19 오전 6:35',
          stateCd: '1',
          state: '정상',
          title: '맥박',
          time: '100',
          title2: '혈압',
          record: '82/105'
        },
        {
          id: 3,
          date: '23.08.19 오전 6:35',
          device: '플랫폼',
          stateCd: '1',
          state: '정상',
          title: '맥박',
          time: '100',
          title2: '혈압',
          record: '20/100'
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
      function addText(val1, val2) {
        text1.value = val1
        text2.value = val2
        modal.value = false
        console.log('상위페이지', text1.value, text2.value)
      }
      const modifyFunc = () => {
        modal2.value = false
        alert('수정')
      }
      const delFunc = () => {
        modal2.value = false
        alert('삭제')
      }
      function getColor(props) {
        switch (props) {
          case '3':
            return '#EB5147'
          case '2':
            return '#FF862F'
          case '1':
            return '#00C378'
        }
      }
      function getText(props) {
        switch (props) {
          case 'prigmary':
            return '과다'
          case 'success':
            return '정상'
          case 'error':
            return '고혈압전단계'
          case 'yellow':
            return '보통'
        }
      }

      return {
        text1,
        text2,
        date,
        modal,
        modal2,
        modal2Title,
        modal2List,
        category,
        option,
        reports2,
        getColor,
        changeCategory,
        getText,
        modifyFunc,
        delFunc,
        addText
      }
    }
  }
</script>
