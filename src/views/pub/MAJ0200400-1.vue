<template>

  <div style="width: 100%; height: 100%; touch-action: ">
      <div class="layoutJSON">
          Displayed as <code>[x, y, w, h]</code>:
          <div class="columns">
              <div class="layoutItem" v-for="item in layout" :key="item.i">
                  <b>{{ item.title }} : {{ item.i }}</b
                  >: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
              </div>
          </div>
      </div>

      <!-- <button @click="addItem">Add an item dynamically</button>
    <input type="checkbox" v-model="draggable" /> Draggable
    <input type="checkbox" v-model="resizable" /> Resizable
    <input type="checkbox" v-model="responsive"/> Responsive -->

      <button @click="itemStatic = !itemStatic">itemStatic : {{ itemStatic }}</button>
      <br />
      <button @click="draggable = !draggable">draggable : {{ draggable }}</button>
      <br />
      <!-- <button @click="test"> test 함수 실행</button> -->
      <br />
      <button @click="defaultSettting"> defaultSettting</button>
      <div style="padding-inline: 24px">
        <div class="ui-life-log-edit">
            <grid-layout
                :layout="layout"
                :col-num="colNum"
                :row-height="4"
                :is-draggable="draggable"
                :is-resizable="resizable"
                :responsive="responsive"
                :vertical-compact="true"
                :use-css-transforms="true"
                :margin="[16, 16]"
            >
                <grid-item
                    v-for="item in layout"
                    :static="item.static"
                    :x="item.x"
                    :y="item.y"
                    :w="item.w"
                    :h="item.h"
                    :i="item.i"
                    :key="item.i"
                    drag-allow-from=".vue-draggable-handle"
                    @moved="sortItem"
                    @move="move"
                >
                    <span 
                        v-show="item.static == false"
                        @touchstart="startDrag(item)"
                        @touchend="endDrag('endDrag')"
                        @touchmove="endDrag(event)"
                        ref="dragButton"
                        class="vue-draggable-handle"
                    >
                        <span class="offscreen">이동하기</span>
                    </span>
                    <button v-if="false" type="button" class="btn-remove" @click="removeItem(item.i)">
                      <span class="offscreen">삭제하기</span>
                    </button>
                    <button v-if="false" type="button" class="btn-add" @click="removeItem(item.i)">
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
      </div>
  </div>
  <div style="width: 80%; height: 100%; margin: 40px">
      <!-- layoutIndex.value : {{ layoutIndex }} -->
      <div v-for="item in subItemList" :key="item.title">
          <VCard v-bind="item" style="background: #c7c4c4; border: 1px solid rgb(43, 18, 18); margin: 10px">
              <span class="remove" @click="addGridItem(item)">+</span>
          </VCard>
      </div>
  </div>

  <div style="width: 100%; height: 100%; margin-top: 10px">
      <v-card-actions>
          <v-btn height="48px" class="bdr-8 btn-yellow" :block="true" :disabled="false" @click="confirm"
              ><strong>확인</strong>
          </v-btn>
      </v-card-actions>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue';
import { GridLayout, GridItem } from 'vue-grid-layout-v3';
import elementResizeDetectorMaker from 'element-resize-detector';
//import { _getUserGridValue, _setUserGridValue } from '@/api/wellness/hlthApi.js';
// import { _getMyGroupCode, _myGroupCode } from '@/api/wellness/stpAPi.js';

/**
* 라이브러리 설치방법
* npm install vue-grid-layout-v3 --save
* npm install element-resize-detector
*/

