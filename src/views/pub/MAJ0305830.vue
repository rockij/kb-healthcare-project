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
        <v-toolbar-title class="modal-title">건강검진목록</v-toolbar-title>
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
        <div class="flex-shrink-0 modal-body-container pt-7">
          <div class="d-flex align-center">
            <h2 class="tit-03 pb-0">일반건강검진</h2>
            <v-btn
              variant="flat"
              rounded="lg"
              height="32"
              color="#F2F4F6"
              class="ml-auto text-primary px-3"
            >
              <img src="/assets/images/icon-refresh.svg" class="mr-1" alt="" />
              업데이트</v-btn
            >
          </div>
          <!-- //title -->
          <ul class="list-circle mt-4 mb-6 text-black">
            <li v-for="(item, i) in list" :key="i">{{ item }}</li>
          </ul>
          <!-- //list -->
          <div class="d-flex flex-column gap-10 mb-8">
            <v-btn
              v-for="(list, i) in checkList"
              :key="i"
              variant="outlined"
              rounded="xl"
              block
              class="list-card-check"
              height="auto"
              :aria-selected="list.selected === true ? 'true' : 'false'"
              @click="$emit('close')"
            >
              <span class="badge waiting">{{ list.category }}</span>
              <strong class="stit mt-3">{{ list.name }}</strong>
              <span class="text-grey mt-2">{{ list.date }}</span>
            </v-btn>
          </div>
          <Nodata :icon="true" iconType="heart-note">
            <div class="fs-16">일반건강검진 내역이 없습니다</div>
          </Nodata>
          <!-- //일반검진 -->

          <div class="section-page pb-0">
            <h2 class="tit-03">종합건강검진</h2>
            <v-btn
              v-for="(list, i) in checkList2"
              :key="i"
              variant="outlined"
              rounded="xl"
              block
              class="list-card-check mt-2"
              height="auto"
              :aria-selected="list.selected === true ? 'true' : 'false'"
              @click="$emit('close')"
            >
              <span class="badge waiting">{{ list.category }}</span>
              <strong class="stit mt-3">{{ list.name }}</strong>
              <span class="text-grey mt-2">{{ list.date }}</span>
            </v-btn>
          </div>
          <Nodata :icon="true" iconType="heart-note">
            <div class="fs-16">종합건강검진 내역이 없습니다</div>
          </Nodata>
          <!-- //종합검진 -->
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import { ref } from 'vue'
  export default {
    components: {
      Nodata
    },
    setup() {
      const dialog = ref(true)
      const list = ref([
        '공단건강검진은 최근 10년 이내 일반건강검진내역을 가져옵니다',
        '최근 건강검진 데이터가 나오지 않는다면 업데이트를 진행해보세요'
      ])
      const checkList = ref([
        {
          category: '일반검진',
          name: '신촌연세병원',
          date: '검진일 2020.08.03',
          selected: true
        },
        {
          category: '일반검진',
          name: 'KMI한국의학연구소 강남검진센터',
          date: '검진일 2020.08.03',
          selected: false
        },
        {
          category: '일반검진',
          name: 'KMI한국의학연구소',
          date: '검진일 2020.08.03',
          selected: false
        }
      ])
      const checkList2 = ref([
        {
          category: '종합검진',
          name: '차병원차움건진센터',
          date: '검진일 2020.08.03',
          selected: false
        },
        {
          category: '종합검진',
          name: 'KMI한국의학연구소 강남검진센터',
          date: '검진일 2020.08.03',
          selected: false
        }
      ])

      return {
        dialog,
        list,
        checkList,
        checkList2
      }
    }
  }
</script>
