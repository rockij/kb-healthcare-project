<template>
  <div class="contents pb-0">
    <div class="layout-half-col pt-3">
      <div class="half-top">
        <div class="title-area">
          <p class="subTit-01">증상 검색 대상을 선택하세요</p>
          <v-btn variant="text" class="slink">신체명칭 선택</v-btn>
        </div>
      </div>
      <!-- //타이틀 -->
      <div class="half-body figure-body-wrap">
        <BodyPenel :gender="'woman'" />
      </div>
      <!-- //신체선택 -->
    </div>
  </div>
</template>
<script>
  import BodyPenel from '@/views/pub/MAJ0305670-b.vue'
  export default {
    components: { BodyPenel }
  }
</script>
