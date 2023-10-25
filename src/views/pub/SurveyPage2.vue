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
      <v-textarea
        v-if="item.id === 1"
        class="textarea-basic textfield-default pt-4"
        persistent-counter
        :maxlength="200"
        counter
        variant="outlined"
        no-resize
      ></v-textarea>
      <template v-if="item.id === 2">
        <v-btn
          block
          variant="outlined"
          rounded="xl"
          height="60"
          :ripple="false"
          class="btn-search mt-5"
          color="#ccc"
        >
          <span class="text text-info-grey type-3">
            시간 선택
            <img src="@/assets/images/icon-arrow-down2.svg" alt="검색" />
          </span>
        </v-btn>
        <!-- tooltip -->
        <div class="relative">
          <Tooltip
            :btnText="null"
            text="잔 또는 병 또는 캔 또는 cc중 한곳 표기, 술 종류 복수답변 가능, 하루에 마신 총 양으로 합산, 기타 술 종류는 비슷한 곳에 표기)"
            class="tooltip-type2 mt-2"
          />
        </div>
      </template>
      <div class="textfield-half" v-if="item.id === 3">
        <v-text-field
          class="input-basic textfield-default suffix mt-4"
          :class="text1 ? 'hasData' : ''"
          single-line
          required
          variant="outlined"
          v-model="text1"
          clearable
        ></v-text-field>
        <span class="unit">.</span>
        <v-text-field
          class="input-basic textfield-default suffix mt-4"
          :class="text2 ? 'hasData' : ''"
          single-line
          required
          variant="outlined"
          v-model="text2"
          clearable
          placeholder="숫자만 입력"
        >
          <template v-slot:append-inner>cm</template>
        </v-text-field>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import Tooltip from '@/components/Tooltip.vue'

  export default {
    components: { Tooltip },
    setup() {
      const text1 = ref('')
      const text2 = ref('')
      const questions = ref([
        {
          id: 1,
          number: '1',
          qstType: 2,
          questions: {
            text1: '나의 건강 목표는',
            text2: '다'
          }
        },
        {
          id: 2,
          number: '1',
          qstType: 1,
          questions: '평소 하루에 몇시간 하십니까?'
        },
        {
          id: 3,
          number: '1',
          qstType: 1,
          questions: '키가 궁금해요'
        }
      ])
      return {
        text1,
        text2,
        questions
      }
    }
  }
</script>
