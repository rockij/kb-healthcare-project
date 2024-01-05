<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">한번에 입력</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <v-tabs v-model="tabInit" align-tabs="start" class="tab-line mt-4">
            <v-tab
              v-for="item in tabItems"
              :key="item.id"
              :value="item.id"
              :ripple="false"
            >
              {{ item.text }}
            </v-tab>
          </v-tabs>
          <v-window v-model="tabInit" class="comp-area">
            <v-window-item
              v-for="item in tabItems"
              :key="item.id"
              :value="item.id"
            >
              <component :is="item.path" />
            </v-window-item>
          </v-window>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import HealthSub1 from './HealthSub1.vue'
  import HealthSub2 from './HealthSub2.vue'
  import HealthSub3 from './HealthSub3.vue'
  import HealthSub4 from './HealthSub4.vue'
  import HealthSub5 from './HealthSub5.vue'
  import HealthSub6 from './HealthSub6.vue'
  import HealthSub7 from './HealthSub7.vue'
  import HealthSub8 from './HealthSub8.vue'
  import HealthSub9 from './HealthSub9.vue'
  import HealthSub10 from './HealthSub10.vue'
  import HealthSub11 from './HealthSub11.vue'
  import { ref } from 'vue'

  export default {
    components: {
      HealthSub1,
      HealthSub2,
      HealthSub3,
      HealthSub4,
      HealthSub5,
      HealthSub6,
      HealthSub7,
      HealthSub8,
      HealthSub9,
      HealthSub10,
      HealthSub11
    },
    setup() {
      const dialog = true
      const tabInit = ref(0)
      const tabItems = ref([
        {
          id: 0,
          text: '기분',
          path: 'HealthSub1'
        },
        {
          id: 1,
          text: '식사',
          path: 'HealthSub2'
        },
        {
          id: 2,
          text: '수면',
          path: 'HealthSub3'
        },
        {
          id: 3,
          text: '혈당',
          path: 'HealthSub4'
        },
        {
          id: 4,
          text: '혈압',
          path: 'HealthSub5'
        },
        {
          id: 5,
          text: '체성분',
          path: 'HealthSub6'
        },
        {
          id: 6,
          text: '운동',
          path: 'HealthSub7'
        },
        {
          id: 7,
          text: '여성건강',
          path: 'HealthSub8'
        },
        {
          id: 8,
          text: '흡연',
          path: 'HealthSub9'
        },
        {
          id: 9,
          text: '음주',
          path: 'HealthSub10'
        },
        {
          id: 10,
          text: '수분',
          path: 'HealthSub11'
        }
      ])

      return {
        dialog,
        tabInit,
        tabItems
      }
    }
  }
</script>
