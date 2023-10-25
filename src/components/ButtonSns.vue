<template>
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
        @click="$emit('favorit'), (isActive = !isActive)"
      />
    </li>
    <li>
      <v-btn variant="text" title="길찾기" class="map" @click="$emit('map')" />
    </li>
  </ul>
</template>
<script>
  import { ref } from 'vue'
  export default {
    props: ['areaClass', 'phoneNumber'],
    emits: ['share', 'favorit', 'map'],
    setup(props) {
      const isActive = ref(false)
      return {
        isActive
      }
    }
  }
</script>
