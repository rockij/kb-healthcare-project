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
      <div class="text-date">2023.07.29 ~ 2023.08.03</div>
    </div>
    <DialogSelectList
      :lists="option"
      title="조회기간 설정"
      v-model="modal"
      @close="modal = false"
      @update="changeCategory"
    />
    <!-- //필터선택 -->

    <v-card variant="flat" class="card-report2 mt-4">
      <v-card-title class="mb-4"> 최고/최저 활동량 </v-card-title>
      <v-card-item v-for="list in analysisList" :key="list.id">
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

    <div class="mt-6">
      <h2 class="tit-03">흡연량 추이</h2>

      <!-- 데이터(O) -->
      <div class="mt-5">
        <img
          src="@/assets/images/img-graph-bar2.png"
          style="width: 100%"
          alt=""
        />
      </div>
      <ul class="list-circle type mt-6">
        <li v-for="list in activityList" :key="list.id">
          <p v-html="list.text"></p>
        </li>
      </ul>
      <!-- //데이터(O) -->

      <!-- 데이터(X) -->
      <Nodata
        :icon="true"
        :iconSize="'big'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          걸음 데이터가 없으시군요<br />가벼운 산책을 해보세요
        </div>
      </Nodata>
      <!-- 데이터(X) -->
    </div>
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
          id: 1,
          title:
            '<strong class="font-weight-bold mr-1">최고</strong> 수면 시간',
          count: '적정 7시 30분',
          dot: 'success'
        },
        {
          id: 2,
          title:
            '<strong class="font-weight-bold mr-1">최저</strong> 수면 시간',
          count: '부족 5시 50분',
          dot: 'warning',
          dot: 'caution'
        },
        {
          id: 3,
          title:
            '<strong class="font-weight-bold mr-1">최저</strong> 수면 시간',
          count: '과다 13시 00분',
          chip: '고협압 2기',
          chipColor: 'error'
        },
        {
          id: 4,
          title: '수면 시간 평균',
          count: '6시 5분',
          chip: '고협압 2기',
          chipColor: 'orange'
        },
        {
          id: 5,
          title: '<strong class="font-weight-bold mr-1">수축기</strong>평균',
          count: '132mmHg'
        }
      ])
      const activityList = ref([
        {
          id: 1,
          text: '가장 많이 걸은 날은 <strong class="font-weight-bold">8월20일(일)</strong> 이에요.'
        },
        {
          id: 2,
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
