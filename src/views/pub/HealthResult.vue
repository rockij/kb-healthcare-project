<template>
  <div class="section-page">
    <h2 class="tit-03 tit-link pb-2">
      <v-btn block variant="text" @click="$emit('goPath', 'MAJ0200413')"
        >건강검진 결과</v-btn
      >
    </h2>
    <div class="health-result mt-4">
      <div class="title-area text-grey">
        <div class="left">
          <div class="text">일반검진</div>
          <v-divider vertical />
          <div class="text">신촌연세세브란스</div>
        </div>
        <div class="date">2023.09.27 검진</div>
      </div>
      <v-card variant="flat" rounded="xl" class="box-grey mt-2">
        내 실제 나이 <strong>43세</strong>
      </v-card>
      <div class="fs-13 text-grey text-right mt-2">
        건강검진 시점을 기준으로 계산한 나이에요
      </div>
      <div class="text-center pt-8">
        <img
          :src="`/assets/images/${resultD.img}.png`"
          width="140"
          height="140"
          :alt="resultD.title"
        />
        <div class="font-secondary tit-03 mt-4">{{ resultD.title }}</div>
        <div class="mt-2">{{ resultD.text }}</div>
      </div>
      <!-- 2012-12-22 삭제 전체 보기 삭제-->
      <!-- <div class="text-right mt-2">
        <v-btn variant="text" height="auto" class="text-link pa-0">
          <span class="text-info-grey">전체보기</span>
          <v-icon class="fs-22 text-grey2">mdi-chevron-right</v-icon>
        </v-btn>
      </div> -->
      <!--// 2012-12-22 삭제 전체 보기 삭제-->
      <!-- 2012-12-22 박스 height수정으로 인한 마크업 수정 -->
      <ul class="d-grid g-tcol-2 gap-7 mt-6 grid-box">
        <li v-for="(item, i) in sicks" :key="i">
          <div class="box-rounded pa-4">
            <v-chip
              label
              size="small"
              :color="item.code === 100 ? 'error' : 'orange'"
              class="chip-default chip-color"
            >
              <span>
                {{ item.code === 100 ? '의심' : '주의' }}
              </span>
            </v-chip>
            <div
              :class="[
                'title-area mt-4',
                item.code === 100 ? 'text-error' : 'text-orange'
              ]"
            >
              {{ item.title }}
              <!-- 2012-12-22 삭제 전체 보기 삭제-->
              <!-- <v-icon>mdi-chevron-right</v-icon> -->
              <!--// 2012-12-22 삭제 전체 보기 삭제-->
            </div>
            <div class="fs-14">{{ item.text }}</div>
          </div>
        </li>
      </ul>
      <v-btn
        v-if="!more"
        variant="outlined"
        rounded="lg"
        block
        height="33"
        color="#ccc"
        class="mt-4"
        @click="more = true"
      >
        <span class="text-black">더보기</span>
      </v-btn>
      <v-expand-transition>
        <div v-if="more">
          <!-- 2012-12-22 박스 height수정으로 인한 마크업 수정 -->
          <ul class="d-grid g-tcol-2 gap-7 mt-2 grid-box">
            <li v-for="(item, i) in sicks2" :key="i">
              <div class="box-rounded pa-4">
                <v-chip
                  label
                  size="small"
                  :color="item.code === 100 ? 'error' : 'orange'"
                  class="chip-default chip-color"
                >
                  <span>
                    {{ item.code === 100 ? '의심' : '주의' }}
                  </span>
                </v-chip>
                <!-- 2012-12-22 박스 height수정으로 인한 마크업 수정 -->
                <div
                  :class="[
                    'title-area mt-4',
                    item.code === 100 ? 'text-error' : 'text-orange'
                  ]"
                >
                  {{ item.title }}
                  <!-- <v-icon>mdi-chevron-right</v-icon> -->
                </div>
                <div class="fs-14">{{ item.text }}</div>
              </div>
            </li>
          </ul>
        </div>
      </v-expand-transition>
    </div>
    <v-card variant="flat" rounded="xl" class="box-grey mt-9 pa-0" height="44">
      <div class="d-flex align-center justify-center h-100">
        <img src="/assets/images/icon-waring.svg" alt="" />
        <span class="fs-14">마지막 검진일로부터 100일 지났어요!!</span>
      </div>
    </v-card>
    <div class="banner-coding mt-8">
      <Baner caseName="book" class="mt-6">
        <div class="d-flex align-center title lh-4">
          증상검색 하러가기
          <v-icon>mdi-chevron-right</v-icon>
        </div>
        <div class="text-grey font-weight-regular">
          입력한 내용을 확인해 보세요
        </div>
      </Baner>
    </div>
  </div>
</template>

<script>
  import Baner from '@/components/BanerIcon.vue'
  import { ref } from 'vue'

  export default {
    components: { Baner },
    setup() {
      const more = ref(false)
      const resultA = ref({
        img: 'img-check-result01',
        title: '정상A',
        text: '지금처럼 건강을 유지하세요'
      })
      const resultB = ref({
        img: 'img-check-result02',
        title: '정상B',
        text: '이제 건강한 생활습관을 만들어야만 해요'
      })
      const resultC = ref({
        img: 'img-check-result03',
        title: '일반 질환의심',
        text: '전문적이고 집중적인 관리가 필요해요'
      })
      const resultD = ref({
        img: 'img-check-result04',
        title: '유질환자',
        text: '전문의와 함께 꾸준한 치료가 필요해요'
      })
      const sicks = ref([
        {
          code: 100,
          title: '당뇨',
          text: '무조건 관리에 들어가야 해요!!'
        },
        {
          code: 200,
          title: '빈혈',
          text: '이제 참지말고 관리를 해야만 해요.'
        }
      ])

      const sicks2 = ref([
        {
          code: 100,
          title: '당뇨',
          text: '무조건 관리에 들어가야 해요!!'
        },
        {
          code: 200,
          title: '빈혈',
          text: '이제 참지말고 관리를 해야만 해요.'
        },
        {
          code: 100,
          title: '당뇨',
          text: '무조건 관리에 들어가야 해요!!'
        },
        {
          code: 200,
          title: '빈혈',
          text: '이제 참지말고 관리를 해야만 해요.'
        }
      ])
      return {
        more,
        resultA,
        resultB,
        resultC,
        resultD,
        sicks,
        sicks2
      }
    }
  }
</script>
