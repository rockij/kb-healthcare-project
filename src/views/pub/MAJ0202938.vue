<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">임신기록</p>
    </div>

    <v-expansion-panels v-model="panel">
      <v-timeline class="medi-timeline preg pt-6" side="end" align="start">
        <v-timeline-item
          v-for="item in list()"
          :key="item.id"
          dot-color="white"
          fill-dot
          :class="`baby-${item.id}`"
        >
          <v-expansion-panel class="timeline-panel">
            <template #title>
              <div class="title-wrap">
                <div class="medi-title">
                  <span class="text-black">{{ item.name }}</span>
                  <span class="time ml-1">{{ item.period }}</span>
                </div>
                <v-card
                  variant="flat"
                  rounded="xl"
                  class="box-info pa-4 mt-1"
                  v-if="item.info"
                >
                  <v-card-text>
                    <i class="icon-weeks">&nbsp;</i>
                    <div class="text ml-2">{{ item.info }}</div>
                  </v-card-text>
                </v-card>
              </div>
            </template>
            <template #text>
              <v-card variant="outlined" rounded="xl" class="card-rounded py-0">
                <div class="card-item">
                  <div class="d-flex justify-space-between">
                    <div class="tit-02 pb-0">태아의 상태</div>
                    <v-btn
                      v-if="!bmi.height"
                      icon
                      variant="flat"
                      density="compact"
                      @click="modal = true"
                      class="btn-icon-plus"
                    >
                      <img
                        src="/assets/images/icon-plus.svg"
                        alt="태아의 상태 선택"
                      />
                    </v-btn>
                    <v-btn icon variant="flat" density="compact" v-else>
                      <img
                        src="/assets/images/icon-more.svg"
                        alt="태아의 상태 설정"
                      />
                    </v-btn>
                  </div>
                  <!-- 결과 -->
                  <div class="tabs-simple2 gap mt-2" v-if="bmi.height">
                    <v-btn
                      variant="text"
                      class="fs-16"
                      aria-selected="true"
                      readonly
                    >
                      {{ bmi.height }}cm
                    </v-btn>
                    <v-btn
                      v-if="bmi.weight"
                      variant="text"
                      class="fs-16"
                      aria-selected="true"
                    >
                      {{ bmi.weight }}g
                    </v-btn>
                  </div>
                </div>
                <div class="card-item">
                  <div class="d-flex justify-space-between">
                    <div class="tit-02 pb-0">초음파 동영상</div>
                    <v-btn
                      v-if="result.length === 0"
                      icon
                      variant="flat"
                      density="compact"
                      @click="modal2 = true"
                      class="btn-icon-plus"
                    >
                      <img
                        src="/assets/images/icon-plus.svg"
                        alt="몸 상태 선택"
                      />
                    </v-btn>
                    <v-btn icon variant="flat" density="compact" v-else>
                      <img src="/assets/images/icon-more.svg" alt="" />
                    </v-btn>
                  </div>
                  <!-- 결과 -->
                  <div class="tabs-simple2 gap mt-2" v-if="result.length > 0">
                    <v-btn
                      variant="text"
                      class="fs-16"
                      v-for="item in result"
                      :key="item"
                      aria-selected="true"
                    >
                      {{ item }}
                    </v-btn>
                  </div>
                </div>
                <div class="card-item">
                  <div class="d-flex justify-space-between">
                    <div class="tit-02 pb-0">메모</div>
                    <v-btn
                      v-if="!text3"
                      icon
                      variant="flat"
                      density="compact"
                      @click="modal3 = true"
                      class="btn-icon-plus"
                    >
                      <img
                        src="/assets/images/icon-plus.svg"
                        alt="피임약 복용 여부 선택"
                      />
                    </v-btn>
                    <v-btn icon variant="flat" density="compact" v-else>
                      <img src="/assets/images/icon-more.svg" alt="" />
                    </v-btn>
                  </div>
                  <!-- 결과 -->
                  <div class="tabs-simple2 gap mt-2" v-if="text3">
                    <v-btn variant="text" class="fs-16" aria-selected="true">
                      {{ text3 }}
                    </v-btn>
                    <v-btn
                      v-if="text4"
                      variant="text"
                      class="fs-16"
                      aria-selected="true"
                    >
                      {{ text4 }}
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </template>
          </v-expansion-panel>
        </v-timeline-item>
      </v-timeline>
    </v-expansion-panels>
  </div>
  <MAJ0202939 v-model="modal" @update="addText" @close="modal = false" />
  <MAJ0202941 v-model="modal2" @update="addText" @close="modal = false" />
</template>

<script>
  import MAJ0202939 from './MAJ0202939.vue'

  import { ref, reactive, onMounted } from 'vue'
  export default {
    components: {
      MAJ0202939
    },
    setup() {
      const panel = ref([0, 1, 2, 3, 4, 5])
      const bmi = ref({})
      const text2 = ref()
      const text3 = ref()
      const text4 = ref()
      const result = ref([])
      const modal = ref(false)
      const modal2 = ref(false)

      const mediCardList = reactive([
        {
          id: 1,
          period: '07.21~07.27',
          name: '1주차',
          info: '난자와 정자가 만났어요'
        },
        {
          id: 2,
          period: '07.21~07.27',
          name: '2주차',
          info: '아기집이 만들어져요'
        },
        {
          id: 3,
          period: '07.21~07.27',
          name: '3주차',
          info: '긴 꼬리 물고기 모양의 배아가 모습을 나타내요'
        },
        {
          id: 4,
          period: '07.21~07.27',
          name: '4주차',
          info: '사과 씨앗 만한 크기로 성장해요. 탯줄이 생겨서 영양소 공급을 할 수 있어요'
        },
        {
          id: 5,
          period: '07.21~07.27',
          name: '5주차',
          info: '태아를 싸고있는 태낭을 볼 수 있어요'
        }
        // {
        //   id: 6,
        //   period: '07.21~07.27',
        //   name: '6주차',
        //   info: '올챙이 모습의 태아를 볼 수 있어요'
        // },
        // {
        //   id: 7,
        //   period: '07.21~07.27',
        //   name: '7주차',
        //   info: '손가락, 발가락을 지닌 2등신의 모습을 볼 수 있어요'
        // },
        // {
        //   id: 8,
        //   period: '07.21~07.27',
        //   name: '8주차',
        //   info: '아직 꼬리를 가지고 있어요. 신경세포가 발달하기 시작해요'
        // }
      ])

      const list = () => {
        return mediCardList.sort((a, b) => {
          return b.id - a.id
        })
      }

      function addText(val) {
        bmi.value = val
        modal.value = false
      }
      function addText2(val1, val2, val3) {
        result.value = [...val1, ...val2, ...val3].map((i) => i.text)
        // list.value = result.value.slice(0, 8)
        modal2.value = false
      }

      return {
        bmi,
        text2,
        text3,
        text4,
        panel,
        result,
        mediCardList,
        list,
        modal,
        modal2,
        addText,
        addText2
      }
    }
  }
</script>
