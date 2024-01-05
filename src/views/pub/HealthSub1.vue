<template>
  <div class="contents pt-0">
    <div class="section-page bg pa-4">
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <v-card-title class="v-card-title pa-0 fs-20 font-weight-bold"
          >오건강님<br /><span v-html="emoResultTitle"></span
        ></v-card-title>
        <p v-html="emoResultMsg" class="text-info-grey2 fs-16 mt-2"></p>

        <v-btn-toggle
          class="emoji-bigselct mt-8"
          :class="emoResultClass"
          v-model="emotionSelect"
          @click="emotionFunc"
        >
          <div class="d-flex justify-center gap-34 emoji-anim-frame">
            <v-btn variant="text" value="verygood" class="radio-imoji">
              <div class="emoji-anim verygood">
                <figure class="face">
                  <span class="eye"></span>
                  <span class="eye last"></span>
                  <span class="mouth"></span>
                  <span class="heart1"></span>
                  <span class="heart2"></span>
                  <span class="heart3"></span>
                </figure>
              </div>
              긍정
            </v-btn>
            <v-btn
              ref="emojiNormal"
              variant="text"
              value="normal"
              class="radio-imoji"
            >
              <div class="emoji-anim normal">
                <figure class="face">
                  <span class="eye"></span>
                  <span class="eye last"></span>
                  <span class="mouth"></span>
                </figure>
              </div>
              보통
            </v-btn>
            <v-btn variant="text" value="verybad" class="radio-imoji">
              <div class="emoji-anim verybad">
                <figure class="face">
                  <span class="eye"></span>
                  <span class="eye last"></span>
                </figure>
              </div>
              부정
            </v-btn>
          </div>
        </v-btn-toggle>
      </v-card>
    </div>
  </div>
  <DialogEmotionInput
    :message="emotionMsg"
    :classOption="emotionClass"
    :tabNum="emotionTabNum"
    v-model="modal2"
    @close="emoResultFunc"
  />
</template>

<script>
  import DialogEmotionInput from '@/views/pub/MAJ0202971.vue'

  import { ref } from 'vue'

  export default {
    components: {
      DialogEmotionInput
    },
    setup() {
      const modal2 = ref(false)
      const emotionSelect = ref()
      const emotionMsg = ref()
      const emotionClass = ref()
      const emotionTabNum = ref()
      const emotionFunc = () => {
        modal2.value = true
        //console.log(emotionSelect.value)
        if (emotionSelect.value === 'verygood') {
          emotionMsg.value = '매우 좋음'
          emotionTabNum.value = 0
        } else if (emotionSelect.value === 'normal') {
          emotionMsg.value = '보통'
          emotionTabNum.value = 1
        } else if (emotionSelect.value === 'verybad') {
          emotionMsg.value = '매우나쁨'
          emotionTabNum.value = 2
        }
        emotionClass.value = emotionSelect.value
      }
      const emoResultClass = ref()
      const emoBoxClass = ref('mt-5')
      const emoResultTitle = ref('오늘 하루 어떠셨나요?')
      const emoResultMsg = ref('하고 싶은 이야기를 공유해 주세요')
      const emoResultFunc = () => {
        modal2.value = false
        emoResultClass.value = emotionSelect.value
        emoBoxClass.value = ''
        if (emoResultClass.value === 'verygood') {
          emoResultTitle.value = '좋은 일이 당신을 기다리고 있어요'
          emoResultMsg.value = '긍정적인 에너지를 유지하세요'
        } else if (emoResultClass.value === 'normal') {
          emoResultTitle.value = '보통의 날도 소중해요'
          emoResultMsg.value = '작은 기쁨을 찾아보세요'
        } else if (emoResultClass.value === 'verybad') {
          emoResultTitle.value = '조금 더 힘을 내세요'
          emoResultMsg.value = '어려운 시기를 극복하고 나면 더 강해질 거예요'
        }
      }
      return {
        emotionSelect,
        emotionFunc,
        emoResultFunc,
        emoResultClass,
        emoBoxClass,
        modal2,
        emotionMsg,
        emotionClass,
        emotionTabNum,
        emoResultTitle,
        emoResultMsg
      }
    }
  }
</script>
