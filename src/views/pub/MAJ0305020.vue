<template>
  <div class="contents">
    <v-btn
      variant="text"
      density="compact"
      class="fs-16 btn-select-pack"
      @click="modal = true"
    >
      <span class="txbox" v-html="modalListBtn"></span>
      <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
    </v-btn>
    <div class="list-area type-5 mt-7">
      <ul class="list">
        <li class="question" v-for="(item, i) in report" :key="i">
          <v-btn variant="text" class="linkbox arrow" block @click="linkFunc">
            <p class="summary font-weight-bold">{{ item.summary }}</p>
            <div class="data-simple mt-3">
              <span>{{ item.name }} </span>
              <span>{{ item.category }} </span>
              <span>{{ item.date }}</span>
            </div>
          </v-btn>
        </li>
      </ul>
    </div>

    <Nodata :icon="true">
      <div class="fs-16">증상검색 이용현황이 없습니다</div>
    </Nodata>
    <MAJ0305021 v-model="modal" @close="modal = false" />
  </div>
</template>
<script>
  import { ref } from 'vue'
  import Nodata from '@/components/nodata/Nodata.vue'
  import MAJ0305021 from './MAJ0305021.vue'
  export default {
    components: { Nodata, MAJ0305021 },
    setup() {
      const modalListBtn = ref(
        '<span>3개월</span><span>본인</span><span>전체</span>'
      )
      const report = ref([
        {
          summary: '얼굴에 뭐가 났어요',
          name: '조영강',
          category: '성인남자',
          date: '2022.11.24'
        },
        {
          summary: '얼굴에 뭐가 났어요',
          name: '조영강',
          category: '성인남자',
          date: '2022.11.24'
        },
        {
          summary:
            '텍스트가 길어서 넘치게 되었습니다텍스트가 길어서 넘치게 되었습니다텍스트가 길어서 넘치게 되었습니다',
          name: '조영강',
          category: '성인남자',
          date: '2022.11.24'
        }
      ])
      const linkFunc = () => {
        alert('결과리포트 이동')
      }
      const modal = ref(false)
      return { modalListBtn, report, linkFunc, modal }
    }
  }
</script>
