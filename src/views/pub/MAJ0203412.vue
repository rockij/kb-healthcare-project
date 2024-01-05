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
    <MAJ0203413 v-model="modal" @update="addText" @close="modal = false" />

    <div class="d-flex mt-4 data-section-bg">
      <span>총 25건</span>
      <span class="ml-auto">23.07.29 ~ 23.08.19</span>
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
          <div class="img-center">
            <img
              :src="`/assets/images/${report.img}`"
              alt=""
              class="img-food img"
            />
          </div>
          <div class="category-list pt-2" role="list">
            <div class="chip-category" role="listitem">
              <div class="category pr-2">측정시기</div>
              {{ getText(report.state) }}
            </div>
            <div class="chip-category" role="listitem">
              <div class="category pr-2">섭취음식</div>
              <div class="food-name text-overflow line1">{{ report.food }}</div>
            </div>
            <div class="chip-category" role="listitem">
              <div class="category pr-2">칼로리</div>
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
  import MAJ0203413 from './MAJ0203413.vue'
  import DialogSetting from '@/components/DialogSetting.vue'
  import CardReport from '@/components/CardReport.vue'
  export default {
    components: { MAJ0203413, CardReport, DialogSetting },
    setup() {
      const modal = ref(false)
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
      const reports = ref([
        {
          id: 0,
          date: '09.09 오전 10:35',
          food: '계란, 사과, 바나나, 귤, 수박화채, 밤, 프렌치 토스트',
          state: 'morning',
          img: 'bigfood.jpg',
          calories: '200kcal'
        },
        {
          id: 2,
          date: '09.09 오후 2:35',
          food: '마카롱, 반숙란',
          state: 'morningS',
          img: 'img-food.png',
          calories: '300kcal'
        },
        {
          id: 3,
          date: '22.09.09 오후 2:35 ',
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
      function addText(val1, val2) {
        text1.value = val1
        text2.value = val2
        modal.value = false
        console.log('상위페이지', text1.value, text2.value)
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
        date,
        modal,
        category,
        option,
        reports,
        modal2,
        modal2Title,
        modal2List,
        addText,
        changeCategory,
        delFunc,
        getText
      }
    }
  }
</script>
