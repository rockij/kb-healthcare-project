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
      <!-- radio inline -->
      <v-radio-group v-model="item.answer" inline class="radio-answer-group">
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
          number: '2',
          questions: '사람들이 나를 싫어하게 될까봐 위축된다',
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
      return {
        questions,
        questItem
      }
    }
  }
</script>
