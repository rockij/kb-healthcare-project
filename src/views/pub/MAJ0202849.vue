<template>
  <!-- TermsModal MAJ0202849 -->
  <DocumentModal
    modalTitle="운동"
    :v-model="`v-model`"
    @close="$emit('close')"
    @clickfunction="clickfunction"
  >
    <template #modalBody>
      <div class="title-area">
        <p class="lead">
          활동적인 하루를 보내셨네요!<br />
          오늘 하루 어떠셨나요?
        </p>
        <p class="desc pt-4 mb-6 small">2023.09.18 오전 6:00</p>
      </div>
      <div class="border-top">
        <template v-for="item in item" :key="item">
          <dl class="info-item">
            <dt class="info-title">종류</dt>
            <dd class="info-desc">
              <v-chip
                label
                size="small"
                color="#3F86F1"
                class="chip-default chip-color"
              >
                {{ item.items }}
              </v-chip>
            </dd>
          </dl>
          <dl class="info-item">
            <dt class="info-title">총 운동시간</dt>
            <dd class="info-desc">{{ item.time }}</dd>
          </dl>
          <dl class="info-item">
            <dt class="info-title">총 이동거리</dt>
            <dd class="info-desc">{{ item.distance }}</dd>
          </dl>
          <dl class="info-item">
            <dt class="info-title">총 소모 칼로리</dt>
            <dd class="info-desc">{{ item.calorie }}</dd>
          </dl>
        </template>
      </div>
      <div class="textfield-area body-calendar d-flex">
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
            ></v-textarea>
          </v-sheet>
          <div class="attach-area">
            <v-btn variant="text" height="40" class="attach-btn ws-94" block
              >사진첨부<v-icon class="pl-1">mdi-plus</v-icon>
            </v-btn>
            <div class="list-inputFile-picture">
              <template v-for="(items, i) in addFileListImg" :key="i">
                <v-chip class="file-chip file-image mt-4" v-if="items" closable>
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
    </template>
    <template #modalButton>
      <v-btn
        variant="text"
        height="56"
        class="btn-summit"
        @click="clickfunction"
        >저장하기</v-btn
      >
    </template>
  </DocumentModal>
  <!-- //TermsModal MAJ0202849 -->
</template>
<script>
  import DocumentModal from '@/components/DocumentModal.vue'
  import { onMounted, ref } from 'vue'
  export default {
    components: { DocumentModal },
    emits: ['close'],
    setup() {
      const name2 = ref()
      const item = ref([
        {
          items: '달리기',
          time: '84분',
          distance: '1.8 km',
          calorie: '140 kcal'
        }
      ])
      const clickfunction = () => {
        console.log('click')
      }
      const addFileListImg = ref([
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' }
      ])
      return { name2, item, addFileListImg, clickfunction }
    }
  }
</script>
