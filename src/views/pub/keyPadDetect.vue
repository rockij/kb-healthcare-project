<template>
    <div class="contents">
        <v-text-field
          class="input-hint textfield-default"
          v-model="caption"
          label="제목"
          required
          clearable
          persistent-placeholder
          variant="outlined"
          placeholder="제목입력"
          hint="안내문구 영역입니다."
        ></v-text-field>
        <v-textarea
            class="textarea-basic textfield-default pt-4"
            persistent-counter
            :maxlength="1000"
            counter
            variant="outlined"
            no-resize
        >
            <template v-slot:counter="{ value, max }">
            <span class="current-value">{{ value }}</span> /
            <span class="max-length">{{ max }}</span>
            </template>
        </v-textarea>
        <v-textarea
            class="textarea-basic textfield-default pt-4"
            persistent-counter
            :maxlength="1000"
            counter
            variant="outlined"
            no-resize
        >
            <template v-slot:counter="{ value, max }">
            <span class="current-value">{{ value }}</span> /
            <span class="max-length">{{ max }}</span>
            </template>
        </v-textarea>
        <v-textarea
            class="textarea-basic textfield-default pt-4"
            persistent-counter
            :maxlength="1000"
            counter
            variant="outlined"
            no-resize
        >
            <template v-slot:counter="{ value, max }">
            <span class="current-value">{{ value }}</span> /
            <span class="max-length">{{ max }}</span>
            </template>
        </v-textarea>
        <div class="ui-tag mt-2">
            <v-text-field
            class="input-hint textfield-default"
            v-model="caption2"
            label="태그"
            required
            clearable
            persistent-placeholder
            variant="outlined"
            placeholder="내용"
            hint="안내문구 영역입니다."
            @focus="tagFocus"
            @blur="tagBlur"
            ></v-text-field>
            <div class="ui-chips center">
                <span class="chip-item">#불안</span>
                <span class="chip-item">#공황증상</span>
                <span class="chip-item">#음주문제</span>
                <span class="chip-item">#스트레스</span>
                <span class="chip-item">#수면</span>
                <span class="chip-item">#우울</span>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import { ref, onMounted } from 'vue'
    export default {
      setup() {
        const caption = ref()
        const caption2 = ref()

        let isKeyPad = false

        const keyPadDetect = () => {
            let windowHeight = window.innerHeight;
 
            function resizeHandler() {
                windowHeight = window.innerHeight;
            }
            
            function viewportHandler(event) {
                const viewport = event.target;
                const viewportHeight = viewport.height;
                const htmlElement = document.querySelector('html');
                
                if (windowHeight > viewportHeight) {
                    isKeyPad = true
                    htmlElement.classList.add('is-keypad');
                } else {
                    isKeyPad = false
                    htmlElement.classList.remove('is-keypad');
                }
            }
            
            window.addEventListener('resize', resizeHandler);
            window.visualViewport.addEventListener('resize', viewportHandler);
        }

        const dimmedEl = '<div class="dimmed"></div>'
        const dimmed = document.querySelector('.dimmed')
        const wrap = document.querySelector('#mainWrap')

        const tagFocus = (e) => {
            e.target.closest('.ui-tag').classList.add('fixed')
            if(!dimmed > 0) document.querySelector('.contents').insertAdjacentHTML('beforeend', dimmedEl)
            setTimeout(() => {
                e.target.closest('.ui-tag').classList.add('on')
                wrap.scrollTo({ top: tarTop, behavior: 'smooth' })
            }, 10)
        }

        const tagBlur = (e) => {
            document.querySelector('.dimmed').remove()
            e.target.closest('.ui-tag').classList.remove('on')
            setTimeout(() => {
                e.target.closest('.ui-tag').classList.remove('fixed')
            }, 500)
        }

        onMounted(() => {
            keyPadDetect()
        });

        return {
            caption,
            caption2,
            keyPadDetect,
            tagFocus,
            tagBlur
        }
      }
    }
  </script>
<style lang="scss" scoped></style>
