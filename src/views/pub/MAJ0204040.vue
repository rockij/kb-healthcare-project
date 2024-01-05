<template>
  <div class="contents pt-4">
    <div class="sorting-data sorting-news data-section-bg">
      <div class="news-btn">
        <v-btn
          variant="text"
          density="compact"
          class="fs-16 px-0"
          @click="modal = true"
        >
          <div class="text-category">{{ date }}</div>
          <div class="ml-2">{{ category }}</div>
          <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
        </v-btn>
      </div>
    </div>
    <div class="pt-4">
      <v-sheet>
        <v-tabs v-model="tab" hide-slider class="tabs-round navy">
          <v-tab class="btn-tab" :ripple="false" @click="tab = 0">인기순</v-tab>
          <v-tab class="btn-tab" :ripple="false" @click="tab = 1"
            >최신등록순</v-tab
          >
        </v-tabs>
        <v-sheet class="mt-2">
          <v-window v-model="tab">
            <v-window-item :value="n - 1" v-for="n in 2" :key="n">
              <v-sheet
                class="container-chart type2"
                v-for="item in lists"
                :key="item.id"
              >
                <div
                  class="py-4 px-4 mt-4 card-report3 challenge"
                  @click="item.func"
                >
                  <div class="card-top-box">
                    <div class="left-area">
                      <span
                        v-if="item.topBadge"
                        class="badge"
                        :class="{
                          waiting: item.topBadge == 'reco',
                          ing: item.topBadge == 'ing'
                        }"
                        >{{ item.topBadge == 'ing' ? '참여중' : '추천' }}</span
                      >

                      <dl class="list">
                        <dd>
                          {{ item.title }}
                          <!-- 
															과식형 chip-overeating-type
															야식형 chip-nightsnack-type
															잦은음주형 chip-drinking-type
															고객맞춤형 chip-customized-type
														-->
                          <v-chip
                            variant="outlined"
                            color="#eee"
                            rounded="lg"
                            :class="`chip-${getText(item.badgeText)}-type`"
                            v-if="item.badgeOvereating"
                          >
                            <span class="text-dot"
                              ><span class="ml-2 fs-13 text-black">{{
                                item.badgeText
                              }}</span></span
                            >
                          </v-chip>
                        </dd>
                      </dl>
                    </div>
                    <div
                      v-if="item.mark"
                      class="right-area"
                      :class="{ noBadge: !item.topBadge }"
                    >
                      <img
                        src="/assets/images/icon-authmark.png"
                        alt=""
                        width="48"
                        class="img-mark"
                      />
                    </div>
                  </div>
                  <v-chip
                    v-for="chip in item.chips"
                    :key="chip"
                    class="chal-chip mt-2 mr-2"
                    >#{{ chip }}</v-chip
                  >
                </div>
              </v-sheet>
            </v-window-item>
          </v-window>
        </v-sheet>
      </v-sheet>
    </div>
  </div>
  <MAJ0204050 v-model="modal" @update="addText" @close="modal = false" />
  <MAJ0407021 v-model="modal2" @close="modal2 = false" />
</template>

<script>
  import { ref } from 'vue'
  import MAJ0204050 from './MAJ0204050.vue'
  import MAJ0407021 from './MAJ0407021.vue'
  export default {
    components: { MAJ0204050, MAJ0407021 },
    setup() {
      const modal = ref(false)
      const modal2 = ref(false)
      const date = ref('전체')
      const category = ref('하루')

      const tab = ref(0)
      const badgeOvereating = ref(false)
      const mark = ref(false)

      const lists = ref([
        {
          topBadge: 'ing',
          title: 'AI 추천 챌린지',
          badgeOvereating: true,
          badgeText: '과식형',
          mark: true,
          chips: ['혈당관리', '혈압관리', '관리', '혈압관리', '혈당관리'],
          func: eventFunc
        },
        {
          topBadge: 'reco',
          title: '혈압개선 전문 챌린지',
          badgeOvereating: true,
          badgeText: '고객맞춤형',
          mark: true,
          chips: ['혈관건강관리', '프로알콜러']
        },
        {
          title:
            '혈압개선 전문 챌린지 텍스트 긴글 혈압개선 전문 챌린지 텍스트 긴글',
          badgeOvereating: true,
          badgeText: '잦은음주형',
          mark: true,
          chips: ['운동', '정신건강', '정신건강']
        },
        {
          title:
            '근력향상 전문 챌린지 근력향상 전문 전문 챌린지 근력향상 전문 챌린지',
          badgeOvereating: false,
          badgeText: '잦은음주형',
          mark: false,
          chips: ['운동', '혈관건강관리']
        },
        {
          topBadge: 'ing',
          title: '만보걷기',
          badgeOvereating: true,
          badgeText: '야식형',
          mark: false,
          chips: ['평일만큼 걷기']
        },
        {
          title: '지난주 만큼 걷기',
          badgeOvereating: false,
          badgeText: '야식형',
          mark: false,
          chips: ['지난주만큼 걷기']
        }
      ])

      function addText(val1, val2) {
        text1.value = val1
        text2.value = val2
        modal.value = false
        console.log('상위페이지', text1.value, text2.value)
      }

      function getText(props) {
        switch (props) {
          case '과식형':
            return 'overeating'
          case '야식형':
            return 'nightsnack'
          case '잦은음주형':
            return 'drinking'
          case '고객맞춤형':
            return 'customized'
        }
      }

      function eventFunc() {
        modal2.value = true
      }

      return {
        modal,
        modal2,
        date,
        category,
        addText,
        tab,
        badgeOvereating,
        mark,
        lists,
        getText,
        eventFunc
      }
    }
  }
</script>
