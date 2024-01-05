<template>
  <div class="contents">
    <div class="wrap-profile-img">
      <v-img :src="`/assets/images/` + profileImg" :width="80"></v-img>
      <v-btn
        icon="icon-profile-modify"
        variant="flat"
        class="btn-profile-modify"
        @click="modal = true"
      ></v-btn>
    </div>

    <div class="wrap-input-profile mt-8">
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
      <v-textarea
        class="textarea-basic textfield-default pt-4"
        persistent-counter
        :maxlength="1000"
        counter
        variant="outlined"
        no-resize
      >
        <template v-slot:counter="{ value, max }">
          <span class="current-value">{{ value }}</span> /
          <span class="max-length">{{ max }}</span>
        </template>
      </v-textarea>
    </div>

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-summit">확인</v-btn>
      </div>
    </div>
  </div>
  <SelectMAJ0204700
    v-model="modal"
    @close="modal = false"
    @showProfile="dialog = true"
  ></SelectMAJ0204700>
  <MAJ0204710
    v-model="dialog"
    @close="dialog = false"
    v-model:imgSrc="profileImg"
  ></MAJ0204710>
</template>

<script>
  import { ref } from 'vue'
  import SelectMAJ0204700 from './SelectMAJ0204700.vue'
  import MAJ0204710 from './MAJ0204710.vue'

  export default {
    components: { SelectMAJ0204700, MAJ0204710 },

    setup() {
      const modal = ref(false)
      const dialog = ref(false)
      const profileImg = ref('profileimg.jpg')
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
