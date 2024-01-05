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
        <v-toolbar-title class="modal-title">근무지 선택</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="title-area pt-7">
            <p class="subTit-01">
              <span class="text-blue">포도맛고양이님</span>의 구내식당메뉴를
              조회하기 위해 근무지를 선택해 주세요
            </p>
          </div>
          <!-- 검색  -->
          <div class="search-area mt-8">
            <v-text-field
              variant="outlined"
              rounded="xl"
              clearable
              hide-details
              placeholder="궁금하신 내용을 입력해 주세요"
              prepend-inner-icon="mdi-magnify"
              persistent-clear
              v-model="text"
              @click:clear="onClear"
              class="textfield-search type fs-16"
            ></v-text-field>
            <v-btn variant="text" class="btn">취소</v-btn>
          </div>

          <div class="total mt-6">총 {{ answerList.length }}건</div>

          <Nodata icon :iconSize="'big'" iconType="food-court">
            검색결과가 없습니다.<br />
            다른 검색어로 검색해 보세요.
          </Nodata>
        </div>
      </div>
      <div class="btn-bottom">
        <div class="btn-area d-flex">
          <v-btn variant="text" height="56" disabled class="btn-summit"
            >완료</v-btn
          >
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'
  import Nodata from '../../components/nodata/Nodata.vue'

  export default {
    components: { Nodata },
    setup() {
      const dialog = ref(true)
      const text = ref('은해')
      const answerList = ref([])
      function onClear() {
        text.value = ''
      }

      return {
        dialog,
        text,
        answerList,
        onClear
      }
    }
  }
</script>
