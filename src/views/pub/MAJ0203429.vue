<template>
  <div class="contents">
    <div class="title-area img-type">
      <p class="subTit-01">처방 조제 내역 불러오면 어떤점이 좋을까요?</p>
      <img
        src="/assets/images/icon-medi-history.png"
        alt=""
        class="icon-medi-top"
      />
    </div>
    <ul class="list-circle mt-6 bg-type">
      <li class="list-circle-item">
        <div class="item-box">
          <span class="text-blue"> 의사/약사와 상담할 때</span> 정확한 약 정보를
          제공 하는 등 유용하게 사용할 수 있어요
        </div>
      </li>
      <li class="list-circle-item">
        <div class="item-box">
          <span class="text-blue"> 오래 전 먹었던 약 정보</span>를 정확하게
          확인할 수 있어요
        </div>
      </li>
    </ul>
    <div class="title-area img-type pt-8">
      <p class="subTit-01">
        간편하게 불러와 <br />
        인증하고 즉시 확인하세요
      </p>
      <p class="desc pt-3 text-grey">
        1년 이내의 처방 조제 내역을 <br />
        간편인증으로 1분 안에 확인 가능합니다
      </p>
      <img
        src="/assets/images/img-medi-history.png"
        alt=""
        class="img-medi-bottom"
      />
    </div>

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="btn-summit"
          >10초만에 간편인증하기</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const list = ref([
        '의사/약사와 상담할 때 정확한 약 정보를 제공하는 등 유용하게 사용할 수 있어요',
        '오래 전 먹었던 약 정보를 정확하게 확인할 수 있어요'
      ])
      return {
        list
      }
    }
  }
</script>
