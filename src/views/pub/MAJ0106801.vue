<template>
  <div class="contents pt-0">
    <div class="per-test-result-head">
      <div class="box">
        <div class="result-swipe">
          <p>오건강님이<br />빛나는 이유</p>
          <span class="date">검사일 2023.09.11</span>
          <Carousel
            :items-to-show="2.1"
            :wrap-around="true"
            :padding="-10"
            class="result-card-carousel"
          >
            <Slide
              v-for="(item, index) in perCardList"
              :key="index"
              @click="documentModal = true"
            >
              <div class="card-img">
                <img :src="`/assets/images/` + item.card" />
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
    <div class="per-test-result-list">
      <div
        class="per-test-result-item"
        v-for="(item, index) in resultList"
        :key="index"
      >
        <div class="item-head">
          <span class="lb">{{ item.label }}</span>
          <span class="score-icon good"><span class="num">x2</span></span>
        </div>
        <div class="item-cont">
          <p>{{ item.text }}</p>
          <div class="per-chart-hor" ref="tarChart">
            <div class="per-chart-item">
              <span class="lb">성실/끈기</span>
              <span
                class="bar"
                :class="{ good: item.chart.c1 >= 70.56 }"
                :data-per="`${item.chart.c1}`"
              ></span>
            </div>
            <div class="per-chart-item">
              <span class="lb">성장지향</span>
              <span
                class="bar"
                :class="{ good: item.chart.c2 >= 70.56 }"
                :data-per="`${item.chart.c2}`"
              ></span>
            </div>
            <div class="per-chart-item">
              <span class="lb">자기유능감</span>
              <span
                class="bar"
                :class="{ good: item.chart.c3 >= 70.56 }"
                :data-per="`${item.chart.c3}`"
              ></span>
            </div>
            <div class="per-chart-item">
              <span class="lb">대인관계유능감</span>
              <span
                class="bar"
                :class="{ good: item.chart.c4 >= 70.56 }"
                :data-per="`${item.chart.c4}`"
              ></span>
            </div>
            <span class="bl mean"><span>평균</span></span>
            <span class="bl high"><span>위험</span></span
            ><!-- 20231120 : 수정 -->
          </div>
        </div>
      </div>
    </div>
    <div class="section-page">
      <div class="my-expec-wrap">
        <div class="my-expec-head">
          <h2>곧 빛날 수 있는 부분</h2>
          <div class="my-expec-card-list">
            <div
              class="my-expec-card-item"
              v-for="(item, index) in expecCardList"
              :key="index"
            >
              <v-img :src="`/assets/images/` + item.card"></v-img>
            </div>
          </div>
        </div>
        <div class="my-expec-list">
          <div
            class="my-expec-item"
            v-for="(item, index) in myExpecList"
            :key="index"
          >
            <div class="item-head">
              <h3>{{ item.title }}</h3>
              <span class="score-icon bad"><span class="num">x2</span></span>
            </div>
            <div class="item-cont">
              <div class="check-point">
                <span class="lb">Check Point</span>
              </div>
              <div class="p-item-list">
                <span class="p-item" v-for="(p, i) in item.point" :key="i">{{
                  p
                }}</span>
              </div>
              <div class="text-box">
                <p>{{ item.text }}</p>
              </div>
              <div class="per-chart-hor" ref="tarChart">
                <div class="per-chart-item">
                  <span class="lb">충동행동</span>
                  <span
                    class="bar"
                    :class="{ good: item.chart.c1 >= 70.56 }"
                    :data-per="`${item.chart.c1}`"
                  ></span>
                </div>
                <div class="per-chart-item">
                  <span class="lb">지연행동</span>
                  <span
                    class="bar"
                    :class="{ good: item.chart.c2 >= 70.56 }"
                    :data-per="`${item.chart.c2}`"
                  ></span>
                </div>
                <span class="bl mean"><span>평균</span></span>
                <span class="bl high"><span>위험</span></span
                ><!-- 20231120 : 수정 -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-page">
      <div class="per-link-share">
        <v-btn variant="text" class="btn-link-copy"
          >성격특질검사<br />링크 복사<span>복사하기</span></v-btn
        >
        <v-btn variant="text" class="btn-sns-share"
          >성격특질검사<br />공유하기<span>공유하기</span></v-btn
        >
      </div>
    </div>
    <div class="per-test-link">
      <p>보다 다양한 검사로<br />꼼꼼하게 본인을 알아가 보세요</p>
      <ul class="per-test-link-list">
        <!-- 20231120 수정 -->
        <li>
          <v-btn variant="text" class="test-link1"
            ><span>몰랐던 나를<br />발견해요</span></v-btn
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
  <!-- 모든성격유형 팝업 -->
  <DocumentModal
    modalTitle="모든 성격유형"
    v-model="documentModal"
    @close="documentModal = false"
  >
    <template #modalBody>
      <div class="all-per-type">
        <div class="all-per-type-head">
          <p>11가지 성격유형을<br />확인해보세요</p>
        </div>
        <div class="all-per-type-cont">
          <div class="tab-line">
            <v-tabs v-model="tabInit" align-tabs="start">
              <v-tab
                v-for="(item, i) in tabItems"
                :key="item.id"
                :value="i"
                :ripple="false"
                :data-count="item.tabCount"
              >
                {{ item.titleTab }}
              </v-tab>
            </v-tabs>
          </div><!-- 20231227 : div 닫는 위치 변경 -->
          <v-window v-model="tabInit" class="mt-7">
            <v-window-item v-for="(item, i) in tabItems" :key="i">
              <div class="type-cont">
                <div class="card-img">
                  <v-img :src="`/assets/images/` + item.card"></v-img>
                </div>
                <span class="score-icon good"
                  ><span class="num">x2</span></span
                >
                <p class="text">{{ item.text }}</p>
              </div>
            </v-window-item>
          </v-window>
        </div>
      </div>
    </template>
  </DocumentModal>
  <!-- //모든성격유형 팝업 -->
