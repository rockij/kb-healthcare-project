<template>
  <div class="contents">
    <div class="title-area mb-8">
      <p class="subTit-01">
        오건강님,<br />
        도움이 필요하신가요?
      </p>
    </div>
    <!-- 검색 btn -->
    <v-btn
      block
      variant="outlined"
      rounded="xl"
      color="#FFB11B"
      height="60"
      :ripple="false"
      class="btn-search"
      @click="goPath('MAJ0104640')"
    >
      <span class="text">
        궁금하신 내용을 입력해 주세요
        <img src="/assets/images/icon-search.svg" alt="검색" />
      </span>
    </v-btn>
    <!-- 카테고리 btn -->
    <div class="sorting-btns mt-4">
      <v-btn
        variant="outlined"
        rounded="xl"
        class="btn-select"
        v-for="btn in btns"
        :key="btn.value"
        @click="goPath('MAJ0104630', btn)"
      >
        {{ btn.text }}
      </v-btn>
    </div>
    <div class="title-area underline">
      <h3 class="tit-03 mt-8">자주 찾는 질문</h3>
    </div>
    <!-- TOP 10 list -->
    <FAQList
      :filteredList="filteredList"
      :getCategory="getCategory"
      @update="goPath"
    />
    <div class="section-page">
      <!-- 링크 -->
      <div class="customer-btns">
        <v-btn
          block
          variant="text"
          height="24"
          class="btn-link"
          @click="goPath('MAJ0104650')"
        >
          1:1문의
        </v-btn>
        <!-- <v-btn
          block
          variant="text"
          height="24"
          class="btn-link"
          @click="goPath('MAJ0104682')"
          >이용약관
        </v-btn> -->
      </div>

      <!-- 전화상담 -->
      <v-card variant="flat" rounded="lg" class="box-grey mt-8">
        <v-card-title>전화상담</v-card-title>
        <v-card-text class="cont">
          <div>
            <div class="text-tel">1234-5678</div>
            <div class="text-info-grey type-2">평일 09:00~ 18:00</div>
          </div>
          <img src="/assets/images/icon-call.svg" alt="" />
        </v-card-text>
      </v-card>
      <!--// 링크 -->
    </div>
  </div>
</template>

<script>
  import router from '@/router'
  import { ref } from 'vue'
  import FAQList from './FAQList.vue'
  export default {
    components: { FAQList },
    setup() {
      const selBtn = ref()
      const btns = ref([
        {
          value: 0,
          text: '일반'
        },
        {
          value: 1,
          text: '건강검진'
        },
        {
          value: 2,
          text: '루틴'
        },
        {
          value: 3,
          text: '혜택'
        },
        {
          value: 4,
          text: '챌린지'
        }
      ])
      const list = ref([
        {
          id: 0,
          title: '스타에 대해 궁금해요.',
          path: '/MAJ0104631'
        },
        {
          id: 1,
          title: '기술 관련된 궁금한 사항은 이렇게 문의해주세요!',
          path: '/MAJ0104631'
        },
        {
          id: 2,
          title:
            '휴대폰이 본인 명의가 아닌 경우 오케어 앱을 어떻게 사용할 수 있나요?',
          path: '/MAJ0104631'
        },
        {
          id: 3,
          title:
            '구글 플레이스토어에서 오케어 앱 업데이트 시 앱이 실행되지 않아요',
          path: '/MAJ0104631'
        },
        {
          id: 4,
          title: '서비스나 상품과 관련해서 궁금한 점이 있어요',
          path: '/MAJ0104631'
        },
        {
          id: 0,
          title: '스타에 대해 궁금해요',
          path: '/MAJ0104631'
        },
        {
          id: 1,
          title: '기술 관련된 궁금한 사항은 이렇게 문의해주세요!',
          path: '/MAJ0104631'
        },
        {
          id: 2,
          title:
            '휴대폰이 본인 명의가 아닌 경우 오케어 앱을 어떻게 사용할 수 있나요?',
          path: '/MAJ0104631'
        },
        {
          id: 3,
          title:
            '구글 플레이스토어에서 오케어 앱 업데이트 시 앱이 실행되지 않아요',
          path: '/MAJ0104631'
        },
        {
          id: 4,
          title: '서비스나 상품과 관련해서 궁금한 점이 있어요',
          path: '/MAJ0104631'
        }
      ])
      function getCategory(val) {
        switch (val) {
          case 0:
            return '일반'
          case 1:
            return '건강검진'
          case 2:
            return '루틴'
          case 3:
            return '혜택'
          case 4:
            return '챌린지'
        }
      }
      function goPath(val, props) {
        if (props) {
          router.params = props
        }
        router.push(val)
      }
      function filteredList() {
        return list.value
      }

      return {
        selBtn,
        btns,
        list,
        getCategory,
        goPath,
        filteredList
      }
    }
  }
</script>
