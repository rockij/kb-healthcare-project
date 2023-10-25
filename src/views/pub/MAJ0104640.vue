<template>
  <div class="contents pt-3">
    <div class="search-area mb-4">
      <v-text-field
        variant="outlined"
        rounded="xl"
        clearable
        hide-details
        placeholder="궁금하신 내용을 입력해 주세요"
        prepend-inner-icon="mdi-magnify"
        persistent-clear
        @keypress.enter="getText"
        @click:clear="onClear"
        class="textfield-search type fs-16"
      ></v-text-field>
      <v-btn variant="text" @click="goPath('MAJ0104620')" class="btn"
        >취소</v-btn
      >
    </div>
    <!-- TOP 10 list -->
    <FAQList
      :text="text"
      :filteredList="filteredList"
      :getCategory="getCategory"
      :hightlight="hightlight"
      @update="goPath"
    />
  </div>
</template>

<script>
  import router from '@/router'
  import { ref } from 'vue'
  import FAQList from './FAQList.vue'
  export default {
    components: { FAQList },
    setup() {
      const text = ref('')
      const result = ref(false)
      const btnLayout = ref(false)
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
      function getText(e) {
        text.value = e.target.value
      }
      function selected(val) {
        selBtn.value = val
      }
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
      function goPath(val) {
        router.push(val)
      }
      function selected(val) {
        selBtn.value = val
        result.value = true
      }
      function filteredList() {
        if (text.value !== '') {
          return list.value.filter((i) => i.title.includes(text.value))
        } else if (selBtn.value !== undefined) {
          return list.value.filter((i) => i.id === selBtn.value)
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
      function onClear() {
        text.value = ''
      }

      return {
        text,
        result,
        btnLayout,
        selBtn,
        btns,
        list,
        getText,
        selected,
        getCategory,
        goPath,
        filteredList,
        hightlight,
        onClear
      }
    }
  }
</script>
