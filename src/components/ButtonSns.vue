<template>
  <div>
    <ul class="btn-area-share" :class="areaClass">
      <li>
        <v-btn
          variant="text"
          title="전화연결"
          class="call"
          :href="`tel:${phoneNumber}`"
        />
      </li>
      <li>
        <v-btn
          variant="text"
          title="공유하기"
          class="share"
          @click="$emit('share')"
        />
      </li>
      <li>
        <v-btn
          variant="text"
          title="즐겨찾기"
          :class="`mark ${isActive ? 'selected' : ''}`"
          @click=";(isActive = !isActive), (snackbar = true)"
        />
      </li>
      <li>
        <v-btn
          variant="text"
          title="길찾기"
          class="map"
          @click="$emit('map')"
        />
      </li>
    </ul>
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
    props: ['areaClass', 'phoneNumber', 'toastMsgOn', 'toastMsgOff'],
    emits: ['share', 'favorit', 'map'],
    setup(props) {
      const isActive = ref(false)
      const snackbar = ref(false)
      const snackbarText = computed(() => {
        return isActive.value === true ? props.toastMsgOn : props.toastMsgOff
      })
      return {
        isActive,
        snackbar,
        snackbarText
      }
    }
  }
</script>
