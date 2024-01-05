<template>
  <div class="contents pt-0">
    <div class="per-test-result-head">
      <div class="box">
        <div class="heart-test">
          <div class="level-img">
            <v-img src="/assets/images/level-heart2.svg"></v-img>
            <!-- 202231127 : 수정 -->
            <!--
                            level-heart1.svg - 1-2등급
                            level-heart2.svg - 3-4등급
                            level-heart3.svg - 5-6등급
                        -->
          </div>
          <div class="level-txt">
            <strong>4등급</strong>
            <span>마음 챙김이 필요해요</span>
          </div>
          <div class="ui-chips center">
            <span
              class="chip-item"
              v-for="(item, index) in perChipsList"
              :key="index"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="is-test-info" ref="scrollTarget1">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title
            expand-icon="mdi-menu-down"
            @click="evtToggle"
            >이전 검사 결과가 있어요</v-expansion-panel-title
          >
          <v-expansion-panel-text>
            <div class="is-test-info-view">
              <p>
                전반 영역에서 심리적 불편감을 호소하며 정서적으로 매우 불안전한
                상태입니다. 뿐만 아니라, 죽고 싶다는 생각이 자주 들거나, 주변이
                모르게 죽음을 계획하거나, 실제로 자살을 시도하거나, 혹은 심각한
                구준의 자해 행동을 하는 등 극단적이고 위험한 생각이나 행동의
                빈도가 높을 수 있습니다. 현재 미래에 대한 희망이 없고 무력하다고
                느끼며, 자신의 문제를 스스로 파악하거나 해결하기 어렵다고 느낄수
                있기에, 적극적으로 전문가의 도움을 받으실 것을 적극 권장합니다.
                누구나 혼란스러운 힘든 시기를 경험할 수 있습니다. 이시기를 덜
                아프게 지나가기 위해서는 많은 전문가들리 있으니 혼자 고민하지
                맛히고, 도움을 요청하시기 바랍니다.
              </p>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="test-result-con">
      <div class="tab-line" ref="scrollTarget2">
        <v-tabs v-model="tabInit" align-tabs="start">
          <v-tab
            v-for="(item, i) in tabItems"
            :key="item.id"
            :value="i"
            :ripple="false"
            :data-count="item.case.length"
            @click="evtTab"
          >
            {{ item.tab }}
          </v-tab>
        </v-tabs>
      </div><!-- 20231227 : div 닫는 위치 변경 -->
      <v-window v-model="tabInit" class="mt-7">
        <v-window-item v-for="(item, i) in tabItems" :key="i">
          <div class="result-con-panel">
            <div
              class="chip-list"
              :class="{
                danger: item.tab === '위험',
                caution: item.tab === '주의',
                good: item.tab === '양호'
              }"
            >
              <span v-for="(chip, i) in item.case" :key="i">{{
                chip.title
              }}</span>
            </div>
            <div class="result-con-list">
              <div
                class="result-con-item"
                v-for="(result, i) in item.case"
                :key="i"
              >
                <h3>{{ result.title }}</h3>
                <p>{{ result.text }}</p>
              </div>
            </div>
          </div>
        </v-window-item>
      </v-window>
      <div class="box-rounded-fill mt-6">
        각 성격 판단기준은 개인마다 선호하는 경향이 다르다는 것을 의미해요
      </div>
    </div>
    <div class="section-page">
      <div class="per-test-section">
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
        </div>
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
          <v-btn variant="text" class="test-link3"
            ><span>나는 어떤사람<br />일까요?</span></v-btn
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
  <ui-button-top />
</template>

