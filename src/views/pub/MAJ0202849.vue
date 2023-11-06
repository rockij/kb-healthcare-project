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
        <dl class="info-item">
          <dt class="info-title fs-14">종류</dt>
          <dd class="info-desc">
            <i class="icon-sports small" :class="sportsClass"></i
            ><span class="text">{{ sportsName }}</span>
          </dd>
        </dl>
        <dl
          class="info-item"
          v-if="
            paused &&
            (sportsTimeHours != '00' ||
              sportsTimeMinutes != '00' ||
              sportsTimeSeconds != '00')
          "
        >
          <dt class="info-title fs-14">총 운동시간</dt>
          <dd class="info-desc">
            <span class="hours" v-if="sportsTimeHours != '00'"
              >{{ sportsTimeHours }}시간</span
            >
            <span class="minutes" v-if="sportsTimeMinutes != '00'"
              >{{ sportsTimeMinutes }}분</span
            >
            <span class="seconds" v-if="sportsTimeSeconds != '00'"
              >{{ sportsTimeSeconds }}초</span
            >
          </dd>
        </dl>
        <dl class="info-item" v-if="sportsDistance">
          <dt class="info-title fs-14">총 이동거리</dt>
          <dd class="info-desc">{{ sportsDistance }}</dd>
        </dl>
        <dl class="info-item">
          <dt class="info-title fs-14">총 소모 칼로리</dt>
          <dd class="info-desc">{{ recordCalorie }}</dd>
        </dl>
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
              v-model="memo"
              :maxlength="1000"
              :counter="20"
              variant="outlined"
              no-resize
            ></v-textarea>
          </v-sheet>
          <div class="attach-area">
            <div class="wrap-file-input">
              <input type="file" class="file-input" id="inputFile" />
              <label for="inputFile" class="btn-file-input"
                >사진첨부<v-icon size="16">mdi-plus</v-icon></label
              >
            </div>
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
  import { reactive, ref } from 'vue'
  export default {
    components: { DocumentModal },
    props: [
      'sportsName',
      'sportsClass',
      'sportsTimeHours',
      'sportsTimeMinutes',
      'sportsTimeSeconds',
      'recordCalorie',
      'sportsDistance',
      'paused',
      'modeMap'
    ],
    emits: ['close'],
    setup() {
      const memo = ref()
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
      return {
        memo,
        addFileListImg,
        clickfunction
      }
    }
  }
</script>
