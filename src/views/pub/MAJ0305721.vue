<template>
  <div class="contents pt-3">
    <template v-if="visibleList">
      <div class="search-area mb-4">
        <v-text-field
          id="search"
          variant="outlined"
          rounded="xl"
          clearable
          placeholder="병원명 및 진료과목 검색"
          prepend-inner-icon="mdi-magnify"
          class="textfield-search type fs-16"
          :rules="[(v) => (v && v.length >= 2) || '2자 이상 입력해 주세요']"
          @keyup="getText"
        ></v-text-field>
        <v-btn variant="text" @click="goPath('MAJ0305720')" class="btn"
          >취소</v-btn
        >
      </div>
      <!-- //검색입력 -->
      <div v-if="text" class="list-keyword mt-8">
        <span class="fs-18">진료과목</span>
        <ul class="list mt-2">
          <li v-for="(item, i) in keywordList" :key="i">
            <v-btn variant="text"
              ><span v-html="hightlight(item.text)"></span
            ></v-btn>
          </li>
        </ul>
        <v-btn
          variant="flat"
          rounded="lg"
          prepend-icon="icon-search"
          color="#F3F7FF"
          class="text-grey mt-5"
          height="40"
          block
          >병원명으로 검색</v-btn
        >
      </div>
      <!-- //키워드 -->
      <div class="section-page brt-0 pa-0 mt-4 mb-5">
        <div class="bside-area type px-6">
          <v-btn variant="text" class="btn-map" @click="modal2 = true"
            >강남구 삼성동</v-btn
          >
          <v-btn
            variant="text"
            density="compact"
            class="fs-16 px-0"
            @click="modal = true"
          >
            {{ modalListBtn }}
            <img
              src="@/assets/images/icon-arrow-down2.svg"
              alt=""
              class="ml-1"
            />
          </v-btn>
          <span class="fs-14">총 25건</span>
          <dialogAddress v-model="modal2" @close="modal2 = false" />
          <DialogSelectList
            :lists="modalList"
            :title="modalTitle"
            v-model="modal"
            @close="modal = false"
            @update="changeCategory"
          />
        </div>
      </div>
      <!-- //지역검색 -->
      <HospitalCard
        v-for="item in lists"
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
        :hightlight="hightlight"
        @update="goPath(item.path)"
      />
      <Nodata :icon="true">
        <div class="fs-16">
          검색 결과가 없습니다.<br />다른 검색어를 입력해주세요.
        </div>
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
  import Nodata from '@/components/nodata/Nodata.vue'
  import HospitalCard from '@/components/CardHospital.vue'
  import HospitalMap from '@/views/pub/MAJ0305733.vue'
  import HospitalMapInfo from '@/views/pub/MAJ0305734.vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import dialogAddress from '@/views/pub/MAJ0305736.vue'
  import { onUnmounted, ref } from 'vue'
  export default {
    components: {
      Nodata,
      HospitalCard,
      HospitalMap,
      HospitalMapInfo,
      dialogAddress,
      DialogSelectList
    },
    setup() {
      const modal = ref(false)
      const modal2 = ref(false)
      const lists = ref([
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
          tags: '<span>여의사</span><span>야간진료</span><span>주말진료</span>',
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
          tags: '<span>여의사</span><span>야간진료</span><span>주말진료</span>',
          state: '진료중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        }
      ])
      const modalTitle = ref('지역 선택')
      const modalList = ref([
        {
          value: 0,
          text: '전국'
        },
        {
          value: 1,
          text: '서울'
        },
        {
          value: 2,
          text: '경기'
        },
        {
          value: 3,
          text: '인천'
        },
        {
          value: 4,
          text: '대전'
        },
        {
          value: 5,
          text: '세종'
        },
        {
          value: 6,
          text: '광주'
        },
        {
          value: 7,
          text: '대구'
        },
        {
          value: 8,
          text: '부산'
        },
        {
          value: 9,
          text: '울산'
        },
        {
          value: 10,
          text: '강원'
        },
        {
          value: 11,
          text: '충북'
        },
        {
          value: 12,
          text: '충남'
        },
        {
          value: 13,
          text: '전북'
        },
        {
          value: 14,
          text: '전남'
        },
        {
          value: 15,
          text: '경북'
        },
        {
          value: 16,
          text: '경남'
        }
      ])
      const modalListBtn = ref('전국')
      function changeCategory(val) {
        modal.value = false
        return (modalListBtn.value = val.text)
      }
      const visibleList = ref(true)
      const visibleMap = ref(false)
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
      const text = ref('')
      function getText(e) {
        text.value = e.target.value
      }
      function hightlight(i) {
        // 검색어 하이라이트 정규식
        return i.replace(new RegExp(text.value, 'gi'), (match) => {
          return '<span class="text-blue font-weight-bold">' + match + '</span>'
        })
      }
      const keywordList = ref([
        {
          text: '진료과목 > 신경외과'
        },
        {
          text: '진료과목 > 신경정신과'
        }
      ])
      onUnmounted(() => {
        document.querySelector('.v-layout').classList.remove('overflow-hidden')
      })
      return {
        modal,
        modal2,
        lists,
        modalTitle,
        modalList,
        modalListBtn,
        changeCategory,
        visibleList,
        visibleMap,
        mapViewFuc,
        listViewFuc,
        mapList,
        goPath,
        text,
        getText,
        hightlight,
        keywordList
      }
    }
  }
</script>
