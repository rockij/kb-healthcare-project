<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">건강뉴스</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div ref="stickyArea">
            <div class="sticky-area">
              <div class="title-area">
                <p class="subTit-01">
                  건강뉴스 제목입니다 건강뉴스 제목입니다 건강뉴스 제목입니다
                  최대 3줄
                </p>
              </div>
              <ScrollProgress :value="progress" />
            </div>
          </div>

          <p class="text-info-grey fs-16 my-4">
            건강뉴스 부가설명입니다 최대 1줄
          </p>
          <!-- 관심뉴스 / 공유하기 btns -->
          <div class="btn-area d-flex gap-8">
            <v-btn
              variant="outlined"
              rounded="lg"
              class="btn-share"
              @click="getSavedNews"
            >
              <template v-slot:prepend>
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  :class="['news', { active: favorit }]"
                >
                  <path
                    d="M11.1443 1C9.99672 1 8.74973 1.50151 8.00765 2.51181C7.26557 1.50151 6.01858 1 4.87104 1C2.80546 1 1.03825 2.57723 1 4.81587C1.00765 5.03392 1.0306 5.33919 1.0459 5.49909C1.39781 8.21744 4.31257 10.7832 7.18142 12.7456C7.42623 12.9128 7.71694 13 8 13C8.29071 13 8.57377 12.9128 8.81858 12.7456C11.6951 10.7832 14.6098 8.22471 14.9541 5.49909C14.977 5.33919 14.9923 5.03392 15 4.81587C14.977 2.57723 13.2098 1 11.1443 1Z"
                  />
                </svg>
              </template>
              관심뉴스
            </v-btn>
            <v-btn
              variant="outlined"
              rounded="lg"
              class="btn-share"
              @click="modal = true"
            >
              <template v-slot:prepend>
                <img src="/assets/images/icon-share.svg" alt="" />
              </template>
              공유하기
            </v-btn>
          </div>
          <!-- 뉴스 이미지 추가 -->
          <div class="news-top-img mt-8">
            <img src="/assets/images/bigimage.jpg" alt="" />
          </div>
          <!-- 뉴스 상세 -->
          <div class="news-area">
            <p class="tit-03 mt-8">의료전달체계에 공백</p>
            <p class="mt-1">
              국회에서는 이를 근거로 공공의대 신설과 입학정원 증원을 촉구하는
              중이다. 전국 공공의료기관의 20%와 지방의료원의 66%가량이 의사가
              없어 진료과를 휴진하는 등의 현상이 나타났다
            </p>
            <img
              src="/assets/images/img-news-thumb.png"
              alt=""
              class="thumb-img mt-6"
            />
            <p class="table-caution mt-1">
              지방의료원의 66%가량이 의사가 없어 진료과를 휴진
            </p>
            <p class="mt-6">
              전국 공공의료기관의 20%와 지방의료원의 66%가량이 의사가 없어
              진료과를 휴진하는 등 의료전달에 공백이 발생한 것으로 나타났다.
            </p>
          </div>
          <!-- 출처 -->
          <div class="fs-14 mb-8">
            <div class="font-weight-bold">출처</div>
            <div class="text-grey">
              서울대학교병원 의학정보
              gkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBx&sourceid=chrome&ie=UTF-8
            </div>
          </div>
          <div class="section-page pb-0">
            <!-- 약사 이력 -->
            <div class="introduce-area">
              <template v-if="review">
                <!-- 12/19 수정 -->
                <div class="header">
                  <v-avatar size="52">
                    <img src="/assets/images/img-news-thumb.png" alt="" />
                  </v-avatar>
                  <!--// 12/19 avatar size 수정 -->
                  <div>
                    <p class="title">
                      <span>이정훈 약사</span>
                      <img src="/assets/images/icon-badge.svg" alt="" />
                    </p>
                    <p class="text-info-grey">KB헬스케어 오케어 약사</p>
                  </div>
                </div>
                <!--// 12/19  수정 -->
                <!-- 리뷰 -->
                <v-card
                  variant="flat"
                  rounded="xl"
                  class="news-review-box mb-8"
                >
                  <v-card-title>
                    <img src="/assets/images/icon-bubble.svg" alt="" />
                    <span class="ml-1">Review</span>
                  </v-card-title>
                  <v-card-text>
                    전국 공공의료기관의 20%와 지방의료원의 66%가량이 의사가 없어
                    진료과를 휴진하는 등 의료전달체계에 공백이 발생한 것으로
                    나타났다. 국회에서는 이를 근거로 공공의대 신설과 입학정원
                    증원을 촉구하는 중이다.<br /><br />
                    전국 공공의료기관의 20%와 지방의료원의 66%가량이 의사가 없어
                    진료과를 휴진하는 등 의료전달체계에 공백이 발생한 것으로
                    나타났다. 국회에서는 이를 근거로 공공의대 신설과 입학정원
                    증원을 촉구하는 중이다.
                  </v-card-text>
                </v-card>
              </template>
              <!-- 라벨 -->
              <!-- 12/19 힐팁 수정 -->
              <div class="healtip mb-8">
                <div class="healtip-img">
                  <!-- <span class="text">KB헬스케어 X 힐팁</span>
                    <img src="/assets/images/icon-badge.svg" alt="" /> -->
                  <img src="/assets/images/logo-kbhc.png" alt="KB헬스케어" />
                  <img src="/assets/images/icon-plus-x.png" alt="" />
                  <img src="/assets/images/icon-healtip.png" alt="힐팁" />
                </div>
                <p class="text">헬스케어 오케어 약사 및 공동기획 의료기관</p>
              </div>
              <!-- <div class="box-rounded header mb-8">
                <v-avatar size="52">
                  <img src="/assets/images/img-news-thumb.png" alt="" />
                </v-avatar>
                <div class="title-area">
                  <div class="tit-02 pb-0">
                    <span class="text">KB헬스케어 X 힐팁</span>
                    <img src="/assets/images/icon-badge.svg" alt="" />
                  </div>
                  <p class="fs-14">헬스케어 오케어 약사 및 공동기획 의료기관</p>
                </div>
              </div> -->
              <!--// 12/19 힐팁 수정 -->
            </div>
            <!-- 연관 키워드 -->
            <div class="keywordWrap mb-8">
              <span v-for="word in keyword" :key="word" class="news-keyword">
                #{{ word }}
              </span>
            </div>
          </div>
          <div class="section-page bg bg-2 py-8">
            <!-- 퀴즈 타입 1은 4지선다형 / 2는 O/X형 -->
            <NewsQuiz
              :type="
                $router.currentRoute.value.name === 'MAJ0202780Quiz2' ? 2 : 1
              "
              :answer="answer"
              :correct="correct"
              :overlay="overlay"
              :WrongCount="WrongCount"
              @updateAnswer="getAnswer"
            />
          </div>
          <!-- 함께 볼만한 뉴스 -->
          <div class="tit-03 mt-8">함께 볼만한 뉴스</div>
          <ul class="news-list type-2">
            <li class="news-item pt-4" v-for="item in news" :key="item.id">
              <div class="news-left">
                <p class="news-title text-overflow line3">{{ item.text }}</p>
              </div>
              <div class="news-img type-2">
                <img :src="`/assets/images/${item.img}`" alt="" />
              </div>
            </li>
          </ul>
          <!-- toast 팝업 -->
          <!-- 12/22 v-snackbar 클래스추가 -->
          <v-snackbar
            v-model="alert"
            :timeout="2000"
            class="toast-basic not-button"
          >
            관심뉴스에 <template v-if="favorit">저장</template>
            <template v-else>해제</template>했습니다.
          </v-snackbar>
        </div>
      </div>
    </v-card>
  </v-dialog>
  <!-- 공유하기 팝업 -->
  <DialogSns v-model="modal" @close="modal = false" />
  <!-- 퀴즈 축하 팝업 -->
  <MAJ0202785 v-model="modal2" @update="openOverlay" :answer="answer" />
