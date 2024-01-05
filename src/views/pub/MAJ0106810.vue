<template>
  <div v-if="true" class="contents">
    <div class="title-area">
      <p class="subTit-01">
        타인이 뽑은<br />
        내 성격 순위
      </p>
    </div>
    <div class="others-my-rank">
      <div
        class="rank-list"
        :class="{
          free: rankList.length <= 3
        }"
      >
        <ul ref="rankUl">
          <li v-for="(item, i) in rankList" :key="i">
            <span class="num">{{ i + 1 }}</span>
            <strong class="type">{{ item }}</strong>
          </li>
        </ul>
      </div>
      <div class="btn-area" v-if="rankList.length > 3">
        <v-btn
          variant="text"
          v-model="rankText"
          class="btn-rank-view"
          @click="toggleSlide"
          >{{ rankText }}</v-btn
        >
      </div>
      <div class="rank-chart">
        <h3>한 눈에 확인해 볼까요?</h3>
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
      </div>
    </div>
  </div>
  <div v-else class="contents">
    <!-- 설문(데이터가 없을경우) 20231120 추가 -->
    <div class="title-area">
      <p class="subTit-01">아직 나를 검사해준 사람이<br />없어요</p>
    </div>
    <div class="box-rounded-fill mt-4 text-grey">
      오케어 성격 유형검사는,
      <p class="mt-2">
        친구, 동료와 서로의 성격 유형 검사를 해줄 수 있어요 타인이 검사해준
        결과를 통해 내가 보는 나와 남이보는 나를 비교해 볼 수 있어요. 서로 성격
        유형을 검사해주며 사회적 자아를 발견할 수 있어요
      </p>
    </div>
    <div class="per-test-section">
      <div class="per-test-head">
        <h3>내 주변엔<br />어떤 성격유형이 많을까요?</h3>
      </div>
      <div class="per-test-cont">
        <!-- no-data -->
        <div class="no-data lifelog pt-8">
          <div class="icon per-type icon-info"></div>
          <div class="text">
            <div>타인이 뽑은<br />내 성격 순위</div>
          </div>
        </div>
        <!--/ no-data -->
      </div>
    </div>
    <div class="section-page">
      <div class="per-test-section">
        <div class="per-test-head">
          <h3>한눈에 확인해 볼까요?</h3>
        </div>
        <div class="per-test-cont">
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
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const rankList = ref([
        '외향적인 개혁자 TL-E',
        '외향적인 분석가 TC-E',
        '외향적인 행정가 CT-E',
        '외향적인 개혁자 TL-E',
        '외향적인 분석가 TC-E',
        '외향적인 행정가 CT-E',
        '외향적인 개혁자 TL-E',
        '외향적인 분석가 TC-E'
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

      const rankUl = ref(null)

      const rankText = ref('전체보기')

      const toggleSlide = (e) => {
        const listH = rankUl.value.offsetHeight
        if (rankText.value === '전체보기') {
          rankUl.value.parentNode.style.height = `${listH}px`
          rankText.value = '접기'
        } else {
          rankUl.value.parentNode.style.removeProperty('height')
          rankText.value = '전체보기'
        }
      }

      return {
        rankList,
        regendList,
        rankUl,
        rankText,
        toggleSlide
      }
    }
  }
</script>

<style lang="scss" scoped></style>
