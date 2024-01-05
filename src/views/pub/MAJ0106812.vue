<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">
        지금까지 55명의<br />
        성격유형검사를 해주었어요
      </p>
    </div>
    <div class="my-per-test-list">
      <div class="my-per-test-head">
        <span class="i-think">내가 생각하는 동료</span>
        <span class="think-me">동료가 생각하는 나</span>
      </div>
      <div class="my-per-test-body">
        <div class="my-per-test-item" v-for="(item, i) in testList" :key="i">
          <span class="person">
            <i class="p-img">
              <v-img :src="`/assets/images/` + item.pImg"></v-img>
            </i>
            <span class="name">{{ item.name }}</span>
          </span>
          <span class="i-think">
            <span>{{ item.iThinkAbc }}</span>
            <strong>{{ item.iThink }}</strong>
          </span>
          <span class="think-me">
            <span>{{ item.thinkMeAbc }}</span>
            <strong>{{ item.thinkMe }}</strong>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const testList = ref([
        {
          pImg: 'profile-1.png',
          name: '오건강강',
          iThinkAbc: 'LT-E',
          iThink: '외향적인 혁신가',
          thinkMeAbc: 'LT-I',
          thinkMe: '내향적인 혁신가'
        },
        {
          pImg: 'profile-1.png',
          name: '김일화',
          iThinkAbc: 'LT-E',
          iThink: '외향적인 혁신가',
          thinkMeAbc: 'LT-I',
          thinkMe: '내향적인 혁신가'
        },
        {
          pImg: 'profile-1.png',
          name: '박혜신',
          iThinkAbc: 'LT-E',
          iThink: '외향적인 혁신가',
          thinkMeAbc: 'LT-I',
          thinkMe: '내향적인 혁신가'
        },
        {
          pImg: 'profile-1.png',
          name: '최재원',
          iThinkAbc: 'LT-E',
          iThink: '외향적인 혁신가',
          thinkMeAbc: 'LT-I',
          thinkMe: '내향적인 혁신가'
        },
        {
          pImg: 'profile-1.png',
          name: '유정아',
          iThinkAbc: 'LT-E',
          iThink: '외향적인 혁신가',
          thinkMeAbc: 'LT-I',
          thinkMe: '내향적인 혁신가'
        }
      ])

      return {
        testList
      }
    }
  }
</script>

<style lang="scss" scoped></style>
