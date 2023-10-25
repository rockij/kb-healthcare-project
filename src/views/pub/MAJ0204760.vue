<template>
  <!--contents-->
  <div class="contents">
    <v-dialog
      activator
      v-model="dialog"
      fullscreen
      :scrim="true"
      transition="dialog-bottom-transition"
      class="modal-bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props"> Open Dialog </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="white" height="auto">
          <v-toolbar-title class="modal-title">신체정보</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false" class="btn-modal-close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="modal-body">
          <div class="flex-shrink-0 modal-body-container">
            <v-text-field
              class="input-basic textfield-default"
              label="키"
              required
              :rules="rules"
              persistent-placeholder
              clearable
              type="number"
              variant="outlined"
            >
              <span class="input-count">cm</span>
            </v-text-field>
          </div>
        </div>

        <v-card-actions>
          <v-btn height="48px" class="bdr-8 btn-yellow" block
            ><strong>확인</strong></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!--//contents-->
</template>

<script>
  import router from '@/router'
  import { ref, watch, reactive } from 'vue'

  export default {
    setup() {
      const dialog = ref(false)
      const notifications = ref(false)
      const sound = ref(true)
      const widgets = ref(false)
      const checkedItem = ref([])
      const rules = ref([(value) => !!value || '키 정보를 입력해 주세요'])

      const agreeItems = reactive([
        {
          id: 1,
          text: '[필수] 개인정보 수집 및 이용동의'
        }
      ])

      return {
        dialog,
        notifications,
        sound,
        widgets,
        checkedItem,
        agreeItems,
        rules
      }
    }
  }
</script>