</template>

<script>
  import { ref, onMounted, onUnmounted } from 'vue'
  import NewsQuiz from './NewsQuiz.vue'
  import MAJ0202785 from './MAJ0202785.vue'
  import DialogSns from '@/components/BottomSheetSns.vue'
  import ScrollProgress from '../../components/ScrollProgress.vue'

  export default {
    components: { NewsQuiz, DialogSns, ScrollProgress, MAJ0202785 },
    setup() {
      const id = ref()
      const modal = ref(false)
      const modal2 = ref(false)
      const alert = ref(false)
      const dialog = ref(true)
      const overlay = ref(false)
      const correct = ref(1)
      const answer = ref()
      const WrongCount = ref(0)
      const review = ref(true)
      const progress = ref(0)
      const favorit = ref(false)
      const keyword = ref([
        '최대열글자까지들어감',
        '면역저하',
        '건강',
        '정신건강'
      ])
      const news = ref([
        {
          text: '면연력이 떨어지면 찾아오는 불청객 독감면연력이 떨어지면 찾아오는 불청객 독감면연력이 떨어지면 찾아오는',
          img: 'img-news-thumb.png'
        },
        {
          text: '면연력이 떨어지면 찾아오는 불청객 독감',
          img: 'bigimage.jpg'
        },
        {
          text: '"나 안 건강해요” 한국인 비율이 가장 높다',
          img: 'exercise.png'
        },
        {
          text: '운동이 정신건강에 미치는 5가지 장점은?',
          img: 'exercise.png'
        },
        {
          text: '당뇨있는데 근육 없으면 안되',
          img: 'exercise.png'
        }
      ])
      function getAnswer(val, type) {
        modal2.value = true
        if (val === correct.value) {
          answer.value = true
          WrongCount.value = 0
        } else {
          answer.value = false
          WrongCount.value = WrongCount.value + 1
        }
      }

      function openOverlay() {
        modal2.value = false
        overlay.value = true
        setTimeout(() => {
          overlay.value = false
        }, 3000)
      }

      function getSavedNews() {
        alert.value = true
        favorit.value = !favorit.value
      }

      //sticky
      const stickyArea = ref()

      onMounted(() => {
        const container = document.querySelector('.modal-body')
        const sticky = document.querySelector('.sticky-area')
        container.addEventListener('scroll', function () {
          const scrollTop = container.scrollTop
          const clientH = container.clientHeight
          const scrollH = container.scrollHeight
          const scrollPercent = Math.round(
            (scrollTop / (scrollH - clientH)) * 100
          )
          progress.value = scrollPercent

          const stickyObserver = new IntersectionObserver(
            ([e]) => {
              if (!e.isIntersecting && sticky !== null)
                sticky.classList.add('isFixed')
              else sticky.classList.remove('isFixed')
            },
            {
              root: null,
              threshold: [1]
            }
          )
          stickyObserver.observe(stickyArea.value)
        })
      })
      return {
        id,
        modal,
        modal2,
        alert,
        dialog,
        overlay,
        correct,
        answer,
        WrongCount,
        favorit,
        keyword,
        news,
        progress,
        review,
        getAnswer,
        openOverlay,
        getSavedNews,
        stickyArea
      }
    }
  }
</script>
