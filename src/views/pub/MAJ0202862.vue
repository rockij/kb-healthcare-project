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
        <v-toolbar-title class="modal-title">직접 입력하기</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="textfield-area body-calendar pt-4 d-flex">
            <v-text-field
              class="input-basic textfield-default select-field hasData"
              label="운동 종류"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="선택"
              v-model="name4"
              @click="modal = true"
              :model-value="modalListBtn.text"
              readonly
              clearable
            >
              <template v-slot:append-inner
                ><img src="/assets/images/icon-arrow-down2.svg" alt="검색"
              /></template>
            </v-text-field>

            <DialogSelectList
              :lists="modalList"
              :title="modalTitle"
              v-model="modal"
              @close="modal = false"
              @update="changeCategory"
            />

            <v-text-field
              class="input-basic textfield-default select-field hasData"
              label="운동 종류"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="선택"
              v-model="name4"
              model-value="오후 9:30"
              readonly
              clearable
            >
              <template v-slot:append-inner
                ><img src="/assets/images/icon-arrow-down2.svg" alt="검색"
              /></template>
            </v-text-field>

            <v-text-field
              class="input-basic textfield-default select-field hasData"
              label="운동 시간"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="선택"
              v-model="name4"
              readonly
              clearable
            >
              <template v-slot:append-inner
                ><img src="/assets/images/icon-arrow-down2.svg" alt="검색"
              /></template>
            </v-text-field>

            <v-text-field
              class="input-basic textfield-default suffix"
              :class="name4 ? 'hasData' : ''"
              label="거리 (선택)"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="거리 입력"
              v-model="name4"
              clearable
            >
              <template v-slot:append-inner>km</template>
            </v-text-field>

            <v-text-field
              class="input-basic textfield-default suffix"
              :class="name5 ? 'hasData' : ''"
              label="점프 횟수 (선택)"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="점프 횟수 입력"
              v-model="name5"
              clearable
              type="tel"
            >
            </v-text-field>
            <v-list-item class="consume-calorie">
              <v-list-item-title
                ><i class="icon-consume-calorie" aria-hidden="true"
                  ><img
                    src="/assets/images/icon-consume-calorie.svg"
                    alt="" /></i
                ><span>소모 칼로리</span></v-list-item-title
              >
              <v-list-item-subtitle
                ><span ref="cnt-consume-calorie">--</span
                >kcal</v-list-item-subtitle
              >
            </v-list-item>

            <v-list-item class="textfield-area textfield-memo">
              <v-list-item-title
                >메모<span class="small">(선택)</span></v-list-item-title
              >
              <v-sheet>
                <v-textarea
                  class="textarea-basic textfield-default pt-4"
                  placeholder="내용"
                  persistent-counter
                  v-model="name2"
                  :maxlength="1000"
                  :counter="20"
                  variant="outlined"
                  no-resize
                >
                  <template v-slot:counter="{ value, max }">
                    <span class="current-value">{{ value }}</span> /
                    <span class="max-length">{{ max }}</span>
                  </template>
                </v-textarea>
              </v-sheet>
              <div class="attach-area">
                <v-btn variant="text" height="40" class="attach-btn ws-94" block
                  >사진첨부<v-icon class="pl-1">mdi-plus</v-icon>
                </v-btn>
                <div class="list-inputFile-picture">
                  <template v-for="(items, i) in addFileListImg" :key="i">
                    <v-chip
                      class="file-chip file-image mt-4"
                      v-if="items"
                      closable
                    >
                      <template #append>
                        <v-avatar
                          class="bdr-4"
                          :image="`/assets/images/` + items.src"
                        ></v-avatar>
                      </template>
                    </v-chip>
                  </template>
                </div>
              </div>
            </v-list-item>
          </div>
        </div>
        <div class="btn-bottom">
          <div class="btn-area d-flex">
            <v-btn variant="text" height="56" class="btn-summit"
              >저장하기</v-btn
            >
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, reactive, computed, onMounted } from 'vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'

  export default {
    components: { DialogSelectList },
    props: ['modal'],
    emits: ['update', 'close'],
    setup() {
      const chip = ref(true)
      const closeItem = ref(true)
      const dialog = false
      const name = ref('2023.06.21')
      const name2 = ref('')
      const name3 = ref('88')
      const name4 = ref('')
      const name5 = ref('')

      const modal = ref(false)
      const modalTitle = ref('운동 종류')
      const modalList = ref([
        {
          value: 0,
          text: '자전거'
        },
        {
          value: 1,
          text: '근력운동'
        },
        {
          value: 2,
          text: '달리기 (GPS)'
        },
        {
          value: 3,
          text: '하이킹'
        },
        {
          value: 4,
          text: '계단오르기'
        },
        {
          value: 5,
          text: '농구'
        },
        {
          value: 6,
          text: '당구'
        },
        {
          value: 7,
          text: '등산'
        },
        {
          value: 8,
          text: '런닝머신(걷기)'
        },
        {
          value: 9,
          text: '러닝머신(달리기)'
        },
        {
          value: 10,
          text: '배드민턴'
        }
      ])

      const addFileListImg = ref([
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' }
      ])

      const modalListBtn = ref('')
      function changeCategory(val) {
        modal.value = false
        return (modalListBtn.value = { ...val })
      }

      function event() {
        console.log('click')
      }
      return {
        dialog,
        name,
        name2,
        name3,
        name4,
        name5,
        modal,
        modalTitle,
        modalList,
        modalListBtn,
        changeCategory,
        event,
        chip,
        addFileListImg,
        closeItem
      }
    }
  }
</script>
