<template>
  <div class="contents">
    <div class="point-area">
      <div class="child">
        <div class="text-point type-1">{{ money(100000) }} P</div>
        <!-- tooltip component -->
        <Tooltip
          btnText="리워드포인트란"
          text="루틴/미션 달성, 이벤트 참여 등 다양한 건강활동을 통해 포인트를
      적립하실 수 있어요. 포인트의 유효기간은 적립된 날로부터 1년이며,
      어디서든 다 사용가능해요. 유효기간이 짧은 포인트부터 우선 사용해요."
        >
        </Tooltip>
      </div>
      <v-divider class="my-4" />
      <div class="child align-center">
        <div class="text-info-1">30일내 소멸예정</div>
        <v-btn variant="text" density="compact" class="btn-point">
          {{ money(1000) }} P
          <img
            src="/assets/images/icon-chevron-right.svg"
            alt=""
            class="ml-1"
          />
        </v-btn>
      </div>
    </div>
    <!-- bnts 2차 범위-->
    <!-- <div class="sorting-area type-2 mt-4">
      <v-btn variant="flat" class="btn-sorting btn-default"
        >포인트 교환하기</v-btn
      >
      <v-btn variant="flat" class="btn-sorting btn-submit">기부하기</v-btn>
    </div> -->
    <div class="tab-line mt-8">
      <v-tabs v-model="selBtn" align-tabs="start">
        <v-tab
          v-for="btn in btns"
          :key="btn.value"
          :value="btn.value"
          :ripple="false"
          class="btn-tab"
          >{{ btn.text }}</v-tab
        >
      </v-tabs>
    </div>
    <div class="total sorting-data">
      <v-btn
        variant="text"
        density="compact"
        class="fs-16 px-0"
        @click="dialog = true"
      >
        {{ category }}
        <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
      </v-btn>
      <div class="text-date">2023.07.29 ~ 2023.08.03</div>
    </div>
    <!-- list -->
    <ul class="list-faq" v-if="list.length > 0">
      <!-- 231228 mt-4삭제 -->
      <li v-for="(item, i) in list" :key="i" class="item">
        <div>
          <div class="text-tit">{{ item.text }}</div>
          <div class="info-group">
            <span class="type">{{ item.date }}</span>
          </div>
        </div>
        <div
          class="text-point"
          :class="{ 'text-red': item.range === 'decrease' }"
        >
          <span v-if="item.range === 'decrease'">-</span>
          <span v-if="item.range === 'increase'">+</span>
          {{ item.point }}P
        </div>
      </li>
    </ul>
    <!-- no data -->
    <Nodata iconType="point" v-else>사용/적립 내역이 없습니다</Nodata>
  </div>
  <!-- bottom sheet -->
  <DialogSelectList
    :lists="option"
    title="카테고리"
    v-model="dialog"
    @close="dialog = false"
    @update="changeCategory"
  />
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import Tooltip from '@/components/Tooltip.vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import { ref, reactive } from 'vue'

  export default {
    components: { Nodata, Tooltip, DialogSelectList },
    setup() {
      const dialog = ref(false)
      const category = ref('전체')
      const option = reactive([
        { value: 1, text: '전체' },
        { value: 2, text: '적립' },
        { value: 3, text: '사용' }
      ])
      const selBtn = ref(0)
      const btns = reactive([
        {
          value: 1,
          text: '1주일'
        },
        {
          value: 2,
          text: '1개월'
        },
        {
          value: 3,
          text: '3개월'
        },
        {
          value: 4,
          text: '6개월'
        },
        {
          value: 5,
          text: '1년'
        }
      ])
      const list = reactive([
        {
          text: '일상루틴 완료',
          date: '2023.08.14 23:12',
          point: '50',
          range: 'increase'
        },
        {
          text: '건강검진(일반) 조회',
          date: '2023.08.14 23:12',
          point: '2,000',
          range: 'increase'
        },
        {
          text: '월간 리포트 조회',
          date: '2023.08.14 23:12',
          point: '10',
          range: 'increase'
        },
        {
          text: '상품구매',
          date: '2023.08.14 23:12',
          point: '2,000',
          range: 'decrease'
        },
        {
          text: '소멸',
          date: '2023.08.14 23:12',
          point: '3',
          range: 'decrease'
        }
      ])
      function money(point) {
        return point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
      function changeCategory(val) {
        dialog.value = false
        return (category.value = val.text)
      }
      return {
        dialog,
        category,
        option,
        selBtn,
        btns,
        list,
        money,
        changeCategory
      }
    }
  }
</script>
