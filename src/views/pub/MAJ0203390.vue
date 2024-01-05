<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-bg">
      <v-card variant="flat" rounded="xl" class="py-6 px-4">
        <!-- 2023-12-12 수정 -->
        <div class="tit-03 pb-8 report-tit">현재 심박은<br />86bpm이에요</div>
        <img src="/assets/images/graph-bar.png" alt="" />
      </v-card>
    </div>

    <!-- 심박수에 따른 운동효과 -->
    <div class="report-heart-area py-8">
      <h2 class="tit-03 tooltip relative">
        <Tooltip
          btnText="심박수에 따른 운동효과"
          text="심박수 영역에 따라 본인의 체력상태에 알맞은 운동강도를 정하여 전신지구력을 향상시키며 튼튼한 심장을 만들거나 체내지방량을 감소시킬 수 있습니다. "
        />
      </h2>
      <div class="text-info-grey">최근 심박수 : 120bpm</div>
      <div class="bar-heart-graph mt-6">
        <div class="tooltip-area">
          <div
            :class="[
              'tooltip-balloon',
              { 'arrow-1': bpms === 1 },
              { 'arrow-2': bpms === 2 },
              { 'arrow-3': bpms === 3 },
              { 'arrow-4': bpms === 4 },
              { 'arrow-5': bpms === 5 },
              { 'arrow-6': bpms === 6 }
            ]"
          >
            최근 심박수는
            <span class="text-yellow px-1">비운동</span>
            영역 입니다
          </div>
        </div>
        <div class="bar bar-1"></div>
        <div class="bar bar-2"></div>
        <div class="bar bar-3"></div>
        <div class="bar bar-4"></div>
        <div class="bar bar-5"></div>
        <div class="bar bar-6"></div>
      </div>
      <div class="text pt-6" v-if="bpms === 1">
        아직 심박기록이 없어요. 심박을 추가하면 운동 강도 및 효과를 확인 할 수
        있어요
      </div>
      <div :class="['box-rounded mt-6', { 'pb-0': isVisible }]">
        <v-btn
          block
          variant="text"
          rounded="xl"
          height="24"
          :ripple="false"
          class="btn-search shadow-none"
          @click="isVisible = !isVisible"
        >
          <span class="text">
            영역별 강도 및 범위 보기
            <img
              src="/assets/images/icon-arrow-up2.svg"
              alt="검색"
              v-if="isVisible"
            />
            <img src="/assets/images/icon-arrow-down2.svg" alt="검색" v-else />
          </span>
        </v-btn>
        <v-expand-transition>
          <div v-if="isVisible">
            <ul class="list-heart">
              <li v-for="(item, i) in list" :key="i">
                <div class="tit">
                  <v-avatar size="8" :class="item.class"></v-avatar
                  >{{ item.title }}
                </div>
                <div class="text-info-grey">{{ item.text }}</div>
                <dl class="dl-heart mt-2">
                  <dt>강도</dt>
                  <dd>{{ item.percent }}%</dd>
                  <dt>범위</dt>
                  <dd>{{ item.area }}bpm</dd>
                </dl>
              </li>
            </ul>
          </div>
        </v-expand-transition>
      </div>
    </div>

    <!-- 심박분석 -->
    <div class="section-page pt-10 pb-6">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text" @click="$router.push('MAJ0203392')">
          심박 분석
        </v-btn>
      </h2>
      <div class="text-info-grey fs-16">최근 1주일의 심박 분석입니다</div>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab v-for="item in tabItems" :key="item.id" :ripple="false">
          {{ item.text }}
        </v-tab>
      </v-tabs>
      <div class="graph-date mt-6 mb-1">23.10.15~23.10.21</div>
      <div class="font-weight-bold mb-4">심박수 범위 78-150bpm</div>
      <div class="mt-4">
        <!-- chart -->
        <img
          src="/assets/images/img-graph-bar2.png"
          alt=""
          style="width: 100%"
        />
        <!-- //chart -->
      </div>
    </div>

    <!-- 심박기록 -->
    <div class="section-page py-10">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text" @click="$router.push('MAJ0203392')">
          심박기록
        </v-btn>
      </h2>
      <div class="text-info-grey">최근 3개 기록만 표시됩니다</div>

      <!-- 기록 component -->
      <CardReport
        :btn="true"
        v-for="report in reports"
        :key="report.id"
        @handleClick="handleClick"
      >
        <template #date>{{ report.date }}</template>
        <!-- card 내용 -->
        <template #content>
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            {{ getText(report.state) }}
          </v-chip>
          <v-chip label size="small" class="chip-default ml-2"> 플랫폼 </v-chip>
          <dl class="dl">
            <dt>심박수</dt>
            <dd class="pl-0">
              <span class="font-weight-bold text-primary"
                >{{ report.record }}bpm</span
              >
            </dd>
          </dl>
        </template>
      </CardReport>
      <Carousel
        :items-to-Show="1"
        :wrap-around="true"
        :autoplay="3000"
        class="baner-simple-swiper mt-8"
      >
        <Slide v-for="(item, i) in banerList" :key="i">
          <BanerSimple :iconName="item.iconName" @update="goPath(item.path)">
            <strong class="title">{{ item.title }}</strong>
            <p class="text">{{ item.text }}</p>
          </BanerSimple>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>

    <div class="section-page">
      <LifelogChallenge />
    </div>
    <!-- //챌린지 -->

    <div class="section-page pb-0">
      <LifelogHealthnews />
    </div>
    <!-- //건강뉴스 -->
  </div>
