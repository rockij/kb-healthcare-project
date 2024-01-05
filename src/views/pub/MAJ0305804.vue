<template>
  <div class="box-rounded py-6 d-flex justify-space-around">
    <div v-for="(item, i) in categoryList" :key="i" class="emoji-simple">
      <i :data-emoji="item.emoji"></i>
      <span class="text"
        >{{ item.state }}<span class="num">{{ item.num }}</span></span
      >
    </div>
  </div>
  <div class="d-grid g-tcol-2 g-gap-20 mt-6">
    <v-btn
      v-for="(list, i) in lists"
      :key="i"
      variant="text"
      class="list-disease-item"
    >
      <span class="icon"
        ><v-img transition="none" :src="`/assets/images/${list.icon}`" alt=""
      /></span>
      {{ list.text }}
      <v-chip
        v-if="list.state"
        label
        size="small"
        :color="getText(list.state)"
        class="chip-default chip-color"
      >
        {{ list.state }}
      </v-chip>
    </v-btn>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    props: ['lists'],
    setup() {
      const categoryList = ref([
        {
          emoji: '매우나쁨',
          state: '의심',
          num: '1'
        },
        {
          emoji: '나쁨',
          state: '주의',
          num: '1'
        },
        {
          emoji: '좋음',
          state: '정상',
          num: '10'
        }
      ])
      function getText(props) {
        switch (props) {
          case '의심':
            return 'error'
          case '주의':
            return 'orange'
        }
      }
      return {
        categoryList,
        getText
      }
    }
  }
</script>
