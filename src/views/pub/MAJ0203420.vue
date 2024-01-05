<template>
  <div class="contents">
    <!-- 2차 영역 -->
    <!-- <v-expansion-panels class="medi-users mt-4 mb-8">
      <v-expansion-panel class="body-panels">
        <template #title>
          <div class="title-wrap" v-for="item in friends" :key="item">
            <v-list-item
              :prepend-avatar="'/assets/images/' + item.path + '.png'"
              class="list-round-box-items"
              tag="button"
              role="button"
            >
              <template v-slot:title>{{ item.title }}</template>
            </v-list-item>
          </div>
        </template>
        <template #text>
          <div class="text-wrap" v-for="item in friends2" :key="item">
            <v-list-item
              :prepend-avatar="'/assets/images/' + item.path + '.png'"
              class="list-round-box-items"
              tag="button"
              role="button"
            >
              <template v-slot:title>{{ item.title }}</template>
            </v-list-item>
          </div>
        </template></v-expansion-panel
      >
    </v-expansion-panels> -->
    <!-- // 2차 영역 -->

    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" class="today-case" />
    </div>
    <template v-if="mediCardList.length > 0">
      <div class="section-page bg pa-4" v-if="mediCardList.length > 0">
        <BanerReport :bnShow="'good'" :videBox="false">
          휴레이 메시지 영역
        </BanerReport>

        <!-- 2차 영역 -->
        <!-- <v-card
          variant="flat"
          rounded="xl"
          class="calorie-card type-3 mt-4 friend-alarm"
        >
          <div class="alarm-box">
            <div class="left-text">
              <div class="top-text">약/영양제 복용 현황</div>
              <div class="bottom-text text-overflow line2">
                총 <span class="text-blue">5</span>건 중
                <span class="text-blue">2</span>건 복용 완료 복용 완료 복용 완료
                복용 완료 복용 완료 복용 완료
              </div>
            </div>
            <img
              src="/assets/images/icon-friend-alarm.png"
              alt=""
              class="alarm-img"
            />
          </div>
          <div class="d-flex justify-end mt-2 mr-3">
            <div class="alarm-tip">
              <p class="desc">응원 메시지 남겨보세요</p>
              <img src="/assets/images/icon-arrow-right-blue.svg" alt="" />
            </div>
          </div>
        </v-card> -->

        <!-- <v-card
          variant="flat"
          rounded="xl"
          class="pt-6 pb-0 mt-4 medicard-bottom-wrap"
        >
          <div class="medicard-bottom pa-0">
            <v-btn variant="flat" :ripple="false" class="pa-0">
              <img src="/assets/images/icon-medi-btn1.png" alt="" />
              <div class="pt-2">
                처방 내역 <span class="font-weight-bold">확인하기</span>
              </div>
            </v-btn>
            <v-divider vertical class="medicard-divider" />
            <v-btn variant="flat" :ripple="false" class="pa-0">
              <img src="/assets/images/icon-medi-btn2.png" alt="" />
              <div class="pt-2">
                돌봄친구<span class="font-weight-bold">방문하기</span>
              </div></v-btn
            >
          </div>
          <v-divider class="medicard-divider mt-6" />

          <div class="py-4">
            <div @click="show = !show">
              <div class="ex-title-wrap">
                <div class="ex-title-name">
                  <span class="name">
                    <span class="nick">닉네임은열글자까지임</span
                    ><strong>님 </strong>
                    <span>메시지 도착</span>
                    <v-avatar
                      color="#EB5147"
                      size="6"
                      class="ex-dot"
                    ></v-avatar>
                  </span>
                </div>
                <div class="ex-title-time">23시간 60분 전</div>
                <img
                  v-if="!show"
                  src="/assets/images/arrow-down.png"
                  alt=""
                  class="list-arrow"
                />
                <img
                  v-else
                  src="/assets/images/arrow-up.png"
                  alt=""
                  class="list-arrow"
                />
              </div>
            </div>
            <v-expand-transition>
              <div v-if="show" class="expand-area">
                <div class="ex-title-wrap pt-2">
                  <div class="ex-title-name">
                    <span class="name">
                      <span class="nick">닉네임은열글자까지임</span
                      ><strong>님 </strong>
                      <span>메시지 도착</span>
                      <v-avatar
                        color="#EB5147"
                        size="6"
                        class="ex-dot"
                      ></v-avatar>
                    </span>
                  </div>
                  <div class="ex-title-time">23시간 60분 전</div>
                </div>
                <div class="ex-title-wrap pt-2">
                  <div class="ex-title-name">
                    <span class="name">
                      <span class="nick">닉네임은열글자까지임</span
                      ><strong>님 </strong>
                      <span>메시지 도착</span>
                      <v-avatar
                        color="#EB5147"
                        size="6"
                        class="ex-dot"
                      ></v-avatar>
                    </span>
                  </div>
                  <div class="ex-title-time">23시간 60분 전</div>
                </div>
              </div>
            </v-expand-transition>
          </div>
        </v-card> -->
        <!-- // 2차 영역 -->
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
      <div class="pt-6">
        <div v-if="tab === 'one'" class="first-tab">
          <!-- 2023.11.22 수정: side="end" 추가, <template v-slot:opposite> 삭제  -->
          <v-timeline class="medi-timeline" side="end">
            <v-timeline-item dot-color="#CCCCCC" fill-dot size="x-small">
              <v-expansion-panels>
                <v-expansion-panel class="timeline-panel">
                  <template #title>
                    <div class="medi-title">
                      오전 6시 00분<span class="no-medi-badge ml-2"
                        >미복용</span
                      >
                    </div>
                  </template>
                  <template #text>
                    <div v-for="item in mediCardList" :key="item">
                      <v-card
                        variant="flat"
                        rounded="xl"
                        class="calorie-card type-3 mt-4 medi-card"
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
                        class="calorie-card type-3 mt-4 medi-card"
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
                        class="calorie-card type-3 mt-4 medi-card"
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
                        class="calorie-card type-3 mt-4 medi-card"
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
            </v-timeline-item>

            <v-timeline-item dot-color="#cccccc" fill-dot size="x-small">
              <v-expansion-panels>
                <v-expansion-panel class="timeline-panel">
                  <template #title>
                    <div class="medi-title">오후 5시 00분</div>
                  </template>
                  <template #text>
                    <div v-for="item in mediCardList" :key="item">
                      <v-card
                        variant="flat"
                        rounded="xl"
                        class="calorie-card type-3 mt-4 medi-card"
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
        </div>

        <div v-if="tab === 'two'">
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
        </div>
      </div>

      <div class="btn-double d-flex pt-8">
        <v-btn
          variant="text"
          height="46"
          class="btn-summit attach-btn type-2"
          @click="goPath('MAJ0203521')"
          >알림 추가하기</v-btn
        >
      </div>

      <!-- 미등록 화면일 때 class: brt-0 추가 -->
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
      <!-- 노데이터 디자인 수정 -->
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <div class="sorting-data">
          <v-btn variant="text" density="compact" class="fs-16 px-0">
            {{ category }}
            <img
              src="/assets/images/icon-arrow-down2.svg"
              alt=""
              class="ml-1"
            />
          </v-btn>
        </div>
        <Nodata
          :icon="true"
          :iconSize="'medication'"
          :optionClass="'lifelog'"
          class="pt-4"
        >
          <div class="fs-20">
            아직 등록하신 <br />
            <span class="font-weight-bold">내역이 없어요</span>
          </div>
        </Nodata>
        <div class="btn-area2 mt-4">
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
      <!-- 2차 추가사항 -->
      <!-- <v-card
        variant="flat"
        rounded="xl"
        class="px-4 py-6 mt-4 medicard-bottom"
      >
        <v-btn variant="flat" :ripple="false" class="pa-0">
          <img src="/assets/images/icon-medi-btn1.png" alt="" />
          <div class="pt-2">
            처방 내역 <span class="font-weight-bold">불러오기</span>
          </div>
        </v-btn>
        <v-divider vertical class="medicard-divider" />
        <v-btn variant="flat" :ripple="false" class="pa-0">
          <img src="/assets/images/icon-medi-btn2.png" alt="" />
          <div class="pt-2">
            돌봄친구<span class="font-weight-bold">초대하기</span>
          </div></v-btn
        >
      </v-card> -->
    </div>
    <!-- // nodata -->
  </div>
  <v-snackbar v-model="snackbar" :timeout="2000" class="toast-basic not-button">
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
      const show = ref(false)
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

      const friends = ref([
        {
          title: '$닉네임$님',
          total: 'n',
          num: 'n',
          path: 'img-friend-01'
        }
      ])

      const friends2 = ref([
        {
          title: '닉네임은열글자입니다',
          total: 'n',
          num: 'n',
          path: 'img-friend-02'
        },
        {
          title: '닉네임은열글자입니다',
          total: 'n',
          num: 'n',
          path: 'img-friend-03'
        },
        {
          title: '닉네임은열글자입니다',
          total: 'n',
          num: 'n',
          path: 'img-friend-04'
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
        // 0회 & 오늘
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today-bold vc-medi-in0' }
        },
        // 0회
        {
          content: { class: 'vc-medi-in0' },
          dates: [new Date(2023, 11, 24)]
        },
        // 일부(1회 이상)
        {
          content: { class: 'vc-medi-in1' },
          dates: [new Date(2023, 11, 25)]
        },
        // 모두
        {
          content: { class: 'vc-medi-ina' },
          dates: [new Date(2023, 11, 26)]
        },
        // 예정
        {
          content: { class: 'vc-medi-inf' },
          dates: [new Date(2023, 11, 28)]
        }
      ])

      const snackbarToggle = (e) => {
        snackbar.value = e
      }

      return {
        friends,
        friends2,
        show,
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
        snackbarToggle
      }
    }
  }
</script>
