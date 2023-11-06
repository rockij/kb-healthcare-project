<template>
  <div class="contents pb-0">
    <div class="d-flex align-center">
      <strong class="font-weight-bold fs-24">2022.12.30</strong>
      <v-btn
        variant="flat"
        rounded="lg"
        height="32"
        color="#F2F4F6"
        class="text-primary px-3 ml-2 fs-13 ml-auto"
        @click="modal = true"
        >다른 검진선택</v-btn
      >
    </div>
    <div class="d-flex gap-8 align-center mt-1">
      일반검진
      <v-divider
        class="border-opacity-100 align-self-center"
        :thickness="1"
        color="#eee"
        vertical
        style="height: 14px"
      />
      신촌연세세브란스
    </div>
    <!-- //title -->
    <div class="text-center mt-6">
      <figure class="d-inline-block">
        <img
          width="140"
          height="140"
          src="/src/assets/images/img-health-results01.svg"
          alt=""
        />
      </figure>
      <figcaption class="mt-3">
        <strong class="fs-20 font-weight-700">정상A</strong>
        <p class="mt-1">지금처럼 건강을 유지하세요</p>
      </figcaption>
    </div>
    <div class="text-center mt-6">
      <figure class="d-inline-block">
        <img
          width="140"
          height="140"
          src="/src/assets/images/img-health-results02.svg"
          alt=""
        />
      </figure>
      <figcaption class="mt-3">
        <strong class="fs-20 font-weight-700">정상B</strong>
        <p class="mt-1">이제 건강한 생활습관을 만들어야만 해요</p>
      </figcaption>
    </div>
    <div class="text-center mt-6">
      <figure class="d-inline-block">
        <img
          width="140"
          height="140"
          src="/src/assets/images/img-health-results03.svg"
          alt=""
        />
      </figure>
      <figcaption class="mt-3">
        <strong class="fs-20 font-weight-700">일반 질환의심</strong>
        <p class="mt-1">전문적이고 집중적인 관리가 필요해요</p>
      </figcaption>
    </div>
    <div class="text-center mt-6">
      <figure class="d-inline-block">
        <img
          width="140"
          height="140"
          src="/src/assets/images/img-health-results04.svg"
          alt=""
        />
      </figure>
      <figcaption class="mt-3">
        <strong class="fs-20 font-weight-700">유질환자</strong>
        <p class="mt-1">전문의와 함께 꾸준한 치료가 필요해요</p>
      </figcaption>
    </div>
    <!-- //판정결과 -->
    <div class="title-area2 mt-7">
      <h3 class="tit-03 pb-0">취약항목</h3>
      <div class="tooltip-balloon arrow-left icon-emoji ml-4">
        <span class="text-yellow">오건강님,</span> 이것부터 확인하세요!
      </div>
    </div>
    <div class="d-grid g-tcol-2 g-gap-7 mt-4 mb-8">
      <v-btn
        v-for="list in weakList"
        :key="list.id"
        variant="text"
        class="list-roundbox"
        :data-result="list.category"
      >
        <strong class="tit">{{ list.title }}</strong>
        <p class="text">{{ list.text }}</p>
      </v-btn>
    </div>
    <div class="mt-4 mb-8">
      <h3 class="tit-02 pb-6">나의 취약항목 변화</h3>
      <div class="text-date-list px-4" :class="vulnerableLength">
        <ul class="bar">
          <li v-for="list in vulnerableList" :key="list.id">
            <span class="tooltip-balloon arrow-bottom">{{ list.year }}</span>
            <ul class="list">
              <li :data-name="list.text1">
                {{ list.text1 }}<strong>{{ list.num1 }}</strong>
              </li>
              <li :data-name="list.text2">
                {{ list.text2 }}<strong>{{ list.num2 }}</strong>
              </li>
              <li :data-name="list.text3">
                {{ list.text3 }}<strong>{{ list.num3 }}</strong>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="text-date-list px-4" :class="vulnerable2Length">
        <ul class="bar">
          <li v-for="list in vulnerable2List" :key="list.id">
            <span class="tooltip-balloon arrow-bottom">{{ list.year }}</span>
            <ul class="list">
              <li :data-name="list.text1">
                {{ list.text1 }}<strong>{{ list.num1 }}</strong>
              </li>
              <li :data-name="list.text2">
                {{ list.text2 }}<strong>{{ list.num2 }}</strong>
              </li>
              <li :data-name="list.text3">
                {{ list.text3 }}<strong>{{ list.num3 }}</strong>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- //취약항목 -->
    <div class="section-page">
      <h2 class="tit-03">전체항목</h2>
      <v-card
        variant="flat"
        rounded="xl"
        class="box-rounded-fill pa-6 d-flex justify-space-evenly"
      >
        <div class="emoji-simple">
          <i data-emoji="매우나쁨"></i>
          <span class="text">의심<span class="num">0</span></span>
        </div>
        <v-divider
          class="border-opacity-100 align-self-center mx-7"
          :thickness="1"
          color="#eee"
          style="height: 50px"
          vertical
        />
        <div class="emoji-simple">
          <i data-emoji="나쁨"></i>
          <span class="text">주의<span class="num">0</span></span>
        </div>
        <v-divider
          class="border-opacity-100 align-self-center mx-7"
          :thickness="1"
          color="#eee"
          style="height: 50px"
          vertical
        />
        <div class="emoji-simple">
          <i data-emoji="좋음"></i>
          <span class="text">정상<span class="num">0</span></span>
        </div>
      </v-card>
      <div class="d-grid g-tcol-2 g-gap-20 mt-6">
        <v-btn
          v-for="list in diseaseList"
          :key="list.id"
          variant="text"
          class="list-disease-item"
          :class="`icon-${list.id}`"
          :data-state="list.state"
          >{{ list.text }}</v-btn
        >
      </div>
    </div>
    <!-- //전체항목 -->
    <div class="section-page">
      <h2 class="tit-03">전문가와 함께 관리하세요.</h2>
      <v-btn
        variant="text"
        v-for="list in counselingList"
        :key="list.id"
        class="list-iconlst2 mt-2"
      >
        <i :class="`icon${list.id}`"></i>
        <p>{{ list.text }}</p>
      </v-btn>
    </div>
    <!-- //전문가와 함께 관리하세요 -->

    <MAJ0305800 v-model="modal" @close="modal = false" />
  </div>
