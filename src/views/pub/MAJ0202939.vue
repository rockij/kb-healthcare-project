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
        <v-toolbar-title class="modal-title">태아의 상태</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark class="btn-modal-close" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-0">
        <div class="flex-shrink-0 modal-body-container px-6">
          <div class="textfield-area body-calendar pt-4 d-flex">
            <v-text-field
              class="input-basic textfield-default suffix"
              label="키"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="키 입력"
              v-model="editedItem.height"
              type="number"
              clearable
            >
              <template v-slot:append-inner>cm</template>
            </v-text-field>

            <v-text-field
              class="input-basic textfield-default suffix"
              label="몸무게"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="몸무게 입력"
              v-model="editedItem.weight"
              type="number"
              clearable
            >
              <template v-slot:append-inner>kg</template>
            </v-text-field>
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn
          height="48"
          class="bdr-8 btn-yellow"
          block
          @click="onClicked"
          :disabled="!editedItem"
          >확인</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, computed } from 'vue'

  export default {
    props: ['modal'],
    emits: ['update', 'close'],
    setup(props, context) {
      const { emit } = context

      const editedItem = ref({
        height: '',
        weight: ''
      })
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
        emit('update', editedItem.value)
        close()
      }
      function close() {
        emit('close')
      }

      return {
        dialog,
        editedItem,
        onClicked,
        close
      }
    }
  }
</script>
