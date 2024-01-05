<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">
        개정정보 보호를 위해 <br />
        유효기간을 선택해 주세요
      </p>
      <p class="desc pt-4">
        개인정보 유효기간 안에 서비스를 이용하지 않을 경우 자동으로 탈퇴됩니다
      </p>
    </div>
    <v-btn
      block
      variant="outlined"
      rounded="lg"
      height="48"
      :ripple="false"
      class="btn-search shadow-none mt-7"
      color="#26282C"
      @click="modal = true"
    >
      <span class="text type-3">
        2년
        <img src="/assets/images/icon-arrow-down2.svg" alt="검색" />
      </span>
    </v-btn>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          @click.stop="snackbar = true"
          >확인</v-btn
        >
      </div>
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
