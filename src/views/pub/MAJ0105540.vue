<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">탈퇴하는 이유가 무엇인가요?</p>
    </div>
    <v-radio-group v-model="radios" class="radio-group-basic pt-7" hide-details>
      <v-radio value="answer01" class="radio-basic">
        <template v-slot:label>
          <div class="radio-label">잘 사용하지 않아요</div>
        </template>
      </v-radio>

      <v-expand-transition>
        <div class="textfield-area pt-0" v-if="radios === 'answer01'">
          <v-textarea
            class="textarea-basic textfield-default"
            placeholder="무엇때문에 사용하지 않나요?"
            v-model="textValue"
            persistent-counter
            :maxlength="100"
            :counter="2"
            variant="outlined"
            no-resize
          >
            <template v-slot:counter="{ value, max }">
              <span class="current-value">{{ value }}</span> /
              <span class="max-length">{{ max }}</span>
            </template>
          </v-textarea>
        </div>
      </v-expand-transition>

      <v-radio
        value="answer02"
        class="radio-basic"
        :class="{ 'mt-n4': radios === 'answer01' }"
      >
        <template v-slot:label>
          <div class="radio-label">혜택이 부족해요</div>
        </template>
      </v-radio>
      <v-radio value="answer03" class="radio-basic">
        <template v-slot:label>
          <div class="radio-label">콘텐츠/프로그램/상품이 부족해요</div>
        </template>
      </v-radio>
      <v-radio value="answer04" class="radio-basic">
        <template v-slot:label>
          <div class="radio-label">개인정보가 불안해요</div>
        </template>
      </v-radio>
      <v-radio value="answer05" class="radio-basic">
        <template v-slot:label>
          <div class="radio-label">오류가 생겨서 쓸 수 없어요</div>
        </template>
      </v-radio>
      <v-radio value="answer06" class="radio-basic">
        <template v-slot:label>
          <div class="radio-label">다른 이유에요</div>
        </template>
      </v-radio>
    </v-radio-group>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          :disabled="textValue == 0"
          >다음</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const textValue = ref('')
      const radios = ref('')
      const active = ref(true)
      const extend = ref(false)
      return {
        textValue,
        radios,
        active,
        extend
      }
    }
  }
</script>
