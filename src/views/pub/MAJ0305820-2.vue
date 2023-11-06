<template>
  <div class="contents">
    <h2 class="fs-24 font-weight-bold">2022.12.30</h2>
    <p class="mt-2">일반검진</p>
    <!-- //title -->

    <BanerReport :bnShow="'good'" :videBox="false" class="mt-6">
      흉부질환 검사결과 정상이에요
    </BanerReport>
    <!-- //baner -->

    <h3 class="tit-03 pb-1 mt-4">지금처럼 잘 관리해주세요</h3>
    <p class="fs-18">건강한 상태 유지를 위해서는 꾸준한 운동이 좋습니다</p>

    <div class="list-tree-line mt-8">
      <ul>
        <template v-for="(list, i) in treeList" :key="i">
          <li :class="list.point === true ? 'point' : ''">
            <i v-if="list.point === true" class="pulse"></i>
            <strong class="text">{{ list.year }}</strong>
            <strong class="text fs-18 mt-1" :class="getText(list.state)">{{
              list.state
            }}</strong>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
  import BanerReport from '@/components/BanerReport.vue'
  import { ref } from 'vue'
  export default {
    components: {
      BanerReport
    },
    setup() {
      const treeList = ref([
        {
          year: '2022',
          state: '정상',
          point: true
        },
        {
          year: '2018',
          state: '정상'
        },
        {
          year: '2016',
          state: '정상'
        },
        {
          year: '2017',
          state: '주의'
        },
        {
          year: '2010',
          state: '의심'
        }
      ])
      function getText(props) {
        switch (props) {
          case '의심':
            return 'text-red'
          case '주의':
            return 'text-orange'
          case '정상':
            return 'text-green'
        }
      }
      return {
        treeList,
        getText
      }
    }
  }
</script>
