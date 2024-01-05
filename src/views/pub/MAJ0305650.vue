<template>
  <div class="contents">
    <div class="title-area">
      <h1 class="subTit-01">증상 검색 대상을 선택하세요</h1>
      <v-btn
        variant="flat"
        height="32"
        rounded="lg"
        color="#f2f4f6"
        class="text-primary px-3 fs-13 mt-2"
        >내 증상 검색하기</v-btn
      >
    </div>
    <div class="d-flex tabs-target person mt-6">
      <v-btn
        variant="text"
        v-for="btn in tabBtns"
        :key="btn.value"
        :class="`target${btn.value} ${tabBtn === btn.value ? 'selected' : ''}`"
        @click="tabSelected(btn.value)"
        >{{ btn.text
        }}<span class="stxt" v-if="btn.text2">{{ btn.text2 }}</span></v-btn
      >
    </div>
    <v-btn
      block
      variant="outlined"
      rounded="xl"
      :ripple="false"
      class="btn-select-arrow mt-4"
      color="#ccc"
      @click="modal = true"
    >
      <span class="label">관계</span>
      <span ref="selectBox" class="text text-info-grey type-3">
        <span class="placeholder" v-if="!modalListBtn">선택해주세요.</span>
        {{ modalListBtn.text }}
        <img src="/assets/images/icon-arrow-down2.svg" alt="검색" />
      </span>
    </v-btn>
    <DialogSelectList
      :lists="modalList"
      :title="modalTitle"
      v-model="modal"
      @close="modal = false"
      @update="changeCategory"
    />
    <v-text-field
      class="textfield-default mt-4"
      :rules="[
        (v) => (v && v.length >= 3) || '이름을 두 글자 이상 입력해주세요'
      ]"
      label="이름"
      required
      variant="outlined"
      persistent-placeholder
      placeholder="입력해주세요."
      @focus="focusFunc"
      @blur="blurFunc"
      clearable
    ></v-text-field>
    <div class="section-page mt-8 pb-0">
      <h2 class="tit-02">증상검색 약관동의</h2>
      <div class="agree-group">
        <v-checkbox
          v-model="checkAll"
          label="전체동의"
          class="checked-agree checked-all mt-1"
        ></v-checkbox>
        <div class="agree-items mt-2">
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
              <a
                target="_blank"
                :title="`${item.text} 약관보기`"
                href="https://vuetifyjs.com"
                @click.stop
              >
                <v-icon
              /></a>
            </template>
          </v-checkbox>
        </div>
      </div>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex" :class="btnBottomArea">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          :disabled="buttonActive"
          >다음</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import { ref, reactive, computed } from 'vue'
  export default {
    components: { DialogSelectList },
    data() {
      return {
        select: { state: '선택해주세요', value: 0 },
        selectList: [
          { state: '아들', value: 1 },
          { state: '딸', value: 2 }
        ]
      }
    },
    setup() {
      const tabBtn = ref()
      const tabBtns = ref([
        {
          value: 1,
          text: '소아',
          text2: '(2세~13세)'
        },
        {
          value: 2,
          text: '여자'
        },
        {
          value: 3,
          text: '남자'
        }
      ])
      function tabSelected(val) {
        tabBtn.value = val
      }

      const buttonActive = ref(true)
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

      const modal = ref(false)
      const modalTitle = ref('관계')
      const modalList = ref([
        {
          value: 0,
          text: '배우자'
        },
        {
          value: 1,
          text: '어머니'
        },
        {
          value: 2,
          text: '할머니'
        },
        {
          value: 3,
          text: '여자형제'
        },
        {
          value: 4,
          text: '지인'
        }
      ])
      const modalListBtn = ref('')
      function changeCategory(val) {
        modal.value = false
        return (modalListBtn.value = { ...val })
      }

      const btnBottomArea = ref(null)
      const focusFunc = () => {
        btnBottomArea.value = 'no-fix'
      }
      const blurFunc = () => {
        btnBottomArea.value = ''
      }

      return {
        tabBtn,
        tabBtns,
        tabSelected,
        agreeItems,
        checkedItem,
        checkAll,
        buttonActive,

        modal,
        modalTitle,
        modalList,
        modalListBtn,
        changeCategory,
        focusFunc,
        blurFunc,
        btnBottomArea
      }
    }
  }
</script>
