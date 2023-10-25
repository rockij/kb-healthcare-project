<template>
  <!-- contents -->
  <div class="contents">
    <div class="title-area pt-7">
      <p class="subTit-01">변경을 원하는<br />이메일을 인증해주세요</p>
    </div>

    <div class="textfield-area autocomplete">
      <v-combobox
        class="input-basic textfield-default"
        label="이메일주소"
        :items="[
          'hong@naver.com',
          'hong@daum.net',
          'hong@gmail.com',
          'hong@nate.com',
          'hong@hanmail.net'
        ]"
        menu-icon=""
        required
        clearable
        type="search"
        placeholder="이메일 주소 입력"
        variant="outlined"
        v-model="email"
        @click:clear="onClear"
        :rules="emailRules"
        :hide-no-data="true"
        return-object
      >
        <template v-slot:append>
          <span class="input-count"
            ><v-btn
              variant="tonal"
              color="primary"
              type="submit"
              class="flex-wrap btn-input-submit"
              v-if="!isActive"
              :disabled="!disable"
              @click="isActive = !isActive"
              >인증</v-btn
            >
            <v-btn
              variant="tonal"
              color="primary"
              :ripple="false"
              class="flex-wrap btn-input-submit"
              v-if="isActive"
              :disabled="!disable"
              >재발송</v-btn
            >
          </span>
        </template>
      </v-combobox>
    </div>
    <div class="textfield-area" v-if="isActive">
      <v-text-field
        class="textfield-default"
        :rules="[
          (v) => !!v || '인증번호를 입력해주세요',
          (v) =>
            (v && v.length <= 4) || '인증번호가 잘못되었습니다. 재요청해주세요'
        ]"
        label="인증번호"
        required
        persistent-placeholder
        clearable
        variant="outlined"
      >
        <span class="input-count">5:00</span>
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
      const email = ref('')
      const disable = ref(false)
      const emailRules = ref([
        (value) => !!value || '이메일을 입력해주세요.',
        (value) => {
          if (
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
              value
            )
          ) {
            disable.value = true
            return true
          } else {
            disable.value = false
            return '옳바른 이메일 양식이 아닙니다.'
          }
        }
      ])
      const onClear = () => {
        disable.value = false
      }
      return { isActive, email, emailRules, disable, onClear }
    }
  }
</script>
