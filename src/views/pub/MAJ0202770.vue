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
          <div class="text-category">{{ text1.text }}</div>
          <div class="ml-1">{{ text2.text }}</div>
          <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
        </v-btn>
      </div>
      <v-btn
        variant="text"
        class="text-date news-date pa-0"
        @click="modal2 = true"
      >
        카테고리
        <img src="/assets/images/icon-category.svg" alt="" class="ml-1" />
      </v-btn>
    </div>
    <!-- 뉴스리스트 -->
    <NewsList :list="sortList()" @goSearch="goSearch" @goPath="goPath" />
  </div>
  <!-- 뉴스조회조건 설정 -->
  <MAJ0202771 v-model="modal" @update="addText" @close="modal = false" />
  <!-- 뉴스 카테고리 설정 -->
  <MAJ0202782 v-model="modal2" @close="modal2 = false" />
  <!-- 뉴스 검색 -->
  <MAJ0202781
    v-model="modal3"
    :keyword="text3"
    @close="modal3 = false"
    @goSearch="goSearch"
    @goPath="goPath"
    @update="updateKeyword"
  />
</template>

<script>
  import router from '@/router'
  import { ref } from 'vue'
  import MAJ0202771 from './MAJ0202771.vue'
  import MAJ0202782 from './MAJ0202782.vue'
  import MAJ0202781 from './MAJ0202781.vue'
  import NewsList from './NewsList.vue'

  export default {
    components: { MAJ0202771, MAJ0202782, MAJ0202781, NewsList },
    setup() {
      const text1 = ref({
        cateCd: 1,
        text: '맞춤뉴스'
      })
      const text2 = ref({
        orderCd: 1,
        text: '최신순'
      })
      const text3 = ref('')
      const modal = ref(false)
      const modal2 = ref(false)
      const modal3 = ref(false)

      const news = ref([
        {
          title: '맞춤뉴스-면역력이 떨어지면 찾아오는 불청객',
          keyword: ['면역저하', '건강'],
          img: 'exercise.png',
          cate: 1,
          date: '20231031',
          favCount: 21
        },
        {
          title: '맞춤뉴스-면역력이 챙기기',
          keyword: ['면역력', '면역 강화음식'],
          img: 'exercise.png',
          cate: 1,
          date: '20231001',
          favCount: 100
        },
        {
          title:
            '맞춤뉴스-"나 안 건강해요” 한국인 비율이 가장 높다?"나 안 건강해요” 최대 3줄처리...',
          keyword: ['운동', '건강', '면역력', '정신건강', '면역 강화음식'],
          img: 'exercise.png',
          cate: 1,
          date: '202310920',
          favCount: 5
        }
      ])

      function addText(val1, val2) {
        text1.value = val1
        text2.value = val2
        modal.value = false
      }

      function sortList() {
        const result = news.value.filter((i) => i.cate === text1.value.cateCd)
        if (text2.value.orderCd === 1) {
          return result.sort((a, b) => {
            return b.date - a.date
          })
        } else {
          return result.sort((a, b) => {
            return b.favCount - a.favCount
          })
        }
      }

      function goPath(path) {
        router.push(path)
      }

      function goSearch(val) {
        modal3.value = true
        text3.value = val
      }

      function updateKeyword(value) {
        text3.value = value
      }

      return {
        text1,
        text2,
        text3,
        modal,
        modal2,
        modal3,
        news,
        sortList,
        addText,
        goPath,
        goSearch,
        close,
        updateKeyword
      }
    }
  }
</script>
