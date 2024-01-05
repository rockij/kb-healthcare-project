<template>
  <div class="contents">
    <v-img
      src="/assets/images/img-note-heart.svg"
      transition="none"
      width="60"
      alt=""
      class="mb-4"
    />
    <div class="title-area">
      <h2 class="subTit-01">
        최근에 업데이트된<br />
        <strong class="text-blue">나건강</strong>님의<br />건강검진 결과가
        없습니다.
      </h2>
    </div>
    <div class="text-grey mt-4">
      건강검진을 진행하신 센터에 따라 건강검진 진행 후 결과 업데이트까지
      소요되는 시간이 다를 수 있습니다.
      <p class="mt-5">
        가까운 시일 내에 다시 한 번 건강검진결과 업데이트를 실시하시길 권장
        드려요
      </p>
    </div>
    <div class="btn-bottom">
      <div class="btn-area">
        <v-btn block variant="text" height="56" class="btn-summit"
          >현재 건강검진 결과 보기</v-btn
        >
      </div>
    </div>
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
