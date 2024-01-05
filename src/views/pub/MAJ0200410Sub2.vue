<template>
  <div class="contents">
    <div class="section-bg">
      <div class="box-rounded-fill bg-white bdr-16 pa-6">
        <h2 class="tit-01 pb-0">
          <img
            src="/assets/images/icon-health-check10.svg"
            alt=""
            class="valign-middle"
          />
          요즘 내 감정
        </h2>
        <div class="fs-20 mt-4">
          <div class="d-flex justify-space-between" v-if="face">
            <div class="lh-5">
              <div>최근 14일의 감정 중</div>
              <div class="font-weight-bold">
                <span class="text-primary">{{ face }}</span
                >가 가장 많았어요
              </div>
            </div>
            <i class="most-face" :data-emoji="face"></i>
          </div>
          <div class="text-center" v-else>
            <strong class="text-primary">오늘 하루</strong> 는 어떠셨나요?
          </div>
        </div>
        <div class="btn-double mt-6">
          <v-btn variant="text" height="48" class="btn-summit">
            오늘 감정 등록하기
          </v-btn>
        </div>
      </div>
    </div>
    <h2 class="tit-03 pb-4 mt-8">심리검사 3건</h2>
    <div role="tablist" class="tabs-simple2">
      <v-btn variant="text" role="tab" aria-selected="true">전체</v-btn>
      <v-btn variant="text" role="tab" aria-selected="false">완료</v-btn>
      <v-btn variant="text" role="tab" aria-selected="false">미완료</v-btn>
    </div>
    <div class="d-grid gap-24 mt-4">
      <template v-if="test.length > 0">
        <v-card
          variant="outlined"
          rounded="xl"
          color="#eee"
          v-for="(item, i) in test"
          :key="i"
          :class="['card-test', { 'border-dashed': !item.result }]"
        >
          <v-card-text>
            <template v-if="item?.result">
              <div
                class="tit-01 pb-0 d-flex justify-space-between align-center"
              >
                <div class="d-flex align-center">
                  <img
                    :src="`/assets/images/icon-health-check0${item.testCd}.svg`"
                    alt=""
                  />
                  {{ item.title }}
                  <img
                    src="/assets/images/icon-new.svg"
                    alt="최신 성격특질검사 결과"
                    v-if="item.new"
                    class="ml-1"
                  />
                </div>
                <div class="text-primary">{{ item.result.grade }}</div>
              </div>
              <div
                class="text-overflow line2 text-grey my-4"
                v-html="item.result.text"
              />
            </template>
            <Nodata
              :icon="true"
              iconSize="xl"
              :iconType="`thumb-test-${i}`"
              class="py-0"
              v-else
            >
              <div class="tit-01 pb-4">{{ item.title }}</div>
            </Nodata>
          </v-card-text>
          <v-card-actions>
            <v-btn
              variant="flat"
              block
              :class="[item?.result ? 'btn-reset' : 'btn-submit']"
              height="40"
            >
              검사{{ item?.result ? '다시' : '시작' }}하기
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      <!-- 검사 완료가 없을때 -->
      <Nodata :icon="true" iconSize="xl" iconType="thumb-test" v-else>
        왼료된 검사가 없습니다
      </Nodata>
    </div>
  </div>
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import { ref } from 'vue'

  export default {
    components: {
      Nodata
    },
    setup() {
      const face = ref('기쁘다')
      // '걱정하다',
      // '짜증나다',
      // '슬프다',
      // '무섭다',
      // '후회하다',
      // '우울하다',
      // '불안하다',
      // '창피하다',
      // '외롭다',
      // '심심하다',
      // '당황하다',
      // '긴장하다',
      // '시원섭섭하다',
      // '싱숭생숭하다',
      // '무덤덤하다',
      // '기쁘다',
      // '즐겁다',
      // '편하다',
      // '만족하다',
      // '상쾌하다',
      // '자신만만하다',

      const test = ref([
        {
          new: false,
          stateCd: 'complete',
          testCd: 7,
          title: '마음건강검사',
          result: {
            grade: '3등급',
            text: '스트레스에 시달리거나 우울감이 있나요?<br />정신건강 관련 질문을 통해 마음 건강을 알 수 있어요.'
          }
        },
        {
          new: false,
          stateCd: 'complete',
          testCd: 8,
          title: '성격유형검사',
          result: {
            grade: 'CP-E',
            text: '성격 특성이 내 생활에 미치는 영향을 알아볼 수 있어요. 직업과 대인관계에 영향을 많이 주는 5가지 특성을 알아보는 검사입니다'
          }
        },
        {
          new: true,
          stateCd: 'complete',
          testCd: 9,
          title: '성격특질검사',
          result: {
            grade: '성실/끈기',
            text: '행동조절, 정서적인 조절, 대인과의 관계 등 다양한 사회관계 개선에 효율적으로 적용할 수 있어요.'
          }
        }
      ])
      return {
        face,
        test
      }
    }
  }
</script>
