<template>
  <div class="contents">
    <!-- paging -->
    <SurveyPaging
      :page="page"
      :pageLengh="pageLengh"
      :pageList="pageList"
      :progress="progress"
      @update:prev="page--"
      @update:next="page++"
    />
    <!-- 설문 -->
    <div class="survey-content">
      <v-card variant="flat" color="#F8F8F8" class="fs-14 lh-0 pa-4 mb-6">
        각 문항을 주위 깊게 읽은 다음, 자신이 일상적으로 느끼고 행동하는데
        가깝다고 생각되는 것을 선택해 주세요
      </v-card>
      <!-- 설문 페이지 -->
      <template v-for="item in pageList" :key="item.id">
        <component :is="item.path" v-if="page === item.id"></component>
      </template>
    </div>
    <!-- bottom btn -->
    <div class="btn-bottom" v-if="page < pageLengh">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56"
          class="btn-summit"
          @click.stop="page++"
          >다음</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
  import SurveyPaging from './SurveyPaging.vue'
  import SurveyCase1 from './SurveyCase1.vue'
  import SurveyCase2 from './SurveyCase2.vue'
  import { ref } from 'vue'
  export default {
    components: { SurveyPaging, SurveyCase1, SurveyCase2 },
    setup() {
      const page = ref(1)
      const pageLengh = ref(20)
      const pageList = ref([
        {
          id: 1,
          path: 'SurveyCase1'
        },
        {
          id: 2,
          path: 'SurveyCase2'
        }
      ])
      function progress() {
        return (page.value / pageLengh.value) * 100
      }
      return {
        page,
        pageLengh,
        pageList,
        progress
      }
    }
  }
</script>
