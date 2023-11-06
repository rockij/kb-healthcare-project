<template>
  <div class="contents">
    <div class="title-area pt-1">
      <p class="subTit-01">오건강님의 <br />문의 내역이에요</p>
      <p class="desc pt-4">
        문의가 많을 경우 시간이 걸릴 수 있으니 양해 부탁 드려요
      </p>
    </div>

    <!-- 2023-10-23 탭 스타일 수정 -->
    <div class="btn-area mt-6">
      <v-tabs align-tabs="start" v-model="tab" class="tabs-sliding">
        <v-tab
          v-for="btn in stateBtn"
          :key="btn.value"
          :value="btn.value"
          :ripple="false"
          class="btn-tab"
        >
          {{ btn.text }}
        </v-tab>
      </v-tabs>
    </div>

    <div class="data-area" v-if="filteredList().length > 0">
      <div class="list-area type-4">
        <ul class="list">
          <li
            class="question py-4"
            v-for="item in filteredList()"
            :key="item.id"
          >
            <!-- 2023-10-23 뱃지 스타일 수정 -->
            <span class="badge" :class="getStyle(item.value)">{{
              item.badge.text
            }}</span>
            <p class="summary pt-3">{{ item.summary }}</p>
            <div class="info-group">
              <span class="date">{{ item.date }}</span>
              <span class="type">{{ item.type }}</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="btn-bottom">
        <div class="btn-area d-flex">
          <v-btn variant="text" height="56px" class="btn-summit"
            >문의하기</v-btn
          >
        </div>
      </div>
    </div>

    <div v-else>
      <nodata>문의 내역이 없어요</nodata>
    </div>
  </div>
</template>

<script>
  import { reactive, ref } from 'vue'
  import Nodata from '@/components/nodata/Nodata.vue'
  export default {
    components: { Nodata },
    setup() {
      //const isData = true;
      const tab = ref()
      const selBtn = ref()
      function selected(val) {
        selBtn.value = val
      }
      const stateBtn = reactive([
        {
          value: 0,
          text: '전체'
        },
        {
          value: 1,
          text: '접수대기'
        },
        {
          value: 2,
          text: '접수완료'
        },
        {
          value: 3,
          text: '답변완료'
        }
      ])
      const qnalist = reactive([
        {
          badge: {
            state: true,
            text: '접수대기중'
          },
          summary:
            '건강검진 연동이 되지 않아요건강검진 연동이 되지 않아요건강검진 연동이 되지 않아요',
          date: '2023.08.18',
          type: '정보연동',
          value: 1
        },
        {
          badge: {
            state: true,
            text: '접수대기중'
          },
          summary: '건강검진 연동이 되지 않아요건강검진 연동이 되지 않아요',
          date: '2023.08.18',
          type: '정보연동',
          value: 1
        },
        {
          badge: {
            state: false,
            text: '접수완료'
          },
          summary: '건강검진 연동이 되지 않아요',
          date: '2023.08.14',
          type: '정보연동',
          value: 2
        },
        {
          badge: {
            state: false,
            text: '답변완료'
          },
          summary: '건강검진 연동',
          date: '2023.08.10',
          type: '정보연동',
          value: 3
        }
      ])
      function filteredList() {
        if (tab.value !== 0) {
          return qnalist.filter((i) => i.value === tab.value)
        } else {
          return qnalist
        }
      }
      function getStyle(id) {
        switch (id) {
          case 1:
            return 'waiting'
          case 2:
            return 'accept'
          case 3:
            return 'complete'
        }
      }

      return {
        tab,
        qnalist,
        selBtn,
        selected,
        getStyle,
        stateBtn,
        filteredList
      }
    }
  }
</script>

<style lang="scss" scoped></style>
