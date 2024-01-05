<template>
  <div :class="classOption">
    <div class="vc-calendar challenge-calendar">
      <div class="">
        <vCalendar
          class="calendar-ui calendar-sticky"
          ref="calendar"
          :view="views"
          :attributes="attributesValue"
          :masks="masks"
          :max-date="new Date()"
          borderless
          trim-weeks
          expanded
          @dayclick="daySelected"
        >
        </vCalendar>
        <v-btn variant="text" class="calendar-today-go" @click="todayClick"
          >오늘
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted, reactive, ref, onUpdated } from 'vue'
  export default {
    props: ['attributesValue'],
    setup(props) {
      const calendar = ref(null)
      const views = ref('monthly')
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
        const today = new Date()
        const month = ('0' + (today.getMonth() + 1)).slice(-2)
        const day = ('0' + today.getDate()).slice(-2)
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
        moveToevent(new Date())
      }

      onUpdated(() => {
        moveToevent(new Date(daySelectedDate.value))
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
