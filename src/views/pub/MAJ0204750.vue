<template>
  <div class="contents">
    <Nodata :icon="true" iconType="nodata-attached" v-if="listItem == 0"
      >소속정보가 없습니다</Nodata
    >
    <template v-else>
      <div
        class="wrap-list-border"
        v-for="(settingItems, index) in settingItem"
        :key="index"
      >
        <div class="login-title">{{ settingItems.title }}</div>
        <div class="list-border">
          <Nodata
            :icon="true"
            iconType="nodata-attached"
            v-if="settingItems.items == 0"
            >소속정보가 없습니다</Nodata
          >
          <template v-else>
            <div
              class="list-border-items"
              v-for="item in settingItems.items"
              :key="item"
            >
              <span class="title-list-border">{{ item }}</span>

              <v-btn
                variant="tonal"
                color="primary"
                class="flex-wrap btn-input-submit"
                >해제</v-btn
              >
            </div>
          </template>
        </div>
      </div>
    </template>
    <div class="btn-area mt-8">
      <v-btn
        height="48px"
        variant="flat"
        @click="dialog = false"
        class="bdr-8 btn-yellow"
        block
        >소속 추가하기</v-btn
      >
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue'
  import Nodata from '@/components/nodata/Nodata.vue'
  export default {
    components: {
      Nodata
    },
    setup() {
      const settingItem = ref([
        {
          title: '임직원 소속',
          items: []
        },
        {
          title: '제휴상품 소속',
          items: ['KB국민은행', 'KB헬스케어', 'KB손해보험']
        }
      ])

      const listItem = ref(0)

      const listItemCount = () => {
        let listLength = 0
        settingItem.value.map(function (item) {
          listLength += item.items.length
        })
        listItem.value = listLength
      }
      onMounted(() => {
        listItemCount()
      })

      return { settingItem, listItemCount, listItem }
    }
  }
</script>
