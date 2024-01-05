<template>
  <div class="contents">
    <div class="text-center pt-14">
      <img src="/assets/images/img-dna-commingsoon.svg" alt="" class="vl-top" />
      <div class="mt-4">
        <p>내가 타고난 유전적 능력을 확인할 수 있어요</p>
        <strong class="fs-20 text-primary">coming soon</strong>
      </div>
    </div>
  </div>
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import { ref } from 'vue'

  export default {
    components: {
      Nodata
    },
    setup() {
      const face = ref('기쁘다')
      // '걱정하다',
      // '짜증나다',
      // '슬프다',
      // '무섭다',
      // '후회하다',
      // '우울하다',
      // '불안하다',
      // '창피하다',
      // '외롭다',
      // '심심하다',
      // '당황하다',
      // '긴장하다',
      // '시원섭섭하다',
      // '싱숭생숭하다',
      // '무덤덤하다',
      // '기쁘다',
      // '즐겁다',
      // '편하다',
      // '만족하다',
      // '상쾌하다',
      // '자신만만하다',

      const test = ref([
        {
          new: false,
          stateCd: 'complete',
          testCd: 7,
          title: '마음건강검사',
          result: {
            grade: '3등급',
            text: '스트레스에 시달리거나 우울감이 있나요?<br />정신건강 관련 질문을 통해 마음 건강을 알 수 있어요.'
          }
        },
        {
          new: false,
          stateCd: 'complete',
          testCd: 8,
          title: '성격유형검사',
          result: {
            grade: 'CP-E',
            text: '성격 특성이 내 생활에 미치는 영향을 알아볼 수 있어요<br />직업과 대인관계에 영향을 많이 주는 5가지 특성을 ...'
          }
        },
        {
          new: true,
          stateCd: 'complete',
          testCd: 9,
          title: '성격특질검사',
          result: {
            grade: '성실/끈기',
            text: '행동조절, 정서적인 조절, 대인과의 관계 등 다양한 사회관계 개선에 효율적으로 적용할 수 있어요.'
          }
        }
      ])
      return {
        face,
        test
      }
    }
  }
</script>
