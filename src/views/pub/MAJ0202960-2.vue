<template>
  <div class="carousel__content">
    <figure :class="`icon-ciga${iconNum}`"></figure>
    <div class="numcount-area3 mt-2 mx-2">
      <v-btn
        variant="text"
        class="handle decrease"
        title="감소"
        @click="$emit('update:minus')"
      ></v-btn>
      <strong class="number">{{ numcount }}</strong>
      <v-btn
        variant="text"
        class="handle increase"
        title="증가"
        @click="$emit('update:plus')"
      ></v-btn>
    </div>
  </div>
  {{ text }}
</template>
<script>
  import { ref } from 'vue'
  export default {
    props: ['iconNum', 'text', 'numcount'],
    setup() {
      return {}
    }
  }
</script>
