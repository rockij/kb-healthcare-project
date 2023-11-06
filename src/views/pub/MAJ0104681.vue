<template>
  <div class="contents">
    <v-btn variant="text" class="pl-0" @click="goPath('MAJ0104670')">
      <span class="fs-24">프로그램 문의</span>
      <v-icon class="ml-2">
        <img src="@/assets/images/icon-arrow-down.svg" alt="" />
      </v-icon>
    </v-btn>

    <!-- 2023-10-23 버튼 클래스 수정 -->
    <v-btn
      block
      variant="outlined"
      rounded="xl"
      height="48"
      :ripple="false"
      class="btn-search shadow-none mt-5"
      color="#ccc"
      @click="modal = true"
    >
      <span class="text text-info-grey type-3">
        테라젠
        <img src="@/assets/images/icon-arrow-down2.svg" alt="검색" />
      </span>
    </v-btn>

    <div class="title-area">
      <p class="desc pt-4">
        진행 중인 프로그램에 관한 문의를 남겨 주시면 신속하게 도와드릴게요!
      </p>
    </div>

    <div class="textfield-area pt-8">
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
      ></v-textarea>
    </div>
    <div class="attach-area">
      <v-btn variant="text" height="40" class="attach-btn ws-94" block
        >사진첨부<v-icon class="pl-1">mdi-plus</v-icon>
      </v-btn>
      <v-chip
        v-if="chip"
        class="file-chip mt-4"
        closable
        @click:close="chip = false"
      >
        IMG_1234.png
      </v-chip>

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
    <div class="section-page section-write"></div>
    <div class="checkbox-area">
      <v-checkbox
        v-model="checkedItem"
        :value="item.id"
        v-for="item in agreeItems"
        :key="item.id"
        class="checked-agree"
      >
        <template v-slot:label
          >{{ item.text }}
          <v-spacer></v-spacer>
          <a target="_blank" href="https://vuetifyjs.com" @click.stop>
            <v-icon>mdi-chevron-right</v-icon></a
          >
        </template>
      </v-checkbox>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          :disabled="name2.length === 0"
          @click.stop="snackbar = true"
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
  <!-- toast 팝업 연결 -->
  <v-snackbar v-model="snackbar" :timeout="timeout" class="toast-basic">
    {{ snackbarText }}
    <template v-slot:actions>
      <v-btn color="blue" variant="text" @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
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
      const snackbarText = ref('등록되었어요')
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
      function goPath(val) {
        router.push(val)
      }
      return {
        snackbarText,
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
