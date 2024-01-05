<template>
  <div class="list-thumb3">
    <ul>
      <li v-for="item in productList" :key="item.id">
        <v-btn variant="text" :href="'javsscript:;'">
          <span class="img">
            <img :src="`/assets/images/${item.img}`" alt="" />
          </span>
          <span class="name">{{ item.name }}</span>
          <span class="title">{{ item.title }}</span>
          <strong class="price">{{ item.price }}</strong>
        </v-btn>
        <span class="event-set">
          <v-btn
            variant="text"
            :href="'javsscript:;'"
            class="gift"
            title="선물하기"
            role="img"
          ></v-btn>
          <v-btn
            variant="text"
            :href="'javsscript:;'"
            class="hit"
            title="좋아요"
            >{{ item.hit }}</v-btn
          >
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        productList: [
          {
            id: 1,
            name: '종근당건강',
            title: '아이클리어 루테인 지아잔틴 500mg x 30캡슐',
            price: '5,660원',
            hit: '11.145',
            img: 'dummy-thumb3.jpg'
          },
          {
            id: 2,
            name: '뉴트리디데이',
            title: '프리미엄 루테인 골드 350mg x 90캡슐',
            price: '5,660원',
            hit: '1.145',
            img: 'dummy-thumb4.jpg'
          },
          {
            id: 3,
            name: '안국건강',
            title: '안국 루테인 지아잔틴 미니 90.91mg x 180캡슐',
            price: '5,660원',
            hit: '12',
            img: 'dummy-thumb5.jpg'
          }
        ]
      }
    },
    setup() {
      return {}
    }
  }
</script>
