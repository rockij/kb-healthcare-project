<template>
  <div class="question" v-for="item in questions" :key="item.id">
    <div class="quest-num">Q{{ item.number }}</div>
    <!-- 문항 -->
    <div class="quest-item">
      <span :class="['text', { wrap: item.qstType === 2 }]">
        <template v-if="item.qstType === 1">{{ item.questions }}</template>
        <template v-else>
          <span class="text-1">{{ item.questions.text1 }}</span>
          <v-divider class="line"></v-divider>
          <span>{{ item.questions.text2 }}</span>
        </template>
      </span>
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
      <!-- 우측라벨 -->
      <v-text-field
        v-if="item.id === 1"
        class="input-basic textfield-default suffix mt-4"
        :class="text ? 'hasData' : ''"
        single-line
        required
        variant="outlined"
        v-model="text"
        clearable
      >
        <template v-slot:append-inner>cm</template>
      </v-text-field>

      <!-- 좌측라벨 -->
      <v-text-field
        v-if="item.id === 2"
        class="input-basic textfield-default suffix mt-4"
        :class="text ? 'hasData' : ''"
        single-line
        required
        variant="outlined"
        v-model="text"
        clearable
        placeholder="숫자만 입력"
      >
      </v-text-field>

      <!-- 우측라벨 -->
      <v-text-field
        v-if="item.id === 3"
        class="input-basic textfield-default suffix mt-4"
        :class="text ? 'hasData' : ''"
        single-line
        required
        variant="outlined"
        v-model="text"
        clearable
        placeholder="숫자만 입력"
      >
        <template v-slot:append-inner>cm</template>
      </v-text-field>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import Tooltip from '@/components/Tooltip.vue'

  export default {
    components: { Tooltip },
    setup() {
      const text = ref('')
      const questions = ref([
        {
          id: 1,
          number: '1-1-1',
          qstType: 1,
          questions: '키가 궁금해요'
        },
        {
          id: 2,
          number: '1-1-2',
          qstType: 1,
          questions: '몸무게가 궁금해요'
        },
        {
          id: 3,
          number: '1-1-3',
          qstType: 1,
          questions: '우측라벨 입력'
        }
      ])
      return {
        text,
        questions
      }
    }
  }
</script>
