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
          <div class="search-area mb-4">
            <v-text-field
              id="search"
              variant="outlined"
              rounded="xl"
              clearable
              placeholder="병원명 및 진료과목 검색"
              prepend-inner-icon="mdi-magnify"
              class="textfield-search type fs-16"
              :rules="[(v) => (v && v.length >= 2) || '2자 이상 입력해 주세요']"
              @keypress.enter="getText"
              @click:append-inner="getInput"
            ></v-text-field>
            <v-btn variant="text" class="btn">취소</v-btn>
          </div>
          <h3 class="fs-18 font-weight-bold">최근 검색어</h3>
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
              @click="recentlySelected(btn.value)"
              >{{ btn.text }}</v-btn
            >
          </div>
          <p class="fs-14 mb-2">총 {{ listCount }}개</p>
          <HospitalCard
            v-for="item in filteredList()"
            :key="item.id"
            :title="item.title"
            :titleClass="'fs-18 star'"
            :road="item.road"
            :subject="item.subject"
            :state="item.state"
            :stateClass="item.stateClass"
            :path="item.path"
            :toastMsgOn="'내 약국에 등록 되었습니다'"
            :toastMsgOff="'내 약국에 해제 되었습니다'"
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
    setup() {
      const dialog = ref(true)
      const list = ref([
        {
          id: 1,
          title: '연세 후 약국',
          road: '500m',
          subject: '서울특별시 강남구 테헤란로 401 0층 0호',
          state: '영업종료',
          stateClass: 'waiting',
          path: '/MAJ0305740'
        },
        {
          id: 2,
          title: '삼성해든약국',
          road: '900m',
          subject: '서울특별시 강남구 테헤란로테헤란로 401 0층 0호',
          state: '일요일 휴무',
          stateClass: 'waiting',
          path: '/MAJ0305740'
        },
        {
          id: 3,
          title: '소망약국',
          road: '999m',
          subject: '서울특별시 강남구 테헤란로 401 0층 0호',
          state: '영업중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        },
        {
          id: 3,
          title:
            '제목이길어서 두줄처리테스트 제목이길어서두줄처리테스트제목이길',
          road: '10m',
          subject:
            '주소가 길어서 두줄테스트 주소가 길어서 두줄테스트 두줄테스트 401호',
          state: '영업중',
          stateClass: 'ing',
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
      function goPath(val) {
        router.push(val)
      }
      const recently = ref([
        {
          value: 1,
          text: '연세 약국'
        },
        {
          value: 2,
          text: '강남 약국'
        },
        {
          value: 3,
          text: '약국 약국'
        }
      ])
      const recentlyBtn = ref()
      function recentlySelected(val) {
        recentlyBtn.value = val
      }
      return {
        dialog,
        text,
        list,
        listCount,
        getText,
        getInput,
        filteredList,
        hightlight,
        goPath,
        recently,
        recentlyBtn,
        recentlySelected
      }
    }
  }
</script>
