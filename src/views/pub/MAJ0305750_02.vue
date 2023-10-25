<template>
  <div class="contents pb-10">
    <header class="sticky-top pb-2">
      <div class="bside-area mt-n6">
        <v-btn variant="text" class="btn-map" @click="modal2 = true"
          >강남구 삼성동</v-btn
        >
        <dialogAddress v-model="modal2" @close="modal2 = false" />
        <!-- //지역검색 -->

        <span class="float-right">
          <!-- 내약국 -->
          <v-btn variant="text" class="btn-myhos" @click="modal3 = true"
            >내 약국</v-btn
          >
          <dialogMyhospital v-model="modal3" @close="linkFunc" />
          <!-- //내약국 -->
        </span>
      </div>
      <div class="tabs-simple mt-2">
        <v-btn
          v-for="btn in mediTabs"
          :key="btn.id"
          variant="text"
          :class="mediTabBtn === btn.value ? 'active' : ''"
          @click="mediTabActive(btn.value)"
          >{{ btn.text }}</v-btn
        >
      </div>
    </header>
    <!-- //header -->

    <HospitalMap v-if="visibleMap" />
    <!-- //지도보기 -->

    <div class="fix-bottom-area">
      <div class="right-box">
        <v-btn
          @click="goPath('MAJ0305750')"
          variant="text"
          class="bottom-fix btn-listview"
          >목록보기</v-btn
        >
      </div>

      <!-- 지도보기 약국 -->
      <HospitalMapInfo :lists="mapList" v-if="visibleMapInfo" />
      <!-- //지도보기 약국 -->
    </div>
  </div>
</template>
<script>
  import router from '@/router'
  import HospitalMap from '@/views/pub/MAJ0305733.vue'
  import HospitalMapInfo from '@/views/pub/MAJ0305734.vue'
  import dialogAddress from '@/views/pub/MAJ0305736.vue'
  import dialogMyhospital from '@/views/pub/MAJ0305751.vue'
  import Nodata from '@/components/nodata/Nodata.vue'
  import { ref, reactive, onMounted } from 'vue'
  export default {
    components: {
      HospitalMap,
      HospitalMapInfo,
      dialogAddress,
      dialogMyhospital,
      Nodata
    },
    data() {
      return {
        mediTabs: [
          {
            id: 1,
            text: '토요일약국'
          },
          {
            id: 2,
            text: '공휴일약국',
            value: 20
          }
        ]
      }
    },
    setup() {
      const modal2 = ref(false)
      const modal3 = ref(false)
      const visibleMap = ref(true)
      const visibleMapInfo = ref(true)
      const mapList = reactive([
        {
          id: 1,
          articleClass: 'type',
          titleBisde: true,
          title: '연세 후 약국',
          subject: '서울특별시 강남구 테헤란로 401 0층 0호',
          state: '영업중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      const mediTabBtn = ref()
      function mediTabActive(val) {
        mediTabBtn.value = val
      }
      const linkFunc = () => {
        modal3.value = false
      }
      onMounted(() => {
        document.querySelector('.v-layout').classList.add('overflow-hidden')
      })
      return {
        modal2,
        modal3,
        visibleMap,
        visibleMapInfo,
        goPath,
        mediTabBtn,
        mediTabActive,
        mapList,
        linkFunc
      }
    }
  }
</script>

<!-- [D] 개발적용 페이지에선 삭제 -->
<style scoped>
  .sticky-top:not(.tab-line) {
    top: var(--v-layout-top);
  }
</style>
