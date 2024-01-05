<template>
  <div class="contents pt-0">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
      <div class="vc-dots-info">
        <div class="state" v-for="(state, i) in calendarStates" :key="i">
          <i class="icon" :class="state.icon" />
          <div class="text">{{ state.text }}</div>
        </div>
      </div>
      <v-card
        variant="flat"
        rounded="xl"
        class="box-rounded-fill py-2 text-center mx-6 mt-4"
        ><strong class="text-blue">100일</strong> 동안 빠짐없이 잘 챙겨 먹는
        중!</v-card
      >
    </div>
    <template v-if="mediCardList.length > 0">
      <div class="section-page bg pa-4">
        <BanerReport :bnShow="'good'" :videBox="false">
          휴레이 메시지 영역
        </BanerReport>
      </div>
      <div class="sorting-data py-4 px-6 medicine-sorting">
        <v-btn
          variant="text"
          density="compact"
          class="fs-16 px-0"
          @click="modal = true"
        >
          {{ category }}
          <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
        </v-btn>
        <v-btn
          class="text-date medi-text px-0"
          variant="text"
          density="compact"
          @click.stop="goPath('MAJ0203424')"
          >알림 목록</v-btn
        >
      </div>
      <v-tabs v-model="tab" class="medicine-tabs pt-6">
        <v-tab value="one" density="compact" hide-slider class="timeline"
          >타임라인</v-tab
        >
        <v-tab value="two" density="compact" hide-slider class="list"
          >리스트</v-tab
        >
      </v-tabs>
      <v-window class="pt-6" v-model="tab">
        <v-window-item value="one" class="first-tab">
          <v-timeline class="medi-timeline">
            <v-timeline-item dot-color="#CCCCCC" fill-dot size="x-small">
              <v-expansion-panels>
                <v-expansion-panel class="timeline-panel">
                  <template #title>
                    <div class="medi-title">
                      오전 6시 00분<span class="no-medi-badge ml-1"
                        >미복용</span
                      >
                    </div>
                  </template>

                  <template #text>
                    <div v-for="item in mediCardList" :key="item">
                      <v-card
                        variant="flat"
                        rounded="xl"
                        class="calorie-card type-3 mt-5 medi-card"
                        @click.stop="goPath('MAJ0203520')"
                      >
                        <div class="medi-card-left">
                          <div class="category-medi-badge">
                            {{ item.badge }}
                          </div>
                          <div class="medi-name pt-1">{{ item.name }}</div>
                        </div>
                        <v-btn
                          variant="text"
                          density="compact"
                          class="medi-check-btn"
                          :disabled="item.disabled"
                          @click.stop="snackbar = true"
                          :ripple="false"
                          >{{ item.disabled ? '완료' : '먹음' }}</v-btn
                        >
                      </v-card>
                    </div>
                  </template>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-timeline-item>

            <v-timeline-item dot-color="#cccccc" fill-dot size="x-small">
              <template v-slot:opposite>
                <v-expansion-panels>
                  <v-expansion-panel class="timeline-panel">
                    <template #title>
                      <div class="medi-title">오전 7시 00분</div>
                    </template>
                    <template #text>
                      <div v-for="item in mediCardList" :key="item">
                        <v-card
                          variant="flat"
                          rounded="xl"
                          class="calorie-card type-3 mt-5 medi-card"
                          @click.stop="goPath('MAJ0203520')"
                        >
                          <div class="medi-card-left">
                            <div class="category-medi-badge">
                              {{ item.badge }}
                            </div>
                            <div class="medi-name pt-1">{{ item.name }}</div>
                          </div>
                          <v-btn
                            variant="text"
                            density="compact"
                            class="medi-check-btn"
                            :disabled="item.disabled"
                            @click.stop="snackbar = true"
                            :ripple="false"
                          >
                            {{ item.disabled ? '완료' : '먹음' }}</v-btn
                          >
                        </v-card>
                      </div>
                    </template>
                  </v-expansion-panel>
                </v-expansion-panels>
              </template>
            </v-timeline-item>

            <v-timeline-item
              dot-color="#cccccc"
              fill-dot
              size="x-small"
              class="timeline-active"
            >
              <v-expansion-panels v-model="panel">
                <v-expansion-panel class="timeline-panel">
                  <template #title>
                    <div class="medi-title">오전 11시 00분</div>
                  </template>
                  <template #text>
                    <div v-for="(item, index) in mediCardList" :key="item">
                      <v-card
                        variant="flat"
                        rounded="xl"
                        class="calorie-card type-3 mt-5 medi-card"
                        @click.stop="goPath('MAJ0203520')"
                        :ripple="false"
                      >
                        <div class="medi-card-left">
                          <div class="category-medi-badge">
                            {{ item.badge }}
                          </div>
                          <div class="medi-name pt-1">{{ item.name }}</div>
                        </div>
                        <Lottie
                          :disabled="item.disabled"
                          :lottieButton="`medi-check-btn nth-item` + index"
                          :animationLinkSrc="
                            index >= 1 && index < 3
                              ? 'Firecracker'
                              : index > 2 && index < 5
                              ? 'buttonLottie'
                              : 'buttonLottie2'
                          "
                          :variant="`text`"
                          @snackbarToggle="snackbarToggle"
                        >
                        </Lottie>
                      </v-card>
                    </div>
                  </template>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-timeline-item>

            <v-timeline-item dot-color="#cccccc" fill-dot size="x-small">
              <template v-slot:opposite>
                <v-expansion-panels>
                  <v-expansion-panel class="timeline-panel">
                    <template #title>
                      <div class="medi-title">오후 3시 00분</div>
                    </template>
                    <template #text>
                      <div v-for="item in mediCardList" :key="item">
                        <v-card
                          variant="flat"
                          rounded="xl"
                          class="calorie-card type-3 mt-5 medi-card"
                          @click.stop="goPath('MAJ0203520')"
                        >
                          <div class="medi-card-left">
                            <div class="category-medi-badge">
                              {{ item.badge }}
                            </div>
                            <div class="medi-name pt-1">{{ item.name }}</div>
                          </div>
                          <v-btn
                            variant="text"
                            density="compact"
                            class="medi-check-btn"
                            :disabled="item.disabled"
                            @click.stop="snackbar = true"
                            >{{ item.disabled ? '완료' : '먹음' }}</v-btn
                          >
                        </v-card>
                      </div>
                    </template>
                  </v-expansion-panel>
                </v-expansion-panels>
              </template>
            </v-timeline-item>

            <v-timeline-item dot-color="#cccccc" fill-dot size="x-small">
              <div class="medi-title">
                오늘 하루 끝!
                <img src="/assets/images/icon-ending-1.svg" alt="" />
                <img
                  src="/assets/images/icon-ending-2.svg"
                  alt=""
                  class="pl-1"
                />
              </div>
              <div class="ending-desc">오늘도 건강을 잘 챙겼어요</div>
            </v-timeline-item>
          </v-timeline>
        </v-window-item>

        <v-window-item value="two">
          <v-btn class="list-title" variant="text" density="compact"
            ><span>두통약</span
            ><img
              src="/assets/images/icon-arrow-right.svg"
              alt=""
              class="title-icon"
          /></v-btn>
          <div
            v-for="item in mediCardList"
            :key="item"
            class="timeline-panel medi-list"
          >
            <v-card
              variant="flat"
              rounded="xl"
              class="calorie-card type-3 mt-3 medi-card"
              @click.stop="goPath('MAJ0203520')"
            >
              <div class="medi-card-left">
                <div class="category-medi-badge">
                  {{ item.badge }}
                </div>
                <div class="medi-name pt-1">{{ item.name }}</div>
              </div>
              <v-btn
                variant="text"
                density="compact"
                class="medi-check-btn"
                :disabled="item.disabled"
                @click.stop="snackbar = true"
                :ripple="false"
                >{{ item.disabled ? '완료' : '먹음' }}</v-btn
              >
            </v-card>
          </div>

          <v-btn class="list-title mt-6" variant="text" density="compact"
            ><span>당뇨약</span>
            <img
              src="/assets/images/icon-arrow-right.svg"
              alt=""
              class="title-icon"
          /></v-btn>
          <div
            v-for="item in mediCardList"
            :key="item"
            class="timeline-panel medi-list"
          >
            <v-card
              variant="flat"
              rounded="xl"
              class="calorie-card type-3 mt-3 medi-card"
              @click.stop="goPath('MAJ0203520')"
            >
              <div class="medi-card-left">
                <div class="category-medi-badge">
                  {{ item.badge }}
                </div>
                <div class="medi-name pt-1">{{ item.name }}</div>
              </div>
              <v-btn
                variant="text"
                density="compact"
                class="medi-check-btn"
                :disabled="item.disabled"
                @click.stop="snackbar = true"
                :ripple="false"
                >{{ item.disabled ? '완료' : '먹음' }}</v-btn
              >
            </v-card>
          </div>

          <v-btn class="list-title mt-6" variant="text" density="compact"
            ><span class="title-text">알로에베라베라알로에베라베라</span>
            <img
              src="/assets/images/icon-arrow-right.svg"
              alt=""
              class="title-icon"
          /></v-btn>
          <div
            v-for="item in mediCardList"
            :key="item"
            class="timeline-panel medi-list"
          >
            <v-card
              variant="flat"
              rounded="xl"
              class="calorie-card type-3 mt-3 medi-card"
              @click.stop="goPath('MAJ0203520')"
            >
              <div class="medi-card-left">
                <div class="category-medi-badge">
                  {{ item.badge }}
                </div>
                <div class="medi-name pt-1">{{ item.name }}</div>
              </div>
              <v-btn
                variant="text"
                density="compact"
                class="medi-check-btn"
                :disabled="item.disabled"
                @click.stop="snackbar = true"
                :ripple="false"
                >{{ item.disabled ? '완료' : '먹음' }}</v-btn
              >
            </v-card>
          </div>
        </v-window-item>
      </v-window>

      <div class="btn-double d-flex pt-8">
        <v-btn
          variant="text"
          height="46"
          class="btn-summit attach-btn type-2"
          @click="goPath('MAJ0203521')"
          >알림 추가하기</v-btn
        >
      </div>

      <div class="section-page mt-8">
        <LifelogChallenge />
      </div>
      <!-- //챌린지 -->

      <div class="section-page pb-0">
        <LifelogHealthnews />
      </div>
      <!-- //건강뉴스 -->
    </template>

    <!-- nodata -->
    <div class="section-page bg-sky pa-4" v-if="mediCardList.length === 0">
      <v-card variant="flat" rounded="xl" class="py-4 px-6">
        <div class="medicine-title">복약알림</div>
        <Nodata
          :icon="true"
          :iconSize="'medication'"
          :optionClass="'lifelog'"
          class="pt-8"
        >
          <div class="fs-20">
            바쁜 일상 속에서도,<br />
            <strong>잊지 않게 도와 드릴게요</strong>
          </div>
        </Nodata>
        <div class="btn-area2 mt-8">
          <v-btn
            variant="text"
            height="48px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            @click="goPath('MAJ0203521')"
            >알림 추가하기</v-btn
          >
        </div>
      </v-card>
    </div>
  </div>
  <v-snackbar v-model="snackbar" :timeout="2000" class="toast-basic">
    김건강님 먹은 약을 기록했어요
  </v-snackbar>
  <MAJ0203422 v-model="modal" @update="addText" @close="modal = false" />