</template>

<script>
  import router from '@/router'
  import Tooltip from '@/components/Tooltip.vue'
  import CardReport from '@/components/CardReport.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import { onUnmounted, ref } from 'vue'

  export default {
    components: {
      Tooltip,
      CardReport,
      VCalendar,
      BanerSimple,
      LifelogChallenge,
      LifelogHealthnews,
      Carousel,
      Slide,
      Pagination
    },
    setup() {
      const masks = ref({
        title: 'YYYY.MM'
      })
      const attributes = ref([
        {
          dot: { style: { backgroundColor: '#907776' } },
          dates: [new Date(2023, 8, 20)]
        },
        {
          dot: { style: { backgroundColor: '#E02A61' } },
          dates: [new Date(2023, 8, 20)]
        },
        {
          dot: { style: { backgroundColor: '#B171F7' } },
          dates: [new Date(2023, 8, 20)]
        }
      ])
      const bpms = ref(1)
      const isVisible = ref(false)
      const reports = ref([
        {
          id: 0,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'primary',
          record: '82'
        },
        {
          id: 0,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'error',
          record: '82-105'
        },
        {
          id: 0,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'success',
          record: '60-82'
        }
      ])
      function getText(props) {
        switch (props) {
          case 'primary':
            return '증가'
          case 'success':
            return '안정'
          case 'error':
            return '부족'
        }
      }
      function handleClick() {
        console.log('emit')
      }
      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 10, 1)]
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 9, 10)]
        }
      ])
      const banerList = ref([
        {
          title: '운동 관리하러 가기',
          text: '심박과 함께 관리해보세요!',
          iconName: 'icon-dumbbell.svg',
          path: '/MAJ0202856'
        },
        {
          title: '혈압 관리하러 가기',
          text: '심박과 함께 관리해보세요!',
          iconName: 'icon-blood.svg',
          path: '/MAJ0202970'
        }
      ])
      const list = ref([
        {
          title: '무산소 영역',
          class: 'step-6',
          text: '운동선수의 스피드 및 근력 등을 강화시켜 줍니다. 장시간 진행시 부상 및 위험이 있어요.',
          percent: '90~100',
          area: '178-198'
        },
        {
          title: '고강도 영역',
          class: 'step-5',
          text: '열정시간 동안 진행 시 운동 수행능력을 향상시켜주며, 매우 빠른속도로 탄수화물과 지방을 태워요',
          percent: '80~90',
          area: '158-178'
        },
        {
          title: '유산소 영역',
          class: 'step-4',
          text: '심폐지구력과 근지구력 등의 유산소능력이 향상되며 체중감량이 목적인 일반인의 경우 전체 운동시간에서 가장많은 부분을 차지해요.',
          percent: '70~80',
          area: '138-158'
        },
        {
          title: '지방연소 영역',
          class: 'step-3',
          text: '지방이 연소되기 시작하며, 장시간 진행시 효과적인 칼로리소모를 기대할 수 있습니다. 다만, 유산소 능력 등의 운동능력을 향상시키기는 어려워요',
          percent: '60~70',
          area: '118-138'
        },
        {
          title: '저강도 영역',
          class: 'step-2',
          text: '운동 시작 전 및 운동 후 워밍업과 쿨다운의 영역이며, 이 영역에서만 운동을 할 경우 효과를 보기 어려워요',
          percent: '50~60',
          area: '99-118'
        },
        {
          title: '비운동 영역',
          class: 'step-1',
          text: '안정 심박수에 해당하는 영역입니다. 운동효과를 보기 위해서는 심박수를 증가시킬수 있는 운동을 수행해 보세요.',
          percent: '< 50',
          area: '< 99'
        }
      ])
      const tabInit = ref(0)
      const tabItems = ref([
        {
          id: 2,
          text: '1주일'
        },
        {
          id: 3,
          text: '1개월'
        },
        {
          id: 4,
          text: '6개월'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      onUnmounted(() => {})
      return {
        bpms,
        isVisible,
        list,
        tabInit,
        tabItems,
        masks,
        attributes,
        reports,
        getText,
        handleClick,
        calendarAttr,
        banerList,
        goPath
      }
    }
  }
</script>
