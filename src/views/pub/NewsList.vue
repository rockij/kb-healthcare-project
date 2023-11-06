<template>
  <template v-if="list.length > 0">
    <div class="total mt-3">총 {{ list.length }}건</div>
    <div class="news-wrap mt-2">
      <ul class="news-list">
        <li class="news-item pt-4" v-for="item in list" :key="item.id">
          <div class="news-left">
            <p
              class="news-title text-overflow line3"
              @click="$emit('goPath', 'MAJ0202780')"
            >
              <span v-if="text" v-html="hightlight(item.title)" />
              <template v-else>{{ item.title }}</template>
            </p>
            <div class="keywordWrap mt-2">
              <!-- 해시태그 -->
              <span
                v-for="word in item.keyword"
                :key="word"
                class="news-keyword"
                @click="onClicked(word)"
              >
                #<span v-if="text" v-html="hightlight(word)" />
                <template v-else>{{ word }}</template>
              </span>
            </div>
          </div>
          <img
            :src="`/src/assets/images/${item.img}`"
            alt=""
            class="news-img"
            @click="$emit('goPath', 'MAJ0202780')"
          />
        </li>
      </ul>
    </div>
  </template>
  <!-- no data -->
  <Nodata :icon="true" iconSize="big" iconType="news" v-else>
    검색 결과가 없습니다.
  </Nodata>
</template>

<script>
  import { computed, ref } from 'vue'
  import Nodata from '@/components/nodata/Nodata.vue'

  export default {
    props: ['list', 'hightlight', 'text'],
    emits: ['goSearch', 'goPath'],
    components: { Nodata },
    setup(props, context) {
      const { emit } = context
      function onClicked(val) {
        emit('goSearch', val)
      }

      return {
        onClicked
      }
    }
  }
</script>