</template>
<script>
  import MAJ0305800 from '@/views/pub/MAJ0305830.vue' // 건강검진목록
  import { computed, ref } from 'vue'
  export default {
    components: { MAJ0305800 },
    setup() {
      const weakList = ref([
        {
          id: 1,
          title: '이상지질혈증',
          text: '주의에 2만큼 가까워요.',
          category: '정상'
        },
        {
          id: 2,
          title: '비만',
          text: '지금보다 조금만 더 관리하면 충분해요',
          category: '정상'
        },
        {
          id: 3,
          title: '신장질환',
          text: '증상이 없다고 방치하면 점점 나빠져요',
          category: '정상'
        },
        {
          id: 4,
          title: '시력',
          text: '이제 참지말고 관리를 해야만 해요.',
          category: '의심'
        }
      ])
      const counselingList = ref([
        {
          id: 1,
          text: '당뇨 진료가 가능한 병원'
        },
        {
          id: 2,
          text: '이상지질혈증 진료가 가능한 병원'
        },
        {
          id: 3,
          text: '의료진에게 묻고 싶은 것이 있다면'
        },
        {
          id: 4,
          text: '지금 몸에 특정한 증상이 있다면'
        }
      ])
      const diseaseList = ref([
        {
          id: 1,
          text: '당뇨'
        },
        {
          id: 2,
          text: '고혈압'
        },
        {
          id: 3,
          text: '이상지질혈증'
        },
        {
          id: 4,
          text: '비만'
        },
        {
          id: 5,
          text: '신장질환'
        },
        {
          id: 6,
          text: '간장질환'
        },
        {
          id: 7,
          text: '흉부질환'
        },
        {
          id: 8,
          text: '빈혈'
        },
        {
          id: 9,
          text: '시력'
        },
        {
          id: 10,
          text: '청력'
        },
        {
          id: 11,
          text: '생활습관'
        }
      ])
      const vulnerableList = ref([
        {
          id: 1,
          year: '2018',
          text1: '의심',
          num1: '2',
          text2: '주의',
          num2: '1',
          text3: '정상',
          num3: '8'
        },
        {
          id: 2,
          year: '2023',
          text1: '의심',
          num1: '2',
          text2: '주의',
          num2: '1',
          text3: '정상',
          num3: '8'
        }
      ])
      const vulnerable2List = ref([
        {
          id: 1,
          year: '2018',
          text1: '의심',
          num1: '2',
          text2: '주의',
          num2: '1',
          text3: '정상',
          num3: '8'
        }
      ])
      const vulnerableLength = computed(() => {
        if (vulnerableList.value.length === 2) {
          return 'list-count2'
        }
      })
      const vulnerable2Length = computed(() => {
        if (vulnerable2List.value.length === 1) {
          return 'list-count1'
        }
      })
      const modal = ref()

      return {
        weakList,
        counselingList,
        diseaseList,
        vulnerableList,
        vulnerable2List,
        vulnerableLength,
        vulnerable2Length,
        modal
      }
    }
  }
</script>
