<template>
  <div class="contents pt-type">
    <v-card
      variant="flat"
      color="#F8F8F8"
      class="section-page brt-0 px-6 py-5 d-flex"
    >
      <v-btn
        variant="text"
        density="compact"
        class="fs-16 px-0"
        @click="modal = true"
      >
        {{ category }} · 걸음
        <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
      </v-btn>
      <div class="fs-14 ml-auto">2023.07.29 ~ 2023.08.03</div>
    </v-card>
    <DialogSelectList
      :lists="option"
      title="조회기간 설정"
      v-model="modal"
      @close="modal = false"
      @update="changeCategory"
    />
    <!-- //필터선택 -->

    <h2 class="tit-03 mt-6">최고/최저 걸음수</h2>
    <v-card variant="flat" class="card-report2">
      <v-card-item v-for="(list, i) in analysisList" :key="i">
        <div class="d-flex align-center">
          <div class="d-flex mr-2">
            <span v-html="list.title"></span>
            <span
              v-if="list.dot"
              class="text-dot ml-2 size-default"
              :class="list.dot"
            ></span>
          </div>
          <div class="flex-1 text-right">
            <v-chip
              label
              size="small"
              :color="list.chipColor"
              class="chip-default chip-color mb-1"
              v-if="list.chip"
            >
              {{ list.chip }}
            </v-chip>
            <p>{{ list.count }}</p>
          </div>
        </div>
      </v-card-item>
    </v-card>
    <!-- //최고/최저 활동량 -->

    <h2 class="tit-03 pb-0 mt-8">걸음 추이</h2>
    <!-- 데이터(O) -->
    <div class="mt-4">
      <p class="mb-3 fs-14">
        <strong class="fs-16">평균 20,000걸음</strong> / 800kcal
      </p>
      <!-- chart -->
      <img src="/assets/images/img-graph-bar2.png" style="width: 100%" alt="" />
      <!-- //chart -->
    </div>
    <ul class="list-circle type mt-6">
      <li v-for="(list, i) in activityList" :key="i">
        <p v-html="list.text"></p>
      </li>
    </ul>
    <!-- //데이터(O) -->
    <!-- 데이터(X) -->
    <Nodata :icon="true" :iconSize="'big'" :optionClass="'type'" class="mt-13">
      <div class="fs-16">
        걸음은 스트레스를 완화해줘요<br />가벼운 산책을 해보세요
      </div>
    </Nodata>
    <!-- 데이터(X) -->
    <!-- //활동량 추이 -->
  </div>
</template>
<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: { Nodata, DialogSelectList },
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

      const analysisList = ref([
        {
          title: '<strong class="font-weight-bold mr-1">최고</strong> 걸음수',
          count: '30,000걸음',
          dot: 'success'
        },
        {
          title: '<strong class="font-weight-bold mr-1">최저</strong> 걸음수',
          count: '100걸음',
          dot: 'warning'
        },
        {
          title: '주로 걸은 시간대',
          count: '오전'
        }
      ])

      const activityList = ref([
        {
          text: '가장 많이 걸은 날은 <strong class="font-weight-bold">8월20일(일)</strong> 이에요.'
        },
        {
          text: '권장 걸음 총 달성일은 <strong class="font-weight-bold">3일</strong>이에요.'
        }
      ])
      return {
        modal,
        category,
        option,
        changeCategory,
        analysisList,
        activityList
      }
    }
  }
</script>
