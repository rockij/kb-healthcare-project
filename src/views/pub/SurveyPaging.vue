<template>
  <div ref="stickyArea" class="survey-header" :style="{ height: navHeight }">
    <div class="sticky">
      <!-- 심리설문 -->
      <template v-if="type === 'range'">
        <div class="header-info">
          <!-- tooltip -->
          <div class="tooltip-box">
            각 문항을 주의 깊게 읽은 다음, 자신이 일상적으로 느끼고 행동하는데
            가깝다고 생각되는 것을 선택해 주세요
          </div>

          <!-- <div class="relative text-right">
            <Tooltip
              :btn="false"
              :show="true"
              text="각 문항을 주의 깊게 읽은 다음, 자신이 일상적으로 느끼고 행동하는데 가깝다고 생각되는 것을 선택해 주세요"
              class="tooltip-type2 vl-center"
              v-model="tooltip"
            />
          </div> -->
          <!-- 진행률 bar -->
          <div class="paging-progress">
            <!-- <v-slider
              :model-value="page"
              :step="1"
              :min="1"
              :max="pageLengh"
              :show-ticks="false"
              thumb-label="always"
              hide-details
              readonly
              class="default-progress"
            >
              <template v-slot:thumb-label="{ modelValue }">
                Q{{ modelValue }}
              </template>
            </v-slider> -->
            <v-progress-linear
              :model-value="progress()"
              height="6"
              class="default-progress"
            ></v-progress-linear>
            <div class="page-count">
              <span class="font-weight-bold current">{{ page }}</span> /
              {{ pageLengh }}
            </div>
          </div>

          <div class="btn-area">
            <div class="paging-number">Q{{ page }}</div>
            <button class="btn-page swiper-button-prev">
              <img src="/assets/images/btn-prev.svg" alt="이전" />
            </button>
            <button class="btn-page swiper-button-next">
              <img src="/assets/images/btn-next.svg" alt="다음" />
            </button>
            <!-- <v-btn
            v-if="page > 1"
            variant="outlined"
            density="compact"
            icon="mdi-chevron-left"
            class="btn-page prev"
            @click.stop="$emit('update:prev', page)"
          ></v-btn>
          <v-btn
            v-if="page < pageLengh"
            variant="outlined"
            density="compact"
            icon="mdi-chevron-right"
            class="btn-page next"
            @click.stop="$emit('update:next', page)"
          ></v-btn> -->
          </div>
        </div>
      </template>
      <!-- 일반설문 -->
      <template v-else>
        <div class="page-count">
          <span class="font-weight-bold">{{ page }}</span> / {{ pageLengh }}
        </div>
        <div class="btn-area">
          <v-btn
            v-if="page > 1"
            variant="outlined"
            density="compact"
            icon="mdi-chevron-left"
            class="btn-page prev"
            @click.stop="$emit('update:prev', page)"
          ></v-btn>
          <v-btn
            v-if="page < pageLengh"
            variant="outlined"
            density="compact"
            icon="mdi-chevron-right"
            class="btn-page next"
            @click.stop="$emit('update:next', page)"
          ></v-btn>
        </div>
        <!-- 진행률 bar -->
        <div class="paging-progress">
          <v-progress-linear
            :model-value="progress()"
            height="6"
            class="default-progress"
          ></v-progress-linear>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { ref, onMounted, computed, nextTick } from 'vue'
  import Tooltip from '@/components/Tooltip.vue'

  export default {
    props: [
      'page',
      'pageLengh',
      'pageList',
      'progress',
      'type',
      'setPageSwiper'
    ],
    components: { Tooltip },
    setup() {
      function tooltip() {
        setTimeout(() => {
          if (show.value) !show.value
        }, 300)
      }
      //sticky
      const stickyArea = ref(null)
      const navHeight = ref(null)
      onMounted(() => {
        const tooltip = document.querySelector('.tooltip-box')
        setTimeout(() => {
          tooltip.style.display = 'none'
        }, 3000)
        const sticky = document.querySelector('.sticky')
        navHeight.value = sticky.offsetHeight + 'px'
        const stickyObserver = new IntersectionObserver(
          ([e]) => {
            if (!e.isIntersecting && sticky !== null)
              sticky.classList.add('isFixed')
            else sticky.classList.remove('isFixed')
          },
          {
            root: null,
            threshold: [1]
          }
        )
        stickyObserver.observe(stickyArea.value)
      })
      return {
        navHeight,
        stickyArea,
        tooltip
      }
    }
  }
</script>
