<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">돌봄 친구를 방문해 보세요</p>
      <p class="desc pt-4 text-grey">
        소중한 가족 또는 친구의 약/영양제 복용현황을 <br />
        공유 받고 응원해주세요<br />
        회원 가입된 사용자끼리만 사용 가능합니다
      </p>
    </div>
    <div class="sorting-data py-4 px-6 medicine-sorting type-02 mt-8">
      <v-btn variant="text" density="compact" class="fs-16 px-0">
        총 {{ category }}명
      </v-btn>
      <v-btn
        class="text-date medi-text px-0 setting"
        variant="text"
        density="compact"
        ><img
          src="/assets/images/icon-setting-x3.png"
          alt=""
          class="mr-1"
        />친구관리</v-btn
      >
    </div>
    <v-list lines="one" class="list-round-box mt-6 friends-list">
      <!-- <v-list-subheader>{{ item.name }}</v-list-subheader> -->
      <v-sheet
        class="mx-auto round-box-container"
        v-for="item in friends"
        :key="item"
      >
        <v-list-item
          :prepend-avatar="'/assets/images/' + item.path + '.png'"
          class="list-round-box-items"
          tag="button"
          role="button"
        >
          <template v-slot:title>{{ item.title }}</template>
          <template v-slot:subtitle
            >총 <span class="num-blue">{{ item.total }}</span
            >건 중 <span class="num-blue">{{ item.num }}</span
            >건 복용 완료</template
          >
          <template v-slot:append>
            <v-btn
              :ripple="false"
              variant="flat"
              class="text-btn btn-grey px-3 bdr-8"
              height="32"
              >방문</v-btn
            >
          </template>
        </v-list-item>
      </v-sheet>
    </v-list>

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="btn-summit"
          >초대 링크 복사</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const category = ref('2')

      const friends = ref([
        {
          //name: '연결된 기기',
          title: '$닉네임$님',
          total: 'n',
          num: 'n',
          path: 'img-friend-01'
        },
        {
          //name: '연결된 기기',
          title: '$닉네임닉네임닉네임닉네임$님',
          total: 'n',
          num: 'n',
          path: 'img-friend-02'
        }
      ])

      return {
        category,
        friends
      }
    }
  }
</script>
