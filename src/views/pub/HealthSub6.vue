<template>
  <div class="contents pt-0">
    <div class="section-page bg pa-4">
      <v-card
        variant="flat"
        rounded="xl"
        class="px-4 py-6 text-center overflow-visible"
      >
        <div class="btn-area2 grid-column-2">
          <div class="text text-grey">체성분을 측정해 보세요</div>
          <v-btn
            variant="text"
            height="46px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
          >
            <div class="tooltip-balloon arrow-bottom right green">
              측정 가능
            </div>
            기기 측정하기
          </v-btn>
        </div>
      </v-card>
    </div>
    <div class="textfield-area body-calendar pt-8 d-flex">
      <v-text-field
        class="input-basic textfield-default input-calendar"
        v-model="name"
        label="측정 날짜"
        required
        persistent-placeholder
        variant="outlined"
        append-inner-icon="mdi-calendar"
        @click="event"
      >
      </v-text-field>

      <v-text-field
        class="input-basic textfield-default select-field hasData"
        label="측정 시간"
        required
        persistent-placeholder
        variant="outlined"
        placeholder="선택"
        model-value="오후 9:30"
        readonly
        clearable
      >
        <template v-slot:append-inner
          ><img src="/assets/images/icon-arrow-down2.svg" alt="검색"
        /></template>
      </v-text-field>

      <v-text-field
        class="input-basic textfield-default suffix"
        label="체중"
        required
        persistent-placeholder
        variant="outlined"
        placeholder="체중 입력"
        clearable
      >
        <template v-slot:append-inner>kg</template>
      </v-text-field>

      <v-text-field
        class="input-basic textfield-default suffix"
        label="허리둘레"
        required
        persistent-placeholder
        variant="outlined"
        placeholder="허리둘레 입력"
        clearable
      >
        <template v-slot:append-inner>inch</template>
      </v-text-field>

      <v-text-field
        class="input-basic textfield-default suffix input-bg"
        :class="name5 ? 'hasData' : ''"
        label="허리둘레"
        required
        persistent-placeholder
        variant="outlined"
        :placeholder="name5 ? '' : '허리둘레를 입력 시 cm 자동 변환'"
        v-model="name5"
        readonly
      >
        <template v-slot:append-inner v-if="name5"> cm </template>
      </v-text-field>
    </div>

    <div class="btn-double mt-8">
      <v-btn variant="text" height="48" class="btn-summit"> 저장하기 </v-btn>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    emits: ['update', 'close'],
    setup() {
      const name5 = ref('')
      const chip = ref(true)
      const closeItem = ref(true)
      const dialog = false
      const name = ref('2023.06.21')
      const name2 = ref('')
      const name3 = ref('88')
      const name4 = ref('')

      const modal = ref(false)
      const modalTitle = ref('운동 종류')
      const modalList = ref([
        {
          value: 0,
          text: '자전거'
        },
        {
          value: 1,
          text: '근력운동'
        },
        {
          value: 2,
          text: '달리기 (GPS)'
        },
        {
          value: 3,
          text: '하이킹'
        },
        {
          value: 4,
          text: '계단오르기'
        },
        {
          value: 5,
          text: '농구'
        },
        {
          value: 6,
          text: '당구'
        },
        {
          value: 7,
          text: '등산'
        },
        {
          value: 8,
          text: '런닝머신(걷기)'
        },
        {
          value: 9,
          text: '러닝머신(달리기)'
        },
        {
          value: 10,
          text: '배드민턴'
        }
      ])

      const addFileListImg = ref([
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' },
        { src: 'addfile-dummy.png' }
      ])

      const modalListBtn = ref('')
      function changeCategory(val) {
        modal.value = false
        return (modalListBtn.value = { ...val })
      }

      function event() {
        console.log('click')
      }
      return {
        name5,
        dialog,
        name,
        name2,
        name3,
        name4,
        modal,
        modalTitle,
        modalList,
        modalListBtn,
        changeCategory,
        event,
        chip,
        addFileListImg,
        closeItem
      }
    }
  }
</script>
