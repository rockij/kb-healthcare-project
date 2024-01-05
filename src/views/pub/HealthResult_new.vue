<template>
  <div class="section-page">
    <h2 class="tit-03 tit-link pb-2">
      <v-btn block variant="text" @click="$emit('goPath', 'MAJ0200413')"
        >건강검진 결과</v-btn
      >
    </h2>
    <div class="health-result mt-4">
      <v-card variant="flat" class="box-fill" height="40">
        <div class="d-flex align-center justify-center h-100">
          <img src="/assets/images/icon-warning.svg" alt="" />
          <span class="text">마지막 검진일로부터 100일 지났어요!!</span>
        </div>
      </v-card>
      <div class="text-center">
        <img
          :src="`/assets/images/${resultD.img}.png`"
          width="140"
          height="140"
          :alt="resultD.title"
        />
        <div class="chip-area">
          <v-chip label size="small" class="chip-default">일반검진</v-chip>
          <!-- <v-chip label size="small" class="chip-default"
            >신촌연세세브란스</v-chip
          > -->
        </div>
        <div class="text-result" v-html="resultD.text" />
        <div class="mt-4">
          <v-chip class="chip-title">{{ resultD.title }}</v-chip>
        </div>
      </div>
      <div class="result-info mt-6">
        <div class="date-area">
          <div class="date">
            <img src="/assets/images/icon-calendar4.png" alt="" class="icon" />
            <div class="text">2023.09.27</div>
          </div>
          <v-btn variant="flat" rounded="lg" height="32" class="btn-grey fs-13">
            상세보기
          </v-btn>
        </div>
        <div class="age-card my-3">
          <div class="section">
            <dl>
              <dt>검진 당시 나이</dt>
              <dd>43세</dd>
            </dl>
          </div>
          <!-- 2차 -->
          <!-- <v-divider vertical />
          <div class="section">
            <dl>
              <dt>
                <Tooltip
                  btnText="건강 나이"
                  text="건강 나이 툴팁 건강 나이 툴팁 건강 나이 툴팁 건강 나이 툴팁"
                />
              </dt>
              <dd>39세</dd>
            </dl>
          </div> -->
        </div>
      </div>

      <ul class="d-grid g-tcol-2 grid-box">
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
              <v-icon>mdi-chevron-right</v-icon>
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
        <span class="text-black mr-1">펼쳐보기</span>
        <img src="/assets/images/icon-down.svg" alt="" />
      </v-btn>
      <v-expand-transition>
        <div v-if="more">
          <ul class="d-grid g-tcol-2 mt-3 grid-box">
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
                <div
                  :class="[
                    'title-area mt-4',
                    item.code === 100 ? 'text-error' : 'text-orange'
                  ]"
                >
                  {{ item.title }}
                  <v-icon>mdi-chevron-right</v-icon>
                </div>
                <div class="fs-14">{{ item.text }}</div>
              </div>
            </li>
          </ul>
        </div>
      </v-expand-transition>

      <Baner caseName="book2" class="mt-6">
        <div class="d-flex align-center title">
          건강설문 결과보기
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
  import Tooltip from '@/components/Tooltip.vue'
  import { ref } from 'vue'

  export default {
    components: { Baner, Tooltip },
    setup() {
      const more = ref(false)
      const resultA = ref({
        img: 'img-check-result01',
        title: '정상A',
        text: '생활 속 건강관리로 지금처럼<br />건강을 유지하세요'
      })
      const resultB = ref({
        img: 'img-check-result02',
        title: '정상B',
        text: '이제 건강한 생활습관을<br />만들어야만 해요'
      })
      const resultC = ref({
        img: 'img-check-result03',
        title: '일반 질환의심',
        text: '전문적이고 꾸준한 관리,<br />추적검사, 진단이 필요해요'
      })
      const resultD = ref({
        img: 'img-check-result03',
        title: '고혈압/당뇨병 질환의심',
        text: '전문적이고 집중적인 관리를 위한<br />전문 검사가 필요해요'
      })
      const resultE = ref({
        img: 'img-check-result04',
        title: '유질환자',
        text: '전문의와 함께<br />꾸준한 치료가 필요해요'
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
        resultE,
        sicks,
        sicks2
      }
    }
  }
</script>
