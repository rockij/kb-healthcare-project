<template>
  <div class="contents">
    <div class="box-rounded py-4 px-0 mb-6" v-if="tabInit === 0">
      <v-btn
        block
        variant="text"
        rounded="xl"
        height="24"
        :ripple="false"
        class="btn-search shadow-none no-border"
        @click="open"
      >
        <div class="text">
          <div class="d-flex align-center">
            <span :class="['mr-2', isVisible ? 'fs-20' : 'fs-16']"
              >내 건강 관심도</span
            >
            <!-- 12/22 수정 -->
            <span
              class="tooltip-balloon mw-auto relative tooltip-check"
              v-if="!show"
            >
              <span class="text-yellow">{{ percent }}%</span>
            </span>
          </div>
          <img
            src="/assets/images/icon-arrow-up2.svg"
            alt="검색"
            v-if="isVisible"
          />
          <img src="/assets/images/icon-arrow-down2.svg" alt="검색" v-else />
        </div>
      </v-btn>
      <v-expand-transition>
        <div v-if="isVisible">
          <div class="pt-10 px-4">
            <v-slider
              :model-value="loop"
              :step="1"
              :show-ticks="false"
              thumb-label="always"
              hide-details
              readonly
              elevation="0"
              class="default-progress type-2"
              :class="[{ off: loop === 0 }, { on: loop === 100 }]"
            >
              <template v-slot:thumb-label>
                <span class="text-yellow">{{ percent }}%</span>
              </template>
            </v-slider>
          </div>
          <div class="px-4">
            <div class="list-column-3 mt-4">
              <template v-for="(item, i) in list" :key="i">
                <div class="text-center">
                  <img :src="`/assets/images/${item.img}`" alt="" />
                  <div
                    :class="[
                      'fs-13',
                      item.stateCd === 2
                        ? 'text-black font-weight-bold'
                        : 'text-grey'
                    ]"
                  >
                    {{ item.text }}
                  </div>
                  <div
                    :class="[
                      'font-weight-bold',
                      item.stateCd === 2 ? 'text-complete' : 'text-incomplete'
                    ]"
                  >
                    {{ item.stateText }}
                  </div>
                </div>
                <v-divider vertical v-if="i !== 2" />
              </template>
            </div>
            <p class="table-caution lh-0 mt-4">
              내 건강정보를 입력할수록 맞춤 건강관리 수준이 향상됩니다.
            </p>
          </div>
        </div>
      </v-expand-transition>
    </div>
    <v-tabs v-model="tabInit" fixed-tabs align-tabs="center" class="tab-line">
      <v-tab
        v-for="item in tabItems"
        :key="item.id"
        :value="item.id"
        :ripple="false"
      >
        {{ item.text }}
      </v-tab>
    </v-tabs>
    <v-window v-model="tabInit" class="comp-area">
      <v-window-item v-for="item in tabItems" :key="item.id" :value="item.id">
        <component :is="item.path" />
      </v-window-item>
    </v-window>
  </div>
</template>
<script>
  import ProgressBar from './ProgressBar.vue'
  import MAJ0200410Sub1 from './MAJ0200410Sub1.vue'
  import MAJ0200410Sub2 from './MAJ0200410Sub2.vue'
  import MAJ0200410Sub3 from './MAJ0200410Sub3.vue'
  import { ref, reactive, onMounted } from 'vue'

  export default {
    components: {
      ProgressBar,
      MAJ0200410Sub1,
      MAJ0200410Sub2,
      MAJ0200410Sub3
    },
    setup() {
      const loop = ref(0)
      const percent = ref(60)
      // 12/22 open수정
      const isVisible = ref(false)
      const list = reactive([
        {
          id: 1,
          img: 'img-health-check01.svg',
          text: '건강플랫폼 연결',
          stateCd: 1,
          stateText: '미완료'
        },
        {
          id: 2,
          img: 'img-health-check02.svg',
          text: '심리검사 3종',
          stateCd: 1,
          stateText: '미완료'
        },
        {
          id: 3,
          img: 'img-health-check03.svg',
          text: '건강검진 연결',
          stateCd: 2,
          stateText: '완료'
        }
      ])
      const tabInit = ref(0)
      const tabItems = ref([
        {
          id: 0,
          text: '신체',
          path: 'MAJ0200410Sub1'
        },
        {
          id: 1,
          text: '심리',
          path: 'MAJ0200410Sub2'
        },
        {
          id: 2,
          text: '유전자',
          path: 'MAJ0200410Sub3'
        }
      ])
      const show = ref(false)
      // 12/22 open수정
      function open() {
        isVisible.value = !isVisible.value
        show.value = !show.value
      }
      onMounted(() => {
        for (let i = 0; i <= percent.value; i++) {
          setTimeout(() => {
            loop.value = i
          }, 1000)
        }
      })
      return {
        loop,
        isVisible,
        show,
        percent,
        list,
        tabInit,
        tabItems,
        open
        // aniSlider
      }
    }
  }
</script>
