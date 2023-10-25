<template>
  <div class="contents">
    <img src="@/assets/images/icon-member-error.svg" alt="" />
    <div class="title-area pt-4">
      <p class="subTit-01">홍길동님, <br />탈퇴하기 전 꼭 확인해 주세요</p>
    </div>
    <h2 class="tit-01 mt-7 tit-guide">오케어 회원 탈퇴 안내</h2>
    <div class="desc-guide">
      탈퇴관련내용이 추가 예정입니다 탈퇴관련 내용내용이 입력 될 예정입니다.
      탈퇴관련 내용이 입력 될 예정입니다. 내용이 수급되면 등록 가능합니다. 탈퇴
      하지말아주세요.
    </div>
    <div class="pt-4">
      <v-checkbox
        v-model="checkedItem"
        :value="item.id"
        v-for="item in agreeItems"
        :key="item.id"
        class="checked-agree member-agree"
      >
        <template v-slot:label
          >{{ item.text }}
          <v-spacer></v-spacer>
          <a target="_blank" href="https://vuetifyjs.com" @click.stop></a>
        </template>
      </v-checkbox>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-summit">탈퇴하기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    setup() {
      const checkedItem = ref([])
      const agreeItems = reactive([
        {
          id: 1,
          text: '[필수] 위 내용을 모두 확인하였습니다'
        }
      ])
      return {
        checkedItem,
        agreeItems
      }
    }
  }
</script>
