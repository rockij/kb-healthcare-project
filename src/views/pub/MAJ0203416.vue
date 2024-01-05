<template>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="food-photo">
            <!-- <v-img
              aspect-ratio="375/278"
              cover
              src="/assets/images/bigfood.jpg"
              alt=""
            /> -->
            <div class="no-data text-overflow line1">
              메뉴명 노출영역 메뉴명 노출영역 메뉴명 노출영역 메뉴명 노출영역
              메뉴명 노출영역
            </div>
          </div>
          <div class="sorting-data py-6 time-type">
            <div class="date-top">
              <div class="date-title">2024.01.03(목)</div>
              <v-chip
                label
                size="small"
                color="primary"
                class="chip-default chip-color ml-1"
              >
                중식
              </v-chip>
            </div>
            <v-btn variant="text" density="compact" class="fs-16 px-0">
              오후 12:00
              <img
                src="/assets/images/icon-arrow-down2.svg"
                alt=""
                class="ml-1"
              />
            </v-btn>
          </div>
          <div class="nodata-date">
            <div class="msg-wrap">
              <v-tabs
                v-model="tab"
                hide-slider
                class="tabs-round navy tabs-simple2 type-2"
              >
                <v-tab value="value01" class="btn-tab" :ripple="false"
                  >흰쌀밥</v-tab
                >
                <v-tab value="value02" class="btn-tab" :ripple="false"
                  >산채고추장</v-tab
                >
                <v-tab value="value03" class="btn-tab" :ripple="false"
                  >떡갈비구이</v-tab
                >
                <v-tab value="value04" class="btn-tab" :ripple="false"
                  >양상추 샐러드</v-tab
                >
              </v-tabs>
              <div class="mt-8">
                <div class="tab-line">
                  <v-tabs v-model="tabInit" align-tabs="start">
                    <v-tab
                      v-for="(item, i) in tabItems"
                      :key="item.id"
                      :value="i"
                      :ripple="false"
                    >
                      {{ item.titleTab }}
                    </v-tab>
                  </v-tabs>
                </div>
                <v-window v-model="tabInit" class="mt-4">
                  <v-window-item>
                    <v-radio-group hide-details class="radio-answer-group">
                      <v-radio
                        v-for="item in answerList"
                        :key="item.id"
                        :label="`answerRdo-${item.id}`"
                        :value="item.id"
                        class="radio-basic x-small mt-2"
                      >
                        <template v-slot:label>
                          <div class="food-wrap">
                            <span class="food-label">{{ item.label }}</span>
                            <span class="food-kcal">{{ item.kcal }}kcal</span>
                          </div>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </v-window-item>
                </v-window>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-bottom">
        <div class="btn-area d-flex">
          <v-btn
            variant="text"
            height="56"
            class="btn-summit"
            @click="dialog = false"
            >저장</v-btn
          >
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)
      const category = ref('오후 12:00')
      const tabInit = ref(null)
      const tabItems = ref([
        { titleTab: '비율 선택' },
        { titleTab: '직접 입력' }
      ])
      const tab = ref()

      const answerList = ref([
        {
          id: 1,
          label: '1/4인분',
          kcal: '200'
        },
        {
          id: 2,
          label: '1/2인분',
          kcal: '600'
        },
        {
          id: 3,
          label: '1인분',
          kcal: '800'
        },
        {
          id: 4,
          label: '2인분',
          kcal: '2300'
        },
        {
          id: 5,
          label: '2인분',
          kcal: '1200'
        }
      ])

      function event() {
        console.log('click')
      }
      return {
        dialog,
        tab,
        category,
        tabInit,
        tabItems,
        answerList,
        event
      }
    }
  }
</script>
