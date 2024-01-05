<template>
  <div class="contents">
    <ul class="settings">
      <li v-for="(item, i) in settingLists" :key="i" class="settings-item">
        <v-btn variant="text" block class="settings-link px-0">
          <span class="left-area">
            <strong class="fs-16">{{ item.text }}</strong>
          </span>
          <span class="right-area">
            <span class="font-weight-regular text-blue fs-14 mr-3">{{
              item.time
            }}</span>
            <v-icon class="draw-arrow-right" />
          </span>
        </v-btn>
      </li>
    </ul>
  </div>
</template>
<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      const settingLists = reactive([
        {
          text: '건강 플랫폼 연결관리'
        },
        {
          text: '잠자기 알림',
          time: '오후 11시 30분'
        }
      ])
      return { settingLists }
    }
  }
</script>
