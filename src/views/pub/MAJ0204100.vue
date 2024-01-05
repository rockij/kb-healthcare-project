<template>
  <div class="contents">
    <div class="tab-line">
      <v-tabs v-model="tabInit" align-tabs="start">
        <v-tab
          v-for="(item, i) in tabItems"
          :key="item.id"
          :value="i"
          :ripple="false"
          :data-count="item.tabCount"
        >
          {{ item.titleTab }}
        </v-tab>
      </v-tabs>
    </div>
    <div class="sorting-data sorting-news data-section-bg">
      <div class="news-btn">
        <v-btn
          variant="text"
          density="compact"
          class="fs-16 px-0"
          @click="modal = true"
        >
          <div class="ml-1">{{ category }}</div>
          <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
        </v-btn>
      </div>
      <DialogSelectList
        :lists="option"
        title="정렬 설정"
        v-model="modal"
        @close="modal = false"
        @update="changeCategory"
      />
    </div>
    <v-window v-model="tabInit" class="mt-2 overflow-visible">
      <v-window-item>
        <div class="py-6 px-4 card-report3 mychal-report">
          <dl class="list">
            <dd>
              <strong class="fs-14 d-flex align-center mb-2"
                ><v-icon class="icon-calendar mr-1" />D-20</strong
              >
              오케어 이용자가 평일 평균걸음수만큼 걸어보기
            </dd>
            <dt class="mark">
              <v-img src="/assets/images/dummy-thumb2.jpg" cover alt="" />
            </dt>
          </dl>
          <ProgressBar :dataNum="90" :ready="true" class="mt-16">
            <template v-slot:numText1>달성률&nbsp;</template>
            <template v-slot:numText2
              ><span class="text-yellow">%</span></template
            >
          </ProgressBar>
          <!-- //progress-bar -->
          <v-card variant="flat" class="d-flex justify-center mt-3 pa-2 fs-14">
            <img src="/assets/images/icon-flame.svg" alt="" />달성률이
            <strong class="text-blue">80%</strong>인 경우 챌린지 성공!!
          </v-card>
          <v-card
            variant="flat"
            rounded="xl"
            class="mt-4 pa-4 mychal"
            color="#F8F8F8"
          >
            <div class="mychal-data" v-for="item in chalList" :key="item.id">
              <span class="text-left">{{ item.text }}</span>
              <span class="text-right" :class="{ blue: item.numBlue }">{{
                item.num
              }}</span>
            </div>
          </v-card>
        </div>
        <div class="py-6 px-4 card-report3 mychal-report">
          <dl class="list">
            <dd>
              <strong class="fs-14 d-flex align-center mb-2"
                ><v-icon class="icon-calendar mr-1" />D-20</strong
              >
              오케어 이용자가 평일 평균걸음수만큼 걸어보기
            </dd>
            <dt class="mark">
              <v-img src="/assets/images/dummy-thumb2.jpg" cover alt="" />
            </dt>
          </dl>
          <ProgressBar :dataNum="50" class="mt-16">
            <template v-slot:numText1>달성률&nbsp;</template>
            <template v-slot:numText2
              ><span class="text-yellow">%</span></template
            >
          </ProgressBar>
          <!-- //progress-bar -->
          <v-card variant="flat" class="d-flex justify-center mt-3 pa-2 fs-14">
            <img src="/assets/images/icon-flame.svg" alt="" />달성률이
            <strong class="text-blue">80%</strong>인 경우 챌린지 성공!!
          </v-card>
          <v-card
            variant="flat"
            rounded="xl"
            class="mt-4 pa-4 mychal"
            color="#F8F8F8"
          >
            <div class="mychal-data" v-for="item in chalList" :key="item.id">
              <span class="text-left">{{ item.text }}</span>
              <span class="text-right" :class="{ blue: item.numBlue }">{{
                item.num
              }}</span>
            </div>
          </v-card>
        </div>
      </v-window-item>
      <v-window-item>
        <div class="pa-4 card-report3 mychal-report">
          <dl class="list end-list">
            <dd>
              <span class="badge-success mb-2">성공</span>
              취소/실패한 챌린지 케이스 입니다
              <span class="badge-overeating">과식형</span>
            </dd>
            <dt class="mark">
              <v-img src="/assets/images/dummy-thumb2.jpg" cover alt="" />
            </dt>
          </dl>
          <v-card
            variant="flat"
            rounded="xl"
            class="mt-4 pa-4 mychal"
            color="#F8F8F8"
          >
            <div class="mychal-data" v-for="item in chalList2" :key="item.id">
              <span class="text-left">{{ item.text }}</span>
              <span class="text-right" :class="{ blue: item.numBlue }">{{
                item.num
              }}</span>
            </div>
          </v-card>
          <div class="tit-03 tit-link pt-6 pb-0">
            <v-btn variant="text" class="mychal-btn"
              >리뷰 쓰고 <span class="blue">500P</span> 받으러 가기</v-btn
            >
          </div>
        </div>
        <div class="pa-4 card-report3 mychal-report">
          <dl class="list end-list">
            <dd>
              <span class="badge-success mb-2">성공</span>
              취소/실패한 챌린지 케이스 입니다
              <span class="badge-overeating">과식형</span>
            </dd>
            <dt class="mark">
              <v-img src="/assets/images/dummy-thumb2.jpg" cover alt="" />
            </dt>
          </dl>
          <v-card
            variant="flat"
            rounded="xl"
            class="mt-4 pa-4 mychal"
            color="#F8F8F8"
          >
            <div class="mychal-data" v-for="item in chalList2" :key="item.id">
              <span class="text-left">{{ item.text }}</span>
              <span class="text-right" :class="{ blue: item.numBlue }">{{
                item.num
              }}</span>
            </div>
          </v-card>
          <div class="tit-03 tit-link pt-6 pb-0">
            <v-btn variant="text" class="mychal-btn"
              >작성한 리뷰 보러가기</v-btn
            >
          </div>
        </div>
        <div class="pa-4 card-report3 mychal-report">
          <dl class="list">
            <dd>취소/실패한 챌린지 케이스 입니다</dd>
            <dt>
              <v-img src="/assets/images/dummy-thumb2.jpg" cover alt="" />
            </dt>
          </dl>
          <v-card
            variant="flat"
            rounded="xl"
            class="mt-4 pa-4 mychal"
            color="#F8F8F8"
          >
            <div class="mychal-data" v-for="item in chalList2" :key="item.id">
              <span class="text-left">{{ item.text }}</span>
              <span class="text-right" :class="{ blue: item.numBlue }">{{
                item.num
              }}</span>
            </div>
          </v-card>
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  import ProgressBar from './ProgressBar.vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  export default {
    components: {
      ProgressBar,
      DialogSelectList
    },
    setup() {
      const tabInit = ref(null)
      const modal = ref(false)
      const category = ref('마감일순')
      const numBlue = ref(false)
      const option = reactive([
        { value: 1, text: '마감일순' },
        { value: 2, text: '참여최신순' }
      ])
      const tabItems = ref([
        { titleTab: '참여중 챌린지' },
        { titleTab: '종료/취소 챌린지' }
      ])
      const chalList = ref([
        {
          text: '참여일',
          num: '23.09.25'
        },
        {
          text: '인증 횟수',
          numBlue: true,
          num: '30회'
        }
        // {
        //   text: '획득한 보상',
        //   numBlue: true,
        //   num: '200P'
        // }
      ])

      const chalList2 = ref([
        {
          text: '종료일',
          num: '23.09.25'
        },
        {
          text: '인증 횟수',
          numBlue: true,
          num: '30회'
        }
        // {
        //   text: '획득한 보상',
        //   numBlue: true,
        //   num: '200P'
        // }
      ])
      function changeCategory(val) {
        modal.value = false
        return (category.value = val.text)
      }
      return {
        modal,
        category,
        tabInit,
        tabItems,
        chalList,
        chalList2,
        numBlue,
        option,
        changeCategory
      }
    }
  }
</script>
