<template>
  <div class="contents">
    <div class="challenge-section-spot">
      <div class="title-area">
        <p class="subTit-01">혈당 개선 전문 <br />챌린지(과식형)</p>
        <div class="review-number">총 <span>1,234</span>건</div>
      </div>
    </div>
    <div class="challenge-section-content review-content">
      <div class="sorting-data">
        <v-btn
          variant="text"
          density="compact"
          class="fs-16 px-0"
          @click="modal = true"
        >
          {{ category }}
          <img src="@/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
        </v-btn>
          <v-switch
            class="switch-default"
            v-model="switchModel"
            label="내 리뷰만 보기"
            color="#FFD338"
            value="on"
            hide-details
          ></v-switch>
      </div>
      <DialogSelectList
        :lists="option"
        title="정렬기준 설정"
        v-model="modal"
        @close="modal = false"
        @update="changeCategory"
      />
      <ul class="list-faq review-list">
        <li v-for="list in reviewList" :key="list.id" class="item">
          <a href="javascript:;">
            <div class="text-tit">
              <span class="name">{{ list.name }}</span>
              <span class="review-point">
                <!-- 별점 span 태그의 %로 채움 --> 
                <span style="width:60%"></span>
              </span>
            </div>
            <p class="review-txt">
              <span class="badge waiting">6주</span>
              <span class="list-text">{{ list.text }}</span>
            </p>
            <div class="info-group">
              <span class="type">{{ list.date }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- toast 팝업 -->
    <v-snackbar v-model="snackbar" class="toast-basic"> 삭제되었습니다. </v-snackbar>
  </div>
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: { Nodata, DialogSelectList },
    setup(props) {
      const switchModel = ref('')
      const modal = ref(false)
      const snackbar = ref(true)
      const category = ref('최신순')
      const option = reactive([
        { value: 1, text: '최신순' },
        { value: 2, text: '별점 높은순' },
      ])
      function changeCategory(val) {
        modal.value = false
        return (category.value = val.text)
      }
      const reviewList = ref([
        {
          id: 1,
          name: '오건강',
          text: '하기까지는 힘들었는 하고 나니 너무 좋네요.',
          date: '09.30 오전 6:35'
        },
        {
          id: 2,
          name: '김건강',
          text: '하기까지는 힘들었는 하고 나니 너무 좋네요 하기까지는 힘들었는 하고 나니 너무 좋네요.',
          date: '09.30 오전 6:35'
        },
        {
          id: 3,
          name: '홍*동',
          text: '하기까지는 힘들었는 하고 나니 너무 좋네요 하기까지는 힘들었는 하고 나니 너무 좋네요.',
          date: '09.30 오전 6:35'
        }
      ])
      return { 
        reviewList,
        switchModel,
        modal,
        category,
        option,
        changeCategory,
        snackbar
      }
    }
  }
</script>

<style lang="scss" scoped></style>