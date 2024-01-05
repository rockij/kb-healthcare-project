<template>
  <h2 class="tit-03" v-if="title">
    {{ title }}
  </h2>
  <h2 v-else class="tit-03 tit-link">
    <v-btn block variant="text">오건강님을 위한 건강뉴스</v-btn>
  </h2>
  <div class="list-thumb4 mt-2">
    <ul class="list">
      <li v-for="item in healthNews" :key="item.id">
        <v-btn variant="text" block>
          <p>
            <span class="badge ing mr-2 mb-1">{{ item.category }}</span
            >혈당관리와 관련된 뉴스에요
          </p>
          <div class="d-flex">
            <div class="flex-1-1 pt-1">
              <strong class="text-title">{{ item.text }}</strong>
              <!-- <p v-html="item.tags" class="text-tags"></p> -->
              <p class="text-tags">
                <span
                  v-for="(item, i) in toArray(item.tags)"
                  :key="i"
                  v-html="item"
                />
              </p>
            </div>
            <v-img
              :src="`/assets/images/${item.img}`"
              width="120"
              height="80"
              cover
              alt=""
            />
          </div>
        </v-btn>
      </li>
    </ul>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    props: ['title'],
    setup() {
      const hashTag = ref()
      const healthNews = ref([
        {
          text: '유청 단백질, 당뇨환자 혈당관리에 도움 혈당관리에 도움혈당관리에 도움',
          tags: '#혈당관리&nbsp;#당뇨',
          img: 'img-news-thumb.png',
          category: '맞춤형'
        },
        {
          text: '면연력이 떨어지면 찾아오는 불청객 독감',
          tags: '#혈당관리&nbsp;#당뇨',
          img: 'dummy-thumb2.jpg',
          category: '계절별'
        },
        {
          text: '운동이 정신건강에 미치는 5가지 장점은?',
          tags: '#수면&nbsp;#당뇨&nbsp;#수면&nbsp;#당뇨&nbsp;#수면&nbsp;#당뇨&nbsp;#수면&nbsp;#당뇨',
          img: 'img-news-thumb.png',
          category: '계절별'
        }
      ])
      function toArray(val) {
        return val.split('&nbsp;')
      }
      return { healthNews, hashTag, toArray }
    }
  }
</script>
