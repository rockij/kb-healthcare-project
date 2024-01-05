<template>
  <div class="contents">
    <v-img
      src="/assets/images/img-note-heart.svg"
      transition="none"
      width="60"
      alt=""
      class="mb-4"
    />
    <div class="title-area pt-0">
      <h2 class="subTit-01">
        건강보험공단에서 제공하는<br />
        <strong class="text-blue">나건강</strong>님의<br />건강검진 결과가
        없습니다.
      </h2>
    </div>
    <BanerSimple
      class="mt-8"
      :color="'#EEF6FF'"
      :iconName="'icon-inspection2.svg'"
    >
      <strong class="fs-18">FAQ 확인하기</strong>
      <p class="mt-1 lh-1 text-grey2">
        올해 혹은 이전 진행한 건강검진의 결과 확인이 안되시나요?
      </p>
    </BanerSimple>
  </div>
</template>
<script>
  import BanerSimple from '@/components/BanerSimple.vue'
  export default {
    components: { BanerSimple },
    setup() {
      function goPath(val) {
        router.push(val)
      }
      return { goPath }
    }
  }
</script>
