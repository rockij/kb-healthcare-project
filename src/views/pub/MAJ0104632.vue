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
        <v-toolbar-title class="modal-title">카테고리 선택</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <v-btn
            variant="text"
            block
            v-for="btn in btns"
            :key="btn.value"
            class="btn-list-block"
            @click="onClicked(btn)"
          >
            {{ btn.text }}
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, computed } from 'vue'
  export default {
    setup(props, context) {
      const { emit } = context
      const selBtn = ref({})
      const btns = ref([
        {
          value: 0,
          text: '일반'
        },
        {
          value: 1,
          text: '건강검진'
        },
        {
          value: 2,
          text: '루틴'
        },
        {
          value: 3,
          text: '혜택'
        },
        {
          value: 4,
          text: '챌린지'
        }
      ])
      const dialog = computed({
        get(val) {
          return val
        },
        set(newVal) {
          newVal = val
        }
      })
      function onClicked(btn) {
        emit('update', btn)
      }
      return {
        dialog,
        selBtn,
        btns,
        onClicked
      }
    }
  }
</script>
