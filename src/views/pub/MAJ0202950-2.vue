<template>
  <div class="carousel__content">
    <figure :class="`icon-${alcoholTypeIcon}${iconNum}`"></figure>
    <div class="numcount-area3 mt-2 mx-2">
      <v-btn
        variant="text"
        class="handle decrease"
        title="감소"
        @click="$emit('update:minus')"
      ></v-btn>
      <strong class="number">{{ numcount }}</strong>
      <v-btn
        variant="text"
        class="handle increase"
        title="증가"
        @click="$emit('update:plus')"
      ></v-btn>
    </div>
  </div>
  <div class="textbox">
    {{ text }}
    <v-btn
      block
      variant="outlined"
      rounded="lg"
      :ripple="false"
      class="btn-select-arrow"
      color="#26282C"
      height="48"
      @click="modal4 = true"
    >
      <span ref="selectBox" class="text fs-16 font-weight-bold">
        <span v-html="modal4ListBtn"></span>
        <img src="@/assets/images/icon-arrow-down2.svg" alt="검색" />
      </span>
    </v-btn>
  </div>
  <DialogUnitSelect
    :lists="alcoholList(iconNum)"
    :title="unitTitle"
    v-model="modal4"
    @close="modal4 = false"
    @update="changeCategory"
  />
</template>
<script>
  import DialogUnitSelect from '@/components/DialogSelectList.vue' // 조회기간
  import { ref } from 'vue'
  export default {
    props: ['iconName', 'iconNum', 'text', 'numcount'],
    components: {
      DialogUnitSelect
    },
    setup() {
      const modal4 = ref(false)
      const modal4ListBtn = ref('잔')
      const modal4Title = ref('담배종류선택')
      const unitTitle = ref('음주 단위')
      const alcoholTypeIcon = ref('alcup')
      function changeCategory(val) {
        modal4.value = false
        modal4ListBtn.value = val.text
        if (val.text.trim().includes('캔')) {
          alcoholTypeIcon.value = 'alcan'
        } else if (val.text.trim().includes('병')) {
          alcoholTypeIcon.value = 'albottle'
        } else {
          alcoholTypeIcon.value = 'alcup'
        }
      }
      const alcoholList = (val) => {
        switch (val) {
          case 1: //맥주
            return [
              {
                value: 0,
                text: '잔<span class="unit">(500ml)</span>'
              },
              {
                value: 1,
                text: '캔<span class="unit">(330ml)</span>'
              },
              {
                value: 2,
                text: '병<span class="unit">(640ml)</span>'
              }
            ]
          case 2: //소주
            return [
              {
                value: 0,
                text: '잔<span class="unit">(50ml)</span>'
              },
              {
                value: 1,
                text: '병<span class="unit">(360ml)</span>'
              }
            ]
          case 3: //청주
            return [
              {
                value: 0,
                text: '잔<span class="unit">(50ml)</span>'
              },
              {
                value: 1,
                text: '병<span class="unit">(360ml)</span>'
              }
            ]
          case 4: //양주
            return [
              {
                value: 0,
                text: '잔<span class="unit">(50ml)</span>'
              },
              {
                value: 1,
                text: '병<span class="unit">(700ml)</span>'
              }
            ]
          case 5: //막걸리
            return [
              {
                value: 0,
                text: '잔<span class="unit">(200ml)</span>'
              },
              {
                value: 1,
                text: '병<span class="unit">(935ml)</span>'
              }
            ]
          case 6: //와인
            return [
              {
                value: 0,
                text: '잔<span class="unit">(125ml)</span>'
              },
              {
                value: 1,
                text: '병<span class="unit">(750ml)</span>'
              }
            ]
          case 7: //샴페인
            return [
              {
                value: 0,
                text: '잔<span class="unit">(150ml)</span>'
              },
              {
                value: 1,
                text: '병<span class="unit">(750ml)</span>'
              }
            ]
          case 8: //고량주
            return [
              {
                value: 0,
                text: '잔<span class="unit">(50ml)</span>'
              },
              {
                value: 1,
                text: '병<span class="unit">(250ml)</span>'
              }
            ]
          case 0: //기타
            return [
              {
                value: 0,
                text: '잔<span class="unit">(250ml)</span>'
              }
            ]
        }
      }
      return {
        modal4,
        modal4ListBtn,
        modal4Title,
        unitTitle,
        changeCategory,
        alcoholList,
        alcoholTypeIcon
      }
    }
  }
</script>
