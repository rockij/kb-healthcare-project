<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">건강뉴스</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <!-- 검색어  입력영역 -->
          <div class="search-area mb-4">
            <v-text-field
              v-model="text"
              variant="outlined"
              rounded="xl"
              clearable
              hide-details
              placeholder="검색어를 입력해 주세요"
              prepend-inner-icon="mdi-magnify"
              persistent-clear
              class="textfield-search type fs-16"
              @keypress.enter="text = keyword"
            ></v-text-field>
            <v-btn variant="text" @click="$emit('close')" class="btn"
              >취소</v-btn
            >
          </div>

          <!-- 검색어 리스트 -->
          <template v-if="filteredList().length > 0 && keyword">
            <div class="total mt-3">총 {{ filteredList().length }}건</div>
            <div class="news-wrap mt-2">
              <ul class="news-list">
                <li
                  class="news-item pt-4"
                  v-for="item in filteredList()"
                  :key="item.id"
                >
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
                    :src="`/assets/images/${item.img}`"
                    alt=""
                    class="news-img"
                    @click="$emit('goPath', 'MAJ0202780')"
                  />
                </li>
              </ul>
            </div>
          </template>

          <!-- 추천 검색어 -->
          <template v-else>
            <div class="keyword-title pt-8">추천 검색어</div>
            <div class="sorting-btns mt-4">
              <v-btn
                variant="outlined"
                rounded="xl"
                class="btn-select"
                v-for="btn in btns"
                :key="btn.value"
                @click="onClicked(btn.text)"
              >
                {{ btn.text }}
              </v-btn>
            </div>

            <!-- no data -->
            <Nodata :icon="true" iconSize="big" iconType="news">
              검색 결과가 없습니다.
            </Nodata>
          </template>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'

  import { computed, ref } from 'vue'
  import router from '@/router'

  export default {
    components: { Nodata },
    props: ['keyword'],
    emits: ['update', 'close', 'goSearch', 'goPath'],
    setup(props, context) {
      const { emit } = context
      const dialog = true
      const btnLayout = ref(false)
      const btns = ref([
        {
          value: 0,
          text: '피부'
        },
        {
          value: 1,
          text: '탈모'
        },
        {
          value: 2,
          text: '면역력이 떨어져요'
        }
      ])
      const text = computed({
        get() {
          return props.keyword
        },
        set(newValue) {
          emit('update', newValue)
        }
      })

      const news = ref([
        {
          title: '맞춤뉴스-면역력이 떨어지면 찾아오는 불청객',
          keyword: ['면역저하', '건강'],
          img: 'exercise.png',
          cate: 1,
          date: '20231105'
        },
        {
          title: '맞춤뉴스-면역력이 챙기기',
          keyword: ['면역력', '면역 강화음식'],
          img: 'exercise.png',
          cate: 1,
          date: '20231001'
        },
        {
          title:
            '맞춤뉴스-"나 안 건강해요” 한국인 비율이 가장 높다?"나 안 건강해요” 최대 3줄처리...',
          keyword: ['운동', '건강', '면역력', '정신건강', '면역 강화음식'],
          img: 'exercise.png',
          cate: 1,
          date: '20231101'
        }
        // {
        //   title: '관심뉴스-면역력이 떨어지면 찾아오는 불청객',
        //   keyword: ['#면역저하', '#건강'],
        //   img: 'exercise.png',
        //   cate: 2
        // },
        // {
        //   title: '관심뉴스-면역력이 챙기기',
        //   keyword: ['#면역력', '#면역 강화음식'],
        //   img: 'exercise.png',
        //   cate: 2
        // },
        // {
        //   title: '관심뉴스-"나 안 건강해요”',
        //   keyword: ['#운동', '#건강', '#면역력', '#정신건강', '#면역 강화음식'],
        //   img: 'exercise.png',
        //   cate: 2
        // }
      ])

      function filteredList() {
        return news.value.filter((i) => {
          // 컬럼명 나열
          return Object.values(i).some((val) => {
            return String(val).match(new RegExp(text.value, 'i'))
          })
        })
      }

      function hightlight(i) {
        return i.replace(new RegExp(text.value, 'gi'), (match) => {
          return '<span class="text-blue font-weight-bold">' + match + '</span>'
        })
      }

      function onClicked(val) {
        emit('goSearch', val)
      }

      function goPath(val) {
        router.push(val)
      }

      return {
        btnLayout,
        text,
        btns,
        news,
        dialog,
        onClicked,
        goPath,
        filteredList,
        hightlight
      }
    }
  }
</script>
