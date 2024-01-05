<template>
  <!--contents-->
  <div class="contents">
    <div class="section-py32" v-for="items in infomation" :key="items">
      <h2 class="tit-01 fs-20">{{ items.title }}</h2>
      <v-table density="compact" class="table-default">
        <tbody>
          <tr v-for="keys in items.contents" :key="keys">
            <th>{{ keys.name }}</th>
            <td>
              <div class="flex-middle-xy">
                <span class="table-data">{{ keys.value }}</span>
                <v-btn
                  variant="tonal"
                  color="primary"
                  v-if="keys.modify"
                  class="flex-wrap btn-input-submit"
                  >수정</v-btn
                >
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>

    <div class="btn-submit-area">
      <div class="btn-area d-flex flex-column">
        <div class="flex-middle-xy">
          <v-btn
            :ripple="false"
            height="40"
            width="100%"
            variant="outlined"
            class="btn-outline"
            >로그아웃</v-btn
          >
        </div>
        <div class="d-flex justify-end py-8">
          <v-btn
            :ripple="false"
            prepend-icon="ico-withdrawal"
            variant="text"
            class="rounded-0 btn-icon flex-grow-0"
            >탈퇴하기</v-btn
          >
        </div>
      </div>
    </div>
  </div>
  <!--//contents-->
</template>

<script>
  import router from '@/router'
  import { ref } from 'vue'

  export default {
    setup() {
      const infomation = ref([
        {
          title: '기본정보',
          contents: [
            {
              name: '아이디(카카오톡)',
              value: 'hong@naver.com',
              modify: false
            },
            { name: '이름', value: '홍길동', modify: false },
            { name: '생년월일', value: '80.01.01', modify: false },
            { name: '성별', value: '남성', modify: false },
            { name: '휴대폰번호', value: '010-1234-5678', modify: false },
            { name: '이메일', value: 'hong123@naver.com', modify: true }
          ]
        },
        {
          title: '신체정보',
          contents: [
            { name: '키(Height)', value: '180.1 cm', modify: true },
            { name: '몸무게(weight)', value: '75.0 kg', modify: true }
          ]
        },
        {
          title: '해외배송정보',
          contents: [
            { name: '해외통관번호', value: 'P165132153', modify: true }
          ]
        }
      ])

      return { infomation }
    }
  }
</script>
