<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">프로필을 만들어보세요!</p>
      <p class="desc pt-4 c-gray">
        나와 같은 건강 관심사를 가진 사람들과 소통할<br />
        나만의 프로필이에요
      </p>
    </div>
    <div class="wrap-profile-img mt-9">
      <v-img :src="`/assets/images/` + profileImg" :width="80"></v-img>
    </div>

    <div class="wrap-input-profile mt-5">
      <v-text-field
        :rules="rules"
        v-model="nickName"
        label="닉네임"
        class="input-hint textfield-default"
        placeholder=""
        required
        persistent-placeholder
        variant="outlined"
        clearable
      ></v-text-field>
      <div class="box-rounded-fill mt-7">
        <ul class="list-circle">
          <li>닉네임은 최대 10자까지 설정할 수 있어요</li>
          <li>닉네임에 포함된 동물 이미지가 자동으로 부여돼요</li>
          <li>
            로그인 후 마이페이지 > 나의 정보 > 프로필 관리 에서 수정할 수 있어요
          </li>
        </ul>
      </div>
    </div>

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-summit"
          >건강한 오늘 시작하기</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const modal = ref(false)
      const dialog = ref(false)
      const profileImg = ref('img-profile01.svg')
      const nickName = ref('')

      const rules = ref([
        // (value) => !!value || 'Required.',
        (value) => {
          if (value?.length > 2 && value?.length < 11) return true
          return '한글 또는 영문, 숫자로 2~11자 작성하세요'
        }
      ])
      return { rules, modal, dialog, profileImg, nickName }
    }
  }
</script>
