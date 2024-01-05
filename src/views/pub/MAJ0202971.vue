<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    persistent
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-spacer></v-spacer>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        />
      </v-toolbar>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="tit-emotion fs-20 font-weight-bold" :class="classOption">
            {{ message }}을 선택하셨네요
          </div>
          <h2 class="tit-02 mt-6">어떤 감정을 느끼셨나요?</h2>
          <div class="tabs-roundbox mt-1">
            <div v-if="tabInit === 0" class="d-grid g-tcol-3 g-gap-16">
              <v-btn
                variant="text"
                height="auto"
                class="emoji-box"
                v-for="(item, i) in goodList"
                :key="i"
                :aria-selected="selBtn === item"
                @click="selBtn = item"
              >
                <i :data-emoji="item.text"></i>{{ item.text }}
              </v-btn>
            </div>
            <!-- //긍정 -->
            <div v-if="tabInit === 1" class="d-grid g-tcol-3 g-gap-16">
              <v-btn
                variant="text"
                height="auto"
                class="emoji-box"
                v-for="(item, i) in normalList"
                :key="i"
                :aria-selected="selBtn === item"
                @click="selBtn = item"
              >
                <i :data-emoji="item.text"></i>{{ item.text }}
              </v-btn>
            </div>
            <!-- //보통 -->
            <div v-if="tabInit === 2" class="d-grid g-tcol-3 g-gap-16">
              <v-btn
                variant="text"
                height="auto"
                class="emoji-box"
                v-for="(item, i) in badList"
                :key="i"
                :aria-selected="selBtn === item"
                @click="selBtn = item"
              >
                <i :data-emoji="item.text"></i>{{ item.text }}
              </v-btn>
            </div>
            <!-- //부정 -->
          </div>

          <h2 class="tit-01 mt-6">
            다이어리
            <span class="fs-14 text-grey font-weight-medium">(선택)</span>
          </h2>

          <v-textarea
            class="textarea-basic textfield-default"
            placeholder="입력텍스트"
            persistent-counter
            :maxlength="1000"
            counter
            variant="outlined"
            no-resize
            v-model="textareaValue"
          >
            <template v-slot:counter="{ value, max }">
              <span class="current-value">{{ value }}</span> /
              <span class="max-length">{{ max }}</span>
            </template>
          </v-textarea>

          <div class="btn-bottom">
            <div class="btn-area d-flex">
              <v-btn
                variant="text"
                height="56"
                class="btn-summit"
                @click="$emit('close')"
                :disabled="textareaValue.length == ''"
                >확인</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import { onUpdated, ref } from 'vue'
  export default {
    props: ['message', 'classOption', 'tabNum'],
    emits: ['close'],
    setup(props) {
      const dialog = ref()
      const tabItems = ref([
        { title: '긍정' },
        { title: '보통' },
        { title: '부정' }
      ])
      const goodList = ref([
        { text: '자신만만하다' },
        { text: '상쾌하다' },
        { text: '만족하다' },
        { text: '편하다' },
        { text: '즐겁다' },
        { text: '기쁘다' }
      ])
      const normalList = ref([
        { text: '무덤덤하다' },
        { text: '싱숭생숭하다' },
        { text: '시원섭섭하다' },
        { text: '긴장하다' },
        { text: '당황하다' },
        { text: '심심하다' }
      ])
      const badList = ref([
        { text: '외롭다' },
        { text: '창피하다' },
        { text: '불안하다' },
        { text: '우울하다' },
        { text: '후회하다' },
        { text: '무섭다' },
        { text: '슬프다' },
        { text: '짜증나다' },
        { text: '걱정하다' }
      ])
      const selBtn = ref({})
      const tabInit = ref(0)
      const textareaValue = ref('')
      onUpdated(() => {
        tabInit.value = props.tabNum
      })
      return {
        dialog,
        tabInit,
        tabItems,
        textareaValue,
        goodList,
        normalList,
        badList,
        selBtn
      }
    }
  }
</script>
