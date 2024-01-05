<template>
  <div class="contents">
    <div class="tab-line">
      <v-tabs v-model="tabInit" align-tabs="start">
        <v-tab
          v-for="(item, i) in tabItems"
          :key="item.id"
          :value="i"
          :ripple="false"
          :data-count="item.tabCount"
        >
          {{ item.titleTab }}
        </v-tab>
      </v-tabs>
    </div>
    <div class="sorting-data sorting-news data-section-bg">
      <div class="news-btn">
        <v-btn
          variant="text"
          density="compact"
          class="fs-16 px-0"
          @click="modal = true"
        >
          <div class="ml-1">{{ category }}</div>
          <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
        </v-btn>
      </div>
      <DialogSelectList
        :lists="option"
        title="정렬 설정"
        v-model="modal"
        @close="modal = false"
        @update="changeCategory"
      />
    </div>
    <v-window v-model="tabInit">
      <v-window-item v-for="n in 2" :key="n">
        <div class="mychal-nodata">
          <img src="/assets/images/icon-mychal-nodata.svg" alt="" />
          <div class="sub-tit">진행중 챌린지가 없어요</div>
          <div class="sub-desc">
            지금 <span class="blue"> 건강관리</span> 시작해보세요!
          </div>
        </div>
        <v-btn
          variant="flat"
          rounded="lg"
          height="32"
          class="btn-grey mt-6 fs-13"
          block
        >
          인기 챌린지 전체보기
        </v-btn>
      </v-window-item>
    </v-window>

    <div class="mt-10 mb-7">
      <LifelogChallenge :title="true" :cardClass="'tags-type'" />
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  import ProgressBar from './ProgressBar.vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  export default {
    components: {
      ProgressBar,
      DialogSelectList,
      LifelogChallenge
    },
    setup() {
      const tabInit = ref(null)
      const modal = ref(false)
      const category = ref('마감일순')
      const option = reactive([
        { value: 1, text: '마감일순' },
        { value: 2, text: '참여최신순' }
      ])
      const tabItems = ref([
        { titleTab: '참여중 챌린지' },
        { titleTab: '종료/취소 챌린지' }
      ])

      function changeCategory(val) {
        modal.value = false
        return (category.value = val.text)
      }
      return {
        modal,
        category,
        tabInit,
        tabItems,
        option,
        changeCategory
      }
    }
  }
</script>
