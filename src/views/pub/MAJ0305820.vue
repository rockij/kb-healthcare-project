<template>
  <div class="contents pb-0">
    <div class="pb-10 pt-3">
      <h2 class="fs-24 font-weight-bold">2022.12.30</h2>
      <p class="mt-2 mb-6">일반검진</p>
      <!-- //title -->

      <div ref="stickyArea" :style="{ height: navHeight }">
        <div :class="sticky">
          <div class="tab-line tab-fixed">
            <v-tabs v-model="tabInit" align-tabs="start">
              <v-tab v-for="(item, i) in tabItems" :key="i" :ripple="false">
                {{ item.title }}
              </v-tab>
            </v-tabs>
          </div>
        </div>
      </div>

      <BanerReport :bnShow="'verybad'" :videBox="false" class="mt-6">
        당뇨 검사결과 의심이에요
      </BanerReport>
      <!-- //baner -->

      <h3 class="tit-03 pb-1 mt-4">꼭 관리를 시작해야만 해요</h3>
      <p class="fs-18">생활습관 개선과 함께 전문적인 관리를 추천드려요</p>
      <v-card
        variant="flat"
        rounded="xl"
        class="box-rounded-fill fill-red pa-4 mt-8 d-flex align-start"
      >
        <img
          src="/assets/images/icon-caption4.svg"
          alt=""
          width="20"
          class="mr-2"
        />
        <div class="flex-1">
          <strong class="fs-18 font-weight-bold">당뇨 취약항목이에요</strong>
          <ul class="font-weight-bold">
            <li
              v-for="(list, i) in categoryList"
              :key="i"
              class="mt-2"
              :data-category="list.category"
            >
              <span class="mr-2" :class="getText(list.category)">{{
                list.category
              }}</span
              >{{ list.text }}
            </li>
          </ul>
        </div>
      </v-card>
      <!-- //취약항목 -->

      <h4 class="fs-20 font-weight-bold d-flex align-center mt-7">
        <v-chip
          label
          size="small"
          color="error"
          class="chip-default chip-color mr-2"
        >
          의심
        </v-chip>
        공복혈당(mg/dL)
      </h4>
      <h4 class="fs-20 font-weight-bold d-flex align-center mt-7">
        <v-chip
          label
          size="small"
          color="green"
          class="chip-default chip-color mr-2"
        >
          주의
        </v-chip>
        공복혈당(mg/dL)
      </h4>
      <h4 class="fs-20 font-weight-bold d-flex align-center mt-7">
        <v-chip
          label
          size="small"
          color="orange"
          class="chip-default chip-color mr-2"
        >
          정상
        </v-chip>
        공복혈당(mg/dL)
      </h4>
      <div class="mt-4">
        <!-- 허리둘레 -->
        <div class="progress-bar2">
          <div class="bar-bg">
            <span class="bar" style="width: 50%">
              정상
              <i class="pin-right on" date-pin-text="89cm"></i>
            </span>
          </div>
          <div class="balloon" style="width: 70%">
            <span class="tooltip-balloon arrow-bottom shadow"
              ><span class="box">95</span></span
            >
          </div>
        </div>
        <div class="progress-bar2">
          <div class="bar-bg justify-end">
            <span class="bar" style="width: 50%">
              정상
              <i class="pin-left on" date-pin-text="89cm"></i>
            </span>
          </div>
          <div class="balloon" style="width: 30%">
            <span class="tooltip-balloon arrow-bottom shadow"
              ><span class="box">65</span></span
            >
          </div>
        </div>
        <!-- //허리둘레 -->
        <!-- 시력 -->
        <div class="progress-bar2">
          <div class="bar-bg">
            <span class="bar justify-start" style="width: 33.3%"> 정상 </span>
            <span class="bar-pins" style="width: 33.3%">
              <i class="pin-left on" date-pin-text="1.0"></i>
              <i class="pin-right" date-pin-text="2.0"></i>
            </span>
          </div>
          <div class="balloon" style="width: 20%">
            <span class="tooltip-balloon arrow-bottom shadow"
              ><span class="box">0.5</span></span
            >
          </div>
        </div>
        <div class="progress-bar2">
          <div class="bar-bg justify-center">
            <span class="bar" style="width: 33.3%"> 정상 </span>
            <span class="bar-pins" style="width: 33.3%">
              <i class="pin-left on" date-pin-text="1.0"></i>
              <i class="pin-right" date-pin-text="2.0"></i>
            </span>
          </div>
          <div class="balloon" style="width: 80%">
            <span class="tooltip-balloon arrow-bottom shadow"
              ><span class="box">2.5</span></span
            >
          </div>
        </div>
        <div class="progress-bar2">
          <div class="bar-bg justify-end">
            <span class="bar" style="width: 33.3%"> 정상 </span>
            <span class="bar-pins" style="width: 33.3%">
              <i class="pin-left" date-pin-text="1.0"></i>
              <i class="pin-right on" date-pin-text="2.0"></i>
            </span>
          </div>
          <div class="balloon" style="width: 60%">
            <span class="tooltip-balloon arrow-bottom shadow"
              ><span class="box">1.7</span></span
            >
          </div>
        </div>
        <!-- //시력 -->
      </div>
      <!-- //판정값 -->
      <p class="text-right fs-13 mt-8">
        <v-icon class="icon-dotted-line mr-1"></v-icon>관리 목표
      </p>

      <h5 class="list-disease-item type icon-1 mt-6">
        <v-img
          transition="none"
          src="/assets/images/icon-disease01.png"
          alt=""
          class="icon"
        />혈당이
      </h5>
      <!-- 
				** 아이콘 케이스 **
				당뇨: icon-disease01.png
				고혈압: icon-disease02.png
				이상지질혈증: icon-disease03.png
				비만: icon-disease04.png
				신장질환: icon-disease05.png
				간장질환: icon-disease06.png
				흉부질환: icon-disease07.png
				빈혈: icon-disease08.png
				시력: icon-disease09.png
				청력: icon-disease010.png
				생활습관: icon-disease011.png
			 -->
      <ul class="list-updown-text mt-3 ml-8" :class="updwCount">
        <li v-for="(list, i) in updwList" :key="i">
          <span class="area"
            >{{ list.year }}전보다
            <strong :class="`icon-${list.curve}`">{{ list.volume }}</strong
            >mg/dL</span
          >
          {{ list.text }}
        </li>
      </ul>
      <div class="mt-6">
        <div class="text-right mb-2">
          <v-chip variant="text">
            <v-icon class="icon-dot mr-1" size="14" color="#3B4A65" />
            <span class="fs-13">3034 여성평균</span>
          </v-chip>
        </div>
        <!-- chart -->
        <v-img src="/assets/images/dummy-chart2.png" alt="" />
        <!-- //chart -->
      </div>
    </div>
    <!-- //데이터변화정보 -->
  </div>
