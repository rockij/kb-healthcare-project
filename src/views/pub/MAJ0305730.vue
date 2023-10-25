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
          <v-btn variant="text" class="btn-myhos" @click="modal3 = true"
            >내 병원</v-btn
          >
          <dialogMyhospital v-model="modal3" @close="modal3 = false" />
          <!-- //내병원 -->

          <v-btn variant="text" class="btn-siren">응급실</v-btn>
        </span>
      </div>
      <div class="tabs-simple2 gap mt-2">
        <v-btn
          variant="text"
          @click="modal = true"
          class="btn-filter"
          title="필터"
          data-num="3"
        />
        <dialogFilter v-model="modal" @close="modal = false" />
        <!-- //필터 -->

        <div class="media-slide">
          <v-btn variant="text" @click="goPath('MAJ0305720')">전체</v-btn>
          <v-btn
            variant="text"
            @click="goPath('MAJ0305720')"
            aria-selected="true"
            >이비인후과</v-btn
          >
          <v-btn
            variant="text"
            @click="goPath('MAJ0305720')"
            aria-selected="true"
            >감기</v-btn
          >
          <v-divider vertical />
          <v-btn variant="text">진료중</v-btn>
        </div>
      </div>
    </header>
    <!-- //header -->

    <template v-if="visibleList">
      <div class="section-page brt-0 pa-0 mt-3 mb-5">
        <div class="bside-area type fs-14 px-6">총 25건</div>
      </div>
      <!-- //지역검색 -->
      <HospitalCard
        v-for="item in hospitalList"
        :key="item.id"
        :title="item.title"
        :titleClass="'star fs-18'"
        :title2="item.title2"
        :title2Class="'mt-2'"
        :road="item.road"
        :subject="item.subject"
        :tagDivider="true"
        :tags="item.tags"
        :state="item.state"
        :stateClass="item.stateClass"
        :path="item.path"
        :toastMsgOn="'내 병원에서 등록 되었습니다'"
        :toastMsgOff="'내 병원에서 해제 되었습니다'"
        class="mt-3"
        @update="goPath"
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

      <!-- 지도보기 병원 -->
      <HospitalMapInfo :lists="mapList" v-if="visibleMap" />
      <!-- //지도보기 병원 -->
    </div>
  </div>
</template>
<script>
  import router from '@/router'
  import HospitalCard from '@/components/CardHospital.vue'
  import HospitalMap from '@/views/pub/MAJ0305733.vue'
  import HospitalMapInfo from '@/views/pub/MAJ0305734.vue'
  import dialogFilter from '@/views/pub/MAJ0305732.vue'
  import dialogAddress from '@/views/pub/MAJ0305736.vue'
  import dialogMyhospital from '@/views/pub/MAJ0305737.vue'
  import dialogHospital from '@/views/pub/MAJ0305738.vue'
  import Nodata from '@/components/nodata/Nodata.vue'
  import { ref, computed } from 'vue'
  export default {
    components: {
      HospitalCard,
      HospitalMap,
      HospitalMapInfo,
      dialogFilter,
      dialogAddress,
      dialogMyhospital,
      dialogHospital,
      Nodata
    },
    setup() {
      const modal = ref(false)
      const modal2 = ref(false)
      const modal3 = ref(false)
      const modal4 = ref(false)
      const visibleList = ref(true)
      const visibleMap = ref(false)
      const hospitalList = ref([
        {
          id: 1,
          title: '강남초이스영상의학과의원',
          title2: '서울특별시 강남구 테헤란로 401 0층 0호',
          road: '5m',
          subject: '이비인후과 전문의 1명, 내과전문의 1명',
          tags: '<span>여의사</span><span>야간진료</span><span>주말진료</span>',
          state: '진료종료',
          stateClass: 'waiting',
          path: '/MAJ0305740'
        },
        {
          id: 2,
          title: '하트강남영상의학과',
          title2: '서울특별시 강남구 테헤란로 401 0층 0호',
          road: '500m',
          subject: '안과, 내과, 기타 진료과목명',
          tags: '<span>여의사</span><span>야간진료</span>',
          state: '진료중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        },
        {
          id: 3,
          title: '하트강남영상의학과',
          title2: '서울특별시 강남구 테헤란로 401 0층 0호',
          road: '500m',
          subject: '안과, 내과, 기타 진료과목명',
          tags: '<span>여의사</span><span>야간진료</span><span>주말진료</span>',
          state: '진료중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        },
        {
          id: 3,
          title:
            '제목이길어서 두줄처리테스트 제목이길어서두줄처리테스트제목이길',
          title2:
            '주소가 길어서 두줄테스트 주소가 길어서 두줄테스트 두줄테스트 401호',
          road: '500m',
          subject: '안과, 내과, 기타 진료과목명',
          tags: '<span>여의사</span>',
          state: '진료중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        }
      ])
      const mapViewFuc = () => {
        visibleList.value = false
        visibleMap.value = true
        document.querySelector('.v-layout').classList.add('overflow-hidden')
      }
      const listViewFuc = () => {
        visibleList.value = true
        visibleMap.value = false
        document.querySelector('.v-layout').classList.remove('overflow-hidden')
      }
      const mapList = ref([
        {
          id: 1,
          articleClass: 'type',
          titleBisde: true,
          title: '강남초이스영상의학과의원',
          title2: '서울특별시 강남구 테헤란로 401 0층 0호',
          road: '5m',
          subject: '이비인후과 전문의 1명, 내과전문의 1명',
          tagDivider: true,
          tags: '<span>여의사</span><span>야간진료</span><span>주말진료</span>',
          state: '진료종료',
          stateClass: 'waiting',
          path: '/MAJ0305740'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      return {
        modal,
        modal2,
        modal3,
        modal4,
        visibleList,
        visibleMap,
        hospitalList,
        mapViewFuc,
        listViewFuc,
        mapList,
        goPath
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
