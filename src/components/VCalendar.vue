<template>
  <div :class="classOption">
    <div class="vc-calendar">
      <div class="report-title">
        <v-btn
          variant="text"
          class="calendar-handle"
          :class="isOpen"
          @click="changeCalendarView"
        >
          <span class="font-weight-bold pr-2">{{ daySelectedMsg }}</span>
          <img src="/assets/images/icon-arrow-down.svg" alt="" class="arrow" />
        </v-btn>
        <!--<v-chip label size="small" class="chip-default"
					><span class="text-dot">미연결</span></v-chip
				>-->
      </div>
      <v-btn variant="text" class="calendar-today-go" @click="todayClick"
        >오늘
      </v-btn>
      <vCalendar
        class="calendar-ui"
        ref="calendar"
        :view="views"
        :attributes="attributesValue"
        :masks="masks"
        :max-date="selectToday"
        borderless
        trim-weeks
        expanded
        @dayclick="daySelected"
      >
      </vCalendar>
    </div>
  </div>
</template>

<script>
  import { ref, onUpdated } from 'vue'
  export default {
    props: {
      classOption: {},
      attributesValue: {},
      selectToday: {
        default: new Date()
      }
    },
    setup(props) {
      const calendar = ref(null)
      const views = ref('weekly')
      const isOpen = ref()
      const masks = ref({
        title: 'YYYY.MM',
        transition: 'none'
      })
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
      const moveToevent = (evt) => {
        calendar.value.move(evt)
      }
      const today = new Date()
      const year = today.getFullYear()
      const month = ('0' + (today.getMonth() + 1)).slice(-2)
      const day = ('0' + today.getDate()).slice(-2)
      const daySelectedMsg = ref(`${month}월 ${day}일`)
      const daySelectedDate = ref(today)

      // 날짜선택
      const daySelected = (date) => {
        const linkMsg = date.id.split('-')
        daySelectedMsg.value = `${linkMsg[1]}월 ${linkMsg[2]}일`
        daySelectedDate.value = `${linkMsg[0]}-${linkMsg[1]}-${linkMsg[2]}`

        const calendarContents = document.querySelectorAll(
          '.calendar-ui .vc-day'
        )
        calendarContents.forEach((calendarContent) => {
          calendarContent.querySelector('.vc-day-content').tabIndex = '-1'
          calendarContent
            .querySelector('.vc-day-content')
            .classList.remove('vc-select')
        })
        document
          .querySelector(`.id-${date.id} .vc-day-content`)
          .classList.add('vc-select')
        document.querySelector(`.id-${date.id} .vc-day-content`).tabIndex = '0'
      }

      // 오늘
      const todayClick = () => {
        moveToevent(new Date())
        const today = new Date()
        const month = ('0' + (today.getMonth() + 1)).slice(-2)
        const day = ('0' + today.getDate()).slice(-2)
        daySelectedMsg.value = `${('0' + (today.getMonth() + 1)).slice(-2)}월${(
          '0' + today.getDate()
        ).slice(-2)}일`
        setTimeout(() => {
          const calendarContents = document.querySelectorAll(
            '.calendar-ui .vc-day'
          )
          calendarContents.forEach((calendarContent) => {
            calendarContent.querySelector('.vc-day-content').tabIndex = '-1'
            calendarContent
              .querySelector('.vc-day-content')
              .classList.remove('vc-select')
          })
          document.querySelector(
            '.calendar-ui .is-today .vc-day-content'
          ).tabIndex = 0
        }, 1)
      }
      onUpdated(() => {
        moveToevent(new Date(daySelectedDate.value))
        console.log('update')
      })

      return {
        calendar,
        views,
        isOpen,
        masks,
        daySelectedMsg,
        daySelectedDate,
        changeCalendarView,
        moveToevent,
        todayClick,
        daySelected
      }
    }
  }
</script>
