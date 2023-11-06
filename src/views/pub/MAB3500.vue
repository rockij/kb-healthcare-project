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
    </div>
    <div class="section-bg">
      <!-- 몸상태 단계별 상태 -->
      <ReportResult :bnShow="'now'" :videBox="false">
        D-18 슬슬 입터짐이 찾아올 시기에요
      </ReportResult>
      <!-- 배란상태 -->
      <v-card rounded="xl" class="card-rounded">
        <div class="tit-02 pb-0">월경체크</div>
        <div class="btn-double type-2 mt-4">
          <v-btn
            v-for="(item, i) in condition"
            :key="i"
            v-model="selected"
            variant="text"
            height="46"
            class="btn-default"
            :class="{ selected: selected.includes(item.value) }"
            @click="getCondition(item.value)"
            >{{ item.text }}</v-btn
          >
        </div>
      </v-card>
      <v-card rounded="xl" class="card-rounded">
        <div class="d-flex justify-space-between">
          <div class="tit-02 pb-4">사랑일</div>
          <v-btn icon variant="flat" density="compact" @click="modal = true">
            <img src="@/assets/images/icon-more.svg" alt="삭제" />
          </v-btn>
        </div>
        <!-- 결과 -->
        <div class="tabs-simple2 gap" v-if="text1">
          <v-btn variant="text" class="fs-16" aria-selected="true">
            {{ text1 }}
          </v-btn>
          <v-btn v-if="text2" variant="text" class="fs-16" aria-selected="true">
            {{ text2 }}
          </v-btn>
        </div>
      </v-card>
      <!-- 몸 상태 -->
      <v-card rounded="xl" class="card-rounded">
        <div class="d-flex justify-space-between">
          <div class="tit-02 pb-4">몸 상태</div>
          <v-btn icon variant="flat" density="compact" @click="modal2 = true">
            <img src="@/assets/images/icon-more.svg" alt="삭제" />
          </v-btn>
        </div>
        <!-- 결과 -->
        <div class="tabs-simple2 gap">
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
      </v-card>
      <v-card rounded="xl" class="card-rounded">
        <div class="d-flex justify-space-between">
          <div class="tit-02 pb-4">피임약 복용 여부</div>
          <v-btn icon variant="flat" density="compact" @click="modal3 = true">
            <img src="@/assets/images/icon-more.svg" alt="삭제" />
          </v-btn>
        </div>
        <!-- 결과 -->
        <div class="tabs-simple2 gap" v-if="text3">
          <v-btn variant="text" class="fs-16" aria-selected="true">
            {{ text3 }}
          </v-btn>
          <v-btn v-if="text4" variant="text" class="fs-16" aria-selected="true">
            {{ text4 }}
          </v-btn>
        </div>
      </v-card>
    </div>
    <div class="py-8">
      <div class="tit-03">챌린지</div>
      <div class="fs-16 text-info-grey">서브 텍스트 노출</div>
      <div style="height: 170px; background-color: #d9d9d9" class="mt-6"></div>
    </div>
    <div class="section-page pt-10">
      <div class="tit-03">추천영역</div>
      <div class="fs-16 text-info-grey">서브 텍스트 노출</div>
      <div style="height: 170px; background-color: #d9d9d9" class="mt-6"></div>
    </div>
  </div>

  <!-- 사랑일 팝업 -->
  <MAJ0202944 v-model="modal" @update="addText" @close="modal = false" />
  <!-- 몸상태 팝업 -->
  <MAJ0202945 v-model="modal2" @update="addText2" @close="modal2 = false" />
  <!-- 피임약 팝업 -->
  <MAJ0202946 v-model="modal3" @update="addText" @close="modal3 = false" />
</template>

<script>
  import ReportResult from '@/components/BanerReport.vue'
  import MAJ0202944 from './MAJ0202944.vue'
  import MAJ0202945 from './MAJ0202945.vue'
  import MAJ0202946 from './MAJ0202946.vue'
  import VCalendar from '@/components/VCalendar.vue'

  import { ref, reactive } from 'vue'
  export default {
    components: {
      MAJ0202944,
      MAJ0202945,
      MAJ0202946,
      ReportResult,
      VCalendar
    },
    setup() {
      const text1 = ref()
      const text2 = ref()
      const text3 = ref()
      const text4 = ref()
      const result = ref([])
      const list = ref([])
      const selected = reactive([1])
      const modal = ref(false)
      const modal2 = ref(false)
      const modal3 = ref(false)
      const weekday = reactive(['일', '월', '화', '수', '목', '금', '토'])
      const states = reactive([
        {
          color: '#907776',
          text: '몸상태'
        },
        {
          color: '#E02A61',
          text: '사랑'
        },
        {
          color: '#B171F7',
          text: '피임약'
        }
      ])
      const condition = reactive([
        { value: 1, text: '월경종료' },
        { value: 2, text: '월경시작' }
      ])
      function getCondition(val) {
        selected.includes(val)
          ? selected.splice(selected.indexOf(val), 1)
          : selected.push(val)
      }
      function addText(val1, val2, data) {
        if (data === 1) {
          text1.value = val1
          text2.value = val2
          modal.value = false
        } else if (data === 2) {
          text3.value = val1
          text4.value = val2
          modal3.value = false
        }
      }
      function addText2(val1, val2, val3) {
        result.value = [...val1, ...val2, ...val3].map((i) => i.text)
        // list.value = result.value.slice(0, 8)
        modal2.value = false
      }
      function moreText() {
        list.value = result.value
      }
      // 여성건강
      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-love' },
          dates: [new Date(2023, 9, 27)]
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-circle' },
          dates: [new Date(2023, 9, 2)]
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-medicine' },
          dates: [new Date(2023, 9, 12)]
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-circle' },
          dates: [new Date(2023, 9, 12)]
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-love' },
          dates: [new Date(2023, 9, 12)]
        },
        // 베란기간
        {
          highlight: { class: 'vc-veran' },
          content: { class: 'vc-veran' },
          dates: [{ start: new Date(2023, 9, 1), span: 6 }]
        },
        // 베란예정일
        {
          highlight: { class: 'vc-veran-day' },
          dates: [new Date(2023, 9, 4)]
        },
        // 월경기간
        {
          highlight: { class: 'vc-menses' },
          content: { class: 'vc-menses' },
          dates: [{ start: new Date(2023, 9, 18), span: 7 }]
        }
      ])
      const calendarStates = reactive([
        {
          icon: 'circle',
          text: '몸상태'
        },
        {
          icon: 'love',
          text: '사랑일'
        },
        {
          icon: 'pill',
          text: '피임약'
        }
      ])
      return {
        text1,
        text2,
        text3,
        text4,
        result,
        list,
        selected,
        modal,
        modal2,
        modal3,
        weekday,
        states,
        condition,
        addText,
        addText2,
        moreText,
        getCondition,
        calendarAttr,
        calendarStates
      }
    }
  }
</script>
