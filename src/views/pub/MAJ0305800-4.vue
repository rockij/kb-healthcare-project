<template>
  <ul class="text-date-list">
    <li v-for="(list, i) in vulnerableList" :key="i">
      <strong class="date">{{ list.year }}</strong>
      <span class="box" :data-category="list.text1"
        >{{ list.text1
        }}<strong class="num" :class="list.num1 == 0 ? 'zero' : ''">{{
          list.num1
        }}</strong></span
      >
      <span class="box" :data-category="list.text2"
        >{{ list.text2
        }}<strong class="num" :class="list.num2 == 0 ? 'zero' : ''">{{
          list.num2
        }}</strong></span
      >
      <span class="box" :data-category="list.text3"
        >{{ list.text3
        }}<strong class="num" :class="list.num3 == 0 ? 'zero' : ''">{{
          list.num3
        }}</strong></span
      >
    </li>
  </ul>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const vulnerableList = ref([
        {
          year: '2018년',
          text1: '의심',
          num1: 2,
          text2: '주의',
          num2: 0,
          text3: '정상',
          num3: 8
        },
        {
          year: '2020년',
          text1: '의심',
          num1: 0,
          text2: '주의',
          num2: 0,
          text3: '정상',
          num3: 8
        },
        {
          year: '2022년',
          text1: '의심',
          num1: 2,
          text2: '주의',
          num2: 1,
          text3: '정상',
          num3: 7
        }
      ])
      return { vulnerableList }
    }
  }
</script>
