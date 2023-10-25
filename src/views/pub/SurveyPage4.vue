<template>
  <div class="question" v-for="item in questions" :key="item.id">
    <div class="quest-num">Q{{ item.number }}</div>
    <!-- 문항 -->
    <div class="quest-item">
      <span class="text">{{ item.questions }}</span>
      <!-- tooltip -->
      <Tooltip
        v-if="item.tooltip"
        :btnText="null"
        :text="item.tooltipText"
        class="tooltip-type2 d-inline-flex"
      />
    </div>
    <!-- 답변 아이템 -->
    <div class="answer-items">
      <template v-if="item.id === 1">
        <template v-for="(ans, i) in questItem2" :key="ans.val">
          <v-checkbox
            v-model="item.answer"
            :value="ans.val"
            class="checked-agree checked-all answer"
            :class="{ 'mt-4': i !== 0 }"
          >
            <template v-slot:label>{{ ans.text }} </template>
          </v-checkbox>
          <!-- tooltip -->
          <div class="relative" v-if="ans.tooltip">
            <Tooltip
              :btnText="null"
              :text="ans.tooltipText"
              class="tooltip-type2 mt-2"
            />
          </div>
        </template>
      </template>
      <div v-if="item.id === 2" class="survey-thumb column-2">
        <div class="card-wrap" v-for="ans in questItem2" :key="ans.val">
          <v-checkbox
            v-model="item.answer"
            :value="ans.val"
            class="checked-agree checked-all answer"
          >
            <template v-slot:label>{{ ans.text }} </template>
          </v-checkbox>
          <!-- tooltip -->
          <div class="mt-1 text-left relative">
            <Tooltip
              v-if="ans.tooltip"
              :btnText="null"
              text="잔 또는 병 또는 캔 또는 cc중 한곳 표기, 술 종류 복수답변 가능, 하루에 마신 총 양으로 합산, 기타 술 종류는 비슷한 곳에 표기)"
              class="tooltip-type2 d-inline-flex"
            />
          </div>
        </div>
      </div>
      <!-- radio inline -->
      <v-radio-group
        v-if="item.id === 3"
        v-model="item.answer"
        inline
        class="radio-answer-group"
      >
        <template v-for="(ans, i) in questItem" :key="ans.val">
          <v-radio
            :value="ans.val"
            :class="[
              ans.class,
              { left: i === 0 },
              { right: i === questItem.length - 1 }
            ]"
          >
            <template v-slot:label>
              <div v-html="ans.text" />
            </template>
          </v-radio>
        </template>
      </v-radio-group>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import Tooltip from '@/components/Tooltip.vue'

  export default {
    components: { Tooltip },
    setup() {
      const questions = ref([
        {
          id: 1,
          number: '1',
          qstType: 1,
          questions: 'Case 3-2-1. 복수 답변 객관식 (1단 텍스트)',
          answer: []
        },
        {
          id: 2,
          number: '1',
          qstType: 1,
          questions: 'Case 3-2-1. 복수 답변 객관식 (2단)',
          answer: []
        },
        {
          id: 3,
          number: '2',
          questions: 'Case 4. 척도형',
          type: 'text',
          answer: 'radio-3'
        }
      ])
      const questItem = ref([
        {
          val: 'radio-1',
          class: 'radio-48',
          text: '전혀<br />아니다'
        },
        {
          val: 'radio-2',
          class: 'radio-32',
          text: '아니다'
        },
        {
          val: 'radio-3',
          class: 'radio-24',
          text: '보통이다'
        },
        {
          val: 'radio-4',
          class: 'radio-32',
          text: '그렇다'
        },
        {
          val: 'radio-5',
          class: 'radio-48',
          text: '매우<br />그렇다'
        }
      ])
      const questItem2 = ref([
        {
          val: 1,
          text: '피부관리'
        },
        {
          val: 2,
          text: '탈모'
        },
        {
          val: 3,
          text: '금연'
        },
        {
          val: 4,
          text: '건강한음주',
          tooltip: true,
          tooltipText: '툴팁'
        },
        {
          val: 5,
          text: '업무관리'
        },
        {
          val: 6,
          text: '자기계발'
        },
        {
          val: 7,
          text: '홈케어'
        }
      ])
      return {
        questions,
        questItem,
        questItem2
      }
    }
  }
</script>
