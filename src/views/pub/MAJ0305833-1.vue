<template>
  <div class="contents">
    <div class="title-area">
      <h2 class="subTit-01">
        아래 순서대로 인증을<br />
        진행해 주세요
      </h2>
    </div>
    <div class="list-tree-number mt-8">
      <ol>
        <template v-for="(list, i) in treeList" :key="i">
          <li>
            <div class="icon-text">
              <v-img
                width="40"
                height="40"
                transition="none"
                class="flex-0-0 mr-2"
                :src="`/assets/images/${list.icon}.png`"
              />
              <span v-html="list.text" class="fs-16 stext"></span>
            </div>
            <div v-if="list.tel === true" class="tel-select mt-4">
              <div class="tabs-simple2">
                <v-btn
                  variant="flat"
                  class="fs-16"
                  v-for="(btn, i) in telBtns"
                  :key="i"
                  :aria-selected="selBtn === btn"
                  @click="selBtn = btn"
                  :ripple="false"
                  >{{ btn.text }}</v-btn
                >
              </div>
              <v-btn
                block
                variant="flat"
                rounded="lg"
                height="40"
                :color="selBtn === null ? '#f8f8f8' : '#FCEBA6'"
                class="px-3 fs-15 mt-4"
                :class="selBtn === null ? 'disabled' : ''"
                ><span :class="selBtn === null ? 'text-grey5' : 'text-grey2'"
                  >통신사 간편인증 진행</span
                ></v-btn
              >
            </div>
          </li>
        </template>
      </ol>
    </div>
    <div class="btn-bottom">
      <div class="btn-area">
        <v-btn variant="text" height="56" class="btn-summit" disabled
          >인증 완료</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const treeList = ref([
        {
          icon: 'icon-certified2-pss2',
          text: '<strong class="text-black fs-18">가입된 <span class="text-blue">통신사 선택</span> 후</strong><br/>간편인증 진행 버튼 선택',
          tel: true
        },
        {
          icon: 'icon-certified2-pass',
          text: '<strong class="text-black fs-18">통신사 PASS 앱에서</strong><br/><span class="text-blue">본인인증 진행</span>하기',
          btn: true
        },
        {
          icon: 'icon-certified2-logo',
          text: '<strong class="text-black fs-18">오케어X 앱에서</strong><br/>아래 <span class="text-blue">인증완료 버튼</span> 선택'
        }
      ])
      const selBtn = ref(null)
      const telBtns = ref([
        {
          text: 'SKT'
        },
        {
          text: 'KT'
        },
        {
          text: 'LG U+'
        }
      ])
      return { treeList, telBtns, selBtn }
    }
  }
</script>
