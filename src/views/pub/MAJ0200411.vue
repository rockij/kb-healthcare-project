<template>
  <div class="contents">
    <div class="box-rounded pa-4 mb-6" v-if="tabInit === 0">
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
            <span class="mr-2">내 건강 관심도</span>
            <span
              class="tooltip-balloon mw-auto relative tooltip-check"
              v-if="show"
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
          <ProgressBar :dataNum="percent" :ready="true" class="mt-16">
            <template v-slot:numText2>
              <span class="text-yellow ml-0">%</span>
            </template>
          </ProgressBar>
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
                  :class="
                    item.stateCd === 2 ? 'text-complete' : 'text-incomplete'
                  "
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
  import { ref, reactive } from 'vue'

  export default {
    components: {
      ProgressBar,
      MAJ0200410Sub1,
      MAJ0200410Sub2,
      MAJ0200410Sub3
    },
    setup() {
      const percent = ref(30)
      const isVisible = ref(true)
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
      const tabInit = ref(1)
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
      function open() {
        isVisible.value = !isVisible.value

        isVisible.value
          ? (show.value = false)
          : setTimeout(() => {
              show.value = true
            }, 300)
      }
      return {
        isVisible,
        show,
        percent,
        list,
        tabInit,
        tabItems,
        open
      }
    }
  }
</script>
