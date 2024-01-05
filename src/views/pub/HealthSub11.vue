<template>
  <div class="contents pt-0">
    <div class="section-page bg pa-4">
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <div class="mt-9 relative">
          <div class="ruler-wrap">
            <img
              src="/assets/images/img-water-ruler.svg"
              alt=""
              class="ruler-img"
            />
            <div class="ruler-text">{{ waterNum }}</div>
          </div>
          <div class="d-flex wave-wrap">
            <div class="wave">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                style="display: none"
              >
                <symbol id="wave">
                  <path
                    d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
                  ></path>
                  <path
                    d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
                  ></path>
                  <path
                    d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
                  ></path>
                  <path
                    d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
                  ></path>
                </symbol>
              </svg>
              <div class="wave-box" v-if="fillWater">
                <div ref="water" class="water">
                  <svg viewBox="0 0 560 20" class="water_wave water_wave_back">
                    <use xlink:href="#wave"></use>
                  </svg>
                  <svg viewBox="0 0 560 20" class="water_wave water_wave_front">
                    <use xlink:href="#wave"></use>
                  </svg>
                  <div class="bubble_1"></div>
                  <div class="bubble_2"></div>
                  <div class="bubble_3"></div>
                </div>
              </div>
              <div class="wave-box" v-else></div>
            </div>
          </div>
        </div>
        <div class="numcount-area mt-10 px-3">
          <v-btn
            variant="text"
            class="handle decrease type-yellow"
            :class="{ disabled: numcount === 0 }"
            title="감소"
            :disabled="numcount === 0"
            @click="numcount > 0 ? numcount-- : ''"
          ></v-btn>
          <strong class="number">{{ numcount }}</strong>
          <v-btn
            variant="text"
            class="handle increase type-yellow"
            title="증가"
            @click="numcount++"
          ></v-btn>
        </div>
        <div class="text-center mt-6">
          <v-btn
            variant="flat"
            height="32"
            color="#F2F4F6"
            class="text-blue fs-13"
            rounded="lg"
            @click="modal = true"
            aria-selected="true"
          >
            1회 단위 : {{ name4 }}ml
          </v-btn>
        </div>
        <div class="btn-double mt-6">
          <v-btn variant="text" height="48" class="btn-summit">
            저장하기
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>

  <MAJ0202948 v-model="modal" @update="addText" @close="modal = false" />
</template>

<script>
  import MAJ0202948 from './MAJ0202948.vue'

  import { ref, onMounted } from 'vue'

  export default {
    components: {
      MAJ0202948
    },
    setup() {
      const fillWater = true
      const waterNum = ref('1,800')
      const modal = ref(false)
      const modal2 = ref(false)
      const modal3 = ref(false)

      const text1 = ref()
      const text2 = ref()
      const name4 = ref()
      const result = ref([])

      const numcount = ref(0)

      const tabInit = ref(null)
      const tabItems = ref([
        { titleTab: '1주일' },
        { titleTab: '1개월' },
        { titleTab: '6개월' }
      ])
      const water = ref()
      const waterClass = document.querySelector('waterwave')
      const percent = ref(0)
      const waterWave = (e) => {
        if (waterWave !== null) {
          const interval = setInterval(function () {
            percent.value++
            water.value.style.transform =
              'translate(0' + ',' + (100 - percent.value) + '%)'
            if (percent.value == e || e == 0) {
              clearInterval(interval)
            }
          }, 40)
        }
      }

      const isActive = ref(false)
      const reports = ref([
        {
          id: 0,
          date: '03.23 오전 6시 35분',
          record: '700'
        },
        {
          id: 1,
          date: '03.20 오전 4시 35분',
          record: '105'
        },
        {
          id: 3,
          date: '03.16 오전 8시 35분',
          record: '60'
        }
      ])

      function addText(val1, val2) {
        text1.value = val1
        name4.value = val2
        modal.value = false
      }

      const modalList = ref([
        {
          value: 0,
          text: '수정'
        },
        {
          value: 1,
          text: '삭제'
        }
      ])

      const modifyFunc = () => {
        modal2.value = false
        modal3.value = true
      }

      const delFunc = () => {
        alert('삭제')
      }

      onMounted(() => {
        waterWave(50)
      })

      function handleClick() {
        console.log('emit')
      }

      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 10, 1)]
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 9, 10)]
        }
      ])

      const banerList = ref([
        {
          title: '식사 관리하러 가기',
          text: '식사와 함께 관리해보세요!',
          iconName: 'icon-cooking.svg',
          path: '/MAJ0203410'
        },
        {
          title: '체성분 관리하러 가기',
          text: '체성분과 함께 관리해보세요!',
          iconName: 'icon-weight.svg',
          path: '/MAJ0203120'
        }
      ])
      function goPath(val) {
        router.push(val)
      }

      return {
        waterClass,
        tabInit,
        tabItems,
        waterNum,
        fillWater,
        text1,
        text2,
        name4,
        result,
        modal,
        modal2,
        modal3,
        modalList,
        isActive,
        reports,
        water,
        numcount,
        waterWave,
        addText,
        handleClick,
        modifyFunc,
        delFunc,
        calendarAttr,
        banerList,
        goPath
      }
    }
  }
</script>
