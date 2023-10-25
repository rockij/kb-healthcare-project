<template>
  <div class="contents pb-10">
    <header class="sticky-top pb-5">
      <div class="bside-area mt-n6">
        <v-btn variant="text" class="btn-map">강남구 삼성동</v-btn>
        <span class="float-right">
          <v-btn variant="text" class="btn-myhos">내 병원</v-btn>
          <v-btn variant="text" class="btn-siren">응급실</v-btn>
        </span>
      </div>
      <div class="tabs-simple type1 mt-3">
        <v-btn
          variant="text"
          @click="dialog = true"
          class="btn-filter"
          title="필터"
          data-num="6"
        />
        <v-btn variant="text" class="active">이비인후과</v-btn>
        <v-btn variant="text">증상/질환</v-btn>
        <v-divider vertical />
        <v-btn variant="text" class="btn-clinic">진료중</v-btn>
      </div>
    </header>
    <Nodata :icon="true">
      <div class="fs-16">검색결과가 없습니다<br />조건을 변경해주세요</div>
    </Nodata>
  </div>
</template>
<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  export default {
    components: { Nodata }
  }
</script>
