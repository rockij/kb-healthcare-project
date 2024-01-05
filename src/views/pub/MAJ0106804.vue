<template>
  <div class="contents pt-0">
    <div class="per-test-result-head">
      <div class="flip-card" ref="flipCard">
        <div class="box front">
          <div class="card-layer">
            <div class="my-per-card" ref="myPerCard">
              <v-btn variant="text" class="btn-card-down"
                ><span class="offscreen">카드 이미지 다운로드</span></v-btn
              >
              <!-- 202231127 : 이미지 다운로드 -->
              <!--
                                per-e-test-card1.png - 외향적인 조력자
                                per-e-test-card2.png - 외향적인 행정가
                                per-e-test-card3.png - 외향적인 창조자
                                per-e-test-card4.png - 외향적인 혁신가
                                per-e-test-card5.png - 외향적인 후원자
                                per-e-test-card6.png - 외향적인 분석가
                                per-e-test-card7.png - 외향적인 열성가
                                per-e-test-card8.png - 외향적인 개혁자
                                
                                per-i-test-card1.png - 내향적인 조력자
                                per-i-test-card2.png - 내향적인 행정가
                                per-i-test-card3.png - 내향적인 창조자
                                per-i-test-card4.png - 내향적인 혁신가
                                per-i-test-card5.png - 내향적인 후원자
                                per-i-test-card6.png - 내향적인 분석가
                                per-i-test-card7.png - 내향적인 열성가
                                per-i-test-card8.png - 내향적인 개혁자
                            -->
              <div class="card-img">
                <v-img src="/assets/images/per-e-test-thumb1.svg"></v-img
                ><!-- 20231127 수정 -->
                <!--
                                    per-e-test-thumb1.svg - 외향적인 조력자
                                    per-e-test-thumb2.svg - 외향적인 행정가
                                    per-e-test-thumb3.svg - 외향적인 창조자
                                    per-e-test-thumb4.svg - 외향적인 혁신가
                                    per-e-test-thumb5.svg - 외향적인 후원자
                                    per-e-test-thumb6.svg - 외향적인 분석가
                                    per-e-test-thumb7.svg - 외향적인 열성가
                                    per-e-test-thumb8.svg - 외향적인 개혁자
                                    
                                    per-i-test-thumb1.svg - 내향적인 조력자
                                    per-i-test-thumb2.svg - 내향적인 행정가
                                    per-i-test-thumb3.svg - 내향적인 창조자
                                    per-i-test-thumb4.svg - 내향적인 혁신가
                                    per-i-test-thumb5.svg - 내향적인 후원자
                                    per-i-test-thumb6.svg - 내향적인 분석가
                                    per-i-test-thumb7.svg - 내향적인 열성가
                                    per-i-test-thumb8.svg - 내향적인 개혁자
                                -->
              </div>
              <span class="tag-c">TL-I</span>
              <h2 class="my-per-txt">내향적인 개혁자</h2>
              <div class="ui-chips center">
                <div class="chips-ticker" ref="ticker">
                  <div class="ticker-item">
                    <span
                      class="chip-item"
                      v-for="(item, index) in perChipsList"
                      :key="index"
                      >{{ item }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="btn-area">
                <v-btn variant="text" class="btn-view-guide" @click="flipEvt"
                  >설명보기</v-btn
                >
              </div>
            </div>
          </div>
        </div>
        <!-- MAJ0106806 성격유형카드 뒷면 -->
        <div class="box back">
          <div class="card-layer">
            <div class="my-per-info">
              <h3>김케어님의 유형은?</h3>
              <div class="scroller">
                <div
                  class="my-per-info-item"
                  v-for="item in myPerGuideList"
                  :key="item.id"
                >
                  <h4>{{ item.title }}</h4>
                  <ul>
                    <li v-for="list in item.list" :key="list.id">{{ list }}</li>
                  </ul>
                </div>
              </div>
              <div class="btn-area">
                <v-btn variant="text" class="btn-view-guide" @click="flipEvt"
                  >뒤집기</v-btn
                >
              </div>
            </div>
          </div>
        </div>
        <!--/ MAJ0106806 성격유형카드 뒷면 -->
      </div>
    </div>
    <div class="per-test-section">
      <div class="per-test-head">
        <h3>
          성격 판단 기준별로<br />
          알아볼까요?
        </h3>
      </div>
      <div class="per-test-cont jud-per-tab"><!-- 20240103 'jud-per-tab' 클래스 위치변경 -->
        <div class="tab-line">
          <v-tabs v-model="tabInit" align-tabs="start">
            <v-tab
              v-for="(item, i) in tabItems"
              :key="item.id"
              :value="i"
              :ripple="false"
              @click="evtTab"
            >
              {{ item.titleTab }}
            </v-tab>
          </v-tabs>
        </div><!-- 20231227 : div 닫는 위치 변경 -->
        <v-window v-model="tabInit" class="mt-7">
          <v-window-item v-for="(item, i) in tabItems" :key="i">
            <div class="per-jud-cont is-screen">
              <div class="per-jud-item" :class="item.type1.class">
                <div class="lb">
                  <span class="ico">{{ item.type1.abc }}</span>
                  <span class="txt">{{ item.type1.lb }}</span>
                </div>
                <div class="chart">
                  <!-- <div class="bar" :style="`width : ${item.type1.num * 10}%`"> -->
                  <div class="bar" :data-per="`${item.type1.num * 10}`">
                    <span
                      class="num"
                      :class="{
                        first: item.type1.num === 0,
                        last: item.type1.num === 10
                      }"
                      >{{ item.type1.num }}점</span
                    >
                  </div>
                </div>
              </div>
              <div class="per-jud-item" :class="item.type2.class">
                <div class="lb">
                  <span class="ico">{{ item.type2.abc }}</span>
                  <span class="txt">{{ item.type2.lb }}</span>
                </div>
                <div class="chart">
                  <div class="bar" :data-per="`${item.type2.num * 10}`">
                    <span
                      class="num"
                      :class="{
                        first: item.type2.num === 0,
                        last: item.type2.num === 10
                      }"
                      >{{ item.type2.num }}점</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </v-window-item>
        </v-window>
      </div>
    </div>
    <div class="per-test-section bg">
      <div class="per-test-head">
        <h3>
          내 유형은<br />
          이런 특징이 있어요!
        </h3>
      </div>
      <div class="per-test-cont">
        <div class="my-per-spec good">
          <h4>이런점은 너무 좋아요</h4>
          <div class="ui-chips white">
            <span
              class="chip-item"
              v-for="(item, index) in specGoodList"
              :key="index"
              >{{ item }}</span
            >
          </div>
        </div>
        <div class="my-per-spec bad">
          <h4>이런점은 너무 좋아요</h4>
          <div class="ui-chips white">
            <span
              class="chip-item"
              v-for="(item, index) in specBadList"
              :key="index"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="section-page">
      <div class="per-test-section">
        <div class="per-test-head">
          <h3>오건강님이 스스로 생각하는<br />성격유형은 CP-E에요</h3>
        </div>
        <div class="per-test-cont jud-per-tab"><!-- 20240103 'jud-per-tab' 클래스 위치변경 -->
          <div class="tab-line">
            <v-tabs v-model="tabInit" align-tabs="start">
              <v-tab
                v-for="(item, i) in tabItems"
                :key="item.id"
                :value="i"
                :ripple="false"
                @click="evtTab"
              >
                {{ item.titleTab }}
              </v-tab>
            </v-tabs>
          </div>
          <v-window v-model="tabInit" class="mt-7">
            <v-window-item v-for="(item, i) in tabItems" :key="i">
              <div class="per-jud-cont is-screen">
                <div class="per-jud-item" :class="item.type1.class">
                  <div class="lb">
                    <span class="ico">{{ item.type1.abc }}</span>
                    <span class="txt">{{ item.type1.lb }}</span>
                  </div>
                  <div class="chart">
                    <!-- <div class="bar" :style="`width : ${item.type1.num * 10}%`"> -->
                    <div class="bar" :data-per="`${item.type1.num * 10}`">
                      <span
                        class="num"
                        :class="{
                          first: item.type1.num === 0,
                          last: item.type1.num === 10
                        }"
                        >{{ item.type1.num }}점</span
                      >
                    </div>
                  </div>
                </div>
                <div class="per-jud-item" :class="item.type2.class">
                  <div class="lb">
                    <span class="ico">{{ item.type2.abc }}</span>
                    <span class="txt">{{ item.type2.lb }}</span>
                  </div>
                  <div class="chart">
                    <div class="bar" :data-per="`${item.type2.num * 10}`">
                      <span
                        class="num"
                        :class="{
                          first: item.type2.num === 0,
                          last: item.type2.num === 10
                        }"
                        >{{ item.type2.num }}점</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </v-window-item>
          </v-window>
        </div>
      </div>
    </div>
    <div class="section-page">
      <!-- 20231120 추가 -->
      <div class="per-test-section">
        <div class="per-test-head">
          <h3>
            나랑(내향적인 개혁자 TL-I)<br />
            케미가 좋은 유형은 뭘까요?
          </h3>
        </div>
        <div class="per-test-cont">
          <div class="my-chem-type is-screen">
            <div class="t-item good">
              <div class="bar">
                <span class="txt">환상의 케미</span>
              </div>
              <span class="lb"><strong>LT-I</strong>내향적인 혁신가</span>
            </div>
            <div class="t-item bad">
              <div class="bar">
                <span class="txt">환장의 케미</span>
              </div>
              <span class="lb"><strong>CP-E</strong>외향적인 조력자</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-page">
      <!-- 20231120 수정 -->
      <div class="per-test-section">
        <div class="per-test-head">
          <h3>내 주변엔<br />어떤 성격유형이 많을까요?</h3>
        </div>
        <div class="per-test-cont">
          <div class="my-place-per">
            <div
              class="my-place-per-item"
              v-for="item in placePerList"
              :key="item.id"
              :class="{
                mass: item.title === '가장 많은 유형',
                minor: item.title === '가장 적은 유형'
              }"
            >
              <h4>{{ item.title }}</h4>
              <div class="per-img">
                <v-img :src="`/assets/images/` + item.card"></v-img>
                <!-- 202231127 : 수정 -->
                <!--
                                    per-e-test-thumb-s1.svg - 외향적인 조력자
                                    per-e-test-thumb-s2.svg - 외향적인 행정가
                                    per-e-test-thumb-s3.svg - 외향적인 창조자
                                    per-e-test-thumb-s4.svg - 외향적인 혁신가
                                    per-e-test-thumb-s5.svg - 외향적인 후원자
                                    per-e-test-thumb-s6.svg - 외향적인 분석가
                                    per-e-test-thumb-s7.svg - 외향적인 열성가
                                    per-e-test-thumb-s8.svg - 외향적인 개혁자
                                    
                                    per-i-test-thumb-s1.svg - 내향적인 조력자
                                    per-i-test-thumb-s2.svg - 내향적인 행정가
                                    per-i-test-thumb-s3.svg - 내향적인 창조자
                                    per-i-test-thumb-s4.svg - 내향적인 혁신가
                                    per-i-test-thumb-s5.svg - 내향적인 후원자
                                    per-i-test-thumb-s6.svg - 내향적인 분석가
                                    per-i-test-thumb-s7.svg - 내향적인 열성가
                                    per-i-test-thumb-s8.svg - 내향적인 개혁자
                                -->
              </div>
              <div class="per-cont">
                <span class="lb">
                  {{ item.abc }}
                  <strong>{{ item.text }}</strong>
                </span>
                <span v-if="!item.isNoData" class="chip-item">{{
                  item.chip
                }}</span>
              </div>
            </div>
          </div>
          <!-- no-data -->
          <div class="no-data lifelog pt-8">
            <div class="icon per-type icon-info"></div>
            <div class="text">
              <div>검사를 공유하고<br />친구, 동료의 성격유형을 알아봐요</div>
            </div>
          </div>
          <!--/ no-data -->
        </div>
      </div>
    </div>
    <div class="section-page">
      <div class="per-test-section">
        <div class="per-test-head">
          <h3>전체 참여자 유형 분포</h3>
        </div>
        <div class="per-test-cont">
          <div class="my-place-type-dis">
            <p>
              내 주변에는<br /><strong class="font-weight-bold">분석가</strong
              >가 <strong class="font-weight-bold text-blue">18명</strong>으로
              가장 많아요!
            </p>
            <div class="chart-area">
              <img
                src="/assets/images/dummy-chart1.png"
                style="width: 100%"
                alt=""
              /><!-- 더미이미지 - 차트영역 -->
              <div class="chart-regend">
                <ul>
                  <li
                    v-for="item in regendList"
                    :key="item.id"
                    :class="`r-${item.id}`"
                  >
                    {{ item.regend }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-6">
              <v-btn
                variant="text"
                v-for="list in typeDisList"
                :key="list.id"
                class="list-iconlst2 mt-2"
              >
                <i :class="`icon-type${list.id}`"></i>
                <p>{{ list.text }}</p>
              </v-btn>
            </div>
          </div>
          <!-- no-data -->
          <div class="no-data lifelog pt-8">
            <div class="icon type-dis icon-info"></div>
            <div class="text">
              <div>
                친구, 동료가 내 성격을 검사해주면<br />내용을 볼 수 있어요!
              </div>
            </div>
          </div>
          <!--/ no-data -->
        </div>
      </div>
    </div>
    <div class="section-page">
      <div class="per-test-section">
        <div class="per-test-head">
          <h3>심리검사가 즐거웠나요?<br />친구, 동료와 함께 공유해봐요!</h3>
        </div>
        <div class="per-test-cont">
          <div class="per-link-share">
            <v-btn variant="text" class="btn-link-copy"
              >오케어<br />성격유형검사 링크<span>복사하기</span></v-btn
            >
            <v-btn variant="text" class="btn-my-code"
              >내 초대코드<br /><strong class="font-weight-bold text-yellow"
                >971E72197F</strong
              ><span>복사하기</span></v-btn
            >
          </div>
          <div class="mt-4">
            <v-btn
              variant="text"
              class="line-link-banner"
              v-for="item in shareEtcList"
              :key="item.id"
            >
              <i :class="`icon-${item.id}`"></i>
              <p>{{ item.text }}</p>
              <span class="ht">{{ item.ht }}</span>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="per-test-link">
      <p>보다 다양한 검사로<br />꼼꼼하게 본인을 알아가 보세요</p>
      <ul class="per-test-link-list">
        <!-- 20231120 수정 -->
        <li>
          <v-btn variant="text" class="test-link3"
            ><span>나는 어떤사람<br />일까요?</span></v-btn
          >
        </li>
        <li>
          <v-btn variant="text" class="test-link2"
            ><span>나의 마음은<br />어떨까요?</span></v-btn
          >
        </li>
      </ul>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="btn-summit"
          >다시 검사하기</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, reactive, onMounted } from 'vue'
  export default {
    setup() {
      const flipCard = ref(null)
      const myPerCard = ref(null)

      const perChipsList = reactive([
        '#두뇌 연중무휴',
        '#타고난 전략가',
        '#안정적인 리더',
        '#콜롬버스(소심한 ver.)',
        '#신중함이 최대장점'
      ])

      const myPerGuideList = reactive([
        {
          title: '나에게 맞는 일과 작업 환경',
          list: [
            '개인적인 관계나 사교성이 성공에 큰 영향을 주지 않는 일',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '개인적인 관계나 사교성이 성공에 큰 영향을 주지 않는 일',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요'
          ]
        },
        {
          title: '겪을 수 있는 어려움과 스트레스',
          list: [
            '개인적인 관계나 사교성이 성공에 큰 영향을 주지 않는 일',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '개인적인 관계나 사교성이 성공에 큰 영향을 주지 않는 일',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요'
          ]
        },
        {
          title: '이렇게 해 보세요',
          list: [
            '개인적인 관계나 사교성이 성공에 큰 영향을 주지 않는 일',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '개인적인 관계나 사교성이 성공에 큰 영향을 주지 않는 일',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요'
          ]
        }
      ])

      const tabInit = ref(null)
      const tabItems = ref([
        {
          titleTab: '내적 판단과정',
          type1: {
            class: 'c-t',
            abc: 'T',
            lb: '과제지향',
            num: 10
          },
          type2: {
            class: 'c-p',
            abc: 'P',
            lb: '관계지향',
            num: 0
          }
        },
        {
          titleTab: '행동양식',
          type1: {
            class: 'c-c',
            abc: 'C',
            lb: '안전지향',
            num: 9
          },
          type2: {
            class: 'c-l',
            abc: 'L',
            lb: '혁신지향',
            num: 1
          }
        },
        {
          titleTab: '대인관계',
          type1: {
            class: 'c-e',
            abc: 'E',
            lb: '외향',
            num: 8
          },
          type2: {
            class: 'c-i',
            abc: 'I',
            lb: '내향',
            num: 2
          }
        }
      ])

      const specGoodList = reactive([
        '통찰력이 있어요',
        '장기적인 안목이 있어요',
        '감정에 휘둘리지 않고 친절해요',
        '절충 및 협상 능력이 있어요',
        '위기상황에서 해결책을 제시해요'
      ])

      const specBadList = reactive([
        '지나치게 높은 기준에 실행으로 옮기지 못할 수 있어요',
        '개방적인 것 같지만 다른 의견을 인정하는데 인색할 수 있어요',
        '많은 사람들과 친밀한 관계를 유지해야 할 때 힘들 수 있어요'
      ])

      const placePerList = ref([
        {
          title: '가장 많은 유형',
          card: 'per-e-test-thumb-s1.svg',
          abc: 'LT-I',
          text: '내향적인 혁신가',
          chip: '#인내심 만렙'
        },
        {
          isNoData: true,
          title: '가장 적은 유형',
          card: 'per-test-thumb-s-no-data.svg',
          abc: '',
          text: '더 많은 친구와 비교해보세요',
          chip: ''
        }
      ])

      const typeDisList = ref([
        {
          id: 1,
          text: '타인이 생각 하는 나'
        },
        {
          id: 2,
          text: '내가 검사해준 사람 모두 보기'
        }
      ])

      const shareEtcList = ref([
        {
          id: 1,
          text: '성격유형검사 공유',
          ht: '공유'
        },
        {
          id: 2,
          text: '동료의 초대코드를 알고 있나요?',
          ht: '입력'
        },
        {
          id: 3,
          text: '성격 유형별 특징을 알려드려요',
          ht: '보기'
        }
      ])

      const regendList = ref([
        {
          id: 1,
          regend: '행정가'
        },
        {
          id: 2,
          regend: '조력자'
        },
        {
          id: 3,
          regend: '분석가'
        },
        {
          id: 4,
          regend: '후원자'
        },
        {
          id: 5,
          regend: '혁신가'
        },
        {
          id: 6,
          regend: '창조자'
        },
        {
          id: 7,
          regend: '열성가'
        },
        {
          id: 8,
          regend: '개혁자'
        }
      ])

      const flipEvt = () => {
        flipCard.value.classList.toggle('flip')
      }

      const loadSet = () => {
        setTimeout(() => {
          const isScreen = document.querySelectorAll('.is-screen')
          isScreen.forEach((item, index) => {
            sclObserver(isScreen, index)
          })
        }, 100)
        document.querySelectorAll('.jud-per-tab .v-btn').forEach((tab, i) => {
          tab.addEventListener('click', (e) => {
            const panels = document.querySelectorAll(
              '.jud-per-tab .v-window-item'
            )
            panels[i].querySelectorAll('.bar').forEach((bar) => {
              const per = bar.getAttribute('data-per')
              setTimeout(() => {
                bar.style.width = `${per}%`
              }, 300)
            })
          })
        })
      }

      const sclObserver = (isScreen, index) => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 1
        }

        const item = isScreen[index]

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in')
              const bars = entry.target.querySelectorAll('.bar')
              if (bars.length > 0) {
                bars.forEach((bar) => {
                  const per = bar.getAttribute('data-per')
                  setTimeout(() => {
                    bar.style.width = `${per}%`
                  }, 300)
                })
              }
            } else {
              entry.target.classList.remove('in')
            }
          }, options)
        })

        observer.observe(item)
      }

      const ticker = ref(null)
      let viewportWidth = 0

      const tickerPosSet = () => {
        const tickerItem = ticker.value.querySelectorAll('.ticker-item')
        const itemCount = tickerItem.length
        for (var i = 0; i < itemCount; i++) {
          var itemWidth = tickerItem[i].offsetWidth
          viewportWidth += itemWidth
        }
        ticker.value.style.width = viewportWidth + 'px'
        for (var i = 0; i < itemCount; i++) {
          var clone = tickerItem[i].cloneNode(true)
          ticker.value.insertBefore(clone, ticker.value.firstChild)
        }
      }

      const tickerAni = () => {
        let marginLeft = 0
        function step() {
          if (ticker.value == null) return false // 20231129 추가
          marginLeft -= 1
          ticker.value.style.marginLeft = marginLeft + 'px'
          if (marginLeft < -viewportWidth) {
            ticker.value.style.marginLeft = '0'
            marginLeft = 0
          }
          requestAnimationFrame(step)
        }
        step()
      }

      const wrap = document.querySelector('#mainWrap')
      // 20231129 evtTab 함수 수정
      const evtTab = (event) => {
        const space = document.querySelector('header') ? 64 : 0
        const tarEl = event.target.closest('.section-page')
          ? event.target.closest('.section-page')
          : event.target.closest('.per-test-section')
        const tarTop = tarEl.offsetTop - space
        wrap.scrollTo({ top: tarTop, behavior: 'smooth' })
      }

      onMounted(() => {
        loadSet()
        tickerPosSet()
        tickerAni()
      })

      return {
        flipCard,
        myPerCard,
        myPerGuideList,
        perChipsList,
        tabInit,
        tabItems,
        specGoodList,
        specBadList,
        placePerList,
        typeDisList,
        shareEtcList,
        regendList,
        flipEvt,
        loadSet,
        ticker,
        tickerPosSet,
        tickerAni,
        evtTab
      }
    }
  }
</script>

<style lang="scss" scoped></style>
