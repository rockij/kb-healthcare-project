<template>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        />
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
              <v-btn
              variant="text"
              block
              v-for="btn in lists"
              :key="btn.value"
              class="btn-list-block"
              @click="onClicked(btn)"
            >
            <span v-html="btn.text"></span>
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const dialog = ref(false)
  defineProps(['lists', 'title'])
  const emit = defineEmits(['close', 'update'])
  function onClicked(btn) {
    emit('update', btn)
  }
</script>
