<template>
  <figure ref="figure" :class="`body-${gender}`">
    <v-btn
      :ripple="false"
      variant="text"
      title="머리"
      class="head"
      @click="bodySelect('head')"
      ><i class="pulse"></i
    ></v-btn>
    <v-btn
      :ripple="false"
      variant="text"
      title="상체"
      class="upbody"
      @click="bodySelect('upbody')"
      ><i class="pulse"></i
    ></v-btn>
    <div class="body-box">
      <v-btn
        :ripple="false"
        variant="text"
        title="왼팔"
        class="leftarm"
        @click="bodySelect('upbody')"
      />
      <v-btn
        :ripple="false"
        variant="text"
        title="골반"
        class="pelvis"
        @click="bodySelect('pelvis')"
        ><i class="pulse"></i
      ></v-btn>
      <v-btn
        :ripple="false"
        variant="text"
        title="오른팔"
        class="rightarm"
        @click="bodySelect('upbody')"
      />
    </div>
    <v-btn
      :ripple="false"
      variant="text"
      title="하체"
      class="lowerbody"
      @click="bodySelect('lowerbody')"
      ><i class="pulse"></i
    ></v-btn>
  </figure>

  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    class="modal-bottom shadow"
    @click:outside="bodyStart(`${gender}`)"
  >
    <v-card>
      <div class="modal-body pt-4">
        <div class="flex-shrink-0 modal-body-container">
          <v-tabs
            v-model="tabInit"
            align-tabs="start"
            class="tab-line right-p0"
          >
            <v-tab
              :ripple="false"
              v-for="tab in bodyTabs"
              :key="tab.id"
              class="fs-20"
              @click="bodySelect(tab.part)"
              >{{ tab.text }}</v-tab
            >
          </v-tabs>
          <v-window v-model="tabInit" class="mt-7">
            <v-window-item>
              <div class="tabs-simple2">
                <v-btn
                  :ripple="false"
                  v-for="tab in headBtns"
                  :key="tab.id"
                  variant="text"
                  :aria-selected="headBtn === tab.id ? 'true' : 'false'"
                  @click="headSelected(tab.id)"
                  class="fs-16"
                  >{{ tab.text }}</v-btn
                >
              </div>
            </v-window-item>
            <v-window-item>
              <div class="tabs-simple2">
                <v-btn
                  :ripple="false"
                  v-for="tab in upbodyBtns"
                  :key="tab.id"
                  variant="text"
                  :aria-selected="upbodyBtn === tab.id ? 'true' : 'false'"
                  @click="upbodySelected(tab.id)"
                  class="fs-16"
                  >{{ tab.text }}</v-btn
                >
              </div>
            </v-window-item>
            <v-window-item>
              <div class="tabs-simple2">
                <v-btn
                  :ripple="false"
                  v-for="tab in pelvisBtns"
                  :key="tab.id"
                  variant="text"
                  :aria-selected="pelvisBtn === tab.id ? 'true' : 'false'"
                  @click="pelvisSelected(tab.id)"
                  class="fs-16"
                  >{{ tab.text }}</v-btn
                >
              </div>
            </v-window-item>
            <v-window-item>
              <div class="tabs-simple2">
                <v-btn
                  :ripple="false"
                  v-for="tab in lowerbodyBtns"
                  :key="tab.id"
                  variant="text"
                  :aria-selected="lowerbodyBtn === tab.id ? 'true' : 'false'"
                  @click="lowerbodySelected(tab.id)"
                  class="fs-16"
                  >{{ tab.text }}</v-btn
                >
              </div>
            </v-window-item>
            <v-window-item>
              <div class="tabs-simple2">
                <v-btn
                  :ripple="false"
                  variant="text"
                  :aria-selected="skinBtn === true ? 'true' : 'false'"
                  @click=";(skinBtn = true), (buttonActive = false)"
                  class="fs-16"
                  >피부문제, 가려움</v-btn
                >
              </div>
            </v-window-item>
            <v-window-item>
              <div class="tabs-simple2">
                <v-btn
                  :ripple="false"
                  variant="text"
                  :aria-selected="genital === true ? 'true' : 'false'"
                  @click=";(genital = true), (buttonActive = false)"
                  class="fs-16"
                  >비뇨, 전립선</v-btn
                >
              </div>
            </v-window-item>
          </v-window>
        </div>
      </div>

      <v-card-actions>
        <v-btn
          height="48px"
          class="bdr-8 btn-yellow"
          block
          :disabled="buttonActive"
          >확인</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  import { ref } from 'vue'
  export default {
    props: {
      gender: {
        default: ''
      }
    },
    setup(props) {
      const buttonActive = ref(true)
      const dialog = ref(false)
      const figure = ref()
      const tabInit = ref(0)

      const bodyTab = ref(0)
      const bodyTabs = [
        {
          id: 1,
          text: '머리 · 목 · 어깨',
          part: 'head'
        },
        {
          id: 2,
          text: '가슴 · 배 · 팔',
          part: 'upbody'
        },
        {
          id: 3,
          text: '허리 · 엉덩이',
          part: 'pelvis'
        },
        {
          id: 4,
          text: '다리 · 발',
          part: 'lowerbody'
        },
        {
          id: 5,
          text: '피부',
          part: 'skin'
        },
        {
          id: 6,
          text: '생식기',
          part: 'genital'
        }
      ]

      const headBtn = ref()
      const headBtns = [
        {
          id: 1,
          text: '머리 위 (뇌)'
        },
        {
          id: 2,
          text: '귀'
        },
        {
          id: 3,
          text: '눈'
        },
        {
          id: 4,
          text: '목안'
        },
        {
          id: 5,
          text: '코'
        },
        {
          id: 6,
          text: '목,경추'
        },
        {
          id: 7,
          text: '입'
        },
        {
          id: 8,
          text: '어깨'
        }
      ]
      function headSelected(val) {
        headBtn.value = val
        buttonActive.value = false
      }

      const upbodyBtn = ref()
      const upbodyBtns = [
        {
          id: 1,
          text: '폐,심장'
        },
        {
          id: 2,
          text: '위'
        },
        {
          id: 3,
          text: '하복부'
        },
        {
          id: 4,
          text: '비뇨 전립선'
        },
        {
          id: 5,
          text: '팔꿈치'
        },
        {
          id: 6,
          text: '손목,손'
        },
        {
          id: 7,
          text: '손가락'
        }
      ]
      function upbodySelected(val) {
        upbodyBtn.value = val
        buttonActive.value = false
      }

      const pelvisBtn = ref()
      const pelvisBtns = [
        {
          id: 1,
          text: '요추'
        },
        {
          id: 2,
          text: '항문'
        },
        {
          id: 3,
          text: '엉덩이'
        },
        {
          id: 4,
          text: '설사'
        },
        {
          id: 5,
          text: '변비'
        }
      ]
      function pelvisSelected(val) {
        pelvisBtn.value = val
        buttonActive.value = false
      }

      const lowerbodyBtn = ref()
      const lowerbodyBtns = [
        {
          id: 1,
          text: '다리'
        },
        {
          id: 2,
          text: '무릎'
        },
        {
          id: 3,
          text: '발목,발'
        },
        {
          id: 4,
          text: '발바닥'
        }
      ]
      function lowerbodySelected(val) {
        lowerbodyBtn.value = val
        buttonActive.value = false
      }

      const skinBtn = ref(false)
      const genital = ref(false)

      const bodySelect = (name) => {
        bodyStart(`${props.gender}`)
        dialog.value = true
        headBtn.value = ''
        upbodyBtn.value = ''
        pelvisBtn.value = ''
        lowerbodyBtn.value = ''
        skinBtn.value = ''
        genital.value = ''
        switch (name) {
          case 'head':
            figure.value.classList.add('zoom-head')
            tabInit.value = 0
            return console.log('머리 · 목 · 어깨')
          case 'upbody':
            figure.value.classList.add('zoom-upbody')
            tabInit.value = 1
            return console.log('가슴 · 배 · 팔')
          case 'pelvis':
            figure.value.classList.add('zoom-pelvis')
            tabInit.value = 2
            return console.log('허리 · 엉덩이')
          case 'lowerbody':
            figure.value.classList.add('zoom-lowerbody')
            tabInit.value = 3
            return console.log('다리 · 발')
          case 'skin':
            figure.value.classList.add('zoom-skin')
            tabInit.value = 4
            return console.log('피부')
          case 'genital':
            figure.value.classList.add('zoom-pelvis')
            tabInit.value = 5
            return console.log('생식기')
        }
      }
      const bodyStart = (targetName) => {
        console.log('다시선택')
        figure.value.className = `body-${targetName}`
        buttonActive.value = true
      }

      return {
        figure,
        dialog,
        buttonActive,
        tabInit,
        bodyTab,
        bodyTabs,
        headBtn,
        headBtns,
        headSelected,
        upbodyBtn,
        upbodyBtns,
        upbodySelected,
        pelvisBtn,
        pelvisBtns,
        pelvisSelected,
        lowerbodyBtn,
        lowerbodyBtns,
        lowerbodySelected,
        skinBtn,
        genital,
        bodySelect,
        bodyStart
      }
    }
  }
</script>
