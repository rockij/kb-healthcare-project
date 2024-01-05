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
          icon: 'icon-certified2-species',
          text: '<span class="text-black">네이버 본인인증 진행</span><br/><span class="text-blue">Push 메시지 확인</span> 하기'
        },
        {
          icon: 'icon-certified2-nv',
          text: '<strong class="text-black fs-18">네이버 앱에서</strong><br/>본인인증 진행하기'
        },
        {
          icon: 'icon-certified2-logo',
          text: '<strong class="text-black fs-18">오케어X 앱에서</strong><br/>아래 <span class="text-blue">인증완료 버튼</span> 선택'
        }
      ])
      return { treeList }
    }
  }
</script>
