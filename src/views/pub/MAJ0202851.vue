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
        <v-toolbar-title class="modal-title">등급 기준</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container pt-0">
          <div class="section-page bg2 brt-0 pa-4">
            <v-card
              rounded="xl"
              class="px-4 py-6 overflow-visible"
              style="z-index: 1"
            >
              <v-card-title class="pa-0">
                <p class="fs-20 font-weight-bold">
                  점수를 합산하여 등급을 산정해요
                </p>
                <p class="fs-13 mt-1 text-grey">
                  * 최고 걸음점수 + 누적 걸음점수 + 목표 달성일
                </p>
              </v-card-title>
              <div class="d-flex justify-center mt-7">
                <img
                  src="/assets/images/img-graph-ybar.svg"
                  width="220"
                  alt="입문자-중급-고급-선수급 순서 그래프"
                />
              </div>
              <div class="list-bside mt-6 d-flex justify-center">
                <ul class="list rating">
                  <li v-for="list in graphList" :key="list.id">
                    <span class="fs-14 mr-3">{{ list.title }}</span>
                    <span class="font-weight-bold">{{ list.text }}</span>
                  </li>
                </ul>
              </div>
            </v-card>
          </div>
          <div class="pt-9">
            <h2 class="tit-02">최고 걸음수 점수</h2>
            <div class="table-flex">
              <ul class="table">
                <li class="thead">
                  <span class="ws-104">점수</span>
                  <span>최근 30일 최고 걸음수</span>
                </li>
                <li v-for="list in bestList" :key="list.id" class="tbody">
                  <span class="ws-104">{{ list.title }}</span>
                  <span>{{ list.text }}</span>
                </li>
              </ul>
            </div>
            <!-- //최고걸음수점수 -->
            <h2 class="tit-02 mt-8">누적 걸음수 점수</h2>
            <div class="table-flex">
              <ul class="table">
                <li class="thead">
                  <span class="ws-104">점수</span>
                  <span>최근 30일 최고 걸음수</span>
                </li>
                <li v-for="list in accrueList" :key="list.id" class="tbody">
                  <span class="ws-104">{{ list.title }}</span>
                  <span>{{ list.text }}</span>
                </li>
              </ul>
            </div>
            <!-- //누적걸음수점수 -->
            <h2 class="tit-02 mt-8">목표 달성일 점수</h2>
            <div class="table-flex">
              <ul class="table">
                <li class="thead">
                  <span class="ws-104">점수</span>
                  <span>목표 달성 일수</span>
                </li>
                <li v-for="list in goalsList" :key="list.id" class="tbody">
                  <span class="ws-104">{{ list.title }}</span>
                  <span>{{ list.text }}</span>
                </li>
              </ul>
            </div>
            <!-- //목표걸음수점수 -->
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import { ref } from 'vue'
  export default {
    props: ['modal'],
    emits: ['close'],
    setup(props) {
      const dialog = ref(props.modal)
      const graphList = ref([
        {
          id: 1,
          title: '입문자 점수 합계',
          text: '0 ~ 119'
        },
        {
          id: 2,
          title: '중급자 점수 합계',
          text: '120 ~ 249'
        },
        {
          id: 3,
          title: '고급자 점수 합계',
          text: '250 ~ 449'
        },
        {
          id: 3,
          title: '선수급 점수 합계',
          text: '450 ~'
        }
      ])
      const bestList = ref([
        {
          id: 1,
          title: '200점',
          text: '2만 걸음 이상'
        },
        {
          id: 2,
          title: '150점',
          text: '1만 걸음 이상'
        },
        {
          id: 3,
          title: '100점',
          text: '7천 걸음 ~ 1만 걸음'
        },
        {
          id: 4,
          title: '50점',
          text: '3천 걸음 ~ 7천 걸음'
        },
        {
          id: 5,
          title: '30점',
          text: '3천 걸음 미만'
        }
      ])
      const accrueList = ref([
        {
          id: 1,
          title: '200점',
          text: '50만 걸음 이상'
        },
        {
          id: 2,
          title: '150점',
          text: '30만 걸음 이상'
        },
        {
          id: 3,
          title: '100점',
          text: '21만 걸음 ~ 30만 걸음'
        },
        {
          id: 4,
          title: '50점',
          text: '9만 걸음 ~ 21 걸음 미만'
        },
        {
          id: 5,
          title: '30점',
          text: '9만 걸음 미만'
        }
      ])
      const goalsList = ref([
        {
          id: 1,
          title: '200점',
          text: '25일 ~ 30일'
        },
        {
          id: 2,
          title: '150점',
          text: '20일 ~ 24일'
        },
        {
          id: 3,
          title: '100점',
          text: '15일 ~ 19일'
        },
        {
          id: 4,
          title: '50점',
          text: '10일 ~ 14일'
        },
        {
          id: 5,
          title: '30점',
          text: '5일 ~ 9일'
        }
      ])
      return { dialog, graphList, bestList, accrueList, goalsList }
    }
  }
</script>
