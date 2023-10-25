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
      <!-- 다중선택 -->
      <template v-if="item.type === 'check'">
        <template v-for="(ans, i) in questionList(item.id)" :key="ans.val">
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
        <v-btn variant="text" height="40" class="attach-btn mt-6" block>
          다음
        </v-btn>
        <v-divider class="line-dashed mt-8"></v-divider>
      </template>
      <!-- 단일선택 radio -->
      <v-radio-group
        v-if="item.type === 'radio'"
        v-model="item.answer"
        hide-details
        class="radio-answer-group"
      >
        <template v-for="(ans, i) in questionList(item.id)" :key="ans.val">
          <v-radio :value="ans.val" :class="{ 'mt-4': i !== 0 }">
            <template v-slot:label>{{ ans.text }}</template>
          </v-radio>
          <!-- tooltip -->
          <Tooltip
            v-if="ans.tooltip"
            :btnText="null"
            :text="ans.tooltipText"
            class="tooltip-type2 mt-2"
          />
        </template>
      </v-radio-group>
      <!-- 주관식 -->
      <v-text-field
        v-if="item.type === 'text'"
        class="input-basic textfield-default suffix mt-4"
        :class="text ? 'hasData' : ''"
        single-line
        required
        variant="outlined"
        v-model="text"
        clearable
      >
        <template v-slot:append-inner>년</template>
      </v-text-field>
      <!--  -->
      <v-radio-group
        v-if="item.type === 'radio-inline'"
        v-model="item.answer"
        inline
        class="radio-answer-group"
      >
        <template v-for="(ans, i) in questionList(item.id)" :key="ans.val">
          <v-radio
            :value="ans.val"
            :class="[
              ans.class,
              { left: i === 0 },
              { right: i === questionList(item.id).length - 1 }
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
      const text = ref('')
      const questions = ref([
        {
          id: 1,
          number: '1',
          questions:
            '지난 1년 동안 술을 마시는 횟수는 어느 정도입니까? (한가지만 답변)',
          tooltip: true,
          tooltipText:
            '지난 1년 동안 술을 마시는 횟수는 어느 정도입니까? (한가지만 답변)',
          type: 'check',
          answer: [3, 4]
        },
        {
          id: 2,
          number: '1-1',
          questions: '현재 일반담배(궐련)을 피우십니까?',
          type: 'radio',
          answer: 2
        },
        {
          id: 3,
          number: '1-1-1',
          questions: '총 피운 기간은 얼마나 되나요?',
          type: 'text',
          answer: 2
        }
      ])
      const questItem1 = ref([
        {
          val: 1,
          text: '일주일에'
        },
        {
          val: 2,
          text: '한달에'
        },
        {
          val: 3,
          text: '1년에',
          tooltip: true,
          tooltipText: '텍스트'
        },
        {
          val: 4,
          text: '술을 마시지 않음'
        }
      ])
      const questItem2 = ref([
        {
          val: 1,
          text: '현재 피움'
        },
        {
          val: 2,
          text: '과거에 피웠으나 현재는 끊었음'
        }
      ])
      const questItem3 = ref([
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
      function questionList(id) {
        switch (id) {
          case 1:
            return questItem1.value
          case 2:
            return questItem2.value
          case 4:
            return questItem3.value
        }
      }
      return {
        text,
        questions,
        questItem1,
        questItem2,
        questItem3,
        questionList
      }
    }
  }
</script>
