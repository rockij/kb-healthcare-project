import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@/plugins/lodash'
import VueUniversalModal from 'vue-universal-modal'
import 'vue3-toastify/dist/index.css'

// **Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

import VueNumber from 'vue-number-animation'
import Vue3Lottie from 'vue3-lottie'

import uiCommon from '@/assets/js/ui_common.js'
import anime from 'animejs/lib/anime.es.js'
import uiButtonTop from '@/components/uiButtonTop.vue' // 탑이동버튼

const vuetify = createVuetify({
  components,
  directives
})

// Vuetify**

/** @moment */
import dayjs from 'dayjs'
/** @emitter */
import eventBus from '@/core/eventBus'
window.emitter = eventBus

/** @request */
import request from '@/core/request'
window.$api = request

const app = createApp(App)
app.use(router)
app.use(VueUniversalModal, { teleportTarget: '#modals' })
app.use(store)
app.use(vuetify)
app.use(VCalendar, {})
app.provide('dayJS', dayjs)
app.use(VueNumber)
app.use(Vue3Lottie)
app.use(uiCommon)
app.config.globalProperties.$anime = anime
app.component('ui-button-top', uiButtonTop)
app.mount('#app')
