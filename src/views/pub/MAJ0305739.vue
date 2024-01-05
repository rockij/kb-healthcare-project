<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">내 병원</v-toolbar-title>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="modal-body pb-4">
        <div class="flex-shrink-0 modal-body-container pt-4">
          <v-btn
            block
            variant="outlined"
            rounded="xl"
            color="#FFB11B"
            height="60"
            :ripple="false"
            class="btn-search"
            @click="goPath('MAJ0305721')"
          >
            <span class="text">
              병원명 및 진료과목 검색
              <img src="/assets/images/icon-search.svg" alt="검색" />
            </span>
          </v-btn>
          <!-- //카테고리 btn -->
          <h3 class="fs-18 font-weight-bold mt-7">최근 선택한 진료 과목</h3>
          <div role="group" class="tabs-simple2 mt-4">
            <v-btn
              :aria-selected="recentlyBtn === btn.value ? 'true' : 'false'"
              variant="text"
              v-for="btn in recently"
              :key="btn.value"
              @click="goPath('MAJ0305730')"
              >{{ btn.text }}</v-btn
            >
          </div>
          <!-- //최근 선택한 진료과목 -->

          <v-divider
            class="border-opacity-100 mt-7"
            :thickness="1"
            color="#eee"
          />

          <h3 class="fs-18 font-weight-bold mt-7">전체 진료과목</h3>
          <div role="group" class="tabs-simple2 mt-4">
            <v-btn variant="text" v-for="btn in mediSubject" :key="btn.value">{{
              btn.text
            }}</v-btn>
          </div>
          <!-- //전체 진료과목 -->

          <h3 class="fs-18 font-weight-bold mt-8">증상/질환 선택</h3>
          <div role="group" class="tabs-simple2 mt-4">
            <v-btn
              :aria-selected="diseaseBtn === btn.value ? 'true' : 'false'"
              variant="text"
              v-for="btn in disease"
              :key="btn.value"
              @click="goPath('MAJ0305730')"
              >{{ btn.text }}</v-btn
            >
          </div>
          <!-- //전체 진료과목 -->

          <Baner @click="goPath('MAJ0305650')" :caseName="'note'" class="mt-6">
            <strong class="title">증상검색 하러가기</strong>
            <span class="text"
              >쉽고 빠르게 신체부위별 내 증상을<br />선택해 물어보세요</span
            >
          </Baner>

          <p class="mt-2 text-right fs-13 text-grey">
            출처 건강보험심사평가원의 의료 빅테이터 활용 및 제공
          </p>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import router from '@/router'
  import Baner from '@/components/BanerIcon.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: { Baner },
    setup(props) {
      const dialog = ref(false)
      const recentlyBtn = ref()
      const recently = reactive([
        {
          value: 1,
          text: '이비인후과'
        },
        {
          value: 2,
          text: '내과'
        },
        {
          value: 3,
          text: '정형외과'
        },
        {
          value: 4,
          text: '정형외과'
        }
      ])
      function recentlySelected(val) {
        recentlyBtn.value = val
      }

      const mediSubjectBtn = ref()
      const mediSubject = reactive([
        {
          value: 1,
          text: '전체'
        },
        {
          value: 2,
          text: '진료과목길다'
        },
        {
          value: 3,
          text: '진료'
        },
        {
          value: 4,
          text: '진료과목'
        },
        {
          value: 5,
          text: '진료과목얼마나길까'
        },
        {
          value: 6,
          text: '진료과목'
        },
        {
          value: 7,
          text: '진료과목'
        },
        {
          value: 8,
          text: '진료과목'
        },
        {
          value: 9,
          text: '진료과목'
        },
        {
          value: 10,
          text: '진료과목'
        },
        {
          value: 11,
          text: '전체보기'
        }
      ])
      function mediSubjectSelected(val) {
        mediSubjectBtn.value = val
      }

      const diseaseBtn = ref()
      const disease = reactive([
        {
          value: 1,
          text: '감기'
        },
        {
          value: 2,
          text: '비염'
        },
        {
          value: 3,
          text: '충치'
        },
        {
          value: 4,
          text: '알레르기'
        },
        {
          value: 5,
          text: '관절질환'
        },
        {
          value: 6,
          text: '고혈압'
        },
        {
          value: 7,
          text: '식도염'
        },
        {
          value: 8,
          text: '비염'
        }
      ])
      function diseaseSelected(val) {
        diseaseBtn.value = val
      }

      function goPath(val) {
        router.push(val)
      }
      return {
        dialog,
        recentlyBtn,
        recently,
        recentlySelected,

        mediSubjectBtn,
        mediSubject,
        mediSubjectSelected,

        diseaseBtn,
        disease,
        diseaseSelected,
        goPath
      }
    }
  }
</script>
