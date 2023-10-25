<template>
  <div class="contents">
    <BanerReport :bnShow="'verygood'" :videBox="false" class="mb-4">
      휴레이 메시지 노출 예정
    </BanerReport>
    <BanerReport :bnShow="'good'" :videBox="false" class="mb-4">
      휴레이 메시지 노출 예정
    </BanerReport>
    <BanerReport :bnShow="'normal'" :videBox="false" class="mb-4">
      휴레이 메시지 노출 예정
    </BanerReport>
    <BanerReport :bnShow="'bad'" :videBox="false" class="mb-4">
      휴레이 메시지 노출 예정
    </BanerReport>
    <BanerReport :bnShow="'verybad'" :videBox="false" class="mb-4">
      휴레이 메시지 노출 예정
    </BanerReport>
    <BanerReport :videBox="false" class="mb-4">
      휴레이 메시지가 없을 경우
    </BanerReport>
    <BanerReport :videBox="false" class="mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et
      commodi eum ipsum modi consectetur dolores quod optio veniam quas nemo
      quos vitae quasi voluptates itaque sed, ea officia maxime.
    </BanerReport>
  </div>
</template>
<script>
  import BanerReport from '@/components/BanerReport.vue'
  export default {
    components: {
      BanerReport
    },
    data() {
      return {}
    },
    setup() {
      return {}
    }
  }
</script>
