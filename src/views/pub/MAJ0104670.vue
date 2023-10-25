<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">어떤 점이 궁금하신가요?</p>
    </div>
    <div class="category-area">
      <ul class="list">
        <li class="item" v-for="item in category" :key="item.value">
          <v-btn variant="text" block @click="selected(item)">
            {{ item.text }}
          </v-btn>
        </li>
      </ul>
    </div>
  </div>

  <!-- 1:1 문의 프로그램 선택 팝업 연결-->
  <MAJ0104680
    v-model="modal"
    @close="modal = false"
    :result="result"
    @update="goPath('MAJ0104681')"
  />
</template>

<script>
  import MAJ0104680 from './MAJ0104680.vue'

  import router from '@/router'
  import { ref, reactive } from 'vue'
  export default {
    components: { MAJ0104680 },
    setup() {
      const modal = ref(false)
      const result = ref()

      function selected(val) {
        if (val.value === 5) {
          modal.value = true
        } else {
          router.push('MAJ0104681')
        }
      }

      let category = reactive([
        {
          value: 0,
          text: '회원가입 문의'
        },
        {
          value: 1,
          text: '오류 문의'
        },
        {
          value: 2,
          text: '건강검진 문의'
        },
        {
          value: 3,
          text: '루틴 문의'
        },
        {
          value: 4,
          text: '일상건강기록 문의'
        },
        {
          value: 5,
          text: '프로그램 문의'
        },
        {
          value: 6,
          text: '포인트/스타/쿠폰 문의'
        },
        {
          value: 7,
          text: '오케어몰 문의'
        },
        {
          value: 8,
          text: '오케어M 문의'
        },
        {
          value: 9,
          text: '기타 문의'
        }
      ])
      function goPath(val) {
        router.push(val)
        modal.value = false
      }
      return {
        result,
        category,
        modal,
        selected,
        goPath
      }
    }
  }
</script>
