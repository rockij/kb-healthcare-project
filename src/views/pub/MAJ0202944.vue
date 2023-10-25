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
        <v-toolbar-title class="modal-title">사랑일</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="tabs-simple2">
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
          <v-expand-transition>
            <div class="tabs-simple2 pt-4" v-if="selBtn.value === 2">
              <v-btn
                variant="text"
                class="fs-16"
                v-for="item in hiddenBtn"
                :key="item.value"
                :aria-selected="selBtn2 === item"
                @click="selBtn2 = item"
              >
                {{ item.text }}
              </v-btn>
            </div>
          </v-expand-transition>
        </div>
      </div>

      <v-card-actions>
        <v-btn height="48" class="bdr-8 btn-yellow" block @click="onClicked"
          >확인</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, reactive, computed } from 'vue'

  export default {
    props: ['modal'],
    emits: ['update', 'close'],
    setup(props, context) {
      const { emit } = context
      const selBtn = ref({})
      const selBtn2 = ref({})

      const btns = reactive([
        {
          value: 1,
          text: '피임 안함'
        },
        {
          value: 2,
          text: '피임 함'
        }
      ])

      const hiddenBtn = reactive([
        {
          value: 1,
          text: '콘돔'
        },
        {
          value: 2,
          text: '자궁 내 장치'
        },
        {
          value: 3,
          text: '다른 방법'
        }
      ])

      const dialog = computed({
        // getter
        get(val) {
          return val
        },
        // setter
        set(newVal) {
          newVal = val
        }
      })

      function onClicked() {
        emit('update', selBtn.value.text, selBtn2.value.text, 1)
      }

      return {
        dialog,
        selBtn,
        selBtn2,
        btns,
        hiddenBtn,
        onClicked
      }
    }
  }
</script>
