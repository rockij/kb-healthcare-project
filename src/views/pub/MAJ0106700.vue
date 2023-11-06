<template>
  <div class="servey-wrap">
    <!-- paging -->
    <SurveyPaging
      :page="page + 1"
      :pageLengh="pageLengh()"
      :pageList="pageList"
      :progress="progress"
      @update:prev="page--"
      @update:next="page++"
    />
    <!-- 설문 -->
    <div class="survey-content">
      <!-- 설문 페이지 -->
      <v-window v-model="page">
        <v-window-item v-for="item in pageList" :key="item.id">
          <component :is="item.path" />
        </v-window-item>
      </v-window>
    </div>
    <!-- bottom btn -->
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56"
          class="btn-summit"
          @click.stop="getPage"
        >
          {{ page + 1 === pageList.length ? '결과보기' : '다음' }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import SurveyPaging from './SurveyPaging.vue'
  import SurveyPage1 from './SurveyPage1.vue'
  import SurveyPage2 from './SurveyPage2.vue'
  import SurveyPage3 from './SurveyPage3.vue'
  import SurveyPage4 from './SurveyPage4.vue'
  import SurveyPage5 from './SurveyPage5.vue'
  import { ref } from 'vue'
  export default {
    components: {
      SurveyPaging,
      SurveyPage1,
      SurveyPage2,
      SurveyPage3,
      SurveyPage4,
      SurveyPage5
    },
    setup() {
      const page = ref(0)
      const pageLengh = () => {
        return pageList.value.length
      }
      const pageList = ref([
        {
          id: 1,
          path: 'SurveyPage1'
        },
        {
          id: 2,
          path: 'SurveyPage2'
        },
        {
          id: 3,
          path: 'SurveyPage3'
        },
        {
          id: 4,
          path: 'SurveyPage4'
        },
        {
          id: 5,
          path: 'SurveyPage5'
        }
      ])
      function progress() {
        return ((page.value + 1) / pageLengh()) * 100
      }
      function getPage() {
        if (page.value + 1 === pageList.value.length)
          return (page.value = page.value)
        else page.value++
      }
      return {
        page,
        pageLengh,
        pageList,
        progress,
        getPage
      }
    }
  }
</script>
