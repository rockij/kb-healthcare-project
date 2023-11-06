<template>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">먹는 주기</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark class="btn-modal-close" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-0">
        <div class="flex-shrink-0 modal-body-container">
          <v-text-field
            class="input-basic textfield-default"
            label="수량"
            required
            persistent-placeholder
            placeholder="소수점 두자리까지 입력 가능"
            variant="outlined"
          >
          </v-text-field>

          <div class="unit-wrap pt-4">
            <div class="medialarm-subtit">단위</div>
            <div class="tabs-simple2 pt-2">
              <v-btn
                variant="text"
                class="fs-16"
                v-for="btn in btns"
                :key="btn.value"
                :aria-selected="selBtn === btn"
                @click="selBtn = btn"
                >{{ btn.text }}</v-btn
              >
            </div>
          </div>

          <div class="agree-items mt-4 medi-check">
            <v-checkbox
              v-model="checkedItem"
              :value="item.id"
              v-for="item in agreeItems"
              :key="item.id"
              class="checked-agree checked-sub"
            >
              <template v-slot:label
                >{{ item.text }}
                <v-spacer></v-spacer>
                <a target="_blank" href="" @click.stop>
                  <v-icon>mdi-chevron-right</v-icon></a
                >
              </template>
            </v-checkbox>
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn height="48" class="bdr-8 btn-yellow mt-6" block>저장하기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const dialog = ref(false)
      const checkedItem = ref([])
      const selBtn = ref({})
      const btns = reactive([
        {
          value: 1,
          text: '정'
        },
        {
          value: 2,
          text: '캡슐'
        },
        {
          value: 3,
          text: '포'
        },
        {
          value: 4,
          text: 'ml'
        },
        {
          value: 5,
          text: '개'
        },
        {
          value: 6,
          text: '방울'
        },
        {
          value: 7,
          text: '스푼'
        }
      ])
      const agreeItems = reactive([
        {
          id: 1,
          text: '먹는 약 아님(연고, 인공눈물, 파스 등)'
        }
      ])

      return {
        agreeItems,
        checkedItem,
        selBtn,
        btns,
        dialog
      }
    }
  }
</script>
