<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn @click="modal = true"> 수정/삭제 바텀 </v-btn>
    </div>
    <DialogSetting
      v-model="modal"
      :btnModify="true"
      @close="modal = false"
      @deleteClick="delFunc"
    />
  </div>
</template>

<script>
  import { ref } from 'vue'
  import DialogSetting from '@/components/DialogSetting.vue'
  export default {
    components: {
      DialogSetting
    },
    setup() {
      const modal = ref(false)
      const delFunc = () => {
        alert('삭제')
      }
      return {
        modal,
        delFunc
      }
    }
  }
</script>
