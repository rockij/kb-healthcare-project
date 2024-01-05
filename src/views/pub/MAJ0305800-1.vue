<template>
  <div class="contents pb-0">
    <div class="d-flex align-center pt-3">
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
    <MAJ0305805
      :img-name="'img-check-result02.png'"
      :title="'정상B'"
      :text="'이제 건강한 생활습관을 만들어야만 해요'"
    />
    <!-- //title -->

    <!-- //판정결과 -->
    <h3 class="tit-03 mt-6 lh-4">
      오건강님,<br /><span class="text-blue">취약항목</span>부터 확인해보세요!
    </h3>
    <MAJ0305803 :lists="weakList" />
    <div class="mt-4 mb-8">
      <h3 class="tit-03">나의 취약항목 변화</h3>
      <MAJ03058004 />
    </div>
    <!-- //취약항목 -->
    <div class="section-page">
      <h2 class="tit-03">전체항목</h2>
      <MAJ0305804 :lists="diseaseList" />
    </div>
    <!-- //전체항목 -->
    <div class="section-page">
      <h2 class="tit-03">전문가와 함께 관리하세요.</h2>
      <v-btn
        variant="text"
        v-for="(list, i) in counselingList"
        :key="i"
        class="list-iconlst2 mt-2"
      >
        <v-img
          :src="`/assets/images/${list.icon}`"
          class="icon"
          alt=""
          transition="none"
        />
        <p>{{ list.text }}</p>
      </v-btn>
    </div>
    <!-- //전문가와 함께 관리하세요 -->

    <MAJ0305830 v-model="modal" @close="modal = false" />
  </div>
</template>
<script>
  import MAJ0305830 from '@/views/pub/MAJ0305830.vue' // 건강검진목록
  import MAJ0305805 from '@/views/pub/MAJ0305805.vue' // 판정결과
  import MAJ03058004 from '@/views/pub/MAJ0305800-4.vue' // 나의취약항목변화
  import MAJ0305803 from '@/views/pub/MAJ0305803.vue'
  import MAJ0305804 from '@/views/pub/MAJ0305804.vue' // 전체항목
  import { ref } from 'vue'
  export default {
    components: { MAJ0305830, MAJ0305805, MAJ03058004, MAJ0305803, MAJ0305804 },
    setup() {
      const weakList = ref([
        {
          title: '당뇨',
          text: '무조건 관리에 들어가야 해요!!',
          category: '의심'
        },
        {
          title: '빈혈',
          text: '이제 참지말고 관리를 해야만 해요.',
          category: '주의'
        },
        {
          title: '이상지질혈증',
          text: '주의에 2만큼 가까워요.',
          category: '정상'
        },
        {
          title: '비만',
          text: '지금보다 조금만 더 관리하면 충분해요',
          category: '주의'
        },
        {
          title: '신장질환',
          text: '증상이 없다고 방치하면 점점 나빠져요',
          category: '정상'
        },
        {
          title: '시력',
          text: '이제 참지말고 관리를 해야만 해요.',
          category: '정상'
        }
      ])
      const counselingList = ref([
        {
          text: '당뇨 진료가 가능한 병원',
          icon: 'icon-hospital2.svg'
        },
        {
          text: '이상지질혈증 진료가 가능한 병원',
          icon: 'icon-hospital2.svg'
        },
        {
          text: '의료진에게 묻고 싶은 것이 있다면',
          icon: 'icon-doctor2.svg'
        },
        {
          text: '지금 몸에 특정한 증상이 있다면',
          icon: 'icon-doctor-note.svg'
        }
      ])
      const diseaseList = ref([
        {
          icon: 'icon-disease01.png',
          text: '당뇨',
          state: '주의'
        },
        {
          icon: 'icon-disease02.png',
          text: '고혈압'
        },
        {
          icon: 'icon-disease03.png',
          text: '이상지질혈증'
        },
        {
          icon: 'icon-disease04.png',
          text: '비만'
        },
        {
          icon: 'icon-disease05.png',
          text: '신장질환'
        },
        {
          icon: 'icon-disease06.png',
          text: '간장질환'
        },
        {
          icon: 'icon-disease07.png',
          text: '흉부질환',
          state: '의심'
        },
        {
          icon: 'icon-disease08.png',
          text: '빈혈'
        },
        {
          icon: 'icon-disease09.png',
          text: '시력',
          state: '주의'
        },
        {
          icon: 'icon-disease010.png',
          text: '청력'
        },
        {
          icon: 'icon-disease011.png',
          text: '생활습관'
        }
      ])
      const modal = ref()

      return {
        weakList,
        counselingList,
        diseaseList,
        modal
      }
    }
  }
</script>