</template>

<script>
  import router from '@/router'
  import Nodata from '@/components/nodata/Nodata.vue'
  import BanerReport from '@/components/BanerReport.vue'
  import MAJ0203422 from './MAJ0203422.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import Lottie from '@/components/Lottie.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스

  import { ref, reactive, onMounted } from 'vue'
  export default {
    components: {
      BanerReport,
      Nodata,
      MAJ0203422,
      VCalendar,
      Lottie,
      LifelogChallenge,
      LifelogHealthnews
    },
    setup() {
      const snackbar = ref(false)
      const tab = ref(null)
      const panel = ref([0])
      const hasData = true
      const text1 = ref()
      const modal = ref(false)
      const category = ref('전체')

      const mediCardList = reactive([
        {
          name: '두통약',
          badge: '의약품',
          disabled: true
        },
        {
          name: '당뇨약',
          badge: '영양제',
          disabled: false
        },
        {
          name: '당뇨약',
          badge: '영양제',
          disabled: false
        },
        {
          name: '당뇨약',
          badge: '영양제',
          disabled: false
        },
        {
          name: '당뇨약',
          badge: '영양제',
          disabled: false
        },
        {
          name: '당뇨약',
          badge: '영양제',
          disabled: false
        },
        {
          name: '당뇨약',
          badge: '영양제',
          disabled: false
        }
      ])

      function addText(val1) {
        text1.value = val1
        modal.value = false
        console.log('상위페이지', text1.value)
      }
      function goPath(val) {
        router.push(val)
      }

      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          content: { class: 'vc-medi-no' },
          dates: [new Date(2023, 10, 2)]
        },
        {
          content: { class: 'vc-medi-schedule' },
          dates: [new Date(2023, 10, 6)]
        },
        {
          content: { class: 'vc-medi-end' },
          dates: [new Date(2023, 9, 10)]
        },
        {
          content: { class: 'vc-medi-part' },
          dates: [new Date(2023, 9, 20)]
        }
      ])

      const calendarStates = reactive([
        {
          icon: 'mediend',
          text: '완료'
        },
        {
          icon: 'medipart',
          text: '일부'
        },
        {
          icon: 'medino',
          text: '안함'
        },
        {
          icon: 'medioff',
          text: '예정'
        }
      ])

      const snackbarToggle = (e) => {
        snackbar.value = e
      }

      return {
        panel,
        mediCardList,
        tab,
        hasData,
        text1,
        modal,
        category,
        snackbar,
        goPath,
        addText,
        calendarAttr,
        calendarStates,
        snackbarToggle
      }
    }
  }
</script>