</template>
<script>
  import BanerReport from '@/components/BanerReport.vue'
  import { ref, computed, onMounted } from 'vue'
  export default {
    components: {
      BanerReport
    },
    setup() {
      const categoryList = ref([
        {
          category: '의심',
          text: '공복혈당'
        }
      ])
      function getText(props) {
        switch (props) {
          case '의심':
            return 'text-red'
          case '주의':
            return 'text-orange'
        }
      }
      const updwList = ref([
        {
          year: '4년',
          volume: '100',
          text: '올라갔어요',
          curve: 'up'
        },
        {
          year: '9년',
          volume: '10',
          text: '내려갔어요',
          curve: 'down'
        }
      ])
      const updwCount = computed(() => {
        if (updwList.value.length === 1) {
          return 'list-count1'
        }
      })
      const tabInit = ref(null)
      const tabItems = ref([
        {
          title: '당뇨'
        },
        {
          title: '고혈압'
        },
        {
          title: '이상지지혈증'
        },
        {
          title: '비만'
        },
        {
          title: '신장질환'
        },
        {
          title: '간장질환'
        },
        {
          title: '흉부질환'
        },
        {
          title: '빈혈'
        },
        {
          title: '시력'
        },
        {
          title: '청력'
        },
        {
          title: '생활습관'
        }
      ])

      //sticky
      const sticky = ref(null)
      const stickyArea = ref(null)
      const navHeight = ref(null)
      onMounted(() => {
        const stickyObserver = new IntersectionObserver(
          ([e]) => {
            if (!e.isIntersecting) sticky.value = 'isFixed'
            else sticky.value = ''
          },
          {
            root: null,
            threshold: [1]
          }
        )
        stickyObserver.observe(stickyArea.value)
      })

      return {
        categoryList,
        updwList,
        getText,
        updwCount,
        tabInit,
        tabItems,
        navHeight,
        sticky,
        stickyArea
      }
    }
  }
</script>
