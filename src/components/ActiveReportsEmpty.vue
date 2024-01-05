<template>
  <div class="active-reports-empty">
    <div class="text">
      {{ state }} 실천하고<br />
      <span class="c-blue">다음달 리포트</span>를 받아보세요
    </div>
  </div>
  <div class="btn-area2">
    <v-btn
      variant="flat"
      height="40px"
      class="bdr-8 fs-14 font-weight-bold"
      color="#FCEBA6"
      block
      >{{ value }} 기록하기</v-btn
    >
  </div>
</template>

<script>
  export default {
    props: ['state', 'value'],
    setup() {
      return {}
    }
  }
</script>