<script>
  import { ref, onUnmounted } from 'vue'
  export default {
    setup() {
      const perChipsList = ref([
        '#불안',
        '#공황증상',
        '#음주문제',
        '#스트레스',
        '#수면',
        '#우울'
      ])
      const tabInit = ref(null)
      const tabItems = ref([
        {
          tab: '위험',
          case: [
            {
              title: '불안',
              text: '불안 내용입니다. 불안 내용입니다. 불안 내용입니다. 불안 내용입니다. 불안 내용입니다. 불안 내용입니다. 불안 내용입니다. 불안 내용입니다. 불안 내용입니다. 불안 내용입니다. 불안 내용입니다.'
            },
            {
              title: '공황증상',
              text: '갑작스럽게 심장이 쿵쾅거리고 맥박이 빨라지며, 숨쉬기가 힘들어지며, 죽을 것 같은 두려움을 느끼는 경우가 있습니다. 이와 유사한 신테 경험을 피하고자 숨이 차는 활동을 피하기도 합니다.'
            },
            {
              title: '음주문제',
              text: '술에 대한 의존도가 높은 상태입니다. 음주량 조절이 어렵고 블랙아웃(단기적인 기억상실) 증상을 경험하며, 술을 마시지 못하는 상황에서 우울감을 느끼기도 합니다. 가족 및 지인들에게 음주 문제로 비반응 받기도 합니다.'
            },
            {
              title: '스트레스',
              text: '최근 예상치 못하거나 마음대로 되지 않은 일들이 반복적으로 생기며, 스트레스를 많이 받는 상태입니다.'
            },
            {
              title: '수면',
              text: '최근 안정적으로 잠에 드는 것이 쉽지 않으며, 자주 깨기도 하는 등 전반적인 수면의 질이 좋지 않은 상태입니다.'
            },
            {
              title: '우울',
              text: '최근 기분이 우울하고, 일상에서 큰 즐거움을 느끼지 못하고 있습니다. 미래에 대한 기대나 희망도 부족하고 자신에 대해서도 무가치하다 느끼는 상태입니다.'
            }
          ]
        },
        {
          tab: '주의',
          case: [
            {
              title: '분노',
              text: '분노 입니다. 분노 입니다. 분노 입니다. 분노 입니다. 분노 입니다. 분노 입니다. 분노 입니다. 분노 입니다. 분노 입니다. 분노 입니다.'
            },
            {
              title: '사고문제',
              text: '사고문제 입니다. 사고문제 입니다. 사고문제 입니다. 사고문제 입니다. 사고문제 입니다. 사고문제 입니다. 사고문제 입니다.'
            }
          ]
        },
        {
          tab: '양호',
          case: [
            {
              title: '자살',
              text: '자살 입니다. 자살 입니다. 자살 입니다. 자살 입니다. 자살 입니다. 자살 입니다. 자살 입니다. 자살 입니다. 자살 입니다. 자살 입니다.'
            },
            {
              title: '기억력저하',
              text: '기억력저하 입니다. 기억력저하 입니다. 기억력저하 입니다. 기억력저하 입니다. 기억력저하 입니다. 기억력저하 입니다. 기억력저하 입니다.'
            }
          ]
        }
      ])

      const scrollTarget1 = ref(null)
      const scrollTarget2 = ref(null)

      const wrap = document.querySelector('#mainWrap')

      // 시작 : 20231201 수정

      const header = document.querySelector('header')

      const space = header ? 64 : 0

      const headChk = (e) => {
        const tab = scrollTarget2.value.querySelector('.v-slide-group')
        header ? (tab.style.top = '64px') : (tab.style.top = 0)
      }

      const evtToggle = (e) => {
        const tarTop = scrollTarget1.value.offsetTop - space
        wrap.scrollTo({ top: tarTop, behavior: 'smooth' })
      }

      const evtTab = () => {
        const tarTop = scrollTarget2.value.offsetTop - space
        wrap.scrollTo({ top: tarTop, behavior: 'smooth' })
      }

      wrap.addEventListener('scroll', headChk)

      onUnmounted(() => {
        wrap.removeEventListener('scroll', headChk)
      })
      // 끝 : 20231201 수정

      return {
        perChipsList,
        tabInit,
        tabItems,
        scrollTarget1,
        scrollTarget2,
        evtTab,
        evtToggle,
        headChk
      }
    }
  }
</script>

<style lang="scss" scoped></style>
