<template>
  <div class="contents pt-0">
    <div class="section-page bg pa-4">
      <v-card rounded="xl" class="card-rounded py-0 mt-0">
        <div class="card-item">
          <div class="d-flex justify-space-between">
            <div class="tit-02 pb-0">사랑일</div>
            <v-btn
              v-if="!text1"
              icon
              variant="flat"
              density="compact"
              @click="modal = true"
              class="btn-icon-plus"
            >
              <img src="/assets/images/icon-plus.svg" alt="사랑일 선택" />
            </v-btn>
            <v-btn icon variant="flat" density="compact" v-else>
              <img src="/assets/images/icon-more.svg" alt="" />
            </v-btn>
          </div>
          <!-- 결과 -->
          <div class="tabs-simple2 gap mt-2" v-if="text1">
            <v-btn variant="text" class="fs-16" aria-selected="true">
              {{ text1 }}
            </v-btn>
            <v-btn
              v-if="text2"
              variant="text"
              class="fs-16"
              aria-selected="true"
            >
              {{ text2 }}
            </v-btn>
          </div>
        </div>
        <div class="card-item">
          <div class="d-flex justify-space-between">
            <div class="tit-02 pb-0">몸 상태</div>
            <v-btn
              v-if="result.length === 0"
              icon
              variant="flat"
              density="compact"
              @click="modal2 = true"
              class="btn-icon-plus"
            >
              <img src="/assets/images/icon-plus.svg" alt="몸 상태 선택" />
            </v-btn>
            <v-btn icon variant="flat" density="compact" v-else>
              <img src="/assets/images/icon-more.svg" alt="" />
            </v-btn>
          </div>
          <!-- 결과 -->
          <div class="tabs-simple2 gap">
            <v-btn
              variant="text"
              class="fs-16"
              v-for="item in result"
              :key="item"
              aria-selected="true"
            >
              {{ item }}
            </v-btn>
          </div>
        </div>
        <div class="card-item">
          <div class="d-flex justify-space-between">
            <div class="tit-02 pb-0">피임약 복용 여부</div>
            <v-btn
              v-if="!text3"
              icon
              variant="flat"
              density="compact"
              @click="modal3 = true"
              class="btn-icon-plus"
            >
              <img
                src="/assets/images/icon-plus.svg"
                alt="피임약 복용 여부 선택"
              />
            </v-btn>
            <v-btn icon variant="flat" density="compact" v-else>
              <img src="/assets/images/icon-more.svg" alt="" />
            </v-btn>
          </div>
          <!-- 결과 -->
          <div class="tabs-simple2 gap" v-if="text3">
            <v-btn variant="text" class="fs-16" aria-selected="true">
              {{ text3 }}
            </v-btn>
            <v-btn
              v-if="text4"
              variant="text"
              class="fs-16"
              aria-selected="true"
            >
              {{ text4 }}
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>
    <div class="tit-03 mt-8">오늘의 기록</div>
    <!-- 기록 component -->
    <CardReport :btn="true" class="report-food" @handleClick="modal4 = true">
      <template #date>오전 6:35</template>
      <!-- card 내용 -->
      <template #content>
        <div class="category-list" role="list">
          <div class="chip-category" role="listitem">
            <div class="category pr-2">사랑일</div>
            --
          </div>
          <div class="chip-category" role="listitem">
            <div class="category pr-2 text-overflow line1">몸 상태</div>
            <div class="food-name">복부팽만, 폭식</div>
          </div>
          <div class="chip-category" role="listitem">
            <div class="category pr-2">피임약 복용여부</div>
            <div class="food-name">복용함, 21정 복약/7일 휴약</div>
          </div>
        </div>
      </template>
    </CardReport>
    <div class="btn-double mt-8">
      <v-btn variant="text" height="48" class="btn-summit"> 저장하기 </v-btn>
    </div>
  </div>

  <!-- 사랑일 팝업 -->
  <MAJ0202944 v-model="modal" @update="addText" @close="modal = false" />
  <!-- 몸상태 팝업 -->
  <MAJ0202945 v-model="modal2" @update="addText2" @close="modal2 = false" />
  <!-- 피임약 팝업 -->
  <MAJ0202946 v-model="modal3" @update="addText" @close="modal3 = false" />
  <DialogSetting
    v-model="modal4"
    :btnModify="true"
    @close="modal4 = false"
    @deleteClick="delFunc"
  />
</template>

<script>
  import { ref } from 'vue'
  import MAJ0202944 from './MAJ0202944.vue'
  import MAJ0202945 from './MAJ0202945.vue'
  import MAJ0202946 from './MAJ0202946.vue'
  import CardReport from '@/components/CardReport.vue'
  import DialogSetting from '@/components/DialogSetting.vue'

  export default {
    components: {
      MAJ0202944,
      MAJ0202945,
      MAJ0202946,
      CardReport,
      DialogSetting
    },
    setup() {
      const text1 = ref()
      const text2 = ref()
      const text3 = ref()
      const text4 = ref()
      const result = ref([])
      const list = ref([])
      const selected = ref()
      const modal = ref(false)
      const modal2 = ref(false)
      const modal3 = ref(false)
      const modal4 = ref(false)
      function addText(val1, val2, data) {
        if (data === 1) {
          text1.value = val1
          text2.value = val2
          modal.value = false
        } else if (data === 2) {
          text3.value = val1
          text4.value = val2
          modal3.value = false
        }
      }
      function addText2(val1, val2, val3) {
        result.value = [...val1, ...val2, ...val3].map((i) => i.text)
        // list.value = result.value.slice(0, 8)
        modal2.value = false
      }
      function moreText() {
        list.value = result.value
      }
      function goPath(val) {
        router.push(val)
      }
      const delFunc = () => {
        alert('삭제')
      }
      return {
        text1,
        text2,
        text3,
        text4,
        result,
        list,
        selected,
        modal,
        modal2,
        modal3,
        modal4,
        addText,
        addText2,
        moreText,
        goPath,
        delFunc
      }
    }
  }
</script>
