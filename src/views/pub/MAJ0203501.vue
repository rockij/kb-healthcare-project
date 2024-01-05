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
        <v-toolbar-title class="modal-title">나의 약 상세</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container mydetails">
          <div class="main-info">
            <span class="badge ing">의약품</span>
            <h3 class="subtitle pt-1">겔비스톤 현탁액 20ml/포</h3>
            <div class="company">㈜텔콘알에프제약</div>
          </div>
          <div class="main-img mt-4">
            <img src="/assets/images/bigfood.jpg" alt="" />
          </div>
          <div class="main-desc pt-8">
            <div class="desc-title">효능효과</div>
            <div class="desc pt-4">
              산 역류 <br />
              속쓰림 <br />
              위 내용물의 역류로 인한 소화불량<br />
              예&#41; 식사 후, 임신 중, 역류성 식도염과 동반하는 경우
            </div>
          </div>
          <div class="tab-line pt-8">
            <v-tabs v-model="tabInit" align-tabs="start">
              <v-tab
                v-for="item in tabItems"
                :key="item.id"
                :ripple="false"
                :data-count="item.tabCount"
              >
                {{ item.titleTab }}
              </v-tab>
            </v-tabs>
          </div>
          <v-window v-model="tabInit" class="mt-7">
            <v-window-item v-for="n in 5" :key="n">
              <div class="tab-item">
                이 약은 제산작용을 하는 성분들이 복합된 약입니다. 2주 이상
                복용해도 개선되지 않는 경우 전문가와 상의가 필요합니다. 알레르기
                반응, 변비, 설사 등의 증상이 있는 경우 전문가에게 문의합니다.
              </div>
            </v-window-item>
          </v-window>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    props: ['modal'],
    emits: ['update', 'close'],
    setup() {
      const dialog = false
      const tabInit = ref(null)
      const tabItems = ref([
        { titleTab: '복약' },
        { titleTab: '용법' },
        { titleTab: '성분' },
        { titleTab: '주의사항' },
        { titleTab: '보관방법' }
      ])

      return {
        dialog,
        tabInit,
        tabItems
      }
    }
  }
</script>
