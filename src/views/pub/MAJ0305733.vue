<template>
  <div class="section-map">
    <div class="top-set">
      <v-btn variant="text" class="btn-rfresh">이 지역 재검색</v-btn>
      <v-btn variant="text" class="btn-point" title="현 지도에서 검색"></v-btn>
    </div>
    <!-- [D] 지도가 나와야하는 영역 -->
    <div class="map-area">
      <img src="/assets/images/dummy-map.png" class="dummy" alt="" />
      <v-btn
        variant="text"
        class="point"
        style="top: 100px; left: 100px"
      ></v-btn>
      <v-btn
        variant="text"
        class="point"
        style="top: 110px; left: 110px"
      ></v-btn>
      <v-btn
        variant="text"
        class="point active"
        style="top: 160px; left: 160px"
      ></v-btn>
    </div>
    <!-- //[D] 지도가 나와야하는 영역 -->
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    data() {
      return {}
    },
    setup() {
      return {}
    }
  }
</script>
