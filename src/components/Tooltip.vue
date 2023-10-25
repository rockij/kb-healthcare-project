<template>
  <div class="tooltip-area">
    <v-btn
      variant="text"
      density="compact"
      append-icon="mdi-help-circle-outline"
      class="btn-text px-0"
      @click.stop="show = !show"
      :ripple="false"
    >
      {{ btnText }}
    </v-btn>
    <v-fade-transition>
      <div class="tooltip-box" v-if="show">
        {{ text }}
        <v-btn
          variant="text"
          size="small"
          @click="show = false"
          class="btn-close"
          color="white"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </v-fade-transition>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean
      },
      btnText: {
        Type: String
      },
      text: {
        Type: String
      }
    },
    setup() {
      //   const show = ref(false)
      //   return { show }
    }
  }
</script>
