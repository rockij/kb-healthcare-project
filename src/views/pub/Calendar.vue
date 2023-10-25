<template>
  <div class="contents">
    <!-- stickyArea -->
    <div ref="stickyArea">
      <div ref="sticky">
        <!-- contents -->
        <div class="wrap-calendar">
          <vCalendar
            class="calendar-sticky"
            ref="calendar"
            :view="views"
            @update:view="moveToevent(new Date(2023, 8, 20))"
            :attributes="attributes"
            :masks="masks"
            borderless
            trim-weeks
            expanded
          >
          </vCalendar>
          <div class="calendar-info">
            <div class="state" v-for="(state, i) in states" :key="i">
              <v-avatar :color="state.color" size="8" />
              <div class="text">{{ state.text }}</div>
            </div>
          </div>
        </div>
        <!-- //contents -->
      </div>
    </div>
    <!-- //stickyArea -->

    <div style="height: calc(100% + 200px); background-color: yellow"></div>
  </div>
</template>

<script>
  import { onMounted, reactive, ref } from 'vue'
  export default {
    setup() {
      const attributes = ref([
        {
          dot: { style: { backgroundColor: '#907776' } },
          dates: [new Date(2023, 8, 20)]
        },
        {
          dot: { style: { backgroundColor: '#E02A61' } },
          dates: [new Date(2023, 8, 20)]
        },
        {
          dot: { style: { backgroundColor: '#B171F7' } },
          dates: [new Date(2023, 8, 20)]
        }
      ])

      const masks = ref({
        title: 'YYYY.MM'
      })
      const pages = ref({})
      const views = ref()
      const calendar = ref(null)

      const changeCalendarView = () => {
        const controllView =
          views.value == 'monthly'
            ? 'weekly'
            : views.value == null
            ? 'monthly'
            : 'monthly'
        views.value = controllView
      }

      const moveToevent = (evt) => {
        calendar.value.move(evt)
      }

      const states = reactive([
        {
          color: '#907776',
          text: '몸상태'
        },
        {
          color: '#E02A61',
          text: '사랑'
        },
        {
          color: '#B171F7',
          text: '피임약'
        }
      ])

      //sticky
      const sticky = ref(null)
      const stickyArea = ref(null)
      const navHeight = ref(null)
      const contents = ref(null)
      onMounted(() => {
        const stickyHeight = (navHeight.value =
          sticky.value.offsetHeight + 'px')
        const stickyObserver = new IntersectionObserver(
          ([e]) => {
            changeCalendarView()
            if (!e.isIntersecting && sticky.value !== null) {
              sticky.value.classList.add('isFixed')
            } else {
              sticky.value.classList.remove('isFixed')
            }
          },
          {
            root: null,
            threshold: [1]
          }
        )
        stickyObserver.observe(stickyArea.value)
      })

      return {
        attributes,
        views,
        calendar,
        changeCalendarView,
        moveToevent,
        navHeight,
        sticky,
        masks,
        stickyArea,
        states,
        pages
      }
    }
  }
</script>
