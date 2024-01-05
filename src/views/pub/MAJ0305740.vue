<template>
  <div class="contents">
    <HospitalCard
      v-for="item in hospitalList"
      :key="item.id"
      :articleClass="item.articleClass"
      :titleBisde="item.titleBisde"
      :title="item.title"
      :titleClass="item.titleClass"
      :datalstClass="item.datalstClass"
      :road="item.road"
      :subject="item.subject"
      :divider="false"
      :tags="item.tags"
      :state="item.state"
      :stateClass="item.stateClass"
    />
    <buttonSns
      :phoneNumber="'02-554-5547'"
      @share="funcSns"
      @map="funcMap"
      class="mt-4"
      :toastMsgOn="'내 병원에서 등록 되었습니다'"
      :toastMsgOff="'내 병원에서 해제 되었습니다'"
    />
    <DialogSns
      v-model="modal"
      @close="modal = false"
      @kakao="kakaoFnc"
      @facebook="fbFnc"
      @Instagram="insFnc"
      @url="urlFnc"
      @more="moreFnc"
    />
    <DialogRoad
      v-model="modal2"
      @close="modal2 = false"
      @kakao="kaoRoadFnc"
      @naver="nvRoadFnc"
    />
    <div class="section-page mt-8">
      <h3 class="tit-03 pb-0">진료시간</h3>
      <p class="text-info-caution text-grey fs-13">
        접수마감은 진료시간 60분전입니다
      </p>
      <div class="list-schedule mt-4">
        <ul class="list">
          <li v-for="item in timeTable" :key="item.id">
            <span class="title ws-95">{{ item.title }}</span>
            <span class="text">{{ item.text }}</span>
          </li>
        </ul>
      </div>
      <div class="list-schedule type mt-4">
        <ul class="list">
          <li v-for="item in scheduleTable" :key="item.id" :class="item.class">
            <strong class="title">{{ item.title }}</strong>
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
    <div class="section-page">
      <h3 class="tit-02">진료과목</h3>
      <p class="mt-3">정형외과, 재활의학과 ,성형외과,마취통증의학과</p>
    </div>
    <div class="section-page">
      <h2 class="tit-02">전문의</h2>
      <p class="mt-3">이비인후과 전문의 2명, 내과 전문의 2명</p>
    </div>
    <div class="section-page pb-0">
      <h3 class="tit-02">위치</h3>
      <div class="list-iconlst mt-2">
        <ul class="list">
          <li data-icon="map">
            <p class="text-map">
              서울시 강남구 대치동 669-13서울시 강남구 대치동 669-13서울시
              강남구 대치동 669-13
            </p>
            <v-btn
              variant="flat"
              rounded="lg"
              height="32"
              color="#F2F4F6"
              class="text-primary px-3 ml-2"
              >주소복사</v-btn
            >
          </li>
          <li data-icon="call">
            <a href="tel:02-554-5547">02-554-5547</a>
          </li>
        </ul>
        <div class="mapview">
          <!-- 지도영역 -->
          <img src="/assets/images/dummy-map2.png" class="img" alt="" />
          <!-- //지도영역 -->
        </div>
      </div>
      <div class="box-rounded-fill mt-4">
        <h4 class="fs-14 text-grey2 font-weight-bold">알려드립니다</h4>
        <p class="text-info-caution mt-4">
          병원정보는 건강보험심사평가원의 의료 빅데이터를 활용하여 제공합니다
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  import buttonSns from '@/components/ButtonSns.vue'
  import HospitalCard from '@/components/CardHospital.vue'
  import DialogSns from '@/components/BottomSheetSns.vue'
  import DialogRoad from '@/components/BottomSheetRoad.vue'
  import { reactive } from 'vue'
  export default {
    components: {
      buttonSns,
      HospitalCard,
      DialogSns,
      DialogRoad
    },
    data() {
      return {
        timeTable: [
          {
            id: 1,
            title: '오늘',
            text: '09:00 ~ 18:00'
          },
          {
            id: 2,
            title: '점심시간',
            text: '13:00 ~ 14:00'
          }
        ],
        scheduleTable: [
          {
            id: 1,
            title: '월요일',
            text: '09:00 ~ 18:00'
          },
          {
            id: 2,
            title: '화요일',
            text: '09:00 ~ 18:00'
          },
          {
            id: 3,
            title: '수요일',
            text: '09:00 ~ 18:00'
          },
          {
            id: 4,
            title: '목요일',
            text: '09:00 ~ 18:00'
          },
          {
            id: 5,
            title: '금요일',
            text: '09:00 ~ 18:00'
          },
          {
            id: 6,
            title: '토요일',
            text: '09:00 ~ 18:00',
            class: 'text-blue'
          },
          {
            id: 7,
            title: '일요일',
            text: '09:00 ~ 18:00',
            class: 'text-red'
          },
          {
            id: 8,
            title: '공휴일',
            text: '09:00 ~ 18:00',
            class: 'text-red'
          }
        ]
      }
    },
    setup() {
      const modal = ref(false)
      const modal2 = ref(false)
      const hospitalList = reactive([
        {
          id: 1,
          articleClass: 'type',
          titleBisde: true,
          title: '강남초이스영상의학과의원강남초이스영상의학과의원',
          titleClass: 'fs-26 font-weight-bold me-auto text-full',
          title2: '서울특별시 강남구 테헤란로 401 0층 0호',
          title2Class: 'mt-5',
          datalstClass: 'mt-4 text-full',
          road: '5m',
          subject:
            '이비인후과 전문의 1명, 내과전문의 1명, 이비인후과 전문의 1명, 내과전문의 1명',
          tags: '<span>여의사</span><span>야간진료</span>',
          state: '진료종료',
          stateClass: 'waiting',
          path: '/MAJ0305740'
        }
      ])
      function funcSns() {
        modal.value = true
      }
      function funcFavorit() {
        alert('즐겨찾기')
      }
      function funcMap() {
        modal2.value = true
      }
      function kakaoFnc() {
        alert('공유하기 카카오톡')
      }
      function fbFnc() {
        alert('공유하기 페이스북')
      }
      function insFnc() {
        alert('공유하기 인스타그램')
      }
      function urlFnc() {
        alert('공유하기 URL')
      }
      function moreFnc() {
        alert('공유하기 더보기')
      }
      function kaoRoadFnc() {
        alert('카카오 길찾기')
      }
      function nvRoadFnc() {
        alert('네이버 길찾기')
      }
      return {
        modal,
        modal2,
        hospitalList,
        funcSns,
        funcFavorit,
        funcMap,
        kakaoFnc,
        fbFnc,
        insFnc,
        urlFnc,
        moreFnc,
        kaoRoadFnc,
        nvRoadFnc
      }
    }
  }
</script>
