<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">나의 돌봄 친구</p>
      <p class="desc pt-4 text-grey">
        등록된 돌봄 친구를 삭제 하거나<br />
        돌봄 친구가 약/영양제 미 복용 시 받을 알림설정을<br />
        변경해보세요
      </p>
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

          <template v-slot:append>
            <v-btn icon variant="flat" density="compact" @click="modal = true">
              <img src="/assets/images/icon-more.svg" alt="삭제" />
            </v-btn>
          </template>
        </v-list-item>
      </v-sheet>
    </v-list>

    <DialogSetting
      v-model="modal"
      :btnModify="true"
      @close="modal = false"
      @deleteClick="delFunc"
    />
    <!-- <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="btn-summit"
          >초대 링크 복사</v-btn
        >
      </div>
    </div> -->
  </div>
</template>

<script>
  import { ref } from 'vue'
  import DialogSetting from '@/components/DialogSetting.vue'
  export default {
    components: {
      DialogSetting
    },
    setup() {
      const category = ref('2')
      const modal = ref(false)
      const modalTitle = ref('설정')
      const modalList = ref([
        {
          value: 0,
          text: '수정'
        },
        {
          value: 1,
          text: '삭제'
        }
      ])
      const delFunc = () => {
        alert('삭제')
      }
      const friends = ref([
        {
          title: '$닉네임$님',
          total: 'n',
          num: 'n',
          path: 'img-friend-01'
        },
        {
          title: '$닉네임닉네임닉네임닉네임$님',
          total: 'n',
          num: 'n',
          path: 'img-friend-02'
        },
        {
          title: '$닉네임닉네임닉네임닉네임$님',
          total: 'n',
          num: 'n',
          path: 'img-friend-03'
        },
        {
          title: '$닉네임닉네임닉네임닉네임$님',
          total: 'n',
          num: 'n',
          path: 'img-friend-04'
        }
      ])

      return {
        category,
        friends,
        modal,
        modalTitle,
        modalList,
        delFunc
      }
    }
  }
</script>
