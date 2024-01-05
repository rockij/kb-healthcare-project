<template>
  <div class="contents">
    <div class="evt-temp">
      <div class="evt-temp-img">
        <img
          src="/assets/images/event-attend1.png"
          alt="출석체크 : 매일매일 포인트 지급! (기간 : 2023.09.01 ~ 2023.09.30)"
        />
      </div>
      <div class="evt-temp-cont">
        <div
          class="evt-attend-chk"
          style="background-image: url(/assets/images/event-attend-bg.png)"
        >
          <div class="evt-attend-chk-box">
            <ul class="evt-attend-chk-list">
              <li v-for="(item, index) in stampList" :key="index">
                <button type="button" class="stamp" @click="evtAttend(index)">
                  <span class="stamp-day">
                    <span v-if="!item.point.state"
                      >{{ item.day }}<br />DAY</span
                    >
                    <span v-if="item.point.state">{{ item.point.value }}</span>
                  </span>
                  <span v-if="item.isChk && !item.point.state" class="stamp-chk"
                    ><span class="offscreen">출석<br />완료</span></span
                  >
                  <span
                    v-if="item.isChk && item.point.state"
                    class="stamp-point"
                    ><span>{{ item.point.value }}</span></span
                  >
                  <!-- <span v-if="item.isChk" class="stamp-perfect"><span class="offscreen">perfect</span></span> -->
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="evt-temp-img">
        <img
          src="/assets/images/event-attend2.png"
          alt="유의사항 : 이벤트 주관사의 사정으로 이벤트 내용이 변경되거나 조기 종료 될 수 있습니다."
        />
      </div>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-summit">문의하기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive, ref, computed } from 'vue'
  export default {
    setup() {
      let isChkNum = ref()
      function evtAttend(index) {
        console.log(isChkNum)
        this.stampList[index].isChk = true
      }
      isChkNum = computed(() => {
        return this.stampList.reduce((i, s) => {
          return s.isChk ? i + 1 : i
        }, 0)
      })
      const stampList = reactive([
        {
          day: '1',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '2',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '3',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '4',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '5',
          isChk: false,
          point: {
            state: true,
            value: '500P'
          }
        },
        {
          day: '6',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '7',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '8',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '9',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '10',
          isChk: false,
          point: {
            state: true,
            value: '500P'
          }
        },
        {
          day: '11',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '12',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '13',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '14',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '15',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '16',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '17',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '18',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '19',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '20',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '21',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '22',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '23',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '24',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '25',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '26',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '27',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '28',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '29',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '30',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        },
        {
          day: '31',
          isChk: false,
          point: {
            state: false,
            value: null
          }
        }
      ])

      return {
        stampList,
        evtAttend
      }
    }
  }
</script>

<style lang="scss" scoped></style>
