<template>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="mymedi-img type-02 pt-4">
            <img src="/assets/images/icon-invitation.png" alt="" />
          </div>
          <div class="title-area pt-4">
            <p class="subTit-01">
              <span class="text-blue">$닉네임$</span>님으로부터 <br />
              돌봄 친구 초대를 받았어요
            </p>
            <div class="desc pt-4 text-grey">
              약/영양지를 잊지 않고
              <span class="font-weight-bold">올바르게 복용</span>하도록 <br />
              도와주는 복약 서비스예요 <br />
              <div class="pt-8">
                <span class="font-weight-bold">초대를 수락하면</span> 나의
                약/영양지 복용 현황을 <br />소중한 사람에게 공유하고, 응원을
                받아 볼 수 있어요
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-bottom">
        <div class="btn-area d-flex">
          <v-btn variant="text" height="56" class="btn-cancel">거절하기</v-btn>
          <v-btn
            variant="text"
            height="56"
            class="btn-summit"
            @click="dialog = false"
            >수락하기</v-btn
          >
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const dialog = ref(true)
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
        dialog,
        category,
        friends
      }
    }
  }
</script>
