<template>
  <div class="contents">
    <img src="/assets/images/icon-member-error.svg" alt="" />
    <div class="title-area pt-4">
      <p class="subTit-01">홍길동님, <br />탈퇴하기 전 꼭 확인해 주세요</p>
    </div>
    <h2 class="tit-01 mt-7 pb-1 tit-guide">회원 탈퇴 전에 꼭 확인하세요</h2>
    <ul class="list-circle">
      <li class="desc-guide">
        오케어 회원탈퇴 시 회원이 보유하고 있던 포인트 및 건강검진 정보,
        건강설문 정보 등 모든 건강 기록은 모두 소멸되며, 복구가 불가능합니다.
      </li>
      <li class="desc-guide">
        오케어 회원탈퇴 후 재가입하더라도 탈퇴 전의 회원정보, 포인트, 건강검진
        정보, 건강설문 정보, 건강 기록 등은 복구되지 않습니다.
      </li>
      <li class="desc-guide">
        오케어 회원탈퇴 시 회원정보 및 서비스 이용기록은 모두 삭제되며, 삭제된
        데이터는 복구가 불가능합니다. 다만 법력에 의하여 보관해야하는 경우 또는
        서비스 부정이용방지 등을 위한 회사 내부정책에 의하여 보관해야하는 정보는
        회원탈퇴 후에도 일정기간 보관됩니다. 자세한 보관 사유와 보관기간은
        오케어 개인정보 처리방침에서 확인하실 수 있습니다.
      </li>
    </ul>

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
