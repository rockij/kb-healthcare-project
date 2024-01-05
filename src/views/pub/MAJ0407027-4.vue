<template>
  <div class="contents complete-report">
    <div class="challenge-section-spot">
      <div class="title-area">
        <p class="subTit-01">
          <strong class="text-gray3">혈당</strong> 집중 관리 <br />
          1주 챌린지 완료!
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

    <div class="challenge-section-content content-text-center">
      <h2 class="title-01">혹시 챌린지 진행이 힘드셨나요?</h2>
      <p class="content-desc">
        <span class="point-blue">아쉬운 점</span>을 리뷰에
        <span class="point-blue">작성</span>해주시면, <br />
        홍길동님에게 더 맞는 챌린지를 연구할께요
      </p>
    </div>

    <div class="challenge-section-content no-division">
      <div class="list-iconbtn">
        <ul>
          <li>
            <v-btn variant="text" :href="'javsscript:;'">
              <div class="list-title-content">
                <img
                  src="/assets/images/icon-challenge-extension1.svg"
                  alt=""
                />
                <span class="text">
                  <strong>6주 챌린지로 연장하기</strong>
                </span>
              </div>
              <p class="list-text">
                챌린지 효과를 느낄 수 있는 기간!<br />
                <strong>전문적이고 다양한 Todo를 실천할 수 있어요!</strong>
              </p>
            </v-btn>
          </li>
          <li>
            <v-btn variant="text" :href="'javsscript:;'">
              <div class="list-title-content">
                <img
                  src="/assets/images/icon-challenge-extension2.svg"
                  alt=""
                />
                <span class="text">
                  <strong>12주 챌린지로 연장하기</strong>
                </span>
              </div>
              <p class="list-text">
                3개월 꾸준히 진행하면, 건강습관을 1년 이상 <br />
                유지할 수 있는 확률이 매우 높아져요! <br />
                <strong>고도화된 완성형 챌린지를 경험해 보세요!</strong>
              </p>
            </v-btn>
          </li>
        </ul>
      </div>
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
