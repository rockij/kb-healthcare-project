<template>
  <div class="contents">
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
    <!-- stickyArea -->
    <div
      ref="stickyArea"
      :style="{ height: navHeight }"
      class="defaultPadding-x"
    >
      <div class="sticky">
        <!-- contents -->
        <v-btn variant="text" class="mt-6 pl-0" @click="modal = true">
          <span class="fs-24 font-weight-bold">{{ selBtn.text }}</span>
          <v-icon class="ml-2">
            <img src="/assets/images/icon-arrow-down.svg" alt="" />
          </v-icon>
        </v-btn>
        <!-- //contents -->
      </div>
    </div>
    <!-- //stickyArea -->

    <!-- FAQ TOP 10 accordion list -->
    <FAQList
      :filteredList="filteredList"
      :getCategory="getCategory"
      :hightlight="hightlight"
      @update="goPath"
    />
    <!--// 링크 -->
  </div>
  <MAJ0104632 v-model="modal" @close="modal = false" @update="changeCategory" />
</template>

<script>
  import MAJ0104632 from './MAJ0104632.vue'
  import FAQList from './FAQList.vue'

  import router from '@/router'
  import { onMounted, ref } from 'vue'

  export default {
    components: { MAJ0104632, FAQList },
    setup() {
      //sticky
      const stickyArea = ref(null)
      const navHeight = ref(null)
      onMounted(() => {
        const sticky = document.querySelector('.sticky')
        navHeight.value = sticky.offsetHeight + 'px'
        const stickyObserver = new IntersectionObserver(
          ([e]) => {
            if (!e.isIntersecting && sticky !== null)
              sticky.classList.add('isFixed')
            else sticky.classList.remove('isFixed')
          },
          {
            root: null,
            threshold: [1]
          }
        )
        stickyObserver.observe(stickyArea.value)
      })
      const modal = ref(false)
      const text = ref('')
      const selBtn = ref(router.params)
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
          id: 0,
          title: '스타에 대해 궁금해요',
          path: '/MAJ0104631'
        },
        {
          id: 0,
          title: '스타에 대해 궁금해요',
          path: '/MAJ0104631'
        },
        {
          id: 0,
          title: '스타에 대해 궁금해요',
          path: '/MAJ0104631'
        },
        {
          id: 0,
          title: '스타에 대해 궁금해요',
          path: '/MAJ0104631'
        },
        {
          id: 0,
          title: '스타에 대해 궁금해요',
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
      function changeCategory(val) {
        modal.value = false
        return (selBtn.value = { ...val })
      }
      function goPath(val, props) {
        if (props) {
          router.params = props
        }
        router.push(val)
      }
      function filteredList() {
        if (text.value !== '') {
          return list.value.filter((i) => i.title.includes(text.value))
        } else if (selBtn.value.value !== undefined) {
          return list.value.filter((i) => i.id === selBtn.value.value)
        } else {
          return list.value
        }
      }
      function hightlight(i) {
        // 검색어 하이라이트 정규식
        return i.replace(new RegExp(text.value, 'gi'), (match) => {
          return '<span class="text-blue font-weight-bold">' + match + '</span>'
        })
      }

      return {
        modal,
        text,
        selBtn,
        btns,
        list,
        getCategory,
        changeCategory,
        goPath,
        filteredList,
        hightlight,
        navHeight,
        stickyArea
      }
    }
  }
</script>
