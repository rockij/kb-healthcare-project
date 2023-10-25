<template>
  <h2 class="tit-02" v-if="title">증상검색 약관동의</h2>
  <div class="agree-group">
    <v-checkbox
      v-model="checkAll"
      label="전체동의"
      class="checked-agree checked-all mt-1"
    ></v-checkbox>
    <div class="agree-items mt-4">
      <v-checkbox
        v-model="checkedItem"
        :value="item.id"
        v-for="item in agreeItems"
        :key="item.id"
        class="checked-agree checked-sub"
      >
        <template v-slot:label
          >{{ item.text }}
          <v-spacer></v-spacer>
          <a target="_blank" href="https://vuetifyjs.com" @click.stop>
            <v-icon>mdi-chevron-right</v-icon></a
          >
        </template>
      </v-checkbox>
    </div>
  </div>
</template>
<script>
  import { ref, reactive, computed } from 'vue'
  export default {
    props: {
      title: {
        default: false
      }
    },
    setup() {
      const checkedItem = ref([])
      const agreeItems = reactive([
        {
          id: 1,
          text: '[필수] 개인정보 수집 및 이용동의'
        },
        {
          id: 2,
          text: '[필수] 고유식별정보 처리 동의'
        }
      ])
      const checkAll = computed({
        get() {
          return checkedItem.value.length === agreeItems.length
        },
        set(value) {
          checkedItem.value = []
          if (value) {
            for (let i = 1; i <= agreeItems.length; i++) {
              checkedItem.value.push(i)
            }
          }
          if (checkedItem.value.length === agreeItems.length) {
            buttonActive.value = false
          } else {
            buttonActive.value = true
          }
        }
      })
      return {
        checkedItem,
        agreeItems,
        checkAll
      }
    }
  }
</script>
