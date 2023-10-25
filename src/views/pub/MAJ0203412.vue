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

    <div class="d-flex fs-14 mt-4">
      <span>총 25건</span>
      <span class="ml-auto">2023.07.29 ~ 2023.08.03</span>
    </div>

    <!-- 기록 component -->
    <CardReport
      :btn="true"
      v-for="report in reports"
      :key="report.id"
      class="report-food"
      @handleClick="modal2 = true"
    >
      <template #date>{{ report.date }}</template>
      <!-- card 내용 -->
      <template #content>
        <div class="content-grid">
          <!-- <v-chip
            label
            size="small"
            variant="flat"
            color="#F8F8F8"
            class="chip-default"
          >
            {{ report.device }}
          </v-chip> -->
          <img
            :src="`/src/assets/images/${report.img}`"
            alt=""
            class="img-food mb-4"
          />
          <div class="category-list" role="list">
            <div class="chip-category" role="listitem">
              <div class="category pr-2">측정시기</div>
              {{ getText(report.state) }}
            </div>
            <div class="chip-category" role="listitem">
              <div class="category pr-2">섭취음식</div>
              {{ report.food }}
            </div>
            <div class="chip-category" role="listitem">
              <div class="category pr-2">총 칼로리</div>
              <span class="text-blue">{{ report.calories }}</span>
            </div>
          </div>
        </div>
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
  import { ref, reactive } from 'vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import DialogSetting from '@/components/DialogSetting.vue'
  import CardReport from '@/components/CardReport.vue'
  export default {
    components: { DialogSelectList, CardReport, DialogSetting },
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
          id: 0,
          date: '2023.08.17 오전 6시 35분',
          food: '계란, 사과, 바나나, 귤, 수박화채, 밤, 프렌치 토스트',
          state: 'morning',
          img: 'img-food.png',
          calories: '200kcal'
        },
        {
          id: 2,
          date: '2023.08.17 오전 6시 35분',
          food: '마카롱, 반숙란',
          state: 'morningS',
          img: 'img-food.png',
          calories: '300kcal'
        },
        {
          id: 3,
          date: '2023.08.17 오전 6시 35분',
          food: '양념치킨',
          state: 'lunch',
          img: 'img-food.png',
          calories: '100kcal'
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
      const delFunc = () => {
        alert('삭제')
      }

      function getText(props) {
        switch (props) {
          case 'morning':
            return '아침'
          case 'morningS':
            return '아침간식'
          case 'lunch':
            return '점심'
          case 'dinner':
            return '저녁'
        }
      }
      return {
        modal,
        category,
        option,
        reports,
        modal2,
        modal2Title,
        modal2List,
        changeCategory,
        delFunc,
        getText
      }
    }
  }
</script>
