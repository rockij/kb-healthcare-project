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
        <div class="certification-answer-area">
          <img src="/src/assets/images/icon-answer1.svg" alt="오답 아이콘 이미지" />
          <div class="answer-text-area">
            <strong class="answer-title">
              아쉽지만 오답입니다.
            </strong>
            <p class="answer-text">
              다시 한번만 더 생각해 보세요!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="btn-bottom">
      <div class="btn-area d-flex d-flex-wrap">
        <p class="completion-text">‘확인' 버튼을 누르셔야 인증이 정상적으로 완료 됩니다.</p>
        <!-- 버튼 비활성 disabled 추가 -->
        <v-btn variant="text" height="56px" class="btn-summit" disabled>확인</v-btn>
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