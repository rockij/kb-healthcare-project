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
        <v-toolbar-title class="modal-title">감정 입력하기</v-toolbar-title>
      </v-toolbar>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="baner-emotion" :class="classOption">
            오늘의 기분
            {{ message }}을 선택하셨네요
            {{ tabNum }}
          </div>
          <h2 class="tit-01 mt-7">감정 선택</h2>
          <div class="tab-line">
            <v-tabs v-model="tabInit" align-tabs="start">
              <v-tab
                v-for="(item, i) in tabItems"
                :key="item"
                :value="i"
                :ripple="false"
              >
                {{ item.title }}
              </v-tab>
            </v-tabs>
            <v-window v-model="tabInit" class="mt-4">
              <v-window-item>
                <div class="list-emoji-box">
                  <div class="emoji-box"><i data-emoji="행복한"></i>행복한</div>
                  <div class="emoji-box"><i data-emoji="신이남"></i>신이남</div>
                  <div class="emoji-box"><i data-emoji="감사한"></i>감사한</div>
                  <div class="emoji-box"><i data-emoji="차분함"></i>차분함</div>
                  <div class="emoji-box"><i data-emoji="개운한"></i>개운한</div>
                </div>
              </v-window-item>
              <v-window-item>
                <div class="list-emoji-box">
                  <div class="emoji-box"><i data-emoji="만족한"></i>만족한</div>
                </div>
              </v-window-item>
              <v-window-item
                ><div class="list-emoji-box">
                  <div class="emoji-box"><i data-emoji="화남"></i>화남</div>
                </div></v-window-item
              >
            </v-window>
          </div>

          <h2 class="tit-01 mt-7">
            다이어리
            <span class="fs-14 text-grey font-weight-medium">(선택)</span>
          </h2>

          <div class="btn-bottom">
            <div class="btn-area d-flex">
              <v-btn
                variant="text"
                height="56"
                class="btn-summit"
                @click="$emit('close')"
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
      const tabInit = ref(0)
      onUpdated(() => {
        tabInit.value = props.tabNum
      })
      return {
        dialog,
        tabInit,
        tabItems
      }
    }
  }
</script>
