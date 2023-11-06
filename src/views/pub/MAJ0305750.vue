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

    <template v-if="visibleList">
      <HospitalCard
        v-for="item in hospitalList"
        :key="item.id"
        :title="item.title"
        :titleClass="'star fs-18'"
        :title2Class="'mt-2'"
        :road="item.road"
        :subject="item.subject"
        :state="item.state"
        :stateClass="item.stateClass"
        :path="item.path"
        :toastMsgOn="'내 약국에 등록 되었습니다'"
        :toastMsgOff="'내 약국에 해제 되었습니다'"
        class="mt-3"
        @update="goPath('MAJ0305750_02')"
      />
      <Nodata :icon="true" :iconSize="'big'">
        <div class="fs-16">검색결과가 없습니다<br />조건을 변경해주세요</div>
      </Nodata>
    </template>
    <!-- //목록보기 -->

    <HospitalMap v-if="visibleMap" />
    <!-- //지도보기 -->

    <div class="fix-bottom-area">
      <div class="right-box">
        <v-btn
          v-if="visibleList"
          @click="mapViewFuc"
          variant="text"
          class="bottom-fix btn-mapview"
          >지도보기</v-btn
        >
        <v-btn
          v-else
          @click="listViewFuc"
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
  import HospitalCard from '@/components/CardHospital.vue'
  import HospitalMap from '@/views/pub/MAJ0305733.vue'
  import HospitalMapInfo from '@/views/pub/MAJ0305734.vue'
  import dialogAddress from '@/views/pub/MAJ0305736.vue'
  import dialogMyhospital from '@/views/pub/MAJ0305751.vue'
  import Nodata from '@/components/nodata/Nodata.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: {
      HospitalCard,
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
      const visibleList = ref(true)
      const visibleMap = ref(false)
      const visibleMapInfo = ref(false)
      const hospitalList = reactive([
        {
          id: 1,
          title: '연세 후 약국',
          road: '500m',
          subject: '서울특별시 강남구 테헤란로 401 0층 0호',
          state: '영업종료',
          stateClass: 'waiting',
          path: '/MAJ0305740'
        },
        {
          id: 2,
          title: '삼성해든약국',
          road: '900m',
          subject: '서울특별시 강남구 테헤란로테헤란로 401 0층 0호',
          state: '일요일 휴무',
          stateClass: 'waiting',
          path: '/MAJ0305740'
        },
        {
          id: 3,
          title: '소망약국',
          road: '999m',
          subject: '서울특별시 강남구 테헤란로 401 0층 0호',
          state: '영업중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        },
        {
          id: 3,
          title:
            '제목이길어서 두줄처리테스트 제목이길어서두줄처리테스트제목이길',
          road: '10m',
          subject:
            '주소가 길어서 두줄테스트 주소가 길어서 두줄테스트 두줄테스트 401호',
          state: '영업중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        }
      ])
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
      const mapViewFuc = () => {
        visibleList.value = false
        visibleMap.value = true
        visibleMapInfo.value = false
        document.querySelector('.v-layout').classList.add('overflow-hidden')
      }
      const listViewFuc = () => {
        visibleList.value = true
        visibleMap.value = false
        visibleMapInfo.value = false
        document.querySelector('.v-layout').classList.remove('overflow-hidden')
      }
      const linkFunc = () => {
        modal3.value = false
        goPath('MAJ0305750_02')
      }
      return {
        modal2,
        modal3,
        visibleList,
        visibleMap,
        hospitalList,
        visibleMapInfo,
        goPath,
        mediTabBtn,
        mediTabActive,
        mapList,
        mapViewFuc,
        listViewFuc,
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
