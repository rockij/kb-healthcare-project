<template>
  <div class="contents">
    <div class="challenge-section-spot">
      <div class="title-area">
        <p class="subTit-01">다음 중 당류 함량이 낮은<br /> 영양성분표를 고르세요!</p>
      </div>
    </div>

    <div class="challenge-section-content no-division">
      <div class="certification-area">
        <div class="list-thumb">
          <ul class="quiz-list">
            <li>
              <v-btn variant="text" :href="'javsscript:;'">
                <img src="/src/assets/images/dummy-thumb.jpg" alt="" />
              </v-btn>
            </li>
            <li>
              <v-btn variant="text" :href="'javsscript:;'">
                <img src="/src/assets/images/dummy-thumb.jpg" alt="" />
              </v-btn>
            </li>
          </ul>
        </div>
        <!-- 오답 wrong-answer / 정답 correct-answer 클래스 추가 -->
        <div class="certification-answer-area correct-answer">
          <img src="/src/assets/images/icon-answer2.svg" alt="정답 아이콘 이미지" />
          <div class="answer-text-area">
            <strong class="answer-title">
              짝짝짝, 정답입니다..
            </strong>
            <p class="answer-text">
              단백질 섭취가 부족하면 근육이 감소하여 요요의 원인이 됩니다. 
              따라서 근육의 유지 및 증가를 위해서는 단백질을 필수로 섭취해야 합니다.!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="btn-bottom">
      <div class="btn-area d-flex d-flex-wrap">
        <p class="completion-text">‘확인' 버튼을 누르셔야 인증이 정상적으로 완료 됩니다.</p>
        <!-- 버튼 비활성 disabled 추가 -->
        <v-btn variant="text" height="56px" class="btn-summit">확인</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup(props) {
      return { 
      }
    }
  }
</script>