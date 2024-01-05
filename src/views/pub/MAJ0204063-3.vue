<template>
  <div class="contents complete-report">
    <div class="challenge-section-spot">
      <div class="title-area">
        <p class="subTit-01">
          <strong class="text-gray3">지난주보다 많이 걷기</strong> <br />
          2주 챌린지 완료!
        </p>
        <p class="desc">아쉬워요, 많이 바쁘셨나봐요</p>
      </div>

      <!-- 도넛 차트 영역 -->
      <div style="position: relative">
        <div class="complet-chart">
          <div
            style="
              background-color: #d9d9d9;
              width: 12rem;
              height: 12rem;
              margin: 0 auto;
              border-radius: 50%;
            "
          ></div>
          <!-- 그린 영역 -->
          <!-- <div class="complet-chart-content">
            <img src="/assets/images/icon-progress-rate3.svg" alt="" />
            <strong class="complet-chart-text">
              <span class="text-green">90%</span> 달성
            </strong>
          </div> -->
          <!-- // 그린 영역 -->

          <!-- 오렌지 영역 -->
          <!-- <div class="complet-chart-content">
            <img src="/assets/images/icon-progress-rate2.svg" alt="" />
            <strong class="complet-chart-text">
              <span class="text-orange">65%</span> 달성
            </strong>
          </div> -->
          <!-- // 오렌지 영역 -->

          <!-- 레드 영역 -->
          <!-- <div class="complet-chart-content">
            <img src="/assets/images/icon-progress-rate1.svg" alt="" />
            <strong class="complet-chart-text">
              <span class="text-red">15%</span> 달성
            </strong>
          </div> -->
          <!-- // 레드 영역 -->

          <!-- 그레이 영역 -->
          <div class="complet-chart-content">
            <img src="/assets/images/icon-progress-rate4.svg" alt="" />
            <strong class="complet-chart-text">
              <span class="text-gray3">0%</span> 달성
            </strong>
          </div>
          <!-- // 그레이 영역 -->
        </div>
      </div>
      <!-- // 도넛 차트 영역 -->
    </div>

    <div class="challenge-section-content no-division content-text-center">
      <h2 class="title-01">혹시 챌린지 진행이 힘드셨나요?</h2>
      <p class="content-desc">
        <span class="point-blue">아쉬운 점</span>을 리뷰에
        <span class="point-blue">작성</span>해주시면, <br />
        홍길동님에게 더 맞는 챌린지를 연구할께요
      </p>
    </div>

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-summit"
          >리뷰 작성하기</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      return {}
    }
  }
</script>
