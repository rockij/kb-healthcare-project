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
            <v-img
              aspect-ratio="16/9"
              cover
              :src="`/assets/images/${item.img}`"
              alt=""
              v-if="item.img?.length"
            />
            <div class="no-data text-overflow line1" v-else>
              메뉴명 노출영역 메뉴명 노출영역 메뉴명 노출영역 메뉴명 노출영역
              메뉴명 노출영역
            </div>
          </div>
          <div class="sorting-data pt-6 time-type">
            <div class="date-top">
              <div class="date-title">2024.01.03(목)</div>
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
          <div class="box-rounded card-food">
            <div class="chip-area mb-2">
              <v-chip
                label
                size="small"
                color="primary"
                class="chip-default chip-color"
              >
                <template v-if="item.type === 1">조식</template>
                <template v-if="item.type === 2">중식</template>
                <template v-if="item.type === 3">석식</template>
              </v-chip>
            </div>
            <dl class="dl dl-table details">
              <dd class="tit-01 pb-0">{{ item.foodNm }}</dd>
              <dd class="content">{{ item.text }}</dd>
              <dd class="calories">{{ item.calories }}kcal</dd>
            </dl>
          </div>
          <div class="tab-line mt-8">
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
          <v-window v-model="tabInit" class="pt-6">
            <v-window-item>
              <v-radio-group hide-details class="radio-answer-group">
                <v-radio
                  v-for="item in answerList"
                  :key="item.id"
                  :label="`answerRdo-${item.id}`"
                  :value="item.id"
                  class="radio-basic x-small mb-2"
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
            <v-window-item>
              <v-text-field
                class="input-basic textfield-default suffix"
                :class="name4 ? 'hasData' : ''"
                label="식사량"
                required
                persistent-placeholder
                variant="outlined"
                placeholder="1.0"
                v-model="name4"
                clearable
              >
                <template v-slot:append-inner>인분</template>
              </v-text-field>
              <v-text-field
                class="input-basic textfield-default suffix medialarm-1 mt-4"
                :class="name4 ? 'hasData' : ''"
                label="칼로리"
                required
                persistent-placeholder
                variant="outlined"
                placeholder="800"
                v-model="name4"
                clearable
                disabled
              >
                <template v-slot:append-inner>kcal</template>
              </v-text-field>
            </v-window-item>
          </v-window>
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
      const name4 = ref('')
      const dialog = ref(true)
      const item = ref({
        id: 0,
        type: 2,
        foodNm: '산채고추장볶음밥&후라이',
        text: '쌀밥, 떡갈비구이, 베이비채소, 토마토 연두부카프레제, 콩나물파프리카냉채, 두부동그랑땡&케찹',
        img: ['bigimage.jpg'],
        calories: 933
      })
      const tabInit = ref(null)
      const tabItems = ref([
        { titleTab: '비율 선택' },
        { titleTab: '직접 입력' }
      ])
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

      return {
        name4,
        dialog,
        item,
        tabInit,
        tabItems,
        answerList
      }
    }
  }
</script>
