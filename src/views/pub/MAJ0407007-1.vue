<template>
  <div class="contents certification-photo">
    <div class="challenge-section-content no-division">
      <div class="certification-area">
        <div class="img-box">
          <img src="/src/assets/images/img-sample-photo.png" alt="챌린지 인증 사진형 샘플" />
        </div>
        <div class="btn-area">
          <v-btn variant="text" height="40" class="btn-upload">
            <template v-slot:prepend>
              <img src="@/assets/images/icon-photo-upload.svg" alt="" />
            </template>
            사진변경
          </v-btn>
        </div>
      </div>
    </div>

    <div class="btn-bottom">
      <div class="btn-area d-flex">
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