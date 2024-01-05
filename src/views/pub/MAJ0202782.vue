<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">카테고리 설정</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <!-- 12/22 mt-7 추가 -->
          <div class="title-area mt-7">
            <p class="subTit-01">어떤 뉴스가 보고싶으세요?</p>
          </div>
          <!-- 12/22 아코디언 수정 -->
          <v-expansion-panels class="mt-6 accordion-list" v-model="panel">
            <v-expansion-panel
              v-for="(item, i) in panelList"
              :key="i"
              :title="item.text"
            >
              <template v-slot:text>
                <div class="text" @click="$emit('close')">
                  <span v-for="(child, index) in item.children" :key="index">
                    {{ child }}
                  </span>
                </div>
              </template>
            </v-expansion-panel>
          </v-expansion-panels>
          <!-- <ul class="accordion-list mt-6">
            <li
              v-for="(item, i) in panelList"
              :key="i"
              @click="panelValue(i, item)"
            >
              <div class="title">
                {{ item.text }}
                <v-icon v-if="panel === i">mdi-chevron-up</v-icon>
                <v-icon v-else>mdi-chevron-down</v-icon>
              </div>
              <v-expand-transition>
                <div v-if="panel === i" class="body">
                  <div class="text" @click="$emit('close')">
                    <span v-for="(child, index) in item.children" :key="index">
                      {{ child }}
                    </span>
                  </div>
                </div>
              </v-expand-transition>
            </li>
          </ul> -->
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import router from '@/router'
  import { computed, ref } from 'vue'
  export default {
    props: ['btn'],
    emits: ['close'],
    setup(props, context) {
      const { emit } = context
      const dialog = ref(true)
      const panel = ref([0])
      const panelList = ref([
        {
          text: '뇌혈관 건강',
          children: ['뇌혈관 건강'],
          active: false
        },
        {
          text: '신경계',
          children: [
            '어지럼증',
            '두통/편두통',
            '떨림/마비',
            '파킨슨병',
            '치매'
          ],
          active: false
        },
        {
          text: '정신 건강',
          children: ['정신 건강'],
          active: false
        },
        {
          text: '귀/코/목',
          children: ['귀', '코', '목'],
          active: false
        },
        {
          text: '폐/기관지',
          children: ['폐', '기관지'],
          active: false
        },
        {
          text: '간/담/췌장',
          children: ['간/담/췌장'],
          active: false
        },
        {
          text: '위/장/관 건강',
          children: ['위/장/관 건강'],
          active: false
        },
        {
          text: '면역 건강',
          children: ['면역 건강'],
          active: false
        },
        {
          text: '피부 건강',
          children: ['피부 건강'],
          active: false
        },
        {
          text: '소아청소년 건강',
          children: ['소아청소년 건강'],
          active: false
        },
        {
          text: '종양(암)',
          children: ['종양(암)'],
          active: false
        },
        {
          text: '구강/치아 건강',
          children: ['구강/치아 건강'],
          active: false
        },
        {
          text: '눈 건강',
          children: ['눈 건강'],
          active: false
        },
        {
          text: '내분비계',
          children: ['내분비계'],
          active: false
        },
        {
          text: '심혈관건강',
          children: ['심혈관건강'],
          active: false
        },
        {
          text: '뼈/관절/근육',
          children: ['뼈', '관절', '근육'],
          active: false
        }
      ])
      function panelValue(i, item) {
        panel.value = i
        if (panel.value === i) item.active = true
        else item.active = false
      }
      return {
        panel,
        panelList,
        dialog,
        panelValue
      }
    }
  }
</script>
