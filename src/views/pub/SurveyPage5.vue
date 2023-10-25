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
        <!-- 우측라벨 -->
        <v-text-field
          v-if="item.id === 1"
          class="input-basic textfield-default suffix mt-4"
          :class="item.answer ? 'hasData' : ''"
          single-line
          required
          variant="outlined"
          v-model="item.answer"
          clearable
        >
          <template v-slot:append-inner>cm</template>
        </v-text-field>
        <!-- 종속문항이 있을경우  -->
        <div v-if="item.children" class="sub-item">
          <v-btn
            v-if="!isShow"
            variant="text"
            height="40"
            class="attach-btn mt-6"
            block
            :disabled="!item.answer"
            @click="isShow = true"
          >
            다음
          </v-btn>
          <template v-if="isShow">
            <v-divider class="line-dashed mt-8"></v-divider>
            <!-- 종속문항 영역 -->
            <div class="sub-question" v-for="sub in subQuestion1" :key="sub.id">
              <div class="quest-num">Q{{ sub.number }}</div>
              <!-- 문항 -->
              <div class="quest-item">
                <span class="text">{{ sub.questions }}</span>
                <!-- tooltip -->
                <Tooltip
                  v-if="sub.tooltip"
                  :btnText="null"
                  :text="sub.tooltipText"
                  class="tooltip-type2 d-inline-flex"
                />
              </div>
              <!-- 답변 아이템 -->
              <div class="answer-items">
                <v-radio-group
                  v-model="sub.answer"
                  hide-details
                  class="radio-answer-group"
                >
                  <template v-for="n in 2" :key="n">
                    <v-radio :value="n" :class="{ 'mt-4': n !== 0 }">
                      <template v-slot:label>
                        <template v-if="n === 1">예</template>
                        <template v-if="n === 2">아니오</template>
                      </template>
                    </v-radio>
                  </template>
                </v-radio-group>
              </div>
              <v-divider
                class="line-dashed mt-8"
                v-if="subQuestion1.length > 1"
              ></v-divider>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import Tooltip from '@/components/Tooltip.vue'

  export default {
    components: { Tooltip },
    setup() {
      const isShow = ref(false)
      const questions = ref([
        {
          id: 1,
          number: '1',
          qstType: 1,
          questions: '키가 궁금해요(Case 5. 기타_종속 문항이 있는 경우)',
          answer: '',
          children: []
        }
      ])
      const subQuestion1 = ref([
        {
          id: 'sub-1',
          number: '1-1',
          qstType: 1,
          questions: '2년 전 보다 키가 줄었나요?',
          answer: null,
          children: []
        }
      ])
      const questItem = ref([
        {
          val: 'radio-1',
          class: 'radio-48',
          text: '예'
        },
        {
          val: 'radio-2',
          class: 'radio-32',
          text: '아니오'
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
        isShow,
        questions,
        subQuestion1,
        questItem,
        questItem2
      }
    }
  }
</script>
