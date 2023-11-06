<template>
  <div class="contents">
    <BanerReport :bnShow="'verygood'" :videBox="false" class="mb-4">
      매우나쁨_휴레이 메시지 노출 예정
    </BanerReport>
    <BanerReport :bnShow="'verygood'" :videBox="false" class="mb-4">
      <strong class="title">나는 타이틀</strong>
      휴레이 메시지 노출 예정
    </BanerReport>
    <BanerReport :bnShow="'good'" :videBox="false" class="mb-4">
      나쁨_휴레이 메시지 노출 예정
    </BanerReport>
    <BanerReport :bnShow="'normal'" :videBox="false" class="mb-4">
      평균_휴레이 메시지 노출 예정
    </BanerReport>
    <BanerReport :bnShow="'bad'" :videBox="false" class="mb-4">
      좋음_휴레이 메시지 노출 예정
    </BanerReport>
    <BanerReport :bnShow="'verybad'" :videBox="false" class="mb-4">
      매우좋음_휴레이 메시지 노출 예정
    </BanerReport>
    <BanerReport :videBox="false" class="mb-4">
      휴레이 메시지가 없을 경우
    </BanerReport>
    <BanerReport :videBox="false" class="mb-4">
      휴레이 메시지가 2줄까지 노출됩니다 3줄이상은 입력 금지
    </BanerReport>
  </div>
</template>
<script>
  import BanerReport from '@/components/BanerReport.vue'
  export default {
    components: {
      BanerReport
    },
    setup() {
      return {}
    }
  }
</script>
