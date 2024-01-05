<template>
  <div class="contents">
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="화면편집"
      v-model="documentModal"
      @close="documentModal = false"
    >
      <template #modalBody>
        <div class="title-area">
          <p class="subTit-01">
            끌어놓으면<br> 순서를 바꿀 수 있어요
          </p>
        </div>
        <div class="ui-life-log-edit">
            <grid-layout
                ref="gridLayout"
                :layout="lifeLogList"
                :col-num="colNum"
                :row-height="4"
                :is-draggable="true"
                :is-resizable="false"
                :responsive="true"
                :vertical-compact="true"
                :use-css-transforms="true"
                :margin="[16, 16]"
            >
                <grid-item
                    v-for="item in lifeLogList"
                    :static="item.static"
                    :x="item.x"
                    :y="item.y"
                    :w="item.w"
                    :h="item.h"
                    :i="item.i"
                    :key="item.i"
                    drag-allow-from=".vue-draggable-handle"
                    @move="move"
                >
                    <span 
                        v-show="item.static == false"
                        ref="dragButton"
                        class="vue-draggable-handle"
                    >
                        <span class="offscreen">이동하기</span>
                    </span>
                    <button v-if="false" type="button" class="btn-remove" @click="removeItem(item.i)">
                      <span class="offscreen">삭제하기</span>
                    </button>
                    <button v-if="false" type="button" class="btn-add" @click="addItem(item.i)">
                      <span class="offscreen">추가하기</span>
                    </button>
                    <i class="icon"
                      :class="{
                        'walk': item.title === '걸음',
                        'feel': item.title === '감정',
                        'sleep': item.title === '수면',
                        'meal': item.title === '식사',
                        'body': item.title === '체성분',
                        'menstruation': item.title === '여성건강',
                        'exercise': item.title === '운동',
                        'moisture': item.title === '수분',
                        'drinking': item.title === '음주',
                        'smoking': item.title === '흡연',
                        'heart': item.title === '심박',
                        'talk-med': item.title === '복약',
                        'blood-pre': item.title === '혈압',
                        'blood-sugar': item.title === '혈당'
                      }"
                    ></i>
                    <span class="label">{{ item.title }}</span>
                </grid-item>
            </grid-layout>
        </div>
      </template>
      <template #modalButton>
        <v-btn
          variant="text"
          height="48"
          class="bdr-8 btn-summit"
          @click="documentModal = false"
          >완료</v-btn
        >
      </template>
    </DocumentModal>
    <!-- //TermsModal -->
  </div>
</template>
  
  <script>
import { ref, onMounted } from 'vue'
import DocumentModal from '@/components/DocumentModal.vue'
import { GridLayout, GridItem } from 'vue-grid-layout-v3'
import elementResizeDetectorMaker from 'element-resize-detector'
export default {
  components: { 
    DocumentModal,
    GridLayout,
    GridItem,
    elementResizeDetectorMaker
  },
  setup() {
    const documentModal = ref(true)
    const gridLayout = ref()
    const colNum = ref(2); // 컬럼 라인 수
    const draggable = ref(true); // GridItem 드래그
    const resizable = ref(false); // GridItem 사이즈 조절
    const responsive = ref(false);
    const itemIndex = ref(0)

    const lifeLogList = ref([
      {x: 0, y: 0,  w: 2, h: 4, i: 0,  title:"걸음",     key: "걸음",    static: true, default: true},
      {x: 0, y: 4,  w: 1, h: 4, i: 1,  title:"감정",     key: "감정",    static: true, default: true},
      {x: 1, y: 4,  w: 1, h: 4, i: 2,  title:"수면",     key: "수면",    static: false, default: true},
      {x: 0, y: 8,  w: 2, h: 4, i: 3,  title:"혈당",     key: "혈당",    static: false, default: false},
      {x: 0, y: 12, w: 1, h: 4, i: 4,  title:"혈압",     key: "혈압",    static: false, default: false},
      {x: 1, y: 12, w: 1, h: 4, i: 5,  title:"체성분",   key: "체성",    static: false, default: false},
      {x: 0, y: 16, w: 1, h: 4, i: 6,  title:"식사",     key: "식사",    static: false, default: true},
      {x: 0, y: 20, w: 2, h: 4, i: 7,  title:"여성건강", key: "여성건강", static: false, default: true},
      {x: 0, y: 24, w: 2, h: 4, i: 8,  title:"흡연",     key: "흡연",    static: false, default: false},
      {x: 0, y: 28, w: 2, h: 4, i: 9,  title:"심박",     key: "심박",    static: false, default: false},
      {x: 0, y: 32, w: 1, h: 4, i: 10, title:"복약",     key: "복약",    static: false, default: false},
      {x: 1, y: 32, w: 1, h: 4, i: 11, title:"운동",     key: "운동",    static: false, default: false},
      {x: 0, y: 36, w: 1, h: 4, i: 12, title:"수분",     key: "수분",    static: false, default: false},
      {x: 1, y: 36, w: 1, h: 4, i: 13, title:"음주",     key: "음주",    static: false, default: false},
    ])

    const move = (i, newX, newY) => {
      var div = document.querySelector('.vue-grid-item');
      var divTop = div.getBoundingClientRect().top
      var divBottom = div.getBoundingClientRect().bottom
      var divLeft = div.getBoundingClientRect().left
      var divRight = div.getBoundingClientRect().right
      var absoluteTop = window.scrollY + div.getBoundingClientRect().top
    }

    const addItem = () => {
      lifeLogList.value.push({
          x: 0,
          y: 40,
          w: 2,
          h: 4,
          i: itemIndex.value,
          title:"추가",
          key: "추가",
          static: false, 
          default: false
      });
      itemIndex.value++;
    }

    const removeItem = (val) => {
      const index = lifeLogList.value.map(item => item.i).indexOf(val);
      itemIndex.value.splice(index, 1);
    }

    onMounted(() => {
      itemIndex.value = lifeLogList.value.length
    })

    return {
      documentModal,
      gridLayout,
      colNum,
      draggable,
      resizable,
      responsive,
      move,
      itemIndex,
      lifeLogList,
      addItem,
      removeItem
    }
  }
}
</script> 