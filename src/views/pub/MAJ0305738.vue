<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="no-transition"
    class="modal-full"
  >
    <v-card>
      <header class="tab-line sticky-top">
        <v-tabs v-model="tabInit" align-tabs="start" height="48">
          <v-tab v-for="(tab, i) in topTabs" :key="tab" :value="i">
            {{ tab.title }}
          </v-tab>
        </v-tabs>
      </header>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="tab-line pt-7 pb-7">
            <v-window v-model="tabInit">
              <v-window-item value="1">
                <h3 class="fs-18 font-weight-bold">최근 선택한 진료 과목</h3>
                <div role="tablist" class="sorting-area type-3 mt-4">
                  <v-btn
                    role="tab"
                    :aria-selected="
                      recentlyBtn === btn.value ? 'true' : 'false'
                    "
                    variant="flat"
                    :class="[
                      'btn-sorting',
                      {
                        'v-btn--variant-outlined': recentlyBtn === btn.value
                      }
                    ]"
                    v-for="btn in recently"
                    :key="btn.value"
                    @click="recentlySelected(btn.value)"
                    >{{ btn.text }}</v-btn
                  >
                </div>
                <v-divider class="border-opacity-100 mt-7" color="#eee" />
                <div role="tablist" class="sorting-area type-3 mt-7">
                  <v-btn
                    role="tab"
                    :aria-selected="
                      mediSubjectBtn === btn.value ? 'true' : 'false'
                    "
                    variant="flat"
                    :class="[
                      'btn-sorting',
                      {
                        'v-btn--variant-outlined': mediSubjectBtn === btn.value
                      }
                    ]"
                    v-for="btn in mediSubject"
                    :key="btn.value"
                    @click="mediSubjectSelected(btn.value), (dialog = false)"
                    >{{ btn.text }}</v-btn
                  >
                </div>
              </v-window-item>
              <v-window-item value="2">
                <div class="title-area2">
                  <h3 class="fs-18 font-weight-bold">최근 증상검색 결과</h3>
                  <v-btn variant="text" class="float-right btn-go"
                    >증상검색 하러기기</v-btn
                  >
                </div>
                <div role="tablist" class="sorting-area type-3 mt-4">
                  <v-btn
                    role="tab"
                    :aria-selected="
                      recentlyBtn === btn.value ? 'true' : 'false'
                    "
                    variant="flat"
                    :class="[
                      'btn-sorting',
                      {
                        'v-btn--variant-outlined': recentlyBtn === btn.value
                      }
                    ]"
                    v-for="btn in recently"
                    :key="btn.value"
                    @click="recentlySelected(btn.value)"
                    >{{ btn.text }}</v-btn
                  >
                </div>
                <v-divider class="border-opacity-100 mt-7" color="#eee" />
                <h3 class="fs-18 font-weight-bold mt-7">증상/질환 선택</h3>
                <div role="tablist" class="sorting-area type-3 mt-4">
                  <v-btn
                    role="tab"
                    :aria-selected="
                      mediSubjectBtn === btn.value ? 'true' : 'false'
                    "
                    variant="flat"
                    :class="[
                      'btn-sorting',
                      {
                        'v-btn--variant-outlined': mediSubjectBtn === btn.value
                      }
                    ]"
                    v-for="btn in mediSubject"
                    :key="btn.value"
                    @click="mediSubjectSelected(btn.value)"
                    >{{ btn.text }}</v-btn
                  >
                </div>
              </v-window-item>
              <v-window-item value="3">
                <Baner :linkUrl="'/'" :caseName="'medical2'">
                  <strong class="title">증상검색 하러가기</strong>
                  <span class="text"
                    >쉽고 빠르게 신체부위별 내 증상을 선택해 물어보세요</span
                  >
                </Baner>

                <h3 class="fs-18 font-weight-bold mt-7">증상/질환 선택</h3>
                <div role="tablist" class="sorting-area type-3 mt-4">
                  <v-btn
                    role="tab"
                    :aria-selected="
                      mediSubjectBtn === btn.value ? 'true' : 'false'
                    "
                    variant="flat"
                    :class="[
                      'btn-sorting',
                      {
                        'v-btn--variant-outlined': mediSubjectBtn === btn.value
                      }
                    ]"
                    v-for="btn in mediSubject"
                    :key="btn.value"
                    @click="mediSubjectSelected(btn.value)"
                    >{{ btn.text }}</v-btn
                  >
                </div>
              </v-window-item>
            </v-window>
          </div>
        </div>
        <!-- [D] 개발시 삭제 -->
        <v-btn class="btn-sample" @click="$emit('close')">전체팝업닫기</v-btn>
        <!-- //[D] 개발시 삭제 -->
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import { ref } from 'vue'
  import Baner from '@/components/BanerIcon.vue'
  export default {
    props: ['modal4'],
    emits: ['close'],
    components: {
      Baner
    },
    data() {
      return {
        topTabs: [
          { title: '진료과목' },
          { title: '증상/질환 진료' },
          { title: '증상/질환 진료' }
        ],
        recently: [
          {
            value: 1,
            text: '이비인후과'
          },
          {
            value: 2,
            text: '내과'
          },
          {
            value: 3,
            text: '정형외과'
          },
          {
            value: 4,
            text: '정형외과'
          }
        ],
        mediSubject: [
          {
            value: 1,
            text: '전체'
          },
          {
            value: 2,
            text: '진료과목길다'
          },
          {
            value: 3,
            text: '진료'
          },
          {
            value: 4,
            text: '진료과목'
          },
          {
            value: 5,
            text: '진료과목얼마나길까'
          },
          {
            value: 6,
            text: '진료과목'
          },
          {
            value: 7,
            text: '진료과목'
          },
          {
            value: 8,
            text: '진료과목'
          },
          {
            value: 9,
            text: '진료과목'
          },
          {
            value: 10,
            text: '진료과목'
          },
          {
            value: 11,
            text: '진료과목'
          },
          {
            value: 12,
            text: '진료과목진료과목'
          },
          {
            value: 13,
            text: '과목'
          },
          {
            value: 14,
            text: '진료과목진료과목'
          },
          {
            value: 15,
            text: '진료과목진료과목진료과목'
          },
          {
            value: 16,
            text: '진료과목'
          },
          {
            value: 17,
            text: '진료과목진료과목진료과목'
          },
          {
            value: 18,
            text: '진료과목'
          }
        ]
      }
    },
    setup(props) {
      const dialog = ref(props.modal4)
      const tabInit = ref(0)
      const recentlyBtn = ref()
      function recentlySelected(val) {
        recentlyBtn.value = val
      }
      const mediSubjectBtn = ref()
      function mediSubjectSelected(val) {
        mediSubjectBtn.value = val
      }
      return {
        dialog,
        tabInit,
        recentlyBtn,
        recentlySelected,
        mediSubjectBtn,
        mediSubjectSelected
      }
    }
  }
</script>
