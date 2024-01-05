<template>
  <div class="contents">
    <div class="bp-check">
      <img src="/assets/images/icon-nodata-lifelog.svg" alt="" />
      <Vue3Lottie animationLink="/assets/images/DeviceConnection.json" />
      <div class="bp-title pt-4">시간이 다소 걸릴 수 있어요</div>
      <div class="bp-desc pt-4">
        <span class="text-blue">나건강</span>님의 소중한 정보를 부지런히
        가져오는 중이니 조금만 기다려주세요~
      </div>
    </div>
    <div class="box-rounded-fill mt-6">
      <ul class="list-circle">
        <li>
          일반건강검진 결과는 건강보험공단에서 제공하는 10년 이내의
          건강검진결과만을 가져오고 있습니다.
        </li>
        <li>
          직장이나 개인적으로 진행하신 종합건강검진 결과 전체는 포함되지
          않습니다.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    setup() {
      return {}
    }
  }
</script>
