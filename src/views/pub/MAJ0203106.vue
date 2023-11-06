<template>
  <v-dialog
    :v-model="`v-model`"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">혈당</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="textfield-area body-calendar pt-4 d-flex">
            <v-text-field
              class="input-basic textfield-default input-calendar"
              v-model="name"
              label="측정 날짜"
              required
              persistent-placeholder
              variant="outlined"
              append-inner-icon="mdi-calendar"
              @click="event"
            >
            </v-text-field>

            <v-text-field
              class="input-basic textfield-default select-field"
              :class="name4 ? 'hasData' : ''"
              label="측정 시간"
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
                ><img src="@/assets/images/icon-arrow-down2.svg" alt="검색"
              /></template>
            </v-text-field>

            <v-list-item class="textfield-area textfield-memo">
              <v-list-item-title
                ><span class="font-weight-bold"
                  >측정 상태</span
                ></v-list-item-title
              >
              <div role="tablist" class="tabs-simple2">
                <v-btn variant="text" role="tab" aria-selected="true"
                  >공복</v-btn
                >
                <v-btn variant="text" role="tab" aria-selected="false"
                  >식전</v-btn
                >
                <v-btn variant="text" role="tab" aria-selected="false"
                  >식후</v-btn
                >
              </div>
            </v-list-item>
            <div class="box-rounded-fill">
              <p class="table-caution">
                아침 기상 직후 또는 8시간 이상 공복 기준
              </p>
            </div>

            <v-text-field
              class="input-basic textfield-default suffix"
              :class="name4 ? 'hasData' : ''"
              label="혈당입력"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="입력해 주세요"
              v-model="name4"
              clearable
            >
              <template v-slot:append-inner>mg/dL</template>
            </v-text-field>

            <v-list-item class="textfield-area pa-0">
              <v-list-item-title
                >오늘 먹은 음식<span class="small"
                  >(선택)</span
                ></v-list-item-title
              >
              <p class="desc py-2 fs-14">
                문의가 많을 경우 시간이 걸릴 수 있으니 양해 부탁 드려요
              </p>
              <div class="attach-area">
                <div class="wrap-file-input">
                  <input type="file" class="file-input" id="inputFile" />
                  <label for="inputFile" class="btn-file-input"
                    >사진첨부<v-icon size="16">mdi-plus</v-icon></label
                  >
                </div>
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
                          :image="`/src/assets/images/` + items.src"
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
