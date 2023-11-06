<template>
  <div class="quize-time relative">
    <div class="tit-03 d-flex justify-space-between">
      <span>퀴즈타임</span>

      <!-- 정답오류 label -->
      <v-chip
        label
        size="small"
        variant="outlined"
        class="chip-default text-primary"
        v-if="answerValue !== 1 && answerValue !== undefined"
      >
        {{ WrongCount }}회 정답 오류
      </v-chip>
    </div>
    <!-- 퀴즈문제 -->
    <div :class="['quize-layout', { 'type-2': type === 2 }]">
      <div
        :class="[
          'tooltip-balloon mb-2',
          type === 1 ? 'arrow-bottom-front' : 'arrow-bottom'
        ]"
      >
        <div class="text">
          <img src="@/assets/images/icon-q.svg" alt="" class="mr-1" />
          정답 맞추고 포인트 받아요!
        </div>
      </div>
      <div class="tit-03 pb-2">수면무호흡증은 위험성이 높은 질병이 맞나요?</div>

      <!-- 퀴즈 타입 4지선다형 -->
      <v-radio-group
        v-if="type === 1"
        v-model="answerValue"
        hide-details
        class="radio-answer-group mb-0"
      >
        <v-radio
          v-for="item in answerList"
          :key="item.id"
          :label="`answerRdo-${item.id}`"
          :value="item.id"
          class="radio-basic small mt-4"
          @change="$emit('updateAnswer', item.id, type)"
        >
          <template v-slot:label>{{ item.label }}</template>
        </v-radio>
      </v-radio-group>

      <!-- 퀴즈 타입 O/X 형 -->

      <v-btn-toggle
        v-model="answerValue2"
        class="btn-answer-group mt-4"
        v-if="type === 2"
      >
        <v-btn
          variant="flat"
          rounded="xl"
          v-for="ox in oxList"
          :key="ox.id"
          :value="ox.id"
          :class="[
            ox.class,
            {
              'wrong-answer':
                answerValue2 !== undefined && answerValue2 !== ox.id
            }
          ]"
          @click="$emit('updateAnswer', ox.id, type)"
        ></v-btn>
      </v-btn-toggle>
    </div>
    <!-- 퀴즈 정답/오답 overlay -->
    <v-fade-transition>
      <div class="overlay-container" v-if="overlay">
        <div class="body">
          <img src="@/assets/images/icon-correct.svg" alt="" v-if="answer" />
          <img src="@/assets/images/icon-wrong.svg" v-else />
        </div>
        <div class="scrim"></div>
      </div>
    </v-fade-transition>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    props: ['type', 'answer', 'correct', 'overlay', 'WrongCount'],
    setup() {
      const dialog = ref(true)
      const answerValue = ref()
      const answerValue2 = ref()
      const answerList = ref([
        {
          id: 1,
          label: '당뇨'
        },
        {
          id: 2,
          label: '디스크'
        },
        {
          id: 3,
          label: '치질'
        },
        {
          id: 4,
          label: '무좀'
        }
      ])
      const oxList = ref([
        {
          id: 1,
          class: 'btn-o'
        },
        {
          id: 2,
          class: 'btn-x'
        }
      ])
      return {
        dialog,
        answerValue,
        answerValue2,
        answerList,
        oxList
      }
    }
  }
</script>
