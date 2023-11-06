<template>
  <div class="contents">
    <Nodata :icon="true" :iconSize="'big'" :iconType="'error'">
      <p class="fs-16 font-weight-bold">
        서비스 이용에 불편을 드려 죄송합니다.
      </p>
      <p class="text-grey">잠시 후 다시 이용해 주세요</p>
    </Nodata>
    <div class="btn-bottom">
      <div class="btn-area">
        <p class="text-grey fs-14 text-center lh-0 mb-8">
          지속적으로 발생 시<br />고객센터 1111-0000으로 연락바랍니다.
        </p>
        <v-btn variant="text" width="100%" height="56" class="btn-summit"
          >확인</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  export default {
    components: { Nodata },
    setup() {
      return {}
    }
  }
</script>
