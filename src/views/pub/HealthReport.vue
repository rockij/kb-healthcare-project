<template>
  <div :class="[type === 'popup' ? 'pt-0' : 'py-8']">
    <div class="tit-03 lh-4 pb-1" v-if="type !== 'popup'">
      건강관리 기록 현황
    </div>
    <div class="text-grey">
      매월 건강검진 결과와 기록입력 추이에 따라 관리가 필요한 기록을 추천해
      드려요.
    </div>
    <v-card
      variant="flat"
      rounded="xl"
      :class="['box-info pa-4 mt-4', { 'health-box01': type === 'popup' }]"
    >
      <div class="fs-13 text-primary mb-1">필수관리 - 꼭 관리가 필요해요</div>
      <v-card-text class="pa-0">
        <!-- 걸음 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img src="/assets/images/icon-record-walking.svg" alt="걸음" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">걸음</strong>
            <span> 개선되고 있어요 </span>
          </div>
          <div class="text-right">
            <!-- 개선 -->
            <v-chip
              label
              size="small"
              color="success"
              class="chip-default chip-color"
            >
              개선
            </v-chip>
          </div>
        </div>
        <!-- 기분 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img src="/assets/images/icon-record-emotion.svg" alt="기분" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">기분</strong>
            <span>정보가 더 필요해요</span>
          </div>
          <div class="text-right">
            <!-- 집계중 -->
            <v-chip
              label
              size="small"
              color="primary"
              class="chip-default chip-color"
            >
              집계중
            </v-chip>
          </div>
        </div>
        <!-- 수면 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img src="/assets/images/icon-record-sleep.svg" alt="수면" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">수면</strong>
            <span>주의가 필요해요</span>
          </div>
          <div class="text-right">
            <!-- 악화 -->
            <v-chip
              label
              size="small"
              color="error"
              class="chip-default chip-color"
            >
              악화
            </v-chip>
          </div>
        </div>
        <!-- 식사 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img src="/assets/images/icon-record-meal.svg" alt="식사" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">식사</strong>
            <span>변화가 없어요</span>
          </div>
          <div class="text-right">
            <!-- 유지 -->
            <v-chip
              label
              size="small"
              color="yellow-darken-1"
              class="chip-default chip-color"
            >
              유지
            </v-chip>
          </div>
        </div>
        <!-- 체성분 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img src="/assets/images/icon-record-BMI.svg" alt="체성분" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">체성분</strong>
            <span>관리를 시작해봐요</span>
          </div>
          <div class="text-right">
            <!-- 미연결 -->
            <v-chip label size="small" class="chip-default"> 미연결 </v-chip>
          </div>
        </div>

        <!-- 여성건강 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img
              src="/assets/images/icon-record-menstruation.svg"
              alt="여성건강"
            />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">여성건강</strong>
            <span>관리를 시작해봐요</span>
          </div>
          <div class="text-right">
            <!-- 유지 -->
            <v-chip label size="small" class="chip-default"> 미입력 </v-chip>
          </div>
        </div>

        <!-- <div v-for="(item, i) in list" :key="i" class="item-grid">
          <v-avatar color="transparent" size="24">
            <img
              :src="`/assets/images/icon-record-${item.cate}.svg`"
              :alt="item.cateText"
            />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">{{ item.cateText }}</strong>
            <span>
              <template v-if="item.stateCd === 1">개선되고 있어요</template>
              <template v-if="item.stateCd === 2">변화가 없습니다</template>
              <template v-if="item.stateCd === 3">주의가 필요해요</template>
              <template v-if="item.stateCd === 4">정보가 더 필요해요</template>
              <template v-if="item.stateCd === undefined"
                >변화가 없습니다</template
              >
            </span>
          </div>
          <div class="text-right">
            <v-chip
              label
              size="small"
              :color="getStyle(item.stateCd)"
              class="chip-default chip-color"
            >
              {{ getStyle(item.stateCd, 'text') }}
            </v-chip>
          </div>
        </div> -->
      </v-card-text>
    </v-card>

    <v-card
      variant="flat"
      rounded="xl"
      :class="['box-grey pa-4 mt-2', { 'health-box02': type === 'popup' }]"
    >
      <div class="fs-13 text-grey mb-1">일반관리 - 함께 관리하면 좋아요</div>
      <v-card-text class="pa-0">
        <!-- 심박 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img src="/assets/images/icon-record-heart.svg" alt="심박" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">심박</strong>
            <span>관리를 시작해봐요</span>
          </div>
          <div class="text-right">
            <!-- 개선 -->
            <v-chip
              label
              size="small"
              color="success"
              class="chip-default chip-color"
            >
              개선
            </v-chip>
          </div>
        </div>

        <!-- 혈압 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img
              src="/assets/images/icon-record-blood-pressure.svg"
              alt="혈압"
            />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">혈압</strong>
            <span>관리를 시작해봐요</span>
          </div>
          <div class="text-right">
            <!-- 집계중 -->
            <v-chip
              label
              size="small"
              color="primary"
              class="chip-default chip-color"
            >
              집계중
            </v-chip>
          </div>
        </div>

        <!-- 수분 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img src="/assets/images/icon-record-water.svg" alt="수분" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">수분</strong>
            <span>관리를 시작해봐요</span>
          </div>
          <div class="text-right">
            <!-- 악화 -->
            <v-chip
              label
              size="small"
              color="error"
              class="chip-default chip-color"
            >
              악화
            </v-chip>
          </div>
        </div>

        <!-- 혈당 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img src="/assets/images/icon-record-blood-sugar.svg" alt="혈당" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">혈당</strong>
            <span>관리를 시작해봐요</span>
          </div>
          <div class="text-right">
            <!-- 유지 -->
            <v-chip
              label
              size="small"
              color="yellow-darken-1"
              class="chip-default chip-color"
            >
              유지
            </v-chip>
          </div>
        </div>

        <!-- 운동 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img src="/assets/images/icon-record-workout.svg" alt="운동" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">운동</strong>
            <span>관리를 시작해봐요</span>
          </div>
          <div class="text-right">
            <!-- 미연결 -->
            <v-chip label size="small" class="chip-default"> 미연결 </v-chip>
          </div>
        </div>

        <!-- 흡연 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img src="/assets/images/icon-record-smoking.svg" alt="흡연" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">흡연</strong>
            <span>관리를 시작해봐요</span>
          </div>
          <div class="text-right">
            <!-- 미연결 -->
            <v-chip label size="small" class="chip-default"> 미연결 </v-chip>
          </div>
        </div>

        <!-- 음주 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img src="/assets/images/icon-record-drink.svg" alt="음주" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">음주</strong>
            <span>관리를 시작해봐요</span>
          </div>
          <div class="text-right">
            <!-- 미연결 -->
            <v-chip label size="small" class="chip-default"> 미연결 </v-chip>
          </div>
        </div>

        <!-- 복약 -->
        <div class="item-grid">
          <v-avatar color="transparent" size="24">
            <img src="/assets/images/icon-record-medication.svg" alt="복약" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">복약</strong>
            <span>관리를 시작해봐요</span>
          </div>
          <div class="text-right">
            <!-- 미연결 -->
            <v-chip label size="small" class="chip-default"> 미연결 </v-chip>
          </div>
        </div>

        <!-- <div v-for="(item, i) in list2" :key="i" class="item-grid">
          <v-avatar color="transparent" size="24">
            <img :src="`/assets/images/icon-record-${item.cate}.svg`" alt="" />
          </v-avatar>
          <div class="d-flex">
            <strong class="mr-1">{{ item.cateText }}</strong>
            <span>
              <template v-if="item.stateCd">
                {{ item.text }}
              </template>
              <template v-else>
                <template v-if="item.type === 'input'">
                  기록이 중요해요
                </template>
                <template v-else> 관리를 시작해봐요 </template>
              </template>
            </span>
          </div>
          <div class="text-right">
            <v-chip
              label
              size="small"
              :color="getStyle(item.stateCd)"
              class="chip-default chip-color"
              v-if="item.stateCd"
            >
              {{ getStyle(item.stateCd, 'text') }}
            </v-chip>
            <v-chip label size="small" class="chip-default" v-else>
              <template v-if="!item.stateCd">미입력</template>
            </v-chip>
          </div>
        </div> -->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    props: {
      type: {
        type: String,
        default: 'contents'
      }
    },
    setup() {
      const list = ref([
        {
          cate: 'walking',
          cateText: '걸음',
          stateCd: 1
        },
        {
          cate: 'emotion',
          cateText: '기분',
          stateCd: 4
        },
        {
          cate: 'sleep',
          cateText: '수면',
          stateCd: 3
        },
        {
          cate: 'meal',
          cateText: '식사',
          stateCd: 2
        },
        {
          cate: 'BMI',
          cateText: '체성분',
          stateCd: 2
        },
        {
          cate: 'menstruation',
          cateText: '여성건강',
          stateCd: 4
        }
      ])

      const list2 = ref([
        {
          type: 'connect',
          cate: 'heart',
          cateText: '심박'
        },
        {
          type: 'input',
          cate: 'blood-pressure',
          cateText: '혈압'
        },
        {
          type: 'input',
          cate: 'water',
          cateText: '수분'
        },
        {
          type: 'input',
          cate: 'blood-sugar',
          cateText: '혈당'
        },
        {
          type: 'input',
          cate: 'workout',
          cateText: '운동'
        },
        {
          type: 'input',
          cate: 'smoking',
          cateText: '흡연'
        },
        {
          type: 'input',
          cate: 'drink',
          cateText: '음주'
        },
        {
          type: 'input',
          cate: 'medication',
          cateText: '복약'
        }
      ])

      function getStyle(state, item) {
        if (item) {
          switch (state) {
            case 1:
              return '개선'
            case 2:
              return '유지'
            case 3:
              return '악화'
            case 4:
              return '집계중'
          }
        } else {
          switch (state) {
            case 1:
              return 'success'
            case 2:
              return 'yellow-darken-1'
            case 3:
              return 'error'
            case 4:
              return 'primary'
          }
        }
      }

      return {
        list,
        list2,
        getStyle
      }
    }
  }
</script>
