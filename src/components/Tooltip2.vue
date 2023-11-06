<template>
  <v-tooltip
    v-model="toolTip1"
    location="bottom"
    :open-on-hover="false"
    @click:outside="$emit('close')"
    open-on-click
    transition="fade-transition"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        variant="text"
        density="compact"
        v-bind="props"
        append-icon="mdi-help-circle-outline"
        class="v-tooltip-handle"
        :class="handleOption"
        :title="title"
      >
      </v-btn>
    </template>
    <slot>텍스트를 입력하세요</slot>
    <v-btn
      variant="text"
      size="small"
      @click="$emit('close')"
      class="v-tooltip-close"
      color="white"
      title="툴팁닫기"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-tooltip>
</template>
<script>
  import { ref } from 'vue'
  export default {
    props: ['handleOption', 'title'],
    emits: ['close'],
    setup() {
      const toolTip1 = ref(false)
      return {
        toolTip1
      }
    }
  }
</script>
