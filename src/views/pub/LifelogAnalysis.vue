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
        {{ category }}
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

    <h2 class="tit-03 mt-6">최고/최저 활동량</h2>
    <v-card variant="flat" class="card-report2">
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
            <p v-html="list.count" class="fs-14"></p>
          </div>
        </div>
      </v-card-item>
    </v-card>
    <!-- //최고/최저 활동량 -->

    <h2 class="tit-03 mt-8">흡연량 추이</h2>
    <v-btn
      block
      variant="outlined"
      rounded="lg"
      :ripple="false"
      class="btn-select-arrow py-0 mt-2"
      color="#26282C"
      height="48"
      @click="modal4 = true"
    >
      <span ref="selectBox" class="text fs-16 font-weight-bold">
        {{ modal4ListBtn }}
        <img src="/assets/images/icon-arrow-down2.svg" alt="검색" />
      </span>
    </v-btn>
    <DialogSelectList
      :lists="modal4List"
      :title="modal4Title"
      v-model="modal4"
      @close="modal4 = false"
      @update="smokeCategory"
    />

    <!-- 데이터(O) -->
    <div class="mt-5">
      <img src="/assets/images/img-graph-bar2.png" style="width: 100%" alt="" />
    </div>
    <ul class="list-circle type mt-6">
      <li v-for="list in activityList" :key="list.id">
        <p v-html="list.text"></p>
      </li>
    </ul>
    <!-- //데이터(O) -->

    <!-- 데이터(X) -->
    <Nodata :icon="true" :iconSize="'big'" :optionClass="'type'" class="mt-13">
      <div class="fs-16">
        걸음 데이터가 없으시군요<br />가벼운 산책을 해보세요
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
          dot: 'warning'
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
          count: '일반담배 109 개비<br/>액상형 전자담배 101 ml'
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
      const modal4ListBtn = ref('일반담배')
      const modal4Title = ref('담배종류선택')
      const modal4List = ref([
        {
          value: 1,
          text: '일반담배'
        },
        {
          value: 2,
          text: '권련형'
        },
        {
          value: 2,
          text: '액상형'
        }
      ])
      const modal4 = ref(false)
      function smokeCategory(val) {
        modal4.value = false
        return (modal4ListBtn.value = val.text)
      }
      return {
        modal,
        category,
        option,
        changeCategory,
        analysisList,
        activityList,
        modal4ListBtn,
        modal4Title,
        modal4List,
        modal4,
        smokeCategory
      }
    }
  }
</script>
