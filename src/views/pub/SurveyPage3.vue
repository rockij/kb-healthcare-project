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
      <v-btn-toggle v-if="item.id === 2" v-model="toggle" class="btn-area2">
        <v-btn
          variant="flat"
          height="46"
          rounded="lg"
          v-for="n in 2"
          :key="n"
          :value="n - 1"
          :class="['fs-14 font-weight-bold', { skip: toggle === n - 1 }]"
          block
        >
          <template v-if="n === 1">예</template>
          <template v-if="n === 2">아니오</template>
        </v-btn>
      </v-btn-toggle>
      <v-radio-group
        v-if="item.id === 1"
        v-model="item.answer"
        hide-details
        class="radio-answer-group"
      >
        <template v-for="(ans, i) in questItem1" :key="ans.val">
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
      <v-item-group
        v-if="item.id === 3"
        class="survey-thumb"
        selected-class="v-card--variant-outlined text-yellow"
      >
        <v-item v-slot="{ selectedClass, toggle }" v-for="n in 2" :key="n">
          <div class="card-wrap">
            <v-card
              variant="flat"
              rounded="xl"
              :class="['text-center', selectedClass]"
              @click="toggle"
            >
              <img src="@/assets/images/dummy-thumb3.jpg" height="200" alt="" />
            </v-card>
          </div>
        </v-item>
      </v-item-group>
      <v-item-group
        v-if="item.id === 4"
        class="survey-thumb column-2"
        selected-class="v-card--variant-outlined text-yellow"
      >
        <v-item v-slot="{ selectedClass, toggle }" v-for="n in 2" :key="n">
          <div class="card-wrap">
            <v-card
              variant="flat"
              rounded="xl"
              :class="['text-center', selectedClass]"
              @click="toggle"
            >
              <img src="@/assets/images/dummy-thumb3.jpg" height="150" alt="" />
            </v-card>
            <div class="mt-1 text-center">소주 {{ n }}병</div>
          </div>
        </v-item>
      </v-item-group>
      <v-item-group
        v-if="item.id === 5"
        class="survey-thumb column-3"
        selected-class="v-card--variant-outlined text-yellow"
      >
        <v-item v-slot="{ selectedClass, toggle }" v-for="n in 3" :key="n">
          <div class="card-wrap">
            <v-card
              variant="flat"
              rounded="xl"
              :class="['text-center', selectedClass]"
              @click="toggle"
            >
              <img src="@/assets/images/dummy-thumb3.jpg" height="150" alt="" />
            </v-card>
            <!-- tooltip -->
            <div class="relative">
              <Tooltip
                :btnText="null"
                text="잔 또는 병 또는 캔 또는 cc중 한곳 표기, 술 종류 복수답변 가능, 하루에 마신 총 양으로 합산, 기타 술 종류는 비슷한 곳에 표기)"
                class="tooltip-type2 mt-2"
              />
            </div>
          </div>
        </v-item>
      </v-item-group>
      <!-- image type 다중 선택 -->
      <v-item-group
        v-if="item.id === 6"
        class="survey-thumb column-3"
        selected-class="v-card--variant-outlined text-yellow"
        multiple
      >
        <v-item v-slot="{ selectedClass, toggle }" v-for="n in 10" :key="n">
          <div class="card-wrap">
            <v-card
              variant="flat"
              rounded="xl"
              :class="['text-center', selectedClass]"
              @click="toggle"
            >
              <img src="@/assets/images/dummy-thumb3.jpg" height="150" alt="" />
            </v-card>
            <div class="mt-1 text-center relative">
              소주 {{ n }}병
              <!-- tooltip -->
              <Tooltip
                v-if="n === 9"
                :btnText="null"
                text="잔 또는 병 또는 캔 또는 cc중 한곳 표기, 술 종류 복수답변 가능, 하루에 마신 총 양으로 합산, 기타 술 종류는 비슷한 곳에 표기)"
                class="tooltip-type2 d-inline-flex"
              />
            </div>
          </div>
        </v-item>
      </v-item-group>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import Tooltip from '@/components/Tooltip.vue'

  export default {
    components: { Tooltip },
    setup() {
      const toggle = ref()
      const text1 = ref('')
      const text2 = ref('')
      const questions = ref([
        {
          id: 1,
          number: '1',
          qstType: 1,
          questions: 'Case 2-1-1. 단답형 객관식 (텍스트, 1단)',
          answer: null
        },
        {
          id: 2,
          number: '1',
          qstType: 1,
          questions: 'Case 2-1-2. 단답형 객관식 (텍스트, 2단)'
        },
        {
          id: 3,
          number: '1',
          qstType: 1,
          questions: 'Case 2-1-2. 단답형 객관식 (이미지, 1단)'
        },
        {
          id: 4,
          number: '1',
          qstType: 1,
          questions: 'Case 2-2-2. 단답형 객관식 (이미지형, 2단)'
        },
        {
          id: 5,
          number: '1',
          qstType: 1,
          questions: 'Case 2-2-2. 단답형 객관식 (이미지형, 3단)'
        },
        {
          id: 6,
          number: '1',
          qstType: 1,
          questions: 'Case 3-3-1. 복수 답변 객관식 (3단 이미지)'
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

      return {
        toggle,
        text1,
        text2,
        questions,
        questItem1
      }
    }
  }
</script>
