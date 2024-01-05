<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn variant="text" density="compact" class="fs-16 px-0">
        {{ category }}
        <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
      </v-btn>
    </div>

    <div class="result-count">
      <span>총 25건</span>
      <span class="ml-auto">2023.07.29 ~ 2023.08.03</span>
    </div>

    <!-- 기록 component -->
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

    <DialogSetting
      :lists="modal2List"
      v-model="modal4"
      @close="modal4 = false"
      @modifyClick="smokeModifyFunc"
      @deleteClick="delFunc"
    />
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  import DialogSetting from '@/components/DialogSetting.vue'
  import CardReport from '@/components/CardReport.vue'
  export default {
    components: {
      CardReport,
      DialogSetting
    },
    setup() {
      const tab = ref(null)
      const Analysis = ref(null)
      const category = ref('1주일')
      const option = reactive([
        { value: 1, text: '1주일' },
        { value: 2, text: '1개월' },
        { value: 3, text: '3개월' }
      ])

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
      const reports4 = ref([
        {
          id: 1,
          date: '23.08.19 오전 6:35',
          title2: '금연시간',
          ml: '10:20:30:00'
        },
        {
          id: 2,
          date: '23.08.19 오전 6:35',
          title2: '금연시간',
          ml: '10:20:30:00'
        },
        {
          id: 3,
          date: '23.08.19 오전 6:35',
          title2: '금연시간',
          ml: '10:20:30:00'
        },
        {
          id: 4,
          date: '23.08.19 오전 6:35',
          title2: '금연시간',
          ml: '10:20:30:00'
        }
      ])

      function handleClick() {
        console.log('emit')
      }

      const delFunc = () => {
        modal4.value = false
        alert('삭제')
      }

      const modal4 = ref(false)
      const smokeModifyFunc = () => {
        modal4.value = false
      }

      return {
        tab,
        Analysis,
        modal4,
        category,
        option,
        reports4,
        modal2List,
        smokeModifyFunc,
        delFunc,
        handleClick
      }
    }
  }
</script>
