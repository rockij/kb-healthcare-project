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
          <img src="@/assets/images/icon-arrow-down.svg" alt="" class="arrow" />
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
        :max-date="new Date()"
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
  import { onMounted, reactive, ref, onUpdated } from 'vue'
  export default {
    props: ['classOption', 'attributesValue'],
    setup(props) {
      // 여성건강
      const womenHealth = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-love' },
          dates: [new Date(2023, 9, 27)]
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-circle' },
          dates: [new Date(2023, 9, 2)]
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-medicine' },
          dates: [new Date(2023, 9, 12)]
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-circle' },
          dates: [new Date(2023, 9, 12)]
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-love' },
          dates: [new Date(2023, 9, 12)]
        },
        // 베란기간
        {
          highlight: { class: 'vc-veran' },
          content: { class: 'vc-veran' },
          dates: [{ start: new Date(2023, 9, 1), span: 6 }]
        },
        // 베란예정일
        {
          highlight: { class: 'vc-veran-day' },
          dates: [new Date(2023, 9, 4)]
        },
        // 월경기간
        {
          highlight: { class: 'vc-menses' },
          content: { class: 'vc-menses' },
          dates: [{ start: new Date(2023, 9, 18), span: 7 }]
        }
      ])

      // 기분
      const feeling = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          dot: { class: 'emoji-verygood' },
          dates: [new Date(2023, 9, 2)]
        },
        {
          dot: { class: 'emoji-good' },
          dates: [new Date(2023, 9, 10)]
        },
        {
          dot: { class: 'emoji-normal' },
          dates: [new Date(2023, 9, 20)]
        },
        {
          dot: { class: 'emoji-bad' },
          dates: [new Date(2023, 9, 13)]
        },
        {
          dot: { class: 'emoji-verybad' },
          dates: [new Date(2023, 9, 7)]
        }
      ])

      // 복약
      const medication = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          content: { class: 'vc-medi-no' },
          dates: [new Date(2023, 9, 2)]
        },
        {
          content: { class: 'vc-medi-end' },
          dates: [new Date(2023, 9, 10)]
        },
        {
          content: { class: 'vc-medi-part' },
          dates: [new Date(2023, 9, 20)]
        }
      ])

      const calendar = ref(null)
      const views = ref('weekly')
      const isOpen = ref()
      const masks = ref({
        title: 'YYYY.MM',
        transition: 'none'
      })
      const today = new Date()
      const year = today.getFullYear()
      const month = ('0' + (today.getMonth() + 1)).slice(-2)
      const day = ('0' + today.getDate()).slice(-2)
      const daySelectedMsg = ref(`${month}월 ${day}일`)
      const daySelectedDate = ref(today)
      const daySelected = (date) => {
        const linkMsg = date.id.split('-')
        daySelectedMsg.value = `${linkMsg[1]}월 ${linkMsg[2]}일`
        daySelectedDate.value = `${linkMsg[0]}-${linkMsg[1]}-${linkMsg[2]}`
        //${linkMsg[0]}.${linkMsg[1]}.${linkMsg[2]}
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
      const moveToevent = (evt) => {
        calendar.value.move(evt)
      }
      const todayClick = () => {
        moveToevent(new Date())
        const today = new Date()
        const month = ('0' + (today.getMonth() + 1)).slice(-2)
        const day = ('0' + today.getDate()).slice(-2)
        //daySelectedMsg.value = `${month}월 ${day}일`
        //daySelectedDate.value = new Date()
        setTimeout(() => {
          const calendarContents = document.querySelectorAll(
            '.calendar-ui .vc-day'
          )
          calendarContents.forEach((calendarContent) => {
            calendarContent.querySelector('.vc-day-content').tabIndex = '-1'
          })
          document.querySelector(
            '.calendar-ui .is-today .vc-day-content'
          ).tabIndex = 0
        }, 1)
        //daySelected('today')
      }
      onMounted(() => {
        //moveToevent(new Date())
      })
      onUpdated(() => {
        moveToevent(new Date(daySelectedDate.value))
      })

      return {
        womenHealth,
        feeling,
        medication,

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
