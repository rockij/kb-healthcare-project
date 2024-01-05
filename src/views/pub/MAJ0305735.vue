<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    class="modal-full"
  >
    <v-card>
      <div class="modal-body pt-4 pb-4">
        <div class="flex-shrink-0 modal-body-container">
          <div class="search-area">
            <v-text-field
              id="search"
              variant="outlined"
              rounded="xl"
              clearable
              placeholder="약국명 입력"
              prepend-inner-icon="mdi-magnify"
              class="textfield-search type fs-16"
              @keypress.enter="getText"
              @click:append-inner="getInput"
            ></v-text-field>
            <v-btn variant="text" class="btn">취소</v-btn>
          </div>
          <p class="text-message-error">2자 이상 입력해 주세요</p>
          <h3 class="fs-18 font-weight-bold mt-4">최근 검색어</h3>
          <div role="tablist" class="sorting-area type-3 mt-4 mb-6">
            <v-btn
              role="tab"
              :aria-selected="recentlyBtn === btn.value ? 'true' : 'false'"
              variant="flat"
              :class="[
                'btn-sorting',
                {
                  'v-btn--variant-outlined': recentlyBtn === btn.value
                }
              ]"
              v-for="btn in recently"
              :key="btn.value"
              @click="recentlySelected(btn.value), (dialog2 = false)"
              >{{ btn.text }}</v-btn
            >
          </div>
          <p class="fs-14 mb-2">총 {{ listCount }}개</p>
          <HospitalCard
            v-for="item in filteredList()"
            :key="item.id"
            :title="item.title"
            :titleClass="'fs-18 star'"
            :title2="item.title2"
            :title2Class="'mt-2'"
            :road="item.road"
            :subject="item.subject"
            :tags="item.tags"
            :state="item.state"
            :stateClass="item.stateClass"
            :path="item.path"
            class="mt-3"
            :hightlight="hightlight"
            @update="goPath(item.path)"
          />
          <Nodata v-if="filteredList().length === 0" :icon="true">
            <div class="fs-16">
              검색 결과가 없습니다.<br />다른 검색어를 입력해주세요.
            </div>
          </Nodata>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import router from '@/router'
  import Nodata from '@/components/nodata/Nodata.vue'
  import HospitalCard from '@/components/CardHospital.vue'
  import { ref } from 'vue'
  export default {
    components: { Nodata, HospitalCard },
    data() {
      return {
        dialog: true
      }
    },
    setup() {
      const list = ref([
        {
          id: 1,
          title: '강남 초이스 영상 의학과의원',
          title2: '서울특별시 강남구 테헤란로 401 0층 0호',
          road: '5m',
          subject: '이비인후과 전문의 1명, 내과전문의 1명',
          tags: '#여의사 #야간진료 #주말진료',
          state: '진료종료',
          path: '/MAJ0305740'
        },
        {
          id: 2,
          title: '하트강남영상의학과',
          title2: '서울특별시 강남구 테헤란로 401 0층 0호',
          road: '500m',
          subject: '안과, 내과, 기타 진료과목명',
          tags: '#여의사 #남의사 #야간진료 #주말진료',
          state: '진료중',
          path: '/MAJ0305740'
        },
        {
          id: 3,
          title: '하트강남영상의학과',
          title2: '서울특별시 강남구 테헤란로 401 0층 0호',
          road: '500m',
          subject: '안과, 내과, 기타 진료과목명',
          tags: '#여의사 #남의사 #야간진료 #주말진료',
          state: '진료중',
          path: '/MAJ0305740'
        },
        {
          id: 3,
          title:
            '제목이길어서 두줄처리테스트 제목이길어서두줄처리테스트제목이길',
          title2:
            '주소가 길어서 두줄테스트 주소가 길어서 두줄테스트 두줄테스트 401호',
          road: '500m',
          subject: '안과, 내과, 기타 진료과목명',
          tags: '#여의사 #남의사 #야간진료 #주말진료',
          state: '진료중',
          path: '/MAJ0305740'
        }
      ])
      const listCount = ref(list.value.length)
      const text = ref('')
      function getText(e) {
        text.value = e.target.value
        listCount.value = list.value.filter((i) =>
          i.title.includes(text.value)
        ).length
      }
      function getInput() {
        const input = document.querySelector('#search')
        text.value = input.value
        listCount.value = list.value.filter((i) =>
          i.title.includes(text.value)
        ).length
      }
      function filteredList() {
        if (text.value !== '') {
          return list.value.filter((i) => i.title.includes(text.value))
        } else {
          return list.value
        }
      }
      function hightlight(i) {
        // 검색어 하이라이트 정규식
        return i.replace(new RegExp(text.value, 'gi'), (match) => {
          return '<span class="text-blue font-weight-bold">' + match + '</span>'
        })
      }
      function onClear() {
        text.value = ''
      }
      function goPath(val) {
        router.push(val)
      }
      const recently = ref([
        {
          value: 1,
          text: '이비인후과'
        },
        {
          value: 2,
          text: '내과'
        },
        {
          value: 3,
          text: '정형외과'
        },
        {
          value: 4,
          text: '정형외과'
        }
      ])
      const recentlyBtn = ref()
      function recentlySelected(val) {
        recentlyBtn.value = val
      }
      return {
        text,
        list,
        listCount,
        getText,
        getInput,
        filteredList,
        hightlight,
        goPath,
        onClear,
        recently,
        recentlyBtn,
        recentlySelected
      }
    }
  }
</script>
