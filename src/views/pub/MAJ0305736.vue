<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">지역 설정</v-toolbar-title>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container pt-4">
          <template v-if="searchDep1">
            <v-btn
              block
              variant="outlined"
              rounded="xl"
              color="#FFB11B"
              height="60"
              :ripple="false"
              class="btn-search"
              @click=";(searchDep1 = false), (searchDep2 = true)"
            >
              <span class="text">
                동/읍/면으로 검색
                <img src="/assets/images/icon-search.svg" alt="검색" />
              </span>
            </v-btn>
            <!-- //카테고리 btn -->
            <div class="box-rounded pa-4 fs-16 mt-4 d-flex align-center">
              <div>
                <strong>내 장소</strong>
                <p class="text-grey">검색 후 내 장소를 등록하세요.</p>
              </div>
              <v-btn
                variant="flat"
                rounded="lg"
                height="32"
                color="#F2F4F6"
                class="text-primary px-3 ml-auto"
                >삭제</v-btn
              >
            </div>
          </template>
          <!-- //검색 dep1 -->
          <template v-if="searchDep2">
            <div class="search-area">
              <v-text-field
                variant="outlined"
                rounded="xl"
                clearable
                placeholder="궁금하신 내용을 입력해 주세요"
                prepend-inner-icon="mdi-magnify"
                persistent-clear
                class="textfield-search type fs-16 textfield-error"
              ></v-text-field>
              <v-btn
                variant="text"
                @click=";(searchDep2 = false), (searchDep1 = true)"
                class="btn"
                >취소</v-btn
              >
            </div>
            <p class="text-message-error">2자 이상 입력해 주세요</p>
            <!-- //검색입력 -->
            <h3 class="tit-01 mt-4">내 장소</h3>
            <div class="box-rounded d-flex align-center pa-4">
              <strong class="fs-16">강남구 대치동</strong>
              <v-btn
                variant="flat"
                rounded="lg"
                height="32"
                color="#F2F4F6"
                class="text-primary px-3 ml-auto"
              >
                삭제
              </v-btn>
            </div>
            <div class="section-page mt-8">
              <!-- [D] nodata 노출시 영역 숨김 -->
              <h3 class="tit-01">내 장소 등록</h3>
              <v-radio-group>
                <v-radio
                  v-for="list in addressList"
                  :key="list.id"
                  :label="`Radio-${list.id}`"
                  :value="list.id"
                  class="radio-basic type"
                >
                  <template v-slot:label
                    ><v-btn variant="text" @click="$emit('close')">{{
                      list.text
                    }}</v-btn></template
                  >
                </v-radio>
              </v-radio-group>
              <v-btn
                variant="flat"
                height="46"
                color="#FFD633"
                rounded="lg"
                class="font-weight-bold ff-second"
                block
                @click="$emit('close')"
                >선택 지역 내 장소 등록</v-btn
              >
              <!-- //[D] nodata 노출시 영역 숨김 -->
              <Nodata :icon="true" iconSize="big" iconType="hospital">
                <div class="fs-16">검색결과가 없습니다</div>
              </Nodata>
            </div>
          </template>
          <!-- //검색 dep2 -->
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import router from '@/router'
  import Nodata from '@/components/nodata/Nodata.vue'
  import { ref } from 'vue'
  export default {
    components: {
      Nodata
    },
    props: ['modal2'],
    emits: ['close'],
    data() {
      return {}
    },
    setup(props) {
      const dialog = ref(props.modal2)
      const searchDep1 = ref(true)
      const searchDep2 = ref(false)
      const addressList = ref([
        {
          id: 1,
          text: '서울특별시 동작구 대방동'
        },
        {
          id: 2,
          text: '서울특별시 동작구 대방동'
        },
        {
          id: 3,
          text: '서울특별시 동작구동작구 대방동대방동'
        }
      ])
      function goPath(val) {
        router.push(val)
      }

      return { dialog, addressList, searchDep1, searchDep2, goPath }
    }
  }
</script>
