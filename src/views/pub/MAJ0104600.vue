<template>
  <div class="contents">
    <ul class="ocare-list">
      <li
        v-for="item in category"
        :key="item.value"
        :class="{
          bgcolor: item.pinBadge,
          read: item.read === true
        }"
      >
        <v-btn
          variant="text"
          block
          @click="goPath('MAJ0104610')"
          :ripple="false"
        >
          <span class="title-area">
            <span class="text title text-overflow line1">{{ item.text }}</span>
            <img
              src="/assets/images/icon-pin.svg"
              alt=""
              v-if="item.pinBadge"
            />
            <!-- <img
              src="/assets/images/icon-new.svg"
              alt=""
              v-if="item.newBadge"
              class="mt-1"
            /> -->
          </span>
          <span class="text pt-2">{{ item.date }}{{ item.time }}</span>
        </v-btn>
      </li>
    </ul>

    <Nodata v-if="category.length === 0" :icon="true">
      <div class="text-info-grey fs-16 mt-2">등록된 공지사항이 없어요</div>
    </Nodata>
  </div>
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import router from '@/router'
  import { ref, reactive } from 'vue'
  export default {
    components: { Nodata },
    setup() {
      const pinBadge = true
      const newBadge = true

      const category = reactive([
        {
          value: 0,
          text: '고정 공지사항 제목 ',
          date: '2023.08.14 ',
          time: '23:12',
          pinBadge: true
        },
        {
          value: 1,
          text: '고정 공지사항 제목',
          date: '2023.08.14 ',
          time: '23:12',
          pinBadge: true,
          read: true
        },
        {
          value: 2,
          text: '공지사항 제목',
          date: '2023.08.14 ',
          time: '23:12',
          pinBadge: true
        },
        {
          value: 3,
          text: '루틴 문의 루틴 문의 루틴 문의루틴 문의루틴 문의 루틴 문의 루틴 문의 루틴 문의',
          date: '2023.08.14 ',
          time: '23:12'
        },
        {
          value: 4,
          text: '일상건강기록 문의',
          date: '2023.08.14 ',
          time: '23:12'
        },
        {
          value: 5,
          text: '일상건강기록 문의',
          date: '2023.08.14 ',
          time: '23:12'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      return {
        pinBadge,
        newBadge,
        category,
        goPath
      }
    }
  }
</script>
