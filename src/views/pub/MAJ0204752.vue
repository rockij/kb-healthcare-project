<template>
  <!-- contents -->
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">
        추가인증을 위해<br />
        정보를 입력해 주세요
      </p>
    </div>

    <div class="textfield-area">
      <v-text-field
        class="input-basic textfield-default"
        v-model="joinCode"
        label="사번"
        required
        persistent-placeholder
        variant="outlined"
        clearable
      >
      </v-text-field>
    </div>
    <div class="textfield-area">
      <v-text-field
        class="input-basic textfield-default"
        v-model="email"
        label="회사 이메일"
        required
        type="email"
        persistent-placeholder
        variant="outlined"
        autocomplete="new-password"
        clearable
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
      const email = ref('')
      const disable = ref(false)

      const onClear = () => {
        disable.value = false
      }
      return { isActive, joinCode, disable, email, onClear }
    }
  }
</script>
