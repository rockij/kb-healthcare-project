<template>
  <div class="contents">
    <div class="title-area pt-0">
      <p class="desc">문의 사항을 남겨주시면 신속하게 답변드릴게요</p>
    </div>

    <v-btn variant="text" class="pl-0 mt-8" @click="goPath('MAJ0104670')">
      <span class="fs-24 font-weight-bold">회원가입</span>
      <v-icon class="ml-2">
        <img src="/assets/images/icon-arrow-down.svg" alt="" />
      </v-icon>
    </v-btn>

    <div class="textfield-area pt-6">
      <v-text-field
        class="input-basic textfield-default input-qna"
        label="제목"
        v-model="name"
        required
        persistent-placeholder
        variant="outlined"
        clearable
      >
      </v-text-field>
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
    </div>
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
                :image="`/assets/images/` + items.src"
              ></v-avatar>
            </template>
          </v-chip>
        </template>
      </div>

      <div class="smDesc d-flex">
        <v-avatar color="#cccccc" size="16"
          ><span class="text-white" style="font-size: 8px">!</span></v-avatar
        >
        <span class="text">
          개인정보가 포함되지 않도록 주의해 주세요 <br />
          사진첨부는 10MB까지 1개만 등록 가능합니다
        </span>
      </div>
    </div>

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          :disabled="name2.length === 0"
          >등록하기</v-btn
        >
      </div>
    </div>
  </div>
  <!-- 1:1 문의 프로그램 선택 팝업 연결 -->
  <MAJ0104680
    v-model="modal"
    @close="modal = false"
    @update="goPath('MAJ0104681')"
  />
</template>

<script>
  import MAJ0104680 from './MAJ0104680.vue'
  import { ref, reactive } from 'vue'
  import router from '@/router'
  export default {
    components: { MAJ0104680 },
    setup() {
      const timeout = 2000
      const snackbar = ref(false)
      const modal = ref(false)
      const program = true
      const select = ref({ state: '선택해주세요', value: 0 })
      const selectList = ref([
        { state: '테라젠', value: 0 },
        { state: '루틴 문의', value: 1 },
        { state: '건강검진 문의', value: 2 }
      ])

      const name = ref('건강검진 연동이 되지 않아요')
      const name2 = ref(
        '인증까지 완료했는데, 건강검진 정보가 연동이 되지 않아요.'
      )
      const checkedItem = ref([])
      const chip = ref(true)

      const agreeItems = reactive([
        {
          id: 1,
          text: '[필수] 개인정보 수집 및 이용동의'
        },
        {
          id: 2,
          text: '[필수] 고유식별정보 처리 동의'
        }
      ])

      const addFileListImg = ref([
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' }
      ])

      function goPath(val) {
        router.push(val)
      }
      return {
        addFileListImg,
        timeout,
        snackbar,
        modal,
        program,
        select,
        selectList,
        name,
        name2,
        checkedItem,
        agreeItems,
        chip,
        goPath
      }
    }
  }
</script>
