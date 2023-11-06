<template>
  <div class="contents">
    <div class="btn-area mt-6">
      <v-tabs align-tabs="start" v-model="tabInit" class="tabs-sliding">
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

    <v-window v-model="tabInit">
      <v-window-item>
        <div class="title-area pt-8">
          <p class="subTit-01">어떤 약을 먹고 있나요?</p>
          <p class="desc pt-2">처방전의 모든 약을 선택해 주세요</p>
        </div>

        <template v-if="!searched">
          <v-btn
            block
            variant="outlined"
            rounded="xl"
            color="#FFB11B"
            height="60"
            :ripple="false"
            class="btn-search mt-7"
            @click="searched = true"
          >
            <span class="text">
              약 이름 검색
              <img src="@/assets/images/icon-search.svg" alt="검색" />
            </span>
          </v-btn>
        </template>

        <template v-if="searched">
          <div class="search-area mt-7">
            <v-text-field
              v-model="text"
              variant="outlined"
              rounded="xl"
              clearable
              hide-details
              placeholder="약 이름 검색"
              prepend-inner-icon="mdi-magnify"
              persistent-clear
              @keypress.enter="result = true"
              @click:clear="onClear"
              class="textfield-search type fs-16"
              autofocus
            ></v-text-field>
            <v-btn variant="text" @click="onClear" class="btn">취소</v-btn>
          </div>

          <ul class="drop-list" v-if="result">
            <template v-if="filteredList(text).length > 0">
              <div v-for="item in filteredList(text)" :key="item.id">
                <v-checkbox
                  v-model="checkedItem"
                  :value="item.id"
                  class="checked-agree medi-checkbox"
                  @click="modal = true"
                >
                  <template v-slot:label
                    ><div v-html="hightlight(item.text)"></div>
                    <v-spacer></v-spacer>
                    <v-icon>mdi-chevron-right</v-icon>
                  </template>
                </v-checkbox>
              </div>
            </template>
            <template v-else>
              <li>no data</li>
            </template>
          </ul>
        </template>
      </v-window-item>
      <v-window-item> 컨텐츠2 </v-window-item>
    </v-window>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56"
          class="btn-summit"
          :disabled="checkedItem.length === 0"
          >{{
            checkedItem.length === 0 ? '선택' : checkedItem.length + '개 다음'
          }}</v-btn
        >
      </div>
    </div>
  </div>
  <MAJ0203423 v-model="modal" @close="modal = false" />
</template>

<script>
  import MAJ0203423 from './MAJ0203423.vue'
  import router from '@/router'
  import { reactive, ref } from 'vue'
  export default {
    components: { MAJ0203423 },
    setup() {
      const modal = ref(false)
      const checkedItem = ref([])
      const result = ref(false)
      const text = ref('')
      const searched = ref(false)
      const tabInit = ref()
      function goPath(val) {
        router.push(val)
      }

      const stateBtn = reactive([
        {
          value: 0,
          text: '의약품'
        },
        {
          value: 1,
          text: '영양제'
        }
      ])

      const items = ref([
        {
          id: 0,
          text: '비타민D(고려은단)',
          path: '/MAJ0203423'
        },
        {
          id: 1,
          text: '데이즈온 비타민D',
          path: '/MAJ0203423'
        },
        {
          id: 2,
          text: '더리얼 비타민D',
          path: '/MAJ0203423'
        },
        {
          id: 3,
          text: '닥터 써니디 드롭스 비타민D',
          path: '/MAJ0203423'
        },
        {
          id: 4,
          text: '여에스더 비타민D',
          path: '/MAJ0203423'
        }
      ])

      function filteredList() {
        return items.value.filter((i) => i.text.includes(text.value))
      }
      function hightlight(i) {
        // 검색어 하이라이트 정규식
        return i.replace(new RegExp(text.value, 'gi'), (match) => {
          return '<span class="text-blue font-weight-bold">' + match + '</span>'
        })
      }
      function onClear() {
        text.value = ''
        result.value = ''
        searched.value = false
        checkedItem.value.length = ''
      }
      // function getText(i) {
      //   text.value = i
      // }
      return {
        modal,
        checkedItem,
        text,
        result,
        searched,
        items,
        tabInit,
        stateBtn,
        goPath,
        onClear,
        filteredList,
        hightlight
      }
    }
  }
</script>
