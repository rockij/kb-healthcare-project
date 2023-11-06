<template>
  <div class="servey-wrap type-2">
    <!-- paging -->
    <SurveyPaging
      type="range"
      :page="page + 1"
      :pageLengh="pageLengh()"
      :pageList="pageList"
      :progress="progress"
      @update:prev="page--"
      @update:next="page++"
    />
    <v-card variant="flat" rounded="xl" class="survey-content">
      <!-- 설문 페이지 -->
      <v-window v-model="page">
        <v-window-item v-for="item in pageList" :key="item.id">
          <component :is="item.path" />
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script>
  import SurveyPaging from './SurveyPaging.vue'
  import SurveyPage6 from './SurveyPage6.vue'
  import SurveyPage7 from './SurveyPage7.vue'
  import { ref } from 'vue'
  export default {
    components: {
      SurveyPaging,
      SurveyPage6,
      SurveyPage7
    },
    setup() {
      const page = ref(0)
      const pageLengh = () => {
        return pageList.value.length
      }
      const pageList = ref([
        {
          id: 1,
          path: 'SurveyPage6'
        },
        {
          id: 2,
          path: 'SurveyPage7'
        }
      ])
      function progress() {
        return ((page.value + 1) / pageLengh()) * 100
      }
      function getPage() {
        if (page.value === pageList.value.length)
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
