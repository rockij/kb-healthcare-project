<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page bg pa-4">
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <h2 class="lh-4 pa-0 fs-20 font-weight-bold">
          오건강님<br /><span v-html="emoResultTitle"></span>
        </h2>
        <p v-html="emoResultMsg" class="text-info-grey2 fs-16 mt-2"></p>

        <div class="emoji-bigselct mt-8" :class="emoResultClass">
          <div class="d-flex justify-center gap-34 emoji-anim-frame">
            <v-btn
              height="auto"
              variant="text"
              class="radio-imoji verygood"
              @click="emotionFunc('verygood')"
            >
              <div class="emoji-anim verygood">
                <figure class="face">
                  <span class="eye"></span>
                  <span class="eye last"></span>
                  <span class="mouth"></span>
                  <span class="heart1"></span>
                  <span class="heart2"></span>
                  <span class="heart3"></span>
                </figure>
              </div>
              긍정
            </v-btn>
            <v-btn
              height="auto"
              variant="text"
              class="radio-imoji normal"
              @click="emotionFunc('normal')"
            >
              <div class="emoji-anim normal">
                <figure class="face">
                  <span class="eye"></span>
                  <span class="eye last"></span>
                  <span class="mouth"></span>
                </figure>
              </div>
              보통
            </v-btn>
            <v-btn
              height="auto"
              variant="text"
              class="radio-imoji verybad"
              @click="emotionFunc('verybad')"
            >
              <div class="emoji-anim verybad">
                <figure class="face">
                  <span class="eye"></span>
                  <span class="eye last"></span>
                </figure>
              </div>
              부정
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>
    <!-- //오늘상태선택 -->

    <div class="section-page brt-0">
      <h2 class="tit-03">이달의 감정 랭킹 Top5</h2>
      <div v-for="(list, i) in top5List" :key="i" class="list-emotion mt-4">
        <div class="emoji-box">
          <i :data-emoji="list.stateText"></i>{{ list.stateText }}
        </div>
        <div class="progress-bar mt-12" :data-num="list.gagePercent">
          <div
            class="bar on"
            :style="`width: ${list.gagePercent}%`"
            :data-bar-color="list.stateText"
          >
            <span
              class="tooltip-balloon arrow-bottom num"
              :class="list.optionClass"
              >{{ list.gageText }}번</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- //이달의 감정 랭킹 Top5 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">감정 기록</v-btn>
      </h2>
      <div class="text-info-grey fs-16">최근 3개 기록만 표시됩니다</div>
      <CardReport
        :btn="true"
        v-for="report in reports"
        :key="report.id"
        @handleClick="modal = true"
      >
        <template #date>{{ report.date }}</template>
        <template #content>
          <v-chip
            label
            size="small"
            :color="report.state"
            class="chip-default chip-color"
          >
            {{ getText(report.state) }}
          </v-chip>
          <dl class="dl">
            <dt class="fs-14 align-self-start">{{ report.title }}</dt>
            <dd>
              {{ report.text }}
              <div class="font-weight-bold d-flex align-center mt-2">
                {{ report.statetext }}
                <i class="icon-state" :data-emoji="report.statetext"></i>
              </div>
            </dd>
          </dl>
        </template>
      </CardReport>

      <Carousel
        :items-to-Show="1"
        :wrap-around="true"
        :autoplay="3000"
        class="baner-simple-swiper"
      >
        <Slide v-for="(item, i) in banerList" :key="i">
          <BanerSimple
            :iconName="item.iconName"
            class="mt-8"
            @update="goPath(item.path)"
          >
            <strong class="title">{{ item.title }}</strong>
            <p class="text">{{ item.text }}</p>
          </BanerSimple>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
      <!-- //배너 -->
    </div>
    <!-- //감정다이어리 -->

    <div class="section-page">
      <LifelogChallenge />
    </div>
    <!-- //챌린지 -->

    <div class="section-page pb-0">
      <LifelogHealthnews />
    </div>
    <!-- //건강뉴스 -->

    <DialogSetting
      :lists="modalList"
      v-model="modal"
      :btnModify="false"
      @close="modal = false"
      @deleteClick="delFunc"
    />
    <DialogEmotionInput
      :message="emotionMsg"
      :classOption="emotionClass"
      :tabNum="emotionTabNum"
      v-model="modal2"
      @close="emoResultFunc"
    />
  </div>
