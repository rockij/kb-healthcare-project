<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">약관 동의</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="agree-group">
            <v-checkbox
              v-model="checkAll"
              label="전체동의"
              class="checked-agree checked-all mt-1"
            ></v-checkbox>
            <div class="agree-items type-2 mt-1">
              <v-checkbox
                v-model="checkedItem"
                :value="item.id"
                v-for="item in agreeItems"
                :key="item.id"
                class="checked-agree checked-sub"
              >
                <template v-slot:label>
                  <span>
                    <template v-if="item.require">[필수]</template>
                    <template v-else>[선택]</template>
                    {{ item.text }}
                  </span>
                  <a
                    target="_blank"
                    href="https://vuetifyjs.com"
                    class="text-link"
                  >
                    보기
                  </a>
                </template>
              </v-checkbox>
            </div>
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn height="48" class="bdr-8 btn-yellow" block>확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, reactive, computed } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)
      const checkedItem = ref([])
      const agreeItems = reactive([
        {
          id: 1,
          require: true,
          text: '신용관리 서비스 이용약관'
        },
        {
          id: 2,
          require: true,
          text: 'NICE 신용관리서비스 약관'
        },
        {
          id: 3,
          require: true,
          text: '개인(신용)정보 수집·이용·제공 동의(신용관리서비스용)'
        },
        {
          id: 4,
          require: true,
          text: '개인(신용)정보 수집·이용·제공 동의(NICE신용관리서비스용)'
        }
      ])

      const checkAll = computed({
        get() {
          return checkedItem.value.length === agreeItems.length
        },
        set(value) {
          checkedItem.value = []
          if (value) {
            for (let i = 1; i <= agreeItems.length; i++) {
              checkedItem.value.push(i)
            }
          }
        }
      })

      return {
        dialog,
        checkedItem,
        agreeItems,
        checkAll
      }
    }
  }
</script>
