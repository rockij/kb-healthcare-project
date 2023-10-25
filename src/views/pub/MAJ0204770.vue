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
          <v-toolbar-title class="modal-title">해외통관번호</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false" class="btn-modal-close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="modal-body">
          <div class="flex-shrink-0 modal-body-container">
            <div class="textfield-area pt-0">
              <v-text-field
                class="input-basic textfield-default"
                label="해외통관번호"
                required
                clearable
                persistent-placeholder
                variant="outlined"
              >
              </v-text-field>
            </div>
            <div class="checkbox-area">
              <v-checkbox
                v-model="checkedItem"
                :value="item.id"
                v-for="item in agreeItems"
                :key="item.id"
                class="checked-agree"
              >
                <template v-slot:label
                  ><span class="fs-18 font-weight-bold">{{ item.text }}</span>
                  <v-spacer></v-spacer>
                  <v-btn variant="text" class="px-0"
                    ><span class="fs-14 color-ccc">보기</span></v-btn
                  >
                </template>
              </v-checkbox>
            </div>
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

      const agreeItems = reactive([
        {
          id: 1,
          text: '[필수] 개인정보 수집 및 이용동의'
        }
      ])

      return { dialog, notifications, sound, widgets, checkedItem, agreeItems }
    }
  }
</script>
