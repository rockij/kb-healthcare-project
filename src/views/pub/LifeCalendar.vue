<template>
  <div :class="classOption">
    <div class="report-title">
      <v-btn
        variant="text"
        class="calendar-handle"
        :class="isOpen"
        @click="changeCalendarView"
      >
        <span class="pr-2">{{ daySelectedMsg }}</span>
        <img src="@/assets/images/icon-arrow-down.svg" alt="" class="arrow" />
      </v-btn>
      <v-chip label size="small" class="chip-default"
        ><span class="text-dot">미연결</span></v-chip
      >
    </div>
    <div class="wrap-calendar">
      <v-btn
        variant="text"
        class="calendar-today-go"
        @click="moveToevent(new Date())"
        >오늘
      </v-btn>
      <vCalendar
        class="calendar-sticky"
        ref="calendar"
        :view="views"
        :attributes="attributes"
        :masks="masks"
        :max-date="new Date()"
        borderless
        trim-weeks
        expanded
        @dayclick="daySelected"
      >
      </vCalendar>
      <div class="calendar-info">
        <div class="state" v-for="(state, i) in states" :key="i">
          <i class="icon" :class="state.icon" />
          <div class="text">{{ state.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted, computed, reactive, ref } from 'vue'
  export default {
    props: ['classOption'],
    setup(props) {
      const isOpen = ref()
      const attributes = ref([
        {
          dot: { class: 'love' },
          dates: [new Date(2023, 9, 2)]
        },
        {
          dot: { class: 'circle' },
          dates: [new Date(2023, 9, 2)]
        },
        {
          dot: { class: 'pill' },
          dates: [new Date(2023, 9, 2)]
        }
      ])

      const masks = ref({
        title: 'M월',
        transition: 'none'
      })
      const pages = ref({})
      const calendar = ref(null)

      const states = reactive([
        {
          icon: 'circle',
          text: '몸상태'
        },
        {
          icon: 'love',
          text: '사랑일'
        },
        {
          icon: 'pill',
          text: '피임약'
        }
      ])

      const today = new Date()
      const year = today.getFullYear()
      const month = ('0' + (today.getMonth() + 1)).slice(-2)
      const day = ('0' + today.getDate()).slice(-2)

      const daySelectedMsg = ref(`${year}.${month}.${day}`)
      const daySelected = (date) => {
        //console.log(date.id.split('-'))
        const linkMsg = date.id.split('-')
        daySelectedMsg.value = `${linkMsg[0]}.${linkMsg[1]}.${linkMsg[2]}`
      }

      const views = ref()
      const calendarViewValue = computed({
        get() {
          return views.value
        },
        set(newVal) {
          views.value = newVal
        }
      })
      calendarViewValue.value = 'monthly'

      const moveToevent = (evt) => {
        calendar.value.move(evt)
      }

      const changeCalendarView = (e) => {
        const controllView =
          views.value == 'weekly'
            ? 'monthly'
            : views.value == null
            ? 'weekly'
            : 'weekly'
        views.value = controllView
        if (views.value == 'monthly') {
          isOpen.value = 'open'
        } else {
          isOpen.value = ''
        }
      }

      onMounted(() => {
        changeCalendarView()
        moveToevent(new Date())
      })

      return {
        attributes,
        views,
        calendar,
        changeCalendarView,
        moveToevent,
        masks,
        states,
        pages,
        daySelected,
        daySelectedMsg,
        isOpen
      }
    }
  }
</script>
