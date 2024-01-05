<template>
  <div class="question" v-for="item in questions" :key="item.id">
    <!-- 문항 -->
    <div class="quest-item text-center">
      <span class="text wrap">
        <span class="text-1">{{ item.questions.text1 }}</span>
        <v-divider class="line"></v-divider>
        <span>{{ item.questions.text2 }}</span>
      </span>
      <div class="text">{{ item.questions.text3 }}</div>
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
      <v-radio-group
        v-model="item.answer"
        hide-details
        class="radio-answer-group"
      >
        <v-radio
          :value="n"
          v-for="n in 5"
          :key="n"
          :class="{ 'mt-4': n !== 0 }"
        >
          <template v-slot:label>냉철한 사고력</template>
        </v-radio>
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
          qstType: 2,
          questions: {
            text1: '나는',
            text2: '이',
            text3: '요구되는'
          },
          answer: 5
        }
      ])
      return {
        questions
      }
    }
  }
</script>
