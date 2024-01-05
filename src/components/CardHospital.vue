<template>
  <div class="list-article" :class="articleClass">
    <v-btn variant="text" class="btn-box" @click="onClicked(path)">
      <div v-if="titleBisde === true" class="d-flex align-center">
        <h3 class="title font-weight-bold me-auto" :class="titleClass">
          {{ title }}
        </h3>
        <span class="badge" :class="stateClass">{{ state }}</span>
      </div>
      <h3 v-else class="title font-weight-bold" :class="titleClass">
        {{ title }}
      </h3>
      <span class="title2" :class="title2Class">{{ title2 }}</span>
      <span class="datalst" :class="datalstClass">
        <span v-if="road" class="road">{{ road }}</span>
        <span v-if="subject" class="text">{{ subject }}</span>
        <span v-if="sources" class="text-last">{{ sources }}</span>
      </span>
      <v-divider
        v-if="tagDivider === true"
        class="border-opacity-100 mb-3 mt-3"
        color="#eee"
      />
      <span v-if="tags" class="tags" v-html="tags"> </span>
    </v-btn>
    <v-btn
      variant="text"
      :class="`btn-state ${isActive ? 'selected' : ''}`"
      @click=";(isActive = !isActive), (snackbar = true)"
      v-if="!titleBisde"
    >
      <span class="badge" :class="stateClass">{{ state }}</span>
      <i class="icon-star" />
    </v-btn>
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      class="toast-basic not-button"
    >
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>
<script>
  import { ref, computed } from 'vue'
  export default {
    props: [
      'articleClass',
      'titleBisde',
      'title',
      'titleClass',
      'title2',
      'title2Class',
      'datalstClass',
      'road',
      'sources',
      'subject',
      'tagDivider',
      'tags',
      'state',
      'stateClass',
      'path',
      'toastMsgOn',
      'toastMsgOff'
    ],
    emits: ['update'],
    setup(props, context) {
      const isActive = ref(false)
      const snackbar = ref(false)
      const snackbarText = computed(() => {
        return isActive.value === true ? props.toastMsgOn : props.toastMsgOff
      })
      const { emit } = context
      function onClicked(path) {
        emit('update', path)
      }
      return {
        isActive,
        onClicked,
        snackbar,
        snackbarText
      }
    }
  }
</script>
