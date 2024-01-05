<template>
  <!-- contents -->
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">
        관리 멤버에게 받은<br />
        가입코드를 입력해 주세요
      </p>
    </div>

    <div class="textfield-area">
      <v-text-field
        class="input-basic textfield-default"
        v-model="joinCode"
        label="가입코드"
        required
        persistent-placeholder
        variant="outlined"
      >
      </v-text-field>
    </div>

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-summit">확인</v-btn>
      </div>
    </div>
  </div>
  <!-- //contents -->
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const isActive = ref(false)
      const joinCode = ref('')
      const disable = ref(false)

      const onClear = () => {
        disable.value = false
      }
      return { isActive, joinCode, disable, onClear }
    }
  }
</script>
