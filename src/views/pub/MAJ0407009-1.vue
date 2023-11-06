<template>
  <div class="contents">
    <div class="challenge-section-spot notice-spot">
      <div class="title-area">
        <p class="subTit-01">정말 챌린지를<br /> 포기 하시겠어요?</p>
      </div>
    </div>

    <div class="challenge-section-content no-division">
      <div class="giveup-area">
        <p class="desc text-grey">
          오랜 기간 진행하는 건강관리는 누구나 어려워해요. <br /><br />
          쉬운 챌린지부터 하나씩 실천하면 <br />
          금방 건강습관을 형성하고 변화를 느낄 수 있어요!
        </p>
      </div>
    </div>

    <div class="btn-bottom">
      <div class="btn-area d-flex d-flex-wrap">
        <div class="notice-content">
          <strong class="notice-content-title">유의사항</strong>
          <p class="notice-content-text">
            챌린지를 포기하시면 이어서 진행할 수 없으며 처음부터 <br />
            다시 도전하셔야 합니다.
          </p>
        </div>
        <div class="notice-button-area">
          <v-btn variant="text" height="56px" class="btn-cancle">포기하기</v-btn>
          <v-btn variant="text" height="56px" class="btn-summit">포기하지 않기</v-btn>
        </div>
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