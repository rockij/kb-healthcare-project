<template>
  <div class="contents">
    <div class="alarm-title">
      <div class="title">돌봄 친구 알림</div>
    </div>
    <div class="alarm-area">
      <ul>
        <li v-for="item in selectedAlarm" :key="item.id" class="alarm-item">
          <div class="top-text">
            <div class="title font-weight-bold">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>

          <v-switch
            class="switch-default"
            v-model="switchOff1"
            color="#FFD338"
            hide-details
            @click=";(snackbar = true), (alarm = !alarm)"
            :model-value="alarm"
          ></v-switch>

          <v-snackbar
            v-model="snackbar"
            :timeout="2000"
            class="toast-basic not-button"
            >{{ alarm ? 'on' : 'off' }}
          </v-snackbar>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    setup() {
      const alarm = ref(true)
      const snackbar = ref(false)
      const switchOff1 = ref('on')
      const selectedAlarm = reactive([
        {
          id: 0,
          title: '복약알림',
          desc: '상대방이 약/영양제를 복용하지않은 내역이 있으면 그 다음날 아침에 알림을 드립니다'
        }
      ])
      return {
        alarm,
        snackbar,
        switchOff1,
        selectedAlarm
      }
    }
  }
</script>