</template>

<script>
  import { ref, reactive, onMounted } from 'vue'
  import DocumentModal from '@/components/DocumentModal.vue'
  import { Carousel, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  export default {
    components: {
      Carousel,
      Slide,
      DocumentModal
    },
    setup() {
      const documentModal = ref(false)
      // 202231214 : 이미지 확장자 수정
      const perCardList = reactive([
        {
          per: '성실/끈기',
          card: 'char-card1.png'
        },
        {
          per: '성장지향',
          card: 'char-card2.png'
        },
        {
          per: '자기유능감',
          card: 'char-card3.png'
        },
        {
          per: '회복탄력성',
          card: 'char-card4.png'
        },
        {
          per: '친밀감',
          card: 'char-card5.png'
        },
        {
          per: '대인관계 유능감',
          card: 'char-card6.png'
        },
        {
          per: '공감/배려',
          card: 'char-card7.png'
        },
        {
          per: '낙관성',
          card: 'char-card8.png'
        },
        {
          per: '감사/만족',
          card: 'char-card9.png'
        },
        {
          per: '의미추구',
          card: 'char-card10.png'
        },
        {
          per: '유머',
          card: 'char-card11.png'
        },
        {
          per: '지연행동',
          card: 'char-card12.png'
        },
        {
          per: '충동행동',
          card: 'char-card13.png'
        },
        {
          per: '감정억제',
          card: 'char-card14.png'
        },
        {
          per: '감정과잉',
          card: 'char-card15.png'
        },
        {
          per: '의심/경계',
          card: 'char-card16.png'
        },
        {
          per: '의존/의지',
          card: 'char-card17.png'
        }
      ])

      const resultList = reactive([
        {
          label: '01. 내 힘으로 뚜벅뚜벅',
          text: '스스로를 믿고 목표를 향해 꾸준히 노력하는 당신. 어려움을 마주치면 이를 극복하려 애쓰며, 홀로 묵묵히 해결해 나갈 수 있는 힘을 지니고 있습니다.',
          chart: {
            c1: 30,
            c2: 50,
            c3: 30,
            c4: 100
          }
        },
        {
          label: '02. 함께해서 힘이난다',
          text: '일반적인 수준의 공감 능력을 발휘하며, 적정 수준에서 친밀한 교류를 하는 당신, 지치고 힘든 순간에는 누군가와 함께 있는 것만으로도 힘과 용기를 받을 수 있습니다.',
          chart: {
            c1: 30,
            c2: 50,
            c3: 30,
            c4: 100
          }
        },
        {
          label: '03. 무한긍정 잘될꺼야',
          text: '현재의 삶에 만족하지 못하며 긍정적인 미래를 꿈꾸기 어려운 당신. 앞이 캄캄한 순간에도 잘 될것이라는 긍정적인 마인드가 난관을 극복하는데 도움을 주기도 합니다.',
          chart: {
            c1: 30,
            c2: 50,
            c3: 30,
            c4: 100
          }
        }
      ])
      // 202231214 : 이미지 확장자 수정
      const expecCardList = reactive([
        {
          lb: '성실/끈기',
          card: 'char-card1.png'
        },
        {
          lb: '성장지향',
          card: 'char-card2.png'
        },
        {
          lb: '자기유능감',
          card: 'char-card3.png'
        }
      ])

      const myExpecList = reactive([
        {
          title: '행동조절',
          point: ['지연행동', '충동행동'],
          text: '행동 조절에 어려움이 있습니다. 충동적으로 행동하여 문제가 될 수 있어요. 해야하는 일을 계속 미루어 제 때 완료하지 못하는 경우가 거의 없습니다. 가끔 어떠한 일은 시작이나 완료를 미루며 꾸물댈 수 있으나, 업무에 차질을  빛거나 관계에서 갈등을 야기될 정도로 미루지는 않네요. 생활 속에서 어느 정도 일을 미루어 처리하는 것을 일반적이므로 자신의 상황에 맞춰 일을 시작하고 완료하는 것을 목표로 일단 시작해 보시기 바랍니다. 행동한 후에 일어날 결과를 미리 생각하여 말이나 행동을 하는 것이 매우 어렵습니다. 이러한 행동을 나중에 후회하지만 다음에 또 반복하게 됩니다. 따라서 미리 상상으로 나의 행동을 리허설해보는 연습을 해보기 바랍니다. 감정이 격해지는 상황을 떠올려보고, 이전에는 내가 어떻게 행동했는지 기억해보고, 앞으로는 어떻게 행동했는지 기억해보고, 앞으로는 어떻게 해야 할지를 상상해보며 준비하는 것이 도움이 될 것입니다.',
          chart: {
            c1: 30,
            c2: 80
          }
        },
        {
          title: '정서조절',
          point: ['감정억제', '감정과잉'],
          text: '감정 조절에 다소 어려움이 있습니다. 감정을 외현적으로 지나치게 크게 표현하지는 않으나, 주변의 시선이나 평가에 대한 두려움으로 자신의 솔직한 감정과 생각을 억누르는 듯 하네요. 다른 사람들의 시선이나 평가를 지나치게 신경 쓰며, 자신의 생각이나 감정을 표현하는 것이 매우 어렵습니다. 이에 부당하거나 억울한 일을 당할 때 조차 자신이 느끼는 감정이 정당한 것인지를 되짚으며, 표현을 하지 못할 수 있습니다. 자신이 느끼는 감정에는 옳고 그름이 없습니다. 솔직한 마음을 표현해 보는 연습을 해보세요.',
          chart: {
            c1: 20,
            c2: 100
          }
        },
        {
          title: '대인관계',
          point: ['의심/경계', '의존/의지'],
          text: '감정 조절에 다소 어려움이 있습니다. 감정을 외현적으로 지나치게 크게 표현하지는 않으나, 주변의 시선이나 평가에 대한 두려움으로 자신의 솔직한 감정과 생각을 억누르는 듯 하네요. 다른 사람들의 시선이나 평가를 지나치게 신경 쓰며, 자신의 생각이나 감정을 표현하는 것이 매우 어렵습니다. 이에 부당하거나 억울한 일을 당할 때 조차 자신이 느끼는 감정이 정당한 것인지를 되짚으며, 표현을 하지 못할 수 있습니다. 자신이 느끼는 감정에는 옳고 그름이 없습니다. 솔직한 마음을 표현해 보는 연습을 해보세요.',
          chart: {
            c1: 50,
            c2: 70
          }
        }
      ])

      const tarChart = ref(null)

      const sclObserver = (index) => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 1
        }

        const item = tarChart.value[index] // 요소의 ref를 가져옴

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const charts = entry.target.querySelectorAll('.per-chart-item')
              charts.forEach((chart) => {
                const bar = chart.querySelector('.bar')
                const per = bar.getAttribute('data-per')
                setTimeout(() => {
                  bar.style.width = `${per}%`
                }, 300)
              })
            }
          }, options)
        })

        observer.observe(item)
      }

      const tabInit = ref(null)
      const tabItems = ref([
        {
          titleTab: '성장지향',
          card: 'per-result1.png',
          text: '당신은 누구보다 하루하루를 성실하게 열심히 살고 있네요. 생활이 상당히 규칙적이고 일상에서 경험하는 지루함을 잘 견디며, 늘 한결같은 사람입니다. 끈기와 꾸준함이 자신의 감정이며, 성실함을 매우 중요한 가치로 여길 수 있어요. 다만 정해진 규칙만을 지나치게 고집하지 않도록 주의가 필요하며, 합리적인 변화를 수용하는 유연함을 잃지 않는다면 성실함은 당신의 가장 큰 장점일 수 있습니다.'
        },
        {
          titleTab: '성실/끈기',
          card: 'per-result2.png',
          text: '당신은 누구보다 하루하루를 성실하게 열심히 살고 있네요. 생활이 상당히 규칙적이고 일상에서 경험하는 지루함을 잘 견디며, 늘 한결같은 사람입니다. 끈기와 꾸준함이 자신의 감정이며, 성실함을 매우 중요한 가치로 여길 수 있어요. 다만 정해진 규칙만을 지나치게 고집하지 않도록 주의가 필요하며, 합리적인 변화를 수용하는 유연함을 잃지 않는다면 성실함은 당신의 가장 큰 장점일 수 있습니다.'
        },
        {
          titleTab: '자기유능감',
          card: 'per-result3.png',
          text: '당신은 누구보다 하루하루를 성실하게 열심히 살고 있네요. 생활이 상당히 규칙적이고 일상에서 경험하는 지루함을 잘 견디며, 늘 한결같은 사람입니다. 끈기와 꾸준함이 자신의 감정이며, 성실함을 매우 중요한 가치로 여길 수 있어요. 다만 정해진 규칙만을 지나치게 고집하지 않도록 주의가 필요하며, 합리적인 변화를 수용하는 유연함을 잃지 않는다면 성실함은 당신의 가장 큰 장점일 수 있습니다.'
        }
      ])

      onMounted(() => {
        tarChart.value.forEach((item, index) => {
          sclObserver(index)
        })
      })

      return {
        documentModal,
        perCardList,
        resultList,
        expecCardList,
        myExpecList,
        tarChart,
        tabInit,
        tabItems
      }
    }
  }
</script>

<style lang="scss" scoped></style>