export default {
  components: {
      GridLayout,
      GridItem,
      elementResizeDetectorMaker,
  },

  setup() {
      onMounted(() => {
          // box.addEventListener('transitionend', function(e){
          //   box.classList.add('end');
          //   console.log(e.e.apsedTime);
          //   // transition delay time이 찍힌다.
          // })

          init();
      });

      const defaultMain = ref(); // 필수 메뉴의 기본 순서값
      const defaultSub = ref(); // 필수가 아닌 서브 메뉴의 기본 순서값
      const subItemList = ref(); // 화면에 표시할 필수가 아닌 추가 메뉴 리스트
      const margin = ref([10, 10]); // GridItem margin 값
      const draggable = ref(true); // GridItem 드레그
      const resizable = ref(false); // GridItem 사이즈 조절
      const colNum = ref(2); // 컬럼 라인 수
      const layoutIndex = ref(0); // GridItem 의 총 갯수, index로 사용
      const responsive = ref(false);
      const itemStatic = ref(true); // GridItem 고정 여부, 디폴트로 고정하고, 이동버튼 눌렀을 시에만 false 로 풀어서 사용
      const test33 = ref(true);
      const dragButton = ref(null);

      const temp = ref();
      const layout = reactive([
          // GridLayout 에 표시될 값
          // {"x":0,"y":0,"w":2,"h":4,"i":"0", "title":"걸음",     "key": '', static: true},
          // {"x":0,"y":4,"w":1,"h":4,"i":"1", "title":"감정",     "key": '', static: true},
          // {"x":1,"y":4,"w":1,"h":4,"i":"2", "title":"수면",     "key": '', static: true},
          // {"x":0,"y":8,"w":1,"h":4,"i":"3", "title":"식사",     "key": '', static: true},
          // {"x":1,"y":8,"w":1,"h":4,"i":"4", "title":"체성분",   "key": '', static: true},
          // {"x":0,"y":12,"w":2,"h":4,"i":"5","title":"여성건강", "key": '', static: true},
      ]);

      const dragEvent = event => {
          // itemStatic.value = false
          // console.log(event)
          // console.log('드래그 이벤트')
          // draggable.value = true
      };

      const mouseDown = event => {
          itemStatic.value = false;
          console.log(event);
          console.log('마우스다운 이벤트');
          test33.value = 'down';
      };

      const startDrag = event => {
          // draggable.value = true
          // console.log('startDrag')
      };

      const endDrag = event => {
          if (event == 'endDrag') {
              // draggable.value = false
          } else {
              // touch-move event
          }
          const targetBox = document.querySelector('.vue-grid-item');
          console.log(targetBox.scrollHeight);
          // console.log(event)
      };

      const mouseUp = () => {
          // itemStatic.value = true
          // test33.value = 'up'
      };

      const defaultSettting = () => {
          const params = [
              {
                  lifeLogCd: '01',
                  lifeLogSqn: 1,
                  lifeLogFxnYn: 'Y',
                  lifeLogStng: '{"x":0,"y":0,"w":2,"h":4,"i":1}',
              }, // 걸음
              {
                  lifeLogCd: '02',
                  lifeLogSqn: 2,
                  lifeLogFxnYn: 'Y',
                  lifeLogStng: '{"x":0,"y":4,"w":1,"h":4,"i":2}',
              }, // "lifeLogNm": "감정",
              {
                  lifeLogCd: '03',
                  lifeLogSqn: 3,
                  lifeLogFxnYn: 'Y',
                  lifeLogStng: '{"x":1,"y":4,"w":1,"h":4,"i":3}',
              }, // "lifeLogNm": "수면",
              {
                  lifeLogCd: '04',
                  lifeLogSqn: 4,
                  lifeLogFxnYn: 'Y',
                  lifeLogStng: '{"x":0,"y":8,"w":2,"h":4,"i":4}',
              }, // "lifeLogNm": "식사",
              {
                  lifeLogCd: '05',
                  lifeLogSqn: 5,
                  lifeLogFxnYn: 'Y',
                  lifeLogStng: '{"x":0,"y":12,"w":1,"h":4,"i":5}',
              }, // 체성분
              {
                  lifeLogCd: '06',
                  lifeLogNm: '여성건강',
                  lifeLogSqn: 6,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"x":1,"y":12,"w":1,"h":4,"i":6}',
              },
              {
                  lifeLogCd: '10',
                  lifeLogNm: '수분',
                  lifeLogSqn: 7,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":7}',
              },
              {
                  lifeLogCd: '08',
                  lifeLogNm: '혈압',
                  lifeLogSqn: 8,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":8}',
              },
              {
                  lifeLogCd: '07',
                  lifeLogNm: '혈당',
                  lifeLogSqn: 9,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":9}',
              },
              {
                  lifeLogCd: '13',
                  lifeLogNm: '심박수',
                  lifeLogSqn: 10,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":10}',
              },
              {
                  lifeLogCd: '11',
                  lifeLogNm: '음주',
                  lifeLogSqn: 11,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":11}',
              },
              {
                  lifeLogCd: '12',
                  lifeLogNm: '흡연',
                  lifeLogSqn: 12,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":12}',
              },
              {
                  lifeLogCd: '09',
                  lifeLogNm: '운동',
                  lifeLogSqn: 13,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":2,"h":4,"i":13}',
              },
              {
                  lifeLogCd: '14',
                  lifeLogNm: '복약',
                  lifeLogSqn: 14,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":14}',
              },
          ];

          let jParams = JSON.stringify(params);
          _setUserGridValue(jParams).then(response => {
              if (response.status === 200) {
                  const responseData = response.data;
                  responseData.data.list.map(item => {
                      console.log(item);
                  });
              }
          });
      };

      // 확인
      const confirm = () => {
          console.log(layout);

          const reqList = [];
          let lifeLogSqn = 1;
          // layout 정보 셋팅
          layout.forEach(item => {
              let logStringObj = {
                  x: item.x,
                  y: item.y,
                  w: item.w,
                  h: item.h,
                  i: item.i,
              };
              reqList.push({
                  lifeLogCd: item.key,
                  lifeLogSqn: lifeLogSqn,
                  lifeLogFxnYn: 'Y', // layout 사용
                  lifeLogStng: JSON.stringify(logStringObj),
              });
              lifeLogSqn++;
          });

          // layout 에서 빠지는 정보 셋팅
          subItemList.value.forEach(item => {
              let logStringObj = {
                  w: item.w,
                  h: item.h,
                  i: item.i,
              };
              reqList.push({
                  lifeLogCd: item.key,
                  lifeLogSqn: item.i,
                  lifeLogFxnYn: 'N', // layout 미사용
                  lifeLogStng: JSON.stringify(logStringObj),
              });
              lifeLogSqn++;
          });

          // layout 정보 업데이트
          _setUserGridValue(reqList)
              .then(response => {
                  if (response.status === 200) {
                      toast('저장이 완료되었습니다.', 1000, 'success');
                  }
              })
              .catch(error => {
                  toast('저장 실패하였습니다..', 1000, 'error');
              });

          // Example
          // let testlogStringObj = {
          //         x: 0,
          //         y: 12,
          //         w: 2,
          //         h: 4,
          //         i: 14,
          //       }
          // const test = [{
          //   lifeLogCd: "14",
          //   lifeLogSqn: 14,
          //   lifeLogFxnYn: "Y",
          //   lfeLogStng: JSON.stringify(testlogStringObj)
          // }]

          // // let test1 = JSON.stringify(test)
          // _setUserGridValue(test).then(response => {
          //     if (response.status === 200) {
          //         const responseData = response.data
          //         responseData.data.list.map((item) => {
          //             console.log(item)
          //         })
          //     }
          // })

          return;
          const params = [
              {
                  lifeLogCd: '01',
                  lifeLogSqn: 1,
                  lifeLogFxnYn: 'Y',
                  lifeLogStng: '{"x":0,"y":0,"w":2,"h":4,"i":1}',
              }, // 걸음
              {
                  lifeLogCd: '02',
                  lifeLogSqn: 2,
                  lifeLogFxnYn: 'Y',
                  lifeLogStng: '{"x":0,"y":4,"w":1,"h":4,"i":2}',
              }, // "lifeLogNm": "감정",
              {
                  lifeLogCd: '03',
                  lifeLogSqn: 3,
                  lifeLogFxnYn: 'Y',
                  lifeLogStng: '{"x":1,"y":4,"w":1,"h":4,"i":3}',
              }, // "lifeLogNm": "수면",
              {
                  lifeLogCd: '04',
                  lifeLogSqn: 4,
                  lifeLogFxnYn: 'Y',
                  lifeLogStng: '{"x":0,"y":8,"w":1,"h":4,"i":4}',
              }, // "lifeLogNm": "식사",
              {
                  lifeLogCd: '05',
                  lifeLogSqn: 5,
                  lifeLogFxnYn: 'Y',
                  lifeLogStng: '{"x":1,"y":8,"w":1,"h":4,"i":5}',
              }, //
              {
                  lifeLogCd: '06',
                  lifeLogNm: '여성건강',
                  lifeLogSqn: 6,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":2,"h":4,"i":6}',
              },
              {
                  lifeLogCd: '10',
                  lifeLogNm: '수분',
                  lifeLogSqn: 7,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":7}',
              },
              {
                  lifeLogCd: '08',
                  lifeLogNm: '혈압',
                  lifeLogSqn: 8,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":8}',
              },
              {
                  lifeLogCd: '07',
                  lifeLogNm: '혈당',
                  lifeLogSqn: 9,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":9}',
              },
              {
                  lifeLogCd: '13',
                  lifeLogNm: '심박수',
                  lifeLogSqn: 10,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":10}',
              },
              {
                  lifeLogCd: '11',
                  lifeLogNm: '음주',
                  lifeLogSqn: 11,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":11}',
              },
              {
                  lifeLogCd: '12',
                  lifeLogNm: '흡연',
                  lifeLogSqn: 12,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":12}',
              },
              {
                  lifeLogCd: '09',
                  lifeLogNm: '운동',
                  lifeLogSqn: 13,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":13}',
              },
              {
                  lifeLogCd: '14',
                  lifeLogNm: '복약',
                  lifeLogSqn: 14,
                  lifeLogFxnYn: 'N',
                  lifeLogStng: '{"w":1,"h":4,"i":14}',
              },
          ];

          let jParams = JSON.stringify(params);
          _setUserGridValue(jParams).then(response => {
              if (response.status === 200) {
                  const responseData = response.data;
                  responseData.data.list.map(item => {
                      console.log(item);
                  });
              }
          });
      };

      // 화면 데이터 셋팅
      const init = async () => {
          /* ***************GridLayout data 설명********************************
           * type    : 화면에 보여질 GridItem 크기
           * title   : GridItem 제목
           * key     : PHR 데이터와 매핑할 key값 (임시로 한글로 사용..)
           * index   : GridLayout 에서 인식하는 유니크 키값
           * static  : GridItem 가능 불가능 여부
           * default : 화면정의서에 정의되어 있는 기본값 , 삭제 불가능 등의 여부를 위해 사용
           **********************************************************************/

          // GridItem Get
          // const response = await _getList1();
          // console.log('test api1', response);

          // let test = _getUserGridValue();
          // console.log(test.data)

          // _getUserGridValue().then(response => {
          //     if (response.status === 200) {
          //         const responseData = response.data
          //         console.log(responseData)
          //         // responseData.data.list.map((item) => {
          //         //     checkedItem.value.push(item.stpCtrgrpCd)
          //         // })
          //     }
          // })

          // test = _getScode3Grade();
          // console.log(test)

          // test = _getMyGroupCode();
          // console.log(test)

          // test = _getGroupCde();
          // console.log(test)

          // test = _myGroupCode();
          // console.log(test)

          const response_defaultMain = [
              { x: 0, y: 0, w: 2, h: 4, i: 0, title: '걸음', key: '걸음', index: 0, static: true, default: true },
              { x: 0, y: 4, w: 1, h: 4, i: 1, title: '감정', key: '감정', index: 1, static: true, default: true },
              { x: 1, y: 4, w: 1, h: 4, i: 2, title: '수면', key: '수면', index: 2, static: false, default: true },
              { x: 0, y: 8, w: 1, h: 4, i: 3, title: '식사', key: '식사', index: 3, static: false, default: true },
              {
                  x: 1,
                  y: 8,
                  w: 1,
                  h: 4,
                  i: 4,
                  title: '체성분',
                  key: '체성분',
                  index: 4,
                  static: false,
                  default: true,
              },
              {
                  x: 0,
                  y: 16,
                  w: 2,
                  h: 4,
                  i: 5,
                  title: '여성건강',
                  key: '여성건강',
                  index: 5,
                  static: false,
                  default: true,
              },
          ];
          defaultMain.value = response_defaultMain;

          // default
          // const defaultSub = await _getList();
          const response_defaultSub = [
              { title: '혈당', key: '혈당', index: 0, static: false, default: false },
              { title: '혈압', key: '혈압', index: 1, static: false, default: false },
              { title: '운동', key: '운동', index: 2, static: false, default: false },
              { title: '수분', key: '수분', index: 3, static: false, default: false },
              { title: '음주', key: '음주', index: 4, static: false, default: false },
              { title: '흡연', key: '흡연', index: 5, static: false, default: false },
              { title: '심박', key: '심박', index: 6, static: false, default: false },
              { title: '복약', key: '복약', index: 7, static: false, default: false },
          ];
          // defaultSub.value = response_defaultSub

          // 실제 유저별 저장된 값
          // const userGridValue = await _getList();
          // key 값은 약어로 하겠지만 임시로 한글로
          // 실질적인 layout 모델
          let userGridValue = [
              // {x: 0, y: 0,  w: 2, h: 4, i: 0,  title:"걸음",     key: "걸음",    static: true, default: true},
              // {x: 0, y: 4,  w: 1, h: 4, i: 1,  title:"감정",     key: "감정",    static: true, default: true},
              // {x: 1, y: 4,  w: 1, h: 4, i: 2,  title:"수면",     key: "수면",    static: false, default: true},
              // {x: 0, y: 8,  w: 2, h: 4, i: 3,  title:"혈당",     key: "혈당",    static: false, default: false},
              // {x: 0, y: 12, w: 1, h: 4, i: 4,  title:"혈압",     key: "혈압",    static: false, default: false},
              // {x: 1, y: 12, w: 1, h: 4, i: 5,  title:"체성분",   key: "체성",    static: false, default: false},
              // {x: 0, y: 16, w: 1, h: 4, i: 6,  title:"식사",     key: "식사",    static: false, default: true},
              // {x: 0, y: 20, w: 2, h: 4, i: 7,  title:"여성건강", key: "여성건강", static: false, default: true},
              // {x: 0, y: 24, w: 2, h: 4, i: 8,  title:"흡연",     key: "흡연",    static: false, default: false},
              // {x: 0, y: 28, w: 2, h: 4, i: 9,  title:"심박",     key: "심박",    static: false, default: false},
              // {x: 0, y: 32, w: 1, h: 4, i: 10, title:"복약",     key: "복약",    static: false, default: false},
              // {x: 1, y: 32, w: 1, h: 4, i: 11, title:"운동",     key: "운동",    static: false, default: false},
              // {x: 0, y: 36, w: 1, h: 4, i: 12, title:"수분",     key: "수분",    static: false, default: false},
              // {x: 1, y: 36, w: 1, h: 4, i: 13, title:"음주",     key: "음주",    static: false, default: false},
          ];

          // _getUserGridValue().then(response => {
          //     if (response.status === 200) {
          //         const responseData = response.data
          //         responseData.data.list.map((item) => {
          //           userGridValue.push(
          //             {
          //               x: 0, y: 0,  w: 2, h: 4,
          //               i: item.lifeLogSqn,
          //               title: item.lifeLogNm,
          //               key: item.lifeLogCd,
          //               static: false,
          //               default: item.lifeLogBscFxnYn == "Y" ? true : false
          //             }
          //           )
          //         })
          //     }
          // })

          let responseDefaultSub = [];

          // api 안되서 임시 주석

          // try {
          //     const userValue = await _getUserGridValue();
          //     userValue.data.data.list.forEach(item => {
          //         try {
          //             let itemInfo = JSON.parse(item.lifeLogStng);

          //             // 추가 항목 리스트의 총 값을 셋팅
          //             if (item.lifeLogBscFxnYn == 'N') {
          //                 // 필수가 아닌 추가 항목의 경우 x,y 좌표는 필요없이 사용자 추가를 위한 리스트임
          //                 responseDefaultSub.push({
          //                     w: itemInfo.w,
          //                     h: itemInfo.h,
          //                     title: item.lifeLogNm,
          //                     key: item.lifeLogCd,
          //                     i: item.lifeLogSqn,
          //                     static: false,
          //                     default: false,
          //                 });
          //             }

          //             // layout 항목에 들어값 값 셋팅
          //             // if ( itemInfo.x != '' || itemInfo.y != '' ) {
          //             // if ( item.lifeLogFxnYn == "Y" ) {  // layout 설정된 여부
          //             if (itemInfo.x != undefined && itemInfo.y != undefined && item.lifeLogFxnYn == 'Y') {
          //                 // layout 항목에 추가

          //                 userGridValue.push(
          //                     // gridItem 값
          //                     {
          //                         x: itemInfo.x,
          //                         y: itemInfo.y,
          //                         w: itemInfo.w,
          //                         h: itemInfo.h,
          //                         i: item.lifeLogSqn,
          //                         title: item.lifeLogNm,
          //                         key: item.lifeLogCd,
          //                         static: false,
          //                         default: item.lifeLogBscFxnYn == 'Y' ? true : false,
          //                     }
          //                 );
          //                 // if ( item.lifeLogBscFxnYn == "N" ) { // 필수가 아닌 추가 항목의 경우

          //                 // }
          //             } else {
          //                 // x, y 좌표가 없는 경우에는 layout 목록에서 제외
          //                 // if ( item.lifeLogBscFxnYn == "N" ) { // 필수가 아닌 추가 항목의 경우 (x, y 좌표가 없는 경우는 추가 항목)
          //                 // }
          //             }
          //         } catch (error) {
          //             // 좌표값이 없거나 파싱할수 없는 잘못된 문자열
          //         }
          //     });
          // } catch (error) {
          //     console.log(error);
          // }
           userGridValue = [
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
          ];




          // userGridValue = [] // 없는 경우 테스트
          // 사용사 설정 데이터 유무에따른 값 셋팅
          if (userGridValue.length > 0) {
              // item 추가 배열 셋팅
              defaultSub.value = responseDefaultSub;
              let cpSub = _.cloneDeep(responseDefaultSub);

              // 화면에 뿌려줄 item 배열 셋팅
              userGridValue.forEach(function (gridItem) {
                  layout.push(gridItem);

                  // item 추가와 중복되지 않게 삭제
                  if (gridItem.default != true) {
                      let deleteIdx = cpSub.map(item => item.key).indexOf(gridItem.key); // 삭제할 아이템 index값
                      cpSub.splice(deleteIdx, 1);
                  }
              });
              subItemList.value = cpSub; // 화면data 에 적용
              margin.value = [10, 10];
          } else {
              // 없을경우 예외처리해야함
          }

          layoutIndex.value = layout.length;

          // layout sort
          sortItem();
      };

      const test = () => {
          // toast('성공메세지', 2000, 'default')
          console.log(layout);
          margin.value = [10, 10];
          let test = JSON.stringify(layout);
          console.log(test);
          console.log(JSON.parse(test));
      };

      // const addItem = () => {
      //   layout.push({
      //       x: (layout.length * 2) % (colNum || 12),
      //       y: layout.length + (colNum || 2), // puts it at the bottom
      //       w: 2,
      //       h: 2,
      //       i: layoutIndex.value,
      //   });
      //   // Increment the counter to ensure key is always unique.
      //   layoutIndex.value++;
      // }

      // const addLgItem = () => {
      //   layout.push({
      //       x: 0,
      //       y: layout[layout.length-1].y + 4, // puts it at the bottom
      //       w: 2,
      //       h: 4,
      //       i: layoutIndex.value,
      //   });
      //   // Increment the counter to ensure key is always unique.
      //   layoutIndex.value++;
      // }

      // const addSmItem = () => {
      //   let lastItem = layout[layout.length-1]
      //   let addX = 0
      //   let addY = 0
      //   if ( lastItem.w == 2 ) { // lg
      //     addX = 0
      //     addY = lastItem.y + 4
      //   } else { // sm
      //     if ( lastItem.x == 0 ) { // 바로 옆에 붙어야함
      //       addX = 1
      //       addY = lastItem.y
      //     } else { // 1이고 마지막이기 때문에 아래에 붙어야함
      //       addX = 0
      //       addY = lastItem.y + 4
      //     }
      //   }
      //   layout.push({
      //       x: addX,
      //       y: addY, // puts it at the bottom
      //       w: 1,
      //       h: 4,
      //       i: layoutIndex.value,
      //       title: '',
      //       key: '',
      //       static: '',
      //       default: '',
      //   });
      //   // Increment the counter to ensure key is always unique.
      //   layoutIndex.value++;
      //   // index++;
      // }

      // GridItem 삭제 이벤트
      const removeItem = itemI => {
          
          let index = layout.map(item => item.i).indexOf(itemI); // 삭제할 아이템 index값

          if (layout[index].default == true) {
              toast(`${layout[index].title}은 삭제할 수 없습니다.`, 2000, 'default');
              return false;
          }

          // 변수 set
          let rmItemY = layout[index].y; // 삭제할 아이템 Y값
          let rmItemX = layout[index].x; // 삭제할 아이템 X값
          let beforeY = layout[index - 1]?.y; // 삭제전 삭제타겟 전 아이템 Y값 확인
          let afterY = layout[index + 1]?.y; // 삭제전 삭제타겟 후 아이템 Y값 확인
          let key = layout[index].key; // 삭제할 아이템 key값
          let type = layout[index].type; // lg, sm 여부
          let isDefault = layout[index].default; // 디폴트 여부
          const cpRmItem = _.cloneDeep(layout[index]);

          // 선택한 item 삭제
          layout.splice(index, 1);

          // Y값 재정렬 후 비어 있는 라인 정리
          for (let i = index; i < layout.length; i++) {
              let item = layout[i];

              // 지운후 다음 item ITEM에 따른 이벤트 분기
              if (cpRmItem.w == 1) {
                  // sm
                  if (item.w == 1) {
                      // 지운거와 같은 레벨 sm
                      if (item.x == cpRmItem.x) {
                          layout[i].y = layout[i].y - 4;
                      }
                  } else if (item.w == 2) {
                      // 지운거와 다른 레벨 sm
                      // 삭제하기전 이전 아이템에 y 값이 비어있지 있다면 실행 하지 않음
                      if (item.y - 4 != layout[i - 1].y) {
                          setItemY(i);
                      }
                      break;
                  }
              } else {
                  // lg
                  setItemY(i);
                  break;
              }
          }

          // grid layout height 조정을 위해 강제로 margin을 건들여서 GridLayout 컴포넌트의 왓치가 실행되게한다
          margin.value = [10, 10];

          // default 아이템이 아닌 경우 추가 아이템 리스트에 추가 및 정렬
          if (!isDefault) {
              // item 추가 배열 셋팅
              let cpSub = defaultSub.value.map(item => item);

              // 화면에 뿌려줄 item 배열 셋팅
              layout.forEach(function (gridItem) {
                  // item 추가와 중복되지 않게 삭제
                  if (gridItem.default != true) {
                      let deleteIdx = cpSub.map(item => item.key).indexOf(gridItem.key); // 삭제할 아이템 index값
                      cpSub.splice(deleteIdx, 1);
                  }
              });

              // 화면 추가 항목 data 에 적용
              subItemList.value = cpSub;
              margin.value = [10, 10];
          }
      };

      // layout item 라인 정렬
      const setItemY = pIndex => {
          for (let i = pIndex; i < layout.length; i++) {
              layout[i].y = layout[i].y - 4;
          }
      };

      const sortItem = (i, newX, newY) => {
          console.log(layout);
          layout.sort((a, b) => {
              return a.x + a.y - (b.x + b.y);
          });
      };

      // 아이템 추가
      const addGridItem = pItem => {
          let lastItem = layout[layout.length - 1];
          let addX = 0;
          let addY = 0;
          let addW = pItem.w;
          let paramX = 0;
          let paramY = 0;

          if (pItem.w == 1) {
              if (lastItem.w == 2) { // lg
                  addX = 0;
                  addY = lastItem.y + 4;
              } else if (lastItem.w == 1) { // sm
                  if (lastItem.x == 0) { // 바로 옆에 붙어야함
                      paramX = 1;
                      paramY = lastItem.y;
                  } else if (lastItem.x == 1) {
                      let beforeItem = layout[layout.length - 2];
                      if (beforeItem.x == 0 && beforeItem.y == lastItem.y) { // 같은 레벨에 첫번째 ITEM 이 있는경우
                          paramX = 0;
                      } else {
                          paramX = 1;
                      }
                      paramY = lastItem.y + 4;
                  } else { // 1이고 마지막이기 때문에 아래에 붙어야함
                      paramY = 0;
                      paramY = lastItem.y + 4;
                  }

                  const rtnAxileObj = axileCheck(paramX, paramY)
                  addX = rtnAxileObj.xAxile
                  addY = rtnAxileObj.yAxile
              }
          } else {
              // lg
              addX = 0;
              addY = lastItem.y + 4;
          }

          layout.push({
              x: addX,
              y: addY, // puts it at the bottom
              w: addW,
              h: 4,
              i: pItem.i,
              title: pItem.title,
              key: pItem.key,
              static: pItem.static,
              default: pItem.default,
          });

          // responsive.value = !responsive.value
          // Increment the counter to ensure key is always unique.
          layoutIndex.value++;

          // grid layout height 조정을 위해 강제로 margin을 건들여서 GridLayout 컴포넌트의 왓치가 실행되게한다
          margin.value = [10, 10];
          // /**
          //  * GridLayout height 값 설정
          //  * @see GridLayout.vue , containerHeight() 참조
          //  */
          // // const [, m2] = props.margin;
          // // return `${bottom(props.layout) * (props.rowHeight + m2) + m2}px`;

          // 서브 item list 에서 추가 완료후 삭제
          const idx = subItemList.value.map(item => item.key).indexOf(pItem.key);
          subItemList.value.splice(idx, 1);

          sortItem();

          console.log(layout);
          console.log(JSON.stringify(layout));
      };

      // 작은 블럭의 들어가려는 열의 빈공간 확인후 입력할 좌표 리턴
      const axileCheck = ( xAxile , yAxile ) => {

          // let xAxile = 1
          // let yAxile = 20
          // let revertLastIdx = ''
          // for ( let i=layout.length-1; i>0; i-- ) {
          //     let item = layout[i]
          //     // console.log(item)
          //     if ( item.w == 2) {
          //         revertLastIdx = i
          //         break;
          //     } 
          // }
          // console.log(revertLastIdx)
          
          const revertList = []
          for ( let i=layout.length; i>0; i-- ) {
              revertList.push(layout[i-1])
          }

          const rtnObj = {
              xAxile: xAxile,
              yAxile: yAxile,
          }

          while( yAxile > 0 ) {
              let result = revertList.filter((item)=> (item.y==yAxile && item.x==xAxile) || (item.y==yAxile && item.w==2) )
              if ( result.length > 0 ) { // 해당 라인에 블럭이 존재
                  break;
              } else { // 존재하지 않으므로 저장
                  rtnObj.xAxile = xAxile
                  rtnObj.yAxile = yAxile
                  yAxile = yAxile - 4 // 다음 검색할 y축 설정
              }
          }

          return rtnObj;
      }

      const move = (i, newX, newY) => {
          var winX = window.pageXOffset;
          var winY = window.pageYOffset;

          // 현재 보고있는 화면 기준으로 특정 요소의 위치 알아내기
          var div = document.querySelector('.vue-grid-item'); //document.getElementById("div_id");
          var divTop = div.getBoundingClientRect().top;
          var divBottom = div.getBoundingClientRect().bottom;
          var divLeft = div.getBoundingClientRect().left;
          var divRight = div.getBoundingClientRect().right;
          // 또 다른 방법.
          // var divTop = document.querySelector('.vue-grid-item').offsetTop //document.querySelector("#div_id").offsetTop;

          var absoluteTop = window.scrollY + div.getBoundingClientRect().top;
          // console.log(div)
          console.log(`divTop= ${divTop}, divBottom= ${divBottom}`);
          console.log(`divTabsoluteTopp= ${absoluteTop}`);

          // console.log(`divLeft= ${divLeft}, divRight= ${divRight}`)

          // var div = document.querySelector('.vue-grid-item') //document.getElementById("div_id");
          // var divTop = div.getBoundingClientRect().top;
          // var absoluteTop = window.pageYOffset + div.getBoundingClientRect().top;
          // console.log(div)
          // console.log(`divTop= ${divTop}, absoluteTop= ${absoluteTop}`)
      };

      return {
          layout,
          draggable,
          resizable,
          responsive,
          colNum,
          removeItem,
          sortItem,
          test,
          temp,
          subItemList,
          defaultMain,
          defaultSub,
          addGridItem,
          layoutIndex,
          margin,
          setItemY,
          itemStatic,
          mouseDown,
          mouseUp,
          test33,
          dragButton,
          dragEvent,
          startDrag,
          endDrag,
          confirm,
          defaultSettting,
          move,
      };
  },
};
</script>

<style>
.layoutJSON {
  background: #ddd;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
}

.columns {
  -moz-columns: 120px;
  -webkit-columns: 120px;
  columns: 120px;
}

/*************************************/

.remove {
  position: absolute;
  right: 2px;
  top: 0;
  cursor: pointer;
}

.vue-grid-layout {
  background: #ddd;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
  background: #cce;
}

.vue-grid-item .text {
  font-size: 60px;
  text-align: center;
  position: absolute;
  /* top: 0; */
  top: 130px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
  touch-action: auto;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

</style>
