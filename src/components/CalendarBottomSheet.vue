<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">날짜 선택</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        >
          <v-icon />
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-0">
        <div class="flex-shrink-0 modal-body-container pt-1">
          <div class="vc-calendar">
            <v-btn
              variant="text"
              class="calendar-today-go"
              style="top: -2px"
              @click="todayClick"
              >오늘
            </v-btn>
            <vCalendar
              class="calendar-ui"
              ref="calendar"
              :view="'monthly'"
              :attributes="calendarAttr"
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
      </div>

      <v-card-actions>
        <v-btn
          height="48px"
          class="bdr-8 btn-yellow"
          block
          @click="$emit('close')"
          >확인</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    emits: ['close'],
    setup(props) {
      const dialog = ref(false)
      const calendar = ref(null)
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
      const masks = ref({
        title: 'YYYY.MM',
        transition: 'none'
      })
      const moveToevent = (evt) => {
        calendar.value.move(evt)
      }

      // 날짜선택
      const daySelected = (date) => {
        console.log(date.id)
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

      return {
        dialog,
        calendar,
        calendarAttr,
        masks,
        moveToevent,
        todayClick,
        daySelected
      }
    }
  }
</script>
