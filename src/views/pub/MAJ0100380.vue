<template>
  <div class="contents">
    <v-card
      class="msg-link mb-4"
      variant="flat"
      color="#F5F5F5"
      rounded="lg"
      v-for="(item, index) in message"
      :key="index"
    >
      <img :src="`/src/assets/images/${item.icon}`" alt="" />
      <div class="title">{{ item.title }}</div>
      <div class="time">{{ item.time }}</div>
      <div class="desc">{{ item.desc }}</div>
    </v-card>
    <div class="bottom-text">받은 알림은 30일 동안 보관됩니다.</div>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      const message = reactive([
        {
          title: '라이프로그',
          time: '15분 전',
          desc: '아침 식사 전 혈당을 체크해 보세요.',
          icon: 'icon-msg1.svg'
        },
        {
          title: '건강',
          time: '23시간 전',
          desc: '예약하신 종합건강검진이 3일 남았어요. 추가로 대장암 검사를 하실경우 병원에서 안내한 사항을 꼭 확인해 주세요.',
          icon: 'icon-msg2.svg'
        },
        {
          title: '챌린지',
          time: '1일 전',
          desc: '축하합니다! 휴레이 만성질환 관리서비스 상품에 당첨되었어요.',
          icon: 'icon-msg3.svg'
        },
        {
          title: '이벤트',
          time: '12월 14일',
          desc: '축하합니다! 휴레이 만성질환 관리서비스 상품에 당첨되었어요.',
          icon: 'icon-msg4.svg'
        }
      ])
      return {
        message
      }
    }
  }
</script>

<style lang="scss" scoped></style>