</template>
<script>
  import router from '@/router'
  import { ref } from 'vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import DialogSetting from '@/components/DialogSetting.vue' // 설정
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import DialogEmotionInput from '@/views/pub/MAJ0202971.vue'
  import 'vue3-carousel/dist/carousel.css'
  export default {
    components: {
      VCalendar,
      CardReport,
      BanerSimple,
      DialogSetting,
      DialogEmotionInput,
      LifelogChallenge,
      LifelogHealthnews,
      Carousel,
      Slide,
      Pagination
    },
    setup() {
      const reports = ref([
        {
          id: 1,
          date: '오전 6시 35분',
          state: 'error',
          title: '메모',
          text: '사용자가 입력한 메모가 노출됩니다',
          statetext: '걱정하다'
        },
        {
          id: 2,
          date: '오전 6시 35분',
          state: 'yellow',
          title: '메모',
          text: '사용자가 입력한 메모가 노출됩니다',
          statetext: '짜증나다'
        },
        {
          id: 3,
          date: '오전 6시 35분',
          state: 'success',
          title: '메모',
          text: '사용자가 입력한 메모가 노출됩니다 사용자가 입력한 메모가 노출됩니다',
          statetext: '슬프다'
        }
      ])
      const top5List = ref([
        {
          stateText: '걱정하다',
          gagePercent: 99,
          gageText: 16,
          optionClass: 'fix-r'
        },
        {
          stateText: '짜증나다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '슬프다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '무섭다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '후회하다',
          gagePercent: 20,
          gageText: 4
        },
        {
          stateText: '우울하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '불안하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '창피하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '외롭다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '심심하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '당황하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '긴장하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '시원섭섭하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '싱숭생숭하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '무덤덤하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '기쁘다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '즐겁다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '편하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '만족하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '상쾌하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '자신만만하다',
          gagePercent: 20,
          gageText: 10
        }
      ])
      function getText(props) {
        switch (props) {
          case 'success':
            return '매우좋음'
          case 'yellow':
            return '보통'
          case 'error':
            return '매우나쁨'
        }
      }

      const modal = ref(false)
      const modalTitle = ref('설정')
      const modalList = ref([
        {
          value: 1,
          text: '삭제'
        }
      ])
      const delFunc = () => {
        alert('삭제')
      }

      const modal2 = ref(false)
      const emotionSelect = ref()
      const emotionMsg = ref()
      const emotionClass = ref()
      const emotionTabNum = ref()
      const emotionFunc = (value) => {
        modal2.value = true
        if (value === 'verygood') {
          emotionMsg.value = '매우 좋음'
          emotionTabNum.value = 0
        } else if (value === 'normal') {
          emotionMsg.value = '보통'
          emotionTabNum.value = 1
        } else if (value === 'verybad') {
          emotionMsg.value = '매우나쁨'
          emotionTabNum.value = 2
        }
        emotionClass.value = value
      }
      const emoResultClass = ref()
      const emoBoxClass = ref('mt-5')
      const emoResultTitle = ref('오늘 하루 어떠셨나요?')
      const emoResultMsg = ref('하고 싶은 이야기를 공유해 주세요')
      const emoResultFunc = () => {
        modal2.value = false
        emoResultClass.value = emotionClass.value
        emoBoxClass.value = ''
        if (emoResultClass.value === 'verygood') {
          emoResultTitle.value = '좋은 일이 당신을 기다리고 있어요'
          emoResultMsg.value = '긍정적인 에너지를 유지하세요'
        } else if (emoResultClass.value === 'normal') {
          emoResultTitle.value = '보통의 날도 소중해요'
          emoResultMsg.value = '작은 기쁨을 찾아보세요'
        } else if (emoResultClass.value === 'verybad') {
          emoResultTitle.value = '조금 더 힘을 내세요'
          emoResultMsg.value = '어려운 시기를 극복하고 나면 더 강해질 거예요'
        }
      }

      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          dot: { class: 'emoji-verygood' },
          dates: [new Date(2023, 9, 29)]
        },
        {
          dot: { class: 'emoji-good' },
          dates: [new Date(2023, 9, 10)]
        },
        {
          dot: { class: 'emoji-normal' },
          dates: [new Date(2023, 9, 20)]
        },
        {
          dot: { class: 'emoji-bad' },
          dates: [new Date(2023, 9, 13)]
        },
        {
          dot: { class: 'emoji-verybad' },
          dates: [new Date(2023, 9, 7)]
        }
      ])

      const banerList = ref([
        {
          title: '운동 관리하러 가기',
          text: '감정과 함께 관리해보세요!',
          iconName: 'icon-dumbbell.svg',
          path: '/MAJ0202856'
        },
        {
          title: '수면 관리하러 가기',
          text: '감정과 함께 관리해보세요!',
          iconName: 'icon-moon.svg',
          path: '/MAJ0202914'
        }
      ])
      function goPath(val) {
        router.push(val)
      }

      return {
        reports,
        getText,
        top5List,
        modal,
        modalTitle,
        modalList,
        delFunc,
        emotionSelect,
        emotionFunc,
        emoResultFunc,
        emoResultClass,
        emoBoxClass,
        modal2,
        emotionMsg,
        emotionClass,
        emotionTabNum,
        emoResultTitle,
        emoResultMsg,
        calendarAttr,
        banerList,
        goPath
      }
    }
  }
</script>
